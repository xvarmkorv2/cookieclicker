Mods = {}

Mods.ModData = {}
Mods.ModList = []

send = ()=>{}
const analyzeSaveData = function (data) {
	if (!data || data == '') return false;
	var str = unescape(data);
	var version = 0;
	str = str.split('!END!')[0];
	str = b64_to_utf8(str);
	if (!str || str == '' || str.length < 5) return false;
	let spl = '';
	str = str.split('|');
	version = parseFloat(str[0]);
	if (isNaN(version) || version < 0/* || version>Game.version*/) return false;

	spl = str[2].split(';');
	const startDate = parseInt(spl[1]);
	const lastDate = parseInt(spl[2]);
	spl = str[4].split(';');
	const cookiesEarned = parseFloat(spl[1]);
	const cookiesReset = spl[8] ? parseFloat(spl[8]) : 0;
	const cookiesTotal = cookiesEarned + cookiesReset;
	spl = (str[9] || '').split(';');
	let modMeta = spl.find(it => it.indexOf('META:') == 0);
	if (modMeta && modMeta.split(':')[1].length > 0) modMeta = modMeta.split(':')[1].split(','); else modMeta = [];
	return { startDate, lastDate, cookiesTotal, modMeta };
}
Mods.hardSave = (save) => {
	//just raw-save the data to disk and cloud without passing by Game.WriteSave()
	if (Game.useLocalStorage) localStorageSet(Game.SaveTo, save);
};
Mods.onImportSave = (out, save) => {
	if (!out) return false;
	let data = analyzeSaveData(save);
	if (!data.modMeta) return false
	let Continue = false;
	for (var i = 0; i < data.modMeta.length; i++) {
		let disabled = data.modMeta[i].startsWith('*')
		let rawid = data.modMeta[i].substring(disabled ? 1 : 0, data.modMeta[i].length)
		if (rawid !== Mods.ModList[i] || disabled !== Mods.ModData[Mods.ModList[i]].disabled) {
			Continue = true; break
		}
	}
	if (!Continue) return false
	Mods.hardSave(save);
	Game.toReload = true;
};
Mods.saveMods = function () {
	//save mod order
	if (Mods.ModList.length == 0) return '';
	str = 'META:';
	for (var i = 0; i < Mods.ModList.length; i++) {
		if (!Mods.ModData[Mods.ModList[i]]) continue;
		str += (Mods.ModData[Mods.ModList[i]].disabled ? '*' : '') + Mods.ModList[i] + (i < Mods.ModList.length - 1 ? ',' : '');
	}
	str += ';'
	return str;
}
Mods.registerMod = function (mod) {
	if (Mods.ModData[mod.id]) {
		let steamSide = Mods.ModData[mod.id];
		mod.dir = steamSide.dir.replace(/\\/g, "/");
	}
}

Mods.LoadModInfo = function(folder, callback, error){
	ajax(folder + '/info.txt', (info) => {
		info = JSON.parse(info)
		info.dir = folder
		info.ID = info.ID.replace(/\W+/g, ' ');
		Mods.ModData[info.ID] = {
			id: info.ID,
			dir: folder,
			info: info,
			disabled: true,//info.Disabled ? true : false,
			dependencies: info.Dependencies || [],
			workshop: info.Workshop || false
		}
		callback(Mods.ModData[info.ID])
	}, () => { if (error) { error() } })
}
Mods.LoadFolder = function (folder, callback) {
	Mods.LoadModInfo(folder, (info) =>{
		if (info) {
			let promises = [];
			promises.push(new Promise((resolve, reject) => {
				Game.LoadMod(folder + '/main.js', resolve, () => { console.log(`Failed to load mod file:`, folder + '/main.js'); resolve(); });
			}));
			if (info.LanguagePacks) {
				for (let ii in info.LanguagePacks) {
					let file = folder + '/' + info.LanguagePacks[ii];
					promises.push(new Promise((resolve, reject) => {
						LoadLang(file, resolve, () => { console.log(`Failed to load mod language file:`, file); resolve(); });
					}));
				}
			}
			Promise.all(promises)
				.then(() => {
					if (callback) { callback(); }
				});
		} else callback()
	}, () => { console.log(`Failed to load mod info:`, path); })
}

Mods.CreateTempFunctions = function () {
	let temp = () => { }
	Game.Win = temp
	Game.Unlock = temp
	Game.Lock = temp
	Game.Has = temp
	Game.HasUnlocked = temp
}

Mods.ChangeCCSE = function () {
	const oldregisterMod = Game.registerMod
	Game.registerMod = (id,mod) => {
		if(id === "CCSE") {
			if(!CCSE.postLoadHooks) CCSE.postLoadHooks=[];

			CCSE.GetModPath = (modName) => Mods.ModData[modName].dir;

			CCSE.GetModFolder = (modName) => Mods.ModData[modName].path;

			CCSE.MenuHelper.AutoVersion = (mod) => {
				let func = function () {
					let modInfo = Mods.ModData[mod.id].info;
					Game.customStatsMenu.push(function () {
						CCSE.AppendStatsVersionNumber(modInfo.Name, modInfo.ModVersion);
					});
				}

				if (CCSE.isLoaded) func();
				else CCSE.postLoadHooks.push(func);
			}

			CCSE.postLoadHooks.push(()=> {
				Game.loadModData = CCSE.GameLoadModData;
				CCSE.LaunchOtherMods();
				if(CCSE.gameHasLoadedSave) Game.loadModData();
			})
			
			CCSE.LaunchOtherMods = Game.launchMods;
			Game.launchMods = CCSE.init;
			
			CCSE.GameLoadModData = Game.loadModData;
			Game.loadModData = function(){CCSE.gameHasLoadedSave=1;}
			Game.registerMod = oldregisterMod
		}
		oldregisterMod(id,mod) 
	}
	
	confirm = function(){return true}
}
Mods.modsPopup = function () {
	let selectedMod = 0;

	let mods = [];
	for (var i = 0; i < Mods.ModList.length; i++) {
		let mod = Mods.ModData[Mods.ModList[i]];
		if (!mod) continue;
		let obj = {};
		obj.name = mod.info.Name;
		obj.desc = mod.info.Description || 0;
		obj.loc = mod.dir;
		obj.id = mod.id;
		obj.i = i;
		obj.dependencies = mod.dependencies;
		obj.workshop = mod.workshop;
		obj.disabled = mod.disabled;
		mods.push(obj);
	}

	let checkModDependencies = (mod) => {
		let okay = true;
		mod.dependenciesStr = 0;
		if (mod.dependencies.length > 0) {
			let loadedMods = [];
			for (var i = 0; i < mod.i; i++) {
				if (!mods[i].disabled) loadedMods.push(mods[i].id);
			}
			mod.dependenciesStr = [];
			for (let ii = 0; ii < mod.dependencies.length; ii++) {
				if (loadedMods.includes(mod.dependencies[ii])) mod.dependenciesStr.push(`<div class="tag">${mod.dependencies[ii]}</div>`);
				else { mod.dependenciesStr.push(`<div class="tag pucker" style="background:#f00;">${mod.dependencies[ii]}</div>`); mod.disabled = true; okay = false; }
			}
			mod.dependenciesStr = mod.dependenciesStr.join(' ');
		}
		return okay;
	}

	let changeMods = () => { l('promptOption0').style.display = 'inline-block'; }
	let updateModList = () => {
		let el = l('modList'); if (!el) return false;

		let str = '';

		for (let i = 0; i < mods.length; i++) {
			let mod = mods[i];
			mod.i = i;
			checkModDependencies(mod);
			str += `<div class="zebra mouseOver${mod == selectedMod ? ' selected pucker' : ''}" style="padding:4px;${mod.disabled ? 'opacity:0.5;background:rgba(255,0,0,0.2);' : ''}" id="mod-${i}"><b id="mod-name-${i}"></b></div>`;
		}
		el.innerHTML = str;
		for (let i = 0; i < mods.length; i++) {
			let mod = mods[i];
			l('mod-name-' + i).textContent = mod.name;
			AddEvent(l('mod-' + i), 'click', () => { PlaySound('snd/tick.mp3'); selectedMod = (selectedMod == mod ? 0 : mod); updateModList(); });
		}
		updateModOptions();
	}
	let updateModOptions = () => {
		let el = l('modOptions'); if (!el) return false;

		if (selectedMod) {
			let mod = selectedMod;
			checkModDependencies(mod);
			el.innerHTML = `
				<div class="name" id="modName"></div>
				<div id="modId" class="tag"></div>
				<div class="line"></div>
				<a class="option" id="modDisable" ${Game.clickStr}="PlaySound('snd/tick.mp3');">${mod.disabled ? loc("Enable") : loc("Disable")}</a>
				<a class="halfLeft option${mods.indexOf(mod) == 0 ? ' off' : ''}" id="modPUp" ${Game.clickStr}="PlaySound('snd/tick.mp3');">${loc("Priority up")}</a>
				<a class="halfRight option${mods.indexOf(mod) == mods.length - 1 ? ' off' : ''}" id="modPDown" ${Game.clickStr}="PlaySound('snd/tick.mp3');">${loc("Priority down")}</a>
				`+ (mod.loc ? `<a class="option" id="modOpenFolder" ${Game.clickStr}="PlaySound('snd/tick.mp3');">${loc("Open folder")}</a>` : '') + `
				${mod.desc ? '<textarea readonly id="modDesc" style="margin:4px;padding:4px 8px;width:80%;box-sizing:border-box;height:80px;font-size:11px;"></textarea>' : ''}
				<div class="line" style="clear:both;"></div>
				`+ (mod.workshop ? `
					<a class="option" id="modOpenWorkshop" target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.workshop}" ${Game.clickStr}="PlaySound('snd/tick.mp3');">${loc("Open Workshop page")}</a>
				`: `<div style="opacity:0.5;margin:4px;">${loc("Local mod")}</div>`) + `
				`+ (mod.dependenciesStr ? `
					<div style="margin:4px;"><span style="opacity:0.5;">${loc("Dependencies")} - </span>${mod.dependenciesStr}</div>
				`: ``) + `
			`;
			AddEvent(l('modDisable'), 'click', () => { if (!checkModDependencies(mod)) { updateModOptions(); return false; } changeMods(); mod.disabled = !mod.disabled; updateModList(); });
			AddEvent(l('modPUp'), 'click', () => { if (mods.indexOf(mod) == 0) { return false; } changeMods(); mods.splice(mods.indexOf(mod) - 1, 0, mods.splice(mods.indexOf(mod), 1)[0]); updateModList(); });
			AddEvent(l('modPDown'), 'click', () => { if (mods.indexOf(mod) == mods.length - 1) { return false; } changeMods(); mods.splice(mods.indexOf(mod) + 1, 0, mods.splice(mods.indexOf(mod), 1)[0]); updateModList(); });
			l('modName').textContent = mod.name || '(untitled mod)';
			l('modId').textContent = mod.id ? ('ID: ' + mod.id) : '';
			if (mod.desc) l('modDesc').textContent = mod.desc;
			if (mod.loc) AddEvent(l('modOpenFolder'), 'click', () => { send({ id: 'open folder', loc: mod.loc }); });
		}
		else el.innerHTML = loc("Select a mod.");
	}
	Game.Prompt(`<id ManageMods>
		<h3>${loc("Manage mods")}</h3>
		<div class="line"></div>
		<div style="overflow:hidden;clear:both;"><a class="option" style="float:left;" id="openModsFolder" ${Game.clickStr}="PlaySound('snd/tick.mp3');">${loc("Open %1 folder", '/mods')}</a><a class="option" style="float:right;" id="openWorkshop" ${Game.clickStr}="PlaySound('snd/tick.mp3');">${loc("Open Workshop")}</a></div>
		<div style="font-size:11px;opacity:0.7;">${loc("Mods are loaded from top to bottom.")}</div>
		<div class="line"></div>
		<div style="height:300px;width:100%;position:relative;margin:12px 0px;">
			<div class="inner" style="font-size:11px;height:100%;width:50%;overflow-x:hidden;overflow-y:scroll;position:absolute;left:0px;" id="modList"></div>
			<div class="tight" style="font-size:11px;height:100%;width:50%;overflow-x:hidden;overflow-y:auto;position:absolute;right:0px;padding-left:10px;" id="modOptions"></div>
		</div>
	`, [[loc("Restart with new changes"), 0, 'display:none;'], loc("Back")], 0, 'widePrompt');
	updateModList();
	AddEvent(l('openModsFolder'), 'click', () => { send({ id: 'open folder', loc: 'DIR/mods' }); });
	AddEvent(l('openWorkshop'), 'click', () => { send({ id: 'open workshop' }); });
	AddEvent(l('promptOption0'), 'click', () => {
		Mods.ModList = mods.map(mod => (mod.id));
		for (var i = 0; i < mods.length; i++) {
			if (Mods.ModData[mods[i].id]) Mods.ModData[mods[i].id].disabled = mods[i].disabled;
		}
		Game.toSave = true;
		Game.toReload = true;
	});
}
Mods.workshopPopup = () =>{Game.Notify("No","The Web Version of Cookie Clicker does not have Steam Workshop support (it is not possible).")}

Mods.writeModUI=()=>
{
	let str = `<div style="text-align:center;">
		<a style="text-align:center;margin:4px;" class="option smallFancyButton" ${Game.clickStr}="Mods.modsPopup();PlaySound('snd/tick.mp3');">${loc("Manage mods")}</a>
		<a style="text-align:center;margin:4px;" class="option smallFancyButton" ${Game.clickStr}="Game.CheckModData();PlaySound(\'snd/tick.mp3\');">${loc("Check mod data")}</a>
		<a style="text-align:center;margin:4px;" class="option smallFancyButton" ${Game.clickStr}="Mods.workshopPopup();PlaySound('snd/tick.mp3');">${loc("Publish mods")}</a>
	</div>`;
	return str;
}


Mods.getSave = (callback) => {
	callback(localStorageGet(Game.SaveTo));
};

Mods.GetMods = function(callback){
	ajax('Mods/mods.json', (info) => {
		info = JSON.parse(info)
		let mods = []
		let promises = [];
		const getInfo = (path) => {
			promises.push(new Promise((resolve, reject) => {
				Mods.LoadModInfo(path, (mod)=>{mods.push(mod);resolve()}, () => { console.log(`Failed to load mod info:`, path); resolve(); });
			}));
		}
		for (let i = 0; i < info.length; i++) {getInfo(info[i])}

		Promise.all(promises)
			.then(() => {
				callback(mods)
			}, () => { console.log(`Failed to load mod metadata`, file); resolve(); });
	})
}

Mods.LoadMods = function (callback) {
	Mods.GetMods(async (mods) => {
		Mods.CreateTempFunctions()
		Mods.ModList = await new Promise((resolve, reject) => {
			Mods.getSave((data) => { resolve(analyzeSaveData(data).modMeta); });
		});
		if (!Mods.ModList) Mods.ModList = [];

		for (let i = 0; i < mods.length; i++) {
			let mod = mods[i];
			if (mod && !mod.info) Game.brokenMods.push(mod.path);
		}
		mods = mods.filter(it => it && it.info);

		for (let i = 0; i < mods.length; i++) {
			let mod = mods[i];
			if (Mods.ModList.includes('*' + mod.id)) { mod.disabled = true; Mods.ModList.splice(Mods.ModList.indexOf('*' + mod.id), 1, mod.id); }
			else if (Mods.ModList.includes(mod.id)) { mod.disabled = false; }
			else Mods.ModList.push(mod.id);//new mods get pushed to the bottom
		}

		mods.sort(function (a, b) {
			return Mods.ModList.indexOf(a.id) - Mods.ModList.indexOf(b.id);
		});
		let promises = [];
		const modLoadCheck = (func, path) => {
			promises.push(new Promise((resolve, reject) => {
				func(path, resolve, () => { console.log(`Failed to load mod file:`, file); resolve(); });
			}));
		}

		let loadedMods = [];
		for (let i = 0; i < mods.length; i++) {
			let mod = mods[i];
			Mods.ModData[mod.id] = mod;
			if (Game.modless || !mod.dependencies.every(v => loadedMods.includes(v))) mod.disabled = true;
			if (mod.disabled) continue;
			promises.push(new Promise((resolve, reject) => {
				Game.LoadMod(mod.dir + '/main.js', resolve, () => { console.log(`Failed to load mod file:`, file); resolve(); });
			}));
			if (mod.info.LanguagePacks) {
				for (let ii in mod.info.LanguagePacks) {
					let file = mod.dir + '/' + mod.info.LanguagePacks[ii];
					promises.push(new Promise((resolve, reject) => {
						LoadLang(file, resolve, () => { console.log(`Failed to load mod language file:`, file); resolve(); });
					}));
				}
			}
			loadedMods.push(mod.id);
		}
		if (document.location.search.indexOf('cookistocker') != -1) {
			modLoadCheck(Game.LoadMod, 'Mods/CookiStocker.js')
		}
		if (Mods.ModData.CCSE && !Mods.ModData.CCSE.disabled) {
			Mods.ChangeCCSE();
			if (document.location.search.indexOf('richpresence') != -1) {
				modLoadCheck(Game.LoadMod, 'https://ccrpc.angelolz.one')
			}
			modLoadCheck(Game.LoadMod, 'https://staticvariablejames.github.io/SpicedCookies/dist/main.js')
		}
		Promise.all(promises)
			.then(() => {
				console.log('loaded mods:', loadedMods.join(',') || '(none)');
				callback();
			});
	})
}

PRELOAD = function (callback) {
	return async () => {
		//dark fade-in
		(function () {
			let timesLoaded = 1
			var css = document.createElement('style');
			css.type = 'text/css';
			css.innerHTML = `
				#darkOverlay,#darkOverlay2
				{
					position:absolute;
					left:0px;top:0px;right:0px;bottom:0px;
					padding:0px;margin:0px;
					background:#000;
					z-index:10000000000;
					animation:darkOverlayFade ${timesLoaded == 1 ? '2' : '0.2'}s ease-out;
					animation-fill-mode:both;
					opacity:0.5;
					pointer-events:none;
				}
				#darkOverlay2
				{
					background:#f60;
					mix-blend-mode:multiply;
					z-index:99;
				}
				
				@keyframes darkOverlayFade{
					0% {opacity:1;}
					50% {opacity:1;}
					100% {opacity:0;}
				}
			`;
			document.head.appendChild(css);
			let darken = document.createElement('div');
			darken.innerHTML = '<div id="darkOverlay"></div><div id="darkOverlay2"></div>';
			document.body.appendChild(darken);
			setTimeout(() => { darken.parentNode.removeChild(darken); css.parentNode.removeChild(css); }, 3000);
		})();
		var initMusic = function () {
			let AudioContext = new (window.AudioContext || window.webkitAudioContext)();
			if (AudioContext) {
				Music = {};
				Music.context = AudioContext;
				Music.tracks = {};
				
				//node stack
				Music.gain = new GainNode(Music.context, { gain: 1 });
				Music.gain.connect(Music.context.destination);
				Music.filter = new BiquadFilterNode(Music.context, { type: 'lowpass', Q: 0 });
				Music.filter.frequency.setValueAtTime(5000, Music.context.currentTime);
				Music.filter.connect(Music.gain);
				Music.out = Music.filter;
				
				Music.setFilter = function (val, secs) {
					//val=1: no effect
					//val=0: full lowpass
					//secs: ramp over how many seconds
					var minValue = 40;
					var maxValue = Music.context.sampleRate / 2;
					var numberOfOctaves = Math.log(maxValue / minValue) / Math.LN2;
					var multiplier = Math.pow(2, numberOfOctaves * (val - 1.0));
					Music.filter.frequency.cancelScheduledValues(Music.context.currentTime);
					if (secs) {
						Music.filter.frequency.setValueAtTime(Music.filter.frequency.value, Music.context.currentTime);
						Music.filter.frequency.exponentialRampToValueAtTime(maxValue * multiplier, Music.context.currentTime + secs);
					}
					else Music.filter.frequency.setValueAtTime(maxValue * multiplier, Music.context.currentTime);
				}
					Music.setFilter(1);
				
				Music.setVolume = function (val, secs) {
					//val=1: full volume
					//val=0: silent
					//secs: ramp over how many seconds
					val *= 0.75;
					Music.gain.gain.cancelScheduledValues(Music.context.currentTime);
					if (secs) {
						if (val <= 0) {
							val = 0.00001;
						}
						Music.gain.gain.setValueAtTime(Music.gain.gain.value, Music.context.currentTime);
						Music.gain.gain.exponentialRampToValueAtTime(val, Music.context.currentTime + secs);
					}
					else Music.gain.gain.setValueAtTime(val, Music.context.currentTime);
				}
				Music.addTrack = function (name, author, url) {
					if (!Music.tracks[name]) {
						Music.tracks[name] = {
							audio: new Audio(),
							canPlay: false,
							name: name,
							author: author,
						};
						var track = Music.tracks[name];
						track.out = Music.context.createMediaElementSource(track.audio);
						track.audio.autoplay = false;
						track.audio.crossOrigin = 'anonymous';
						track.audio.src = url;
						track.audio.track = track;
						track.play = function () {
							this.out.connect(Music.out);
							this.audio.currentTime = 0;
							this.audio.loop = false;
							this.audio.play();
						};
						track.stop = function () {
							//this.out.disconnect(Music.out);
							this.audio.pause();
						};
						track.unstop = function () {
							this.out.connect(Music.out);
							this.audio.play();
						};
						AddEvent(track.audio, 'canplay', function (it) {
							it.target.track.canPlay = true;
						});
					}
				}
				
				//note: may trigger CORS locally
				Music.addTrack('preclick', 'C418', 'music/preclick.mp3');
				Music.addTrack('click', 'C418', 'music/click.mp3');
				Music.addTrack('grandmapocalypse', 'C418', 'music/grandmapocalypse.mp3');
				Music.addTrack('ascend', 'C418', 'music/ascend.mp3');
				Music.addTrack('Sweden', 'C418', 'music/sweden.mp3');
				Music.addTrack('Aria Math', 'C418', 'music/AriaMath.mp3');
				Music.addTrack('Subwoofer Lullaby', 'C418', 'music/Subwoofer Lullaby.mp3');
				Music.addTrack('Minecraft', 'C418', 'music/Minecraft.mp3');
				
				Music.cues = {
					'launch': () => { Music.setFilter(0); setTimeout(() => { Music.loopTrack('preclick'); Music.setFilter(1, 5); }, 1000); },
					'preplay': () => { Music.setFilter(0.5, 0.1); setTimeout(() => { Music.cue('play'); Music.setFilter(1, 0.1); }, 100); },
					'play': () => { if (Game.elderWrath < 3) { Music.loopTrack('click'); Music.setFilter(1); } else { Music.cue('grandmapocalypse'); } },
					'grandmapocalypse': () => { Music.loopTrack('grandmapocalypse'); Music.setFilter(1); },
					'fadeTo': (what) => {
						if (Music.playing && Music.playing.name == what) return false;
										 Music.setFilter(0, 3);
										 if (Game.visible || Game.prefs.bgMusic) { Music.setVolume(Game.volumeMusic / 250, 3); }
						setTimeout(() => {
							var prev = Music.playing ? Music.playing.audio.currentTime : 0;
										  Music.setFilter(0);
							if (Game.visible || Game.prefs.bgMusic) { Music.setVolume(Game.volumeMusic / 250); }
							Music.setFilter(1, 3);
							if (Game.visible || Game.prefs.bgMusic) { Music.setVolume(Game.volumeMusic / 100, 1.5); }
							Music.loopTrack(what, (track) => { track.audio.currentTime = prev % (1 * 4); });
						}, 3000);
					},
					'preascend': () => { Music.setFilter(0, 3); },
					'ascend': () => { Music.loopTrack('ascend'); Music.setFilter(1); Music.playing.audio.currentTime = (Game.resets % 2 == 0 ? 0 : 175.95); },
				};
				
				Music.cue = function (cue, arg) {
					if (Music.cues[cue]) Music.cues[cue](arg);
				}
				
				Music.playing = false;
				Music.playTrack = function (name, callback) {
					var track = Music.tracks[name];
					if (!track) return false;
					if (Music.playing) Music.playing.stop();//todo: fade out
					Music.playing = track;
					if (track.canPlay) { track.play(); track.audio.loop = false; if (callback) { callback(track); } }
					else {
						AddEvent(track.audio, 'canplay', function (it) {
							if (it.target.track == Music.playing) { it.target.track.play(); if (callback) { callback(it.target.track); } }
						});
					}
					if (Game.jukebox) Game.jukebox.setTrack(Game.jukebox.tracks.indexOf(name), true);
					return true;
				}
				
				Music.loopTrack = function (name, callback) {
					Music.playTrack(name, (track) => { track.audio.loop = true; if (callback) { callback(track); } });
				}
						
				Music.pause = function () {
					if (Music.playing) Music.playing.stop();
				}
				Music.unpause = function () {
					if (Music.playing) Music.playing.unstop();
				}
						
				Music.loop = function (val) {
					if (Music.playing) Music.playing.audio.loop = val;
				}
				
				Music.setTime = function (val) {
					if (Music.playing) Music.playing.currentTime = val;
				}
				
				//Music.playTrack('click');
				
				if (Game.initJukebox) { Game.initJukebox() }
				if (Game.ready && !Music.playing) { Music.cue('launch') }
				if (Game.ready && (Game.visible || Game.prefs.bgMusic)) { Music.setVolume(Game.volumeMusic / 100, 1.5); }
			}
		}; 
		initMusic();
		if (!App) {
			Game.firstClick = false;
			AddEvent(window, 'click', function () {
					if (Game.firstClick || !Music) return;
					Game.firstClick = true;
					Music.context.resume()
				}
			);
		}
		callback()
	}
}



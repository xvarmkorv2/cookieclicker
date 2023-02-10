Mods = {}

Mods.ModData = {}
Mods.ModList = []

send = ()=>{}
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
Mods.LoadFolder = function (folder, callback) {
	let ajaxFailed=true;
	ajax(folder + '/info.txt', (info) => {
		ajaxFailed=false;
		info = JSON.parse(info)
		info.dir = folder
		info.ID = info.ID.replace(/\W+/g, ' ');
		Mods.ModList.push(info.ID)
		Mods.ModData[info.ID] = {
			dir: folder,
			info: info,
			disabled: false,
			dependencies:  info.Dependencies || [],
			workshop:  info.Workshop || false
		}
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
	})
	setTimeout(() => { if (ajaxFailed){callback()}}, 2500)
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
	if (!window.CCSE) window.CCSE = {};
	if (!CCSE.MenuHelper) CCSE.MenuHelper = {};
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
	confirm = function(){return true}
}
Mods.modsPopup = function () {
	let selectedMod = 0;

	let mods = [];
	for (var i=0;i<Mods.ModList.length;i++){
		let mod = Mods.ModData[Mods.ModList[i]];
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
		let loadedMods = [];
		for (var i = 0; i < mod.i; i++) {
			if (!mods[i].disabled) loadedMods.push(mods[i].id);
		}
		if (mod.dependencies.length > 0) {
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
					<a class="option" id="modOpenWorkshop" ${Game.clickStr}="PlaySound('snd/tick.mp3');">${loc("Open Workshop page")}</a>
					<a class="option" id="modUnsubscribeWorkshop" ${Game.clickStr}="PlaySound('snd/tick.mp3');">${loc("Unsubscribe")}</a>
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
			if (mod.workshop) {
				AddEvent(l('modOpenWorkshop'), 'click', () => { send({ id: 'open workshop', loc: mod.workshop }); });
				AddEvent(l('modUnsubscribeWorkshop'), 'click', () => {
					l('modUnsubscribeWorkshop').style.cssText = 'opacity:0.5;pointer-events:none;'; send({ id: 'unsubscribe workshop', loc: mod.workshop, dir: Mods.ModData[mod.id].dir }, async (response) => {
						if (response == true) {
							mods.splice(mods.indexOf(mod), 1);
							selectedMod = 0;
							changeMods();
							updateModList();
						}
					});
				});
			}
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
Mods.workshopPopup = () =>{}

Mods.writeModUI=()=>
{
	let str = `<div style="text-align:center;">
		<a style="text-align:center;margin:4px;" class="option smallFancyButton" ${Game.clickStr}="Mods.modsPopup();PlaySound('snd/tick.mp3');">${loc("Manage mods")}</a>
		<a style="text-align:center;margin:4px;" class="option smallFancyButton" ${Game.clickStr}="Game.CheckModData();PlaySound(\'snd/tick.mp3\');">${loc("Check mod data")}</a>
		<a style="text-align:center;margin:4px;" class="option smallFancyButton" ${Game.clickStr}="Mods.workshopPopup();PlaySound('snd/tick.mp3');">${loc("Publish mods")}</a>
	</div>`;
	return str;
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
			setTimeout(() => { darken.parentNode.removeChild(darken); }, 3000);
		})();
		callback()
	}
}

Mods.LoadMods = function (callback) {
	Mods.CreateTempFunctions()
	let promises = [];
	const modLoadCheck = (func, path) => {
		promises.push(new Promise((resolve, reject) => {
			func(path, resolve, () => { console.log(`Failed to load mod language file:`, file); resolve(); });
		}));
	}
	modLoadCheck(Mods.LoadFolder, 'https://klattmose.github.io/CookieClicker/SteamMods/CCSE')
	Mods.ChangeCCSE();
	//modLoadCheck(Game.LoadMod, 'https://staticvariablejames.github.io/InsugarTrading/dist/main.js')
	modLoadCheck(Game.LoadMod, 'https://staticvariablejames.github.io/SpicedCookies/dist/main.js')
	modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/CCSE-POCs/TimerWidget.js')
	modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/FortuneCookie.js?v=2.8')
	modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/AmericanSeason.js?v=1.7')
	modLoadCheck(Mods.LoadFolder, 'https://klattmose.github.io/CookieClicker/SteamMods/DecideDestiny')
	modLoadCheck(Mods.LoadFolder, 'https://klattmose.github.io/CookieClicker/SteamMods/Casino')
	modLoadCheck(Mods.LoadFolder, 'https://klattmose.github.io/CookieClicker/SteamMods/BlackholeInverter')
	//modLoadCheck(Game.LoadMod, 'https://mtarnuhal.github.io/FrozenCookies/frozen_cookies.js')
	modLoadCheck(Mods.LoadFolder, 'Mods/ameliaWatson')
	modLoadCheck(Mods.LoadFolder, 'Mods/wikiMinigame')
	modLoadCheck(Mods.LoadFolder, 'Mods/cws-uniqueJellicles')
	modLoadCheck(Mods.LoadFolder, 'Mods/cws-uniqueGrandmas')
	modLoadCheck(Mods.LoadFolder, 'Mods/cws-squashyPress')
	modLoadCheck(Mods.LoadFolder, 'Mods/cws-alignedCookieAchievements')
	modLoadCheck(Mods.LoadFolder, 'Mods/cws-betterTrueSanta')
	modLoadCheck(Mods.LoadFolder, 'Mods/cws-consistentUpgradeBuildingIcons')
	modLoadCheck(Mods.LoadFolder, 'Mods/ccideas')
	modLoadCheck(Mods.LoadFolder, 'Mods/Pride_Backgrounds')
	if (document.location.search.indexOf('mittens') != -1) {
		modLoadCheck(Mods.LoadFolder, 'Mods/cws-mittenCursors')
	}
	//modLoadCheck(Mods.LoadFolder, 'Mods/evenMoreBackgrounds')
	if (document.location.search.indexOf('richpresence') != -1) {
		modLoadCheck(Game.LoadMod, 'https://angelolz.dev/mods/ccrpc/main.js')
	}
	if (document.location.search.indexOf('cookistocker') != -1) {
		modLoadCheck(Game.LoadMod, 'Mods/CookiStocker.js')
	}
	Promise.all(promises)
		.then(() => {
			let loadedMods = []; 
			for (var i in Game.mods) { loadedMods.push(Game.mods[i].id); }
			console.log('loaded mods:', loadedMods.join(',') || '(none)');
			callback();
		});
}
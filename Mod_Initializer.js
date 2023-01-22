Mods = {}

Mods.ModData = {}

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
		Mods.ModData[info.ID] = {
			dir: folder,
			info: info
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
	modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/CCSE.js')
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
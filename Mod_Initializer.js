const EnableCookiStocker = false


Mods = {}

Mods.ModData = {}

Mods.registerMod = function (mod) {
	if (Mods.ModData[mod.id]) {
		let steamSide = Mods.ModData[mod.id];
		mod.dir = steamSide.dir.replace(/\\/g, "/");
	}
}
Mods.LoadFolder = function (folder, callback) {
	ajax(folder + '/info.txt', (info) => {
		info = JSON.parse(info)
		info.dir = folder
		Mods.ModData[info.ID] = {
			dir: folder,
			info: info
		}
		let promises=[];
		promises.push(new Promise((resolve,reject)=>{
			Game.LoadMod(folder + '/main.js',resolve,()=>{console.log(`Failed to load mod file:`,folder + '/main.js');resolve();});
		}));
		if (info.LanguagePacks)
		{
			for (let ii in info.LanguagePacks)
			{
				let file=folder+'/'+info.LanguagePacks[ii];
				promises.push(new Promise((resolve,reject)=>{
					LoadLang(file,resolve,()=>{console.log(`Failed to load mod language file:`,file);resolve();});
				}));
			}
		}
		Promise.all(promises)
		.then(()=>{
			callback();
		});
	})
}

Mods.CreateTempFunctions = function () {
	let temp = () => { }
	Game.Win = temp
	Game.Unlock = temp
	Game.Lock = temp
	Game.Has = temp
	Game.HasUnlocked = temp
}

Mods.ChangeCCSE = function(){
	CCSE.GetModPath = (modName) => {
		let mod = Mods.ModData[modName];
		return mod.dir
	}

	CCSE.GetModFolder = (modName) => Mods.ModData[modName].path;

	CCSE.MenuHelper.AutoVersion = (mod) => {
		let func = function () {
			let modInfo = Steam.mods[mod.id].info;
			Game.customStatsMenu.push(function () {
				CCSE.AppendStatsVersionNumber(modInfo.Name, modInfo.ModVersion);
			});
		}

		if (CCSE.isLoaded) func();
		else CCSE.postLoadHooks.push(func);
	}
}

Mods.LoadMods = function (callback) {
	Mods.CreateTempFunctions()
    let promises=[];
	let modLoadCheck = (func, path) => {
        promises.push(new Promise((resolve,reject)=>{
			func(path,resolve,()=>{console.log(`Failed to load mod language file:`,file);resolve();});
		}));
    }
    modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/CCSE.js')
    //modLoadCheck(Game.LoadMod, 'https://staticvariablejames.github.io/InsugarTrading/dist/main.js')
    modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/CCSE-POCs/BlackholeInverter.js?v=1.12')
	modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/minigameCasino.js?v=3.16')
	modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/FortuneCookie.js?v=2.8')
	modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/CCSE-POCs/TimerWidget.js')
	modLoadCheck(Game.LoadMod, 'https://klattmose.github.io/CookieClicker/AmericanSeason.js?v=1.7')
	modLoadCheck(Mods.LoadFolder, 'Mods/ameliaWatson')
	modLoadCheck(Mods.LoadFolder, 'Mods/wikiMinigame')
	modLoadCheck(Mods.LoadFolder, 'https://klattmose.github.io/CookieClicker/SteamMods/DecideDestiny')
    //Mods.LoadFolder('Mods/evenMoreBackgrounds', false)
    //Game.LoadMod('https://mtarnuhal.github.io/FrozenCookies/frozen_cookies.js');
    if (EnableCookiStocker) {
        modLoadCheck(Game.LoadMod, 'Mods/CookiStocker.js')
	}

	if (CCSE && CCSE.isLoaded) {
		Mods.ChangeCCSE();
	}
	else {
		if (!CCSE) var CCSE = {};
		if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(Mods.ChangeCCSE);
	}
	Promise.all(promises)
	.then(()=>{
		callback();
	});
}
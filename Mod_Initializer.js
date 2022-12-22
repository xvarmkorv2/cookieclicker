const EnableCookiStocker = false


Mods = {}

Mods.LoadFolder = function (folder, callback) {
	ajax(folder + '/info.txt',(info)=>{
		info = JSON.parse(info)
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

Mods.LoadMods = function (callback) {
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
    modLoadCheck(Mods.LoadFolder, 'Mods/ameliaWatson')
    //Mods.LoadFolder('Mods/evenMoreBackgrounds', false)
    //Game.LoadMod('https://mtarnuhal.github.io/FrozenCookies/frozen_cookies.js');
    if (EnableCookiStocker) {
        modLoadCheck(Game.LoadMod, '/CookiStocker.js')
    }
	Promise.all(promises)
	.then(()=>{
		callback();
	});
}
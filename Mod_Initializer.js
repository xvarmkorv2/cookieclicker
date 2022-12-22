const EnableCookiStocker = false


Mods = {}

Mods.LoadFolder = function (folder, lang, callback) {
    let callbackN=0
    let callbackCheck = ()=>{
        callbackN++
        if (callbackN == lang ? 1 : 2){
            callback()
        }
    }
    if (lang) {
        Game.LoadMod(folder + '/lang.js', callbackCheck)
    }
    Game.LoadMod(folder + '/main.js', callbackCheck)
}

Mods.LoadMods = function (launch) {
    let callbackN = 0
    let callbackN2 = 0
    let callbackCheck = () => {
        callbackN++
        if (callbackN == callbackN2) {
            launch()
        }
    }
    let modLoadCheck = (func, path) => {
        callbackN2++
        func(path, callbackCheck)
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
}
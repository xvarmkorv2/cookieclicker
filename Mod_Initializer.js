const EnableCookiStocker = false


Mods = {}

Mods.LoadFolder = function (folder, lang) {
    if (lang) {
        Game.LoadMod(folder + '/lang.js')
    }
    Game.LoadMod(folder + '/main.js')
}

Mods.LoadMods = function (launch) {
    Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
    //Game.LoadMod('https://staticvariablejames.github.io/InsugarTrading/dist/main.js');
    Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE-POCs/BlackholeInverter.js?v=1.12')
    Game.LoadMod('https://klattmose.github.io/CookieClicker/minigameCasino.js?v=3.16')
    Game.LoadMod('https://klattmose.github.io/CookieClicker/FortuneCookie.js?v=2.8')
    Mods.LoadFolder('Mods/ameliaWatson', true)
    //Mods.LoadFolder ('Mods/evenMoreBackgrounds', false)
    //Game.LoadMod('https://mtarnuhal.github.io/FrozenCookies/frozen_cookies.js');
    if (EnableCookiStocker) {
        Game.LoadMod('https://xvarmkorv2.github.io/cookieclicker/CookiStocker.js')
    }
    setTimeout(() => {
        launch()
    }, 1000);
}
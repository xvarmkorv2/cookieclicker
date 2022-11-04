const EnableCookiStocker = false
var waitForGame = function waitForGame() {
    if (typeof Game === 'object' && Game.ready) {
        Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
        Game.LoadMod('https://staticvariablejames.github.io/InsugarTrading/dist/main.js');
        //Game.LoadMod("https://cookiemonsterteam.github.io/CookieMonster/dist/CookieMonster.js");
        //Game.LoadMod('https://mtarnuhal.github.io/FrozenCookies/frozen_cookies.js');
        if (EnableCookiStocker) {
            Game.LoadMod('https://xvarmkorv2.github.io/cookieclicker/CookiStocker.js')
        }
    } else setTimeout(waitForGame, 100)
}
setTimeout(waitForGame)

const EnableCookiStocker = false
var waitForGame = function waitForGame() {
    if (typeof Game === 'object' && Game.ready) {
        Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js', () => {
            CCSE.ReplaceBuildings = () => { requestAnimationFrame(CCSE.playlist[CCSE.track++]); }
        });
        //Game.LoadMod('https://staticvariablejames.github.io/InsugarTrading/dist/main.js');
        Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE-POCs/BlackholeInverter.js?v=1.12')
        Game.LoadMod('https://klattmose.github.io/CookieClicker/minigameCasino.js?v=3.16')
        Game.LoadMod('https://klattmose.github.io/CookieClicker/FortuneCookie.js?v=2.8')
        //Game.LoadMod('https://mtarnuhal.github.io/FrozenCookies/frozen_cookies.js');
        if (EnableCookiStocker) {
            Game.LoadMod('https://xvarmkorv2.github.io/cookieclicker/CookiStocker.js')
        }
    } else setTimeout(waitForGame, 100)
}
setTimeout(waitForGame)

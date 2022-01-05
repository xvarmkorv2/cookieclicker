var waitForGame = setInterval(function() {
    const Game = Window.Game;
      if (Game && Game.ready) {
        clearInterval(waitForGame);
        Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
        Game.LoadMod('https://staticvariablejames.github.io/InsugarTrading/dist/main.js');
        Game.LoadMod("https://cookiemonsterteam.github.io/CookieMonster/dist/CookieMonster.js");
        Game.LoadMod('https://mtarnuhal.github.io/FrozenCookies/frozen_cookies.js');
      }
  }, 100);
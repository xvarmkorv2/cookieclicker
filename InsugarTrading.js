var waitForGame = function waitForGame() {
    if (typeof Game === 'object' && Game.ready) {
        Game.LoadMod('https://staticvariablejames.github.io/InsugarTrading/dist/main.js');
    } else setTimeout(waitForGame, 100)
}
setTimeout(waitForGame)
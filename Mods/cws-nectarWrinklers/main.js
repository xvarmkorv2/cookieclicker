Game.registerMod("cws-nectarWrinklers",{
	init:function(){
		// this mod is perhaps evil
		
		// shaming you
		Game.Notify(`bzzz bzzz bzzz`,`They have come for your nectar.`,[19,33],10,1);
		
		// working dark magic
		Game.Loader.Replace('wrinkler.png',this.dir+'/flyBob.png');
		Game.Loader.Replace('winterWrinkler.png',this.dir+'/winterBob.png');
		Game.Loader.Replace('shinyWrinkler.png',this.dir+'/shinyBob.png');
		Game.Loader.Replace('wrinklerBits.png',this.dir+'/flyBits.png'); //no clue if this actually worked but it's better than unchanged wrinkler bits
		
		// this gets rid of the scary stuff mode googly eyes
		// could've replaced them with something more impressive?
		// that may be an update... or not!
		Game.Loader.Replace('wrinklerBlink.png',this.dir+'/wrinklershapedNull.png');
		Game.Loader.Replace('wrinklerGooglies.png',this.dir+'/wrinklershapedNull.png');
	},
});
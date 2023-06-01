Game.registerMod("Croissant Mod",{
	init:function(){

		Game.Loader.Replace('wrinkler.png',this.dir+'/croissant.png');
		Game.Loader.Replace('winterWrinkler.png',this.dir+'/wintercroissant.png');
		Game.Loader.Replace('shinyWrinkler.png',this.dir+'/shinycroissant.png');
		Game.Loader.Replace('wrinklerBits.png',this.dir+'/croissantbits.png');

	},

});
Game.registerMod("cws-oldStyleBack",{
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		
		//writing mods for Cookie Clicker may require a decent understanding of javascript.
		//dig around in the game files and look for "main.js", almost the entire source code is in there including further mod hook instructions and more examples! search for "MODDING API".
		
		Game.Notify(`Wallpaper Peeled!`,`Talk about a rugged look!`,[24,34],10,1);
		
		//replacing the backgrounds!
		Game.Loader.Replace('bgBlue.jpg',this.dir+'/bgOldBlue.jpg');
		Game.Loader.Replace('bgBlack.jpg',this.dir+'/bgOldBlack.jpg');
		Game.Loader.Replace('bgBW.jpg',this.dir+'/bgOldBW.jpg');
		Game.Loader.Replace('bgCandy.jpg',this.dir+'/bgOldCandy.jpg');
		Game.Loader.Replace('bgChoco.jpg',this.dir+'/bgOldChoco.jpg');
		Game.Loader.Replace('bgChocoDark.jpg',this.dir+'/bgOldChocoDark.jpg');
		Game.Loader.Replace('bgGold.jpg',this.dir+'/bgOldGold.jpg');
		Game.Loader.Replace('bgMint.jpg',this.dir+'/bgOldMint.jpg');
		Game.Loader.Replace('bgPink.jpg',this.dir+'/bgOldPink.jpg');
		Game.Loader.Replace('bgPurple.jpg',this.dir+'/bgOldPurple.jpg');
		Game.Loader.Replace('bgRed.jpg',this.dir+'/bgOldRed.jpg');
		Game.Loader.Replace('bgSilver.jpg',this.dir+'/bgOldSilver.jpg');
		Game.Loader.Replace('bgSky.jpg',this.dir+'/bgOldSky.jpg');
		Game.Loader.Replace('bgSpectrum.jpg',this.dir+'/bgOldSpectrum.jpg');
		Game.Loader.Replace('bgWhite.jpg',this.dir+'/bgOldWhite.jpg');
		Game.Loader.Replace('bgYellowBlue.jpg',this.dir+'/bgOldYellowBlue.jpg');
	},
});
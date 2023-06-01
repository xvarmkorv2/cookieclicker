Game.registerMod("rtxon",{//this string needs to match the ID provided in your info.txt
	init:function(){		
		//wrinkler
				Game.Loader.Replace('wrinkler.png',this.dir+'/RTX_wrinkler.png');
				Game.Loader.Replace('winterWrinkler.png',this.dir+'/RTX_winterWrinkler.png');
				Game.Loader.Replace('shinyWrinkler.png',this.dir+'/RTX_shinyWrinkler.png');
				Game.Loader.Replace('wrinklerShadow.png',this.dir+'/RTX_wrinklerShadow.png');
				Game.Loader.Replace('wrinklerBits.png',this.dir+'/RTX_wrinklerBitsbits.png');
},
});
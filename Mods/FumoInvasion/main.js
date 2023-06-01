
Game.registerMod("FumoInvasion",{
	init:function(){
		Game.Loader.Replace('perfectCookie.png',this.dir + '/cirno.png');
		Game.Loader.Replace('cookieShadow.png',this.dir+'/cirnoShadow.png');
		Game.Loader.Replace('wrinkler.png', this.dir+'/reimuFumo.png');
		Game.Loader.Replace('wrinklerBits.png', this.dir+'/reimuBits.png');
		Game.Loader.Replace('cursor.png', this.dir+'/marisaFumo.png');
		Game.Loader.Replace('milkMint.png', this.dir+'/fumoMilk.png');
	}
});

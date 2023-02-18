Game.registerMod("Just Monika",{
	init:function(){
		Game.Notify(`Just Monika`,'',[16,5]);
		Game.Loader.Replace('perfectCookie.png',this.dir + '/Monika.png');
		Game.Loader.Replace('brokenCookieHalo.png',this.dir + '/nohalo.png');
		Game.Loader.Replace('cookieShadow.png',this.dir + '/noshadow.png');
	},
});
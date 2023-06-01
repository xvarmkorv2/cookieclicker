Game.registerMod("ori",{
	init:function(){
		
		var Nicon = this.dir + "/Nicon.png";
		Game.Notify(`• Ori cookie •`,`Completed loading ;D`,[16, 5, Nicon]);
		
		Game.Loader.Replace('perfectCookie.png',this.dir+'/ori.png');
		Game.Loader.Replace('cookieShadow.png',this.dir+'/ori shadow.png');
	},
});
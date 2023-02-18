Game.registerMod("burger",{
	init:function(){
		
		var Nicon = this.dir + "/Nicon.png";
		Game.Notify(`• Burger cookie •`,`Completed loading ;D`,[16, 5, Nicon]);
		
		Game.Loader.Replace('perfectCookie.png',this.dir+'/burger.png');
	},
});
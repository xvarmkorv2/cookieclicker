Game.registerMod("pizza",{
	init:function(){
		
		var Nicon = this.dir + "/Nicon.png";
		Game.Notify(`• Pizza cookie •`,`Completed loading ;D`,[16, 5, Nicon]);
		
		Game.Loader.Replace('perfectCookie.png',this.dir+'/pizza.png');
	},
});
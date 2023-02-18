Game.registerMod("fries",{
	init:function(){
		
		var Nicon = this.dir + "/Nicon.png";
		Game.Notify(`• Fries cookie •`,`Completed loading ;D`,[16, 5, Nicon]);
		
		Game.Loader.Replace('perfectCookie.png',this.dir+'/fries.png');
	},
});
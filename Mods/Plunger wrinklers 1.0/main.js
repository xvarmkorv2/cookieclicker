Game.registerMod("plunger",{
	init:function(){
		
		var Nicon = this.dir + "/Nicon.png";
		Game.Notify(`• Plunger wrinklers •`,`Completed loading ;D`,[16, 5, Nicon]);
		
		Game.Loader.Replace('wrinkler.png',this.dir+'/1.png');
		Game.Loader.Replace('winterWrinkler.png',this.dir+'/2.png');
		Game.Loader.Replace('shinyWrinkler.png',this.dir+'/3.png');
		Game.Loader.Replace('wrinklerBits.png',this.dir+'/4.png');
		Game.Loader.Replace('shinyWrinklerBits.png',this.dir+'/4.png');
		Game.Loader.Replace('wrinklerShadow.png',this.dir+'/5.png');
	},
});
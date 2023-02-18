Game.registerMod("guracookie", {//this string needs to match the ID provided in your info.txt
	init:function(){
		

	    Game.Loader.Replace('perfectCookie.png', this.dir + '/shark_perfectcookie.png');
                Game.Loader.Replace('wrinkler.png',this.dir+'/trident.png');
                Game.Loader.Replace('shinyWrinkler.png',this.dir+'/shiny_trident.png');
                Sounds["snd/clickb1.mp3"] = new Audio(this.dir + '/snd/click1.mp3')
		Sounds["snd/clickb2.mp3"] = new Audio(this.dir + '/snd/click2.mp3')
		Sounds["snd/clickb3.mp3"] = new Audio(this.dir + '/snd/click3.mp3')
		Sounds["snd/clickb4.mp3"] = new Audio(this.dir + '/snd/click4.mp3')
		Sounds["snd/clickb5.mp3"] = new Audio(this.dir + '/snd/click5.mp3')
		Sounds["snd/clickb6.mp3"] = new Audio(this.dir + '/snd/click6.mp3')
		Sounds["snd/clickb7.mp3"] = new Audio(this.dir + '/snd/click7.mp3')
		Game.Notify(`Gawr Gura mod loaded!`,`a`,[16,5]);
	},
});
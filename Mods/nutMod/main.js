Game.registerMod("nut",{
	init:function(){

		Game.Notify(`Nut mod loaded!`,`Nut.`,[1,8]);

		Game.Loader.Replace('perfectCookie.png',this.dir+'/nutCookie.png');
		Sounds["snd/clickb1.mp3"] = new Audio(this.dir + '/snd/click1.mp3')
		Sounds["snd/clickb2.mp3"] = new Audio(this.dir + '/snd/click2.mp3')
		Sounds["snd/clickb3.mp3"] = new Audio(this.dir + '/snd/click3.mp3')
		Sounds["snd/clickb4.mp3"] = new Audio(this.dir + '/snd/click4.mp3')
		Sounds["snd/clickb5.mp3"] = new Audio(this.dir + '/snd/click5.mp3')
		Sounds["snd/clickb6.mp3"] = new Audio(this.dir + '/snd/click6.mp3')
		Sounds["snd/clickb7.mp3"] = new Audio(this.dir + '/snd/click7.mp3')


	},
});
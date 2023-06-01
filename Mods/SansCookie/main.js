Game.registerMod("SansCookie", {
	
	init:function(){
		Game.Loader.Replace('perfectCookie.png', this.dir + '/sanscookie.png');
		Game.Loader.Replace('imperfectCookie.png', this.dir + '/papyruscookie.png');
		Game.Loader.Replace('brokenCookie.png', this.dir + '/sanscookieKill.png');
		Sounds["snd/click1.mp3"] = new Audio(this.dir + '/snd/sans.mp3')
		Sounds["snd/click2.mp3"] = new Audio(this.dir + '/snd/sans.mp3')
		Sounds["snd/click3.mp3"] = new Audio(this.dir + '/snd/sans.mp3')
		Sounds["snd/click4.mp3"] = new Audio(this.dir + '/snd/sans.mp3')
		Sounds["snd/click5.mp3"] = new Audio(this.dir + '/snd/sans.mp3')
		Sounds["snd/click6.mp3"] = new Audio(this.dir + '/snd/sans.mp3')
		Sounds["snd/click7.mp3"] = new Audio(this.dir + '/snd/sans.mp3')
		Sounds["snd/thud.mp3"] = new Audio(this.dir + '/snd/attackHit.mp3')
		},
	
});
Game.registerMod("cws-nogooglyeyesmod",{
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		
		//writing mods for Cookie Clicker may require a decent understanding of javascript.
		//dig around in the game files and look for "main.js", almost the entire source code is in there including further mod hook instructions and more examples! search for "MODDING API".
		
		Game.Notify(`Goo-gone applied!`,`They're just little guys!`,[19,8],10,1);
		
		//all this mod SHOULD need is simply these 2 here commandz!
		Game.Loader.Replace('wrinklerBlink.png',this.dir+'/wrinklershapedNull.png');
		Game.Loader.Replace('wrinklerGooglies.png',this.dir+'/wrinklershapedNull.png');
	},
});
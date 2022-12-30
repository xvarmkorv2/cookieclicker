Game.registerMod("cws-consistentUpgradeBuildingIcons", {
	init: function() {

		// this one's definitely a bit more complex. please refer to like the goro mod if you're peeking in here for reference!
		// creating shorthand variable "custImg" to refer to this
		var custImg = this.dir + "/PillarRuler.png";
		
		// and a notification
		//Game.Notify(`Various achievement icons changed!`, `Flasks and pillars and rulers, oh my!`, [10,10],10,1);
		
		// starting with upgrade icons
		// hilariously, these are just unused. in the game data. smh orteil it was so easy
		Game.Achievements['Lord of Progress'].icon = [9, 13]; 
		Game.Achievements['The full picture'].icon = [9, 14]; 
		Game.Achievements['When there\'s nothing left to add'].icon = [9, 15]; 
		Game.Achievements['Kaizen'].icon = [9, 16]; 
		Game.Achievements['Beyond quality'].icon = [9, 17]; 
		
		// now the centennials
		// this one actually WILL use our variable as there's no in-game equvialents... except for??? Buttergold, Astrofudge, and Albascream??? orteil why you do this
		Game.Achievements['Bicentennial and a half'].icon = [1,0,custImg];
		Game.Achievements['Tricentennial'].icon = [9,6];
		Game.Achievements['Tricentennial and a half'].icon = [1,1,custImg];
		Game.Achievements['Quadricentennial'].icon = [1,2,custImg];
		Game.Achievements['Quadricentennial and a half'].icon = [1,3,custImg];
		Game.Achievements['Quincentennial'].icon = [1,4,custImg];
		Game.Achievements['Quincentennial and a half'].icon = [1,5,custImg];
		Game.Achievements['Sexcentennial'].icon = [29,25];
		Game.Achievements['Sexcentennial and a half'].icon = [29,26];
		
		// and lastly, buildings
		// this one just has buttergold (thank God)
		Game.Achievements['Lord of Constructs'].icon = [0,0,custImg];
		Game.Achievements['Grand design'].icon = [5,6];
		Game.Achievements['Ecumenopolis'].icon = [0,1,custImg];
		Game.Achievements['Myriad'].icon = [0,2,custImg];
	}
});
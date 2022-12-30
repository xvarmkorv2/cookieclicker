Game.registerMod("cws-betterTrueSanta", {
	init: function() {

		// creating custImg variable
		var custImg = this.dir + "/newSanta.png";
		
		// notification!
		//Game.Notify(`Achievement and upgrade icons changed!`, `BEHOLD!`, [0, 0, custImg],10,1);
		
		// changing icons
		Game.Upgrades['Santa\'s dominion'].icon = [0, 0, custImg];
		Game.Achievements['All hail Santa'].icon = [0, 0, custImg];
	}
});
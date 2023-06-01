Game.registerMod("cws-betterGoldenAchievements", {
	init: function() {

		// this one changes things in bulk! the goro mod's a bit simpler if you want to refer to that
		// creating shorthand variable "custImg" to refer to this
		var custImg = this.dir + "/betterGold.png";
		
		// and a notification
		Game.Notify(`Various achievement icons changed!`, `All that glitters may or may not be gold unless otherwise observed!`, [23,6],10,1);
		
		// starting with the not-shadow achievements
		Game.Achievements['Early bird'].icon = [2,1,custImg];
		Game.Achievements['Fading luck'].icon = [2,0,custImg];
		
		// and now, the shadowy ones
		Game.Achievements['Four-leaf cookie'].icon = [0,0,custImg];
		Game.Achievements['Seven horseshoes'].icon = [1,0,custImg];
		Game.Achievements['All-natural cane sugar'].icon = [0,1,custImg];
		Game.Achievements['Last Chance to See'].icon = [1,1,custImg];
	}
});
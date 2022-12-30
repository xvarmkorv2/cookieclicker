Game.registerMod("cws-alignedCookieAchievements", {
	init: function() {

		// this one changes things in bulk!
		// creating shorthand variable "custImg" to refer to this
		var custImg = this.dir + "/alignedCheevos.png";
		
		// and a notification
		//Game.Notify(`Various achievement icons changed!`, `The stars are aligned!`, [28,4],10,1);
		
		// cookies per run achievements
		Game.Achievements['Brought to you by the letter <div style="display:inline-block;background:url(img/money.png);width:16px;height:16px;"></div>'].icon = [0,0,custImg];
		Game.Achievements['The dreams in which I\'m baking are the best I\'ve ever had'].icon = [1,0,custImg];
		Game.Achievements['Set for life'].icon = [2,0,custImg];
		Game.Achievements['Panic\! at Nabisco'].icon = [0,1,custImg];
		Game.Achievements['Bursting at the seams'].icon = [1,1,custImg];
		Game.Achievements['Just about full'].icon = [2,1,custImg];
		Game.Achievements['Hungry for more'].icon = [0,2,custImg];
		Game.Achievements['Feed me, Orteil'].icon = [1,2,custImg];
		Game.Achievements['And then what?'].icon = [2,2,custImg];
		
		// cookies per second achievements
		Game.Achievements['I don\'t know if you\'ve noticed but all these icons are very slightly off-center'].icon = [0,0,custImg];
		Game.Achievements['The proof of the cookie is in the baking'].icon = [1,0,custImg];
		Game.Achievements['If it\'s worth doing, it\'s worth overdoing'].icon = [2,0,custImg];
		Game.Achievements['Running with scissors'].icon = [0,1,custImg];
		Game.Achievements['Rarefied air'].icon = [1,1,custImg];
		Game.Achievements['Push it to the limit'].icon = [2,1,custImg];
		Game.Achievements['Green cookies sleep furiously'].icon = [0,2,custImg];
		Game.Achievements['Leisurely pace'].icon = [1,2,custImg];
		Game.Achievements['Hypersonic'].icon = [2,2,custImg];
		
		// and then there's this wayward upgrade we missed the first time! hi this is what changed in the mod's update.
		Game.Upgrades['Basic wallpaper assortment'].icon = [0,0,custImg];
		
		// WE MISSED THIS BITCH TOO hi here's the nov. 26 update
		Game.Upgrades['Background selector'].icon = [0,0,custImg];
		
	}
});
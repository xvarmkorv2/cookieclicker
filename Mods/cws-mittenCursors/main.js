Game.registerMod("cws-mittenCursors", {
	init: function() {

		// creating custImg variable
		var custImg = this.dir + "/mittens.png";
		
		// notification!
		//Game.Notify(`MANY icons changed!`, `Remember to bundle up!`, [0, 0,custImg],10,1);
		
		// changing icons time!
		// normal ugrades
		Game.Upgrades['Reinforced index finger'].icon = [0,0,custImg];
		Game.Upgrades['Carpal tunnel prevention cream'].icon = [1,0,custImg];
		Game.Upgrades['Ambidextrous'].icon = [2,0,custImg];
		Game.Upgrades['Thousand fingers'].icon = [3,0,custImg];
		Game.Upgrades['Million fingers'].icon = [4,0,custImg];
		Game.Upgrades['Billion fingers'].icon = [5,0,custImg];
		Game.Upgrades['Trillion fingers'].icon = [6,0,custImg];
		Game.Upgrades['Quadrillion fingers'].icon = [0,1,custImg];
		Game.Upgrades['Quintillion fingers'].icon = [1,1,custImg];
		Game.Upgrades['Sextillion fingers'].icon = [2,1,custImg];
		Game.Upgrades['Septillion fingers'].icon = [3,2,custImg];
		Game.Upgrades['Octillion fingers'].icon = [5,2,custImg];
		Game.Upgrades['Nonillion fingers'].icon = [6,2,custImg];
		Game.Upgrades['Decillion fingers'].icon = [1,3,custImg];
		Game.Upgrades['Fortune #001'].icon = [0,3,custImg];
		
		// heavenly upgrades
		Game.Upgrades['Starter kit'].icon = [4,0,custImg];
		Game.Upgrades['Five-finger discount'].icon = [4,3,custImg];
		Game.Upgrades['Aura gloves'].icon = [5,3,custImg];
		Game.Upgrades['Luminous gloves'].icon = [6,3,custImg];
		Game.Upgrades['Unshackled cursors'].icon = [2,3,custImg];
		
		// cheevos
		Game.Achievements['Click'].icon = [0,0,custImg];
		Game.Achievements['Double-click'].icon = [0,4,custImg];
		Game.Achievements['Mouse wheel'].icon = [1,4,custImg];
		Game.Achievements['Of Mice and Men'].icon = [1,0,custImg];
		Game.Achievements['The Digital'].icon = [2,0,custImg];
		Game.Achievements['Extreme polydactyly'].icon = [3,0,custImg];
		Game.Achievements['Dr. T'].icon = [4,0,custImg];
		Game.Achievements['Thumbs, phalanges, metacarpals'].icon = [5,0,custImg];
		Game.Achievements['With her finger and her thumb'].icon = [6,0,custImg];
		Game.Achievements['Gotta hand it to you'].icon = [0,1,custImg];
		Game.Achievements['The devil\'s workshop'].icon = [1,1,custImg];
		Game.Achievements['Click delegator'].icon = [4,1,custImg];
		Game.Achievements['Finger clickin\' good'].icon = [5,1,custImg];
		Game.Achievements['Click (starring Adam Sandler)'].icon = [6,1,custImg];
		Game.Achievements['Freaky jazz hands'].icon = [1,2,custImg];
		
		// dragon aura! this took unique code.
		Game.dragonAuras[2].pic = [0,2,custImg];
		
		// mod compatibility with elder sugarmuck
		if (Game.mods['cws oldSugarmuck']) {
			Game.Upgrades['Billion fingers'].icon = [2,4,custImg];
			Game.Achievements['Thumbs, phalanges, metacarpals'].icon = [2,4,custImg];
		}
	}
});
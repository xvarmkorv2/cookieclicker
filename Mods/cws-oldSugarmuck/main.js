Game.registerMod("cws-oldSugarmuck", {
	init: function() {

		// creating custImg variable
		var custImg = this.dir + "/oldMuck.png";
		
		// notification!
		Game.Notify(`Sugarmuck changed!`, `Be careful, it might be sticky...`, [10,0,custImg],10,1);
		
		// changing upgrades
		Game.Upgrades['Billion fingers'].icon = [0,0,custImg];
		Game.Upgrades['Eludium mouse'].icon = [11,0,custImg];
		Game.Upgrades['Aging agents'].icon = [1,0,custImg];
		Game.Upgrades['Pulsar sprinklers'].icon = [2,0,custImg];
		Game.Upgrades['Coreforge'].icon = [3,0,custImg];
		Game.Upgrades['Deep-bake process'].icon = [4,0,custImg];
		Game.Upgrades['Financial zen'].icon = [15,0,custImg];
		Game.Upgrades['Great Baker in the sky'].icon = [16,0,custImg];
		Game.Upgrades['Dark formulas'].icon = [17,0,custImg];
		Game.Upgrades['Generation ship'].icon = [5,0,custImg];
		Game.Upgrades['Origin crucible'].icon = [6,0,custImg];
		Game.Upgrades['Deity-sized portals'].icon = [7,0,custImg];
		Game.Upgrades['Far future enactment'].icon = [8,0,custImg];
		Game.Upgrades['Nanocosmics'].icon = [13,0,custImg];
		Game.Upgrades['Glow-in-the-dark'].icon = [14,0,custImg];
		Game.Upgrades['Leprechaun village'].icon = [19,0,custImg];
		Game.Upgrades['One particularly good-humored cow'].icon = [20,0,custImg];
		Game.Upgrades['A nice cup of coffee'].icon = [21,0,custImg];
		Game.Upgrades['Game design'].icon = [22,0,custImg];
		Game.Upgrades['Cosmic brainstorms'].icon = [23,0,custImg];
		Game.Upgrades['Kitten accountants'].icon = [18,0,custImg];
		Game.Upgrades['Unshackled sugarmuck'].icon = [10,0,custImg];
		
		//changing cheevos
		Game.Achievements['Clickageddon'].icon = [11,0,custImg];
		Game.Achievements['Thumbs, phalanges, metacarpals'].icon = [0,0,custImg];
		Game.Achievements['The old never bothered me anyway'].icon = [1,0,custImg];
		Game.Achievements['Gardener extraordinaire'].icon = [2,0,custImg];
		Game.Achievements['Tectonic ambassador'].icon = [3,0,custImg];
		Game.Achievements['Rise of the machines'].icon = [4,0,custImg];
		Game.Achievements['Acquire currency'].icon = [15,0,custImg];
		Game.Achievements['Zealotry'].icon = [16,0,custImg];
		Game.Achievements['The wizarding world'].icon = [17,0,custImg];
		Game.Achievements['Parsec-masher'].icon = [5,0,custImg];
		Game.Achievements['The work of a lifetime'].icon = [6,0,custImg];
		Game.Achievements['A place lost in time'].icon = [7,0,custImg];
		Game.Achievements['Heat death'].icon = [8,0,custImg];
		Game.Achievements['Microcosm'].icon = [13,0,custImg];
		Game.Achievements['Bright future'].icon = [14,0,custImg];
		Game.Achievements['Ever in your favor'].icon = [19,0,custImg];
		Game.Achievements['Last recurse'].icon = [20,0,custImg];
		Game.Achievements['Technical debt'].icon = [21,0,custImg];
		Game.Achievements['Spoils and plunder'].icon = [22,0,custImg];
		Game.Achievements['A trademarked portmanteau of "imagination" and "engineering"'].icon = [23,0,custImg];
		
		// compatibility with Consistent Upgrade & Building Achievement Icons!
		if (Game.mods['cws consistentUpgradeBuildingIcons']) {
			Game.Achievements['Ecumenopolis'].icon = [24,0,custImg];
			Game.Achievements['When there\'s nothing left to add'].icon = [9,0,custImg];
			Game.Achievements['Tricentennial and a half'].icon = [25,0,custImg];
		}
	}
});
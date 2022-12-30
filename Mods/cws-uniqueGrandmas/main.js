Game.registerMod("cws-uniqueGrandmas", {
	init: function() {

		// creating custImg variable
		var custImg = this.dir + "/coolGrannies.png";
		
		// notification!
		//Game.Notify(`Various icons changed!`, `Moist cookies.`, [10,9],10,1);
		
		// upgrade icons
		Game.Upgrades['Farmer grandmas'].icon = [0,0,custImg];
		Game.Upgrades['Miner grandmas'].icon = [1,0,custImg];
		Game.Upgrades['Worker grandmas'].icon = [2,0,custImg];
		Game.Upgrades['Banker grandmas'].icon = [3,0,custImg];
		Game.Upgrades['Priestess grandmas'].icon = [4,0,custImg]; 
		Game.Upgrades['Witch grandmas'].icon = [5,0,custImg];
		Game.Upgrades['Cosmic grandmas'].icon = [6,0,custImg];
		Game.Upgrades['Transmuted grandmas'].icon = [7,0,custImg]; 
		Game.Upgrades['Altered grandmas'].icon = [8,0,custImg]; 
		Game.Upgrades['Grandmas\' grandmas'].icon = [9,0,custImg];
		Game.Upgrades['Antigrandmas'].icon = [0,1,custImg];
		Game.Upgrades['Rainbow grandmas'].icon = [1,1,custImg];
		Game.Upgrades['Lucky grandmas'].icon = [2,1,custImg];
		Game.Upgrades['Metagrandmas'].icon = [3,1,custImg];
		Game.Upgrades['Binary grandmas'].icon = [4,1,custImg];
		Game.Upgrades['Alternate grandmas'].icon = [5,1,custImg];
		Game.Upgrades['Brainy grandmas'].icon = [6,1,custImg];
		
		// achievement icons
		Game.Achievements['Just wrong'].icon = [9,1,custImg];
		Game.Achievements['Elder'].icon = [6,0,custImg];
		Game.Achievements['Veteran'].icon = [3,1,custImg];
		Game.Achievements['The elder scrolls'].icon = [8,1,custImg];
		Game.Achievements['Baby it\'s old outside'].icon = [7,1,custImg];
			}
});
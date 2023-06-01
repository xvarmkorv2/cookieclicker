Game.registerMod("cws-goroManagers", {
	init: function() {

		// "why are you looking at the code for this mod? its insanely basic. theres way better mods to steal code from. but have fun i guess" ~maker of better butter biscuit mod
		// BECAUSE YOU WERE THE SIMPLEST ONE THAT CAME TO MIND DUMB-DUMB
		
		var goro = this.dir + "/goro.png";
		Game.Notify(`Attention all Nyamco Employees!`, `I am now baking home-made cookies and it\'s a perfectly reasonable quantity of them, hahaHAHAhahahaha!~`, [0, 0, goro], 10, 1);
		Game.Upgrades['Kitten wages'].icon = [0, 0, goro];
	}
});
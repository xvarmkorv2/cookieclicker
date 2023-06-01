Game.registerMod("cws-grandmonocles", {
	init: function() {

		// creating custImg variable
		// this one's a little silly for just mod compatibility huh
		var custImg = this.dir + "/iconGrandmonocle.png";
		
		// notification!
		Game.Notify(`Grandma eyevision improved!`, `Filing tax returns and baking at the same time has never been easier to see... Or snazzier!`, [0, 0, custImg],10,1);
		
		// changing the grandma proper
		Game.Loader.Replace('bankGrandma.png',this.dir+'/bankGrandmonocle.png');
		
		// for mod compatibility, changing icons!
		if (Game.mods['cws uniqueGrandmas']) {
			Game.Upgrades['Banker grandmas'].icon = [0, 0, custImg];
		}
	}
});
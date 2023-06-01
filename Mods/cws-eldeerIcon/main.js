Game.registerMod("cws-eldeerIcon", {
	init: function() {

		// creating custImg variable
		var custImg = this.dir + "/eldeer.png";
		
		// notification!
		Game.Notify(`Achievement icon changed!`, `Party like it's 2015!`, [0, 0, custImg],10,1);
		
		// changing icons
		Game.Achievements['Eldeer'].icon = [0, 0, custImg];
	}
});
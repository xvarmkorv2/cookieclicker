Game.registerMod("cws-oldMadeline", {
	init: function() {

		// creating custImg variable
		var custImg = this.dir + "/madeline.png";
		
		// notification!
		Game.Notify(`Remembered Madeline!`, `Never forget Dashnet Forums!`, [0, 0, custImg],10,1);
		
		// changing icons
		Game.Achievements['Olden days'].icon = [0,0,custImg];
	}
});
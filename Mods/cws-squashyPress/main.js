Game.registerMod("cws-squashyPress", {
	init: function() {

		// creating custImg variable
		var custImg = this.dir + "/squashyPress.png";
		
		// notification!
		//Game.Notify(`Achievement icon changed!`, `News : S.O.S!!`, [0, 0, custImg],10,1);
		
		// changing icons
		Game.Achievements['Stifling the press'].icon = [0, 0, custImg];
	}
});
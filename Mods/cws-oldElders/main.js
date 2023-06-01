Game.registerMod("cws-oldElders", {
	init: function() {

		// realistically this is fairly simple
		// creating shorthand variable "custImg" to refer to this
		var custImg = this.dir + "/elderElder.png";
		
		// just letting you know!
		Game.Notify(`Elders Eldered.`, `We rise... In style!`, [0, 0, custImg],10,1);
		
		// changing various icons
		Game.Upgrades['Elder Pact'].icon = [0, 0, custImg];
		Game.Upgrades['Elder Covenant'].icon = [0, 0, custImg];
		Game.Upgrades['Revoke Elder Covenant'].icon = [0, 0, custImg];
		Game.Achievements['Elder nap'].icon = [0, 0, custImg];
		Game.Achievements['Elder slumber'].icon = [0, 0, custImg];
		Game.Achievements['Elder calm'].icon = [0, 0, custImg];
	}
});
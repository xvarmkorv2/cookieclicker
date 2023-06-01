Game.registerMod("cws-tripleIcons", {
	init: function() {

		// this one changes things in bulk! it's also a bit more complex due to the whole "compatible with another mod changing things" thing.
		// creating shorthand variable "custImg" to refer to this
		var custImg = this.dir + "/tripleCheevos.png";
		
		// and a notification
		Game.Notify(`Various achievement icons changed!`, `Where's that tri-wing when you need it...`, [13,0],10,1);
		
		// rebirth achievements
		Game.Achievements['Resurrection'].icon = [0,0,custImg];
		Game.Achievements['Reincarnation'].icon = [1,0,custImg];
		
		// wrinkler ones. these have absurd names we realized now
		Game.Achievements['Wrinklesquisher'].icon = [0,1,custImg];
		Game.Achievements['Moistburster'].icon = [1,1,custImg];
		
		// deer ones
		Game.Achievements['Sleigh of hand'].icon = [0,2,custImg];
		Game.Achievements['Reindeer sleigher'].icon = [1,2,custImg];
		
		// and now, elder ones. this one's tough due to mod compatibility!
		// and, fun fact, this revealed a strange quirk of the modloader to us:
		// the game allows mod IDs to include dashes, but it silently changes them to spaces
		// so to cross-reference a mod, you NEED to change dashes to spaces as well,
		// which we don't... think is intended. talk about weird.
		// also yes an "if else" is probably amateurish. but it works.
		Game.Achievements['Elder slumber'].icon = [0,3,custImg];
		Game.Achievements['Elder calm'].icon = [1,3,custImg];
		if (Game.mods['cws oldElders']) {
			Game.Achievements['Elder slumber'].icon = [0,4,custImg];
			Game.Achievements['Elder calm'].icon = [1,4,custImg];
		}
		
	}
});
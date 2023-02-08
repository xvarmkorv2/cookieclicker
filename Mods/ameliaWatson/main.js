var AmeliaWatson = {
	firstCheck: true,
	init: function () {
		let watsonicons = this.dir + "/watsoniconfull.png";
		let modDir = this.dir;

		/* btw i am not fluent in JS at all so i kinda have no [$!$!]ing clue what im doing and its a miracle everything is working */

		Game.Notify(`WARNING: A gremlin has breached the continuum!`, `The timeline has been distorted!`, [21, 0, watsonicons]);

		Game.Loader.Replace('timemachineBackground.png', this.dir + "/kroniiBG.png");
		Game.Loader.Replace('timemachine.png', this.dir + "/smolwatson.png");

		const watson = document.createElement("style");
		watson.innerHTML = `
		.ameliaWatson {
			background: url('${this.dir}/watson.png') !important;
			background-position: 0px 0px !important;
		}
		.ameliaWatsonOff {
			background: url('${this.dir}/watson.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(watson);
		Game.registerHook('check', () => { this.check() });
		Game.customBuildStore.push(() => {
			/* haha i only know rudimentary html and css so thank you obama prism */
			document.getElementById("productIcon11").classList.add("ameliaWatson");
			document.getElementById("productIconOff11").classList.add("ameliaWatsonOff");
			document.getElementById("mutedProduct11").classList.add("ameliaWatson");
		});

		Game.customBuildings['Time machine'].rebuild.push((obj) => {
			document.getElementById("productIcon11").classList.add("ameliaWatson");
			document.getElementById("productIconOff11").classList.add("ameliaWatsonOff");
			document.getElementById("mutedProduct11").classList.add("ameliaWatson");
		});

		Game.customBuildings['Time machine'].tooltip.push((obj, ret) => {
			if (obj.locked) return ret;
			else {
				var oldicon = [obj.iconColumn, 0];
				var newicon = [0, 0, this.dir + '/watsonicon.png'];
				return ret.replace(writeIcon(oldicon), writeIcon(newicon));
			};
		});
		this.check()
		Game.storeToRefresh=1
	},
	check: function () {
		let watsonicons = this.dir + "/watsoniconfull.png";
		let shouldRebuild = false
		if (this.firstCheck) shouldRebuild = true
		this.firstCheck = false
		
		if (!shouldRebuild) {
			if (Game.Objects['Time machine'].pic.length != 3) shouldRebuild = true
			if (!shouldRebuild && Game.Objects['Time machine'].pic[2] != watsonicons) shouldRebuild = true
		} 

		if (!shouldRebuild) {
			const upgrades = ['Flux capacitors', 'Time paradox resolver', 'Quantum conundrum', 'Causality enforcer',
				'Yestermorrow comparators', 'Far future enactment', 'Great loop hypothesis', 'Cookietopian moments of maybe',
				'Second seconds', 'Additional clock hands', 'Nostalgia', 'Split seconds', 'Patience abolished',
				'Relativistic parsec-skipping', 'Primeval glow', 'Fortune #012', 'D&eacute;j&agrave; vu']

			for (var i in upgrades) {
				if (Game.Upgrades[upgrades[i]].icon.length != 3) shouldRebuild = true; break 
				if (Game.Upgrades[upgrades[i]].icon[2] != watsonicons) shouldRebuild = true; break 
			}
		}

		if (!shouldRebuild) {
			const achievements = ['Time warp', 'Alternate timeline', 'Rewriting history', 'Time duke',
				'Forever and ever', 'Heat death', 'cookie clicker forever and forever a hundred years cookie clicker, all day long forever, forever a hundred times, over and over cookie clicker adventures dot com',
				'Way back then', 'Invited to yesterday\'s party', 'Groundhog day', 'The years start coming',
				'Caveman to cosmos', 'Back already?', 'Spacetime jigamaroo', 'Be kind, rewind', 'The long now']

			for (var i in achievements) {
				if (Game.Achievements[achievements[i]].icon.length != 3) shouldRebuild = true; break 
				if (Game.Achievements[achievements[i]].icon[2] != watsonicons) shouldRebuild = true; break 
			}
		}

		if (!shouldRebuild) {
			if (Game.dragonAuras[13].pic[2] != watsonicons) shouldRebuild = true
		}

		if (shouldRebuild) {
			Game.Objects['Time machine'].displayName = '<span style="font-size:70%;letter-spacing:-1px;position:relative;bottom:4px;">Amelia Watson</span>';//shrink
			Game.Objects['Time machine'].pic = [0, 0, watsonicons];
			// check out the wiki for upgrade lists or the game's main.js file! thanks orteil! i love ctrl-f !!

			/* UPGRADES */

			// Tier
			Game.Upgrades['Flux capacitors'].icon = [0, 0, watsonicons];
			Game.Upgrades['Time paradox resolver'].icon = [1, 0, watsonicons];
			Game.Upgrades['Quantum conundrum'].icon = [2, 0, watsonicons];
			Game.Upgrades['Causality enforcer'].icon = [3, 0, watsonicons];
			Game.Upgrades['Yestermorrow comparators'].icon = [4, 0, watsonicons];
			Game.Upgrades['Far future enactment'].icon = [5, 0, watsonicons];
			Game.Upgrades['Great loop hypothesis'].icon = [6, 0, watsonicons];
			Game.Upgrades['Cookietopian moments of maybe'].icon = [7, 0, watsonicons];
			Game.Upgrades['Second seconds'].icon = [8, 0, watsonicons];
			Game.Upgrades['Additional clock hands'].icon = [9, 0, watsonicons];
			Game.Upgrades['Nostalgia'].icon = [18, 0, watsonicons];
			Game.Upgrades['Split seconds'].icon = [20, 0, watsonicons];
			Game.Upgrades['Patience abolished'].icon = [21, 0, watsonicons];

			// Synergy
			Game.Upgrades['Relativistic parsec-skipping'].icon = [10, 0, watsonicons];
			Game.Upgrades['Primeval glow'].icon = [19, 0, watsonicons];

			// Fortune
			Game.Upgrades['Fortune #012'].icon = [22, 0, watsonicons];

			/* ACHIEVOS */

			// Tier
			Game.Achievements['Time warp'].icon = [0, 0, watsonicons];
			Game.Achievements['Alternate timeline'].icon = [1, 0, watsonicons];
			Game.Achievements['Rewriting history'].icon = [2, 0, watsonicons];
			Game.Achievements['Time duke'].icon = [3, 0, watsonicons];
			Game.Achievements['Forever and ever'].icon = [4, 0, watsonicons];
			Game.Achievements['Heat death'].icon = [5, 0, watsonicons];
			Game.Achievements['cookie clicker forever and forever a hundred years cookie clicker, all day long forever, forever a hundred times, over and over cookie clicker adventures dot com'].icon = [6, 0, watsonicons];
			Game.Achievements['Way back then'].icon = [7, 0, watsonicons];
			Game.Achievements['Invited to yesterday\'s party'].icon = [8, 0, watsonicons];
			Game.Achievements['Groundhog day'].icon = [9, 0, watsonicons];
			Game.Achievements['The years start coming'].icon = [18, 0, watsonicons];
			Game.Achievements['Caveman to cosmos'].icon = [20, 0, watsonicons];
			Game.Achievements['Back already?'].icon = [21, 0, watsonicons];

			// Statue
			Game.Achievements['Spacetime jigamaroo'].icon = [12, 0, watsonicons];
			Game.Achievements['Be kind, rewind'].icon = [13, 0, watsonicons];
			Game.Achievements['D&eacute;j&agrave; vu'].icon = [14, 0, watsonicons];

			// Level 10 Sugar Lump
			Game.Achievements['The long now'].icon = [16, 0, watsonicons];


			/* DRAGON (DEEZ NUTS) im literally bull[$!$!]ing my way thru here */

			Game.dragonAuras[13].pic = [15, 0, watsonicons];
			//IT WORKS LETS GOOOOOOO I AM AN ARRAY GOOOOOD
			Game.upgradesToRebuild = 1
		}
	}
}
AmeliaWatson.launch = () => { Game.registerMod("despacito AmeliaWatson", AmeliaWatson); }
if (CCSE && CCSE.isLoaded) {
	AmeliaWatson.launch()
}
else {
	if (!CCSE) var CCSE = {};
	if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
	CCSE.postLoadHooks.push(AmeliaWatson.launch);
}
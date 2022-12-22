Game.registerMod("despacito AmeliaWatson", {
	dir: 'Mods/ameliaWatson',
	check: function () {
		Game.Objects['Time machine'].displayName = "Amelia Watson";
		Game.Objects['Time machine'].pic = [0, 0, watsonicons];

		/* haha i only know rudimentary html and css so thank you obama prism */
		document.getElementById("productIcon11").classList.add("ameliaWatson");
		document.getElementById("productIconOff11").classList.add("ameliaWatsonOff");
		document.getElementById("mutedProduct11").classList.add("ameliaWatson");

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
	},
	init: function () {
		let watsonicons = this.dir + "/watsoniconfull.png";
		let modDir = this.dir;

		/* btw i am not fluent in JS at all so i kinda have no [$!$!]ing clue what im doing and its a miracle everything is working */

		Game.Notify(`WARNING: A gremlin has breached the continuum!`, `The timeline has been distorted!`, [21, 0, watsonicons]);

		Game.Loader.Replace('timemachineBackground.png', this.dir + "/kroniiBG.png");
		Game.Loader.Replace('timemachine.png', this.dir + "/smolwatson.png");

		Game.registerHook('check', () => this.check);
		const watson = document.createElement("style");
		watson.innerHTML = `
			ameliaWatson {
			background: url('${this.dir}/watson.png') !important;
			background-position: 0px 0px !important;
		}
		.ameliaWatsonOff {
			background: url('${this.dir}/watson.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(watson);

		setTimeout(() => {
			this.check()
			/* Edits to the function not written by me, t'was by AgentZero ;) [im stupid lol] */
			Game.Objects['Time machine'].tooltip = function () {
				var backgroundImgUnlocked = true;
				var me = Game.Objects['Time machine'];
				var ariaText = '';
				var desc = me.desc;
				var name = me.dname;
				if (Game.season == 'fools') {
					if (!Game.foolObjects[me.name]) {
						name = Game.foolObjects['Unknown'].name;
						desc = Game.foolObjects['Unknown'].desc;
					}
					else {
						name = Game.foolObjects[me.name].name;
						desc = Game.foolObjects[me.name].desc;
					}
				}

				if (me.locked) {
					name = '???';
					desc = '';
					backgroundImgUnlocked = false;
				}
				//if (l('rowInfo'+me.id) && Game.drawT%10==0) l('rowInfoContent'+me.id).innerHTML='&bull; '+me.amount+' '+(me.amount==1?me.single:me.plural)+'<br>&bull; producing '+Beautify(me.storedTotalCps,1)+' '+(me.storedTotalCps==1?'cookie':'cookies')+' per second<br>&bull; total : '+Beautify(me.totalCookies)+' '+(Math.floor(me.totalCookies)==1?'cookie':'cookies')+' '+me.actionName;

				var canBuy = false;
				var price = me.bulkPrice;
				if ((Game.buyMode == 1 && Game.cookies >= price) || (Game.buyMode == -1 && me.amount > 0)) canBuy = true;

				var synergiesStr = '';
				//note : might not be entirely accurate, math may need checking
				if (me.amount > 0) {
					var synergiesWith = {};
					var synergyBoost = 0;

					for (var i in me.synergies) {
						var it = me.synergies[i];
						if (Game.Has(it.name)) {
							var weight = 0.05;
							var other = it.buildingTie1;
							if (me == it.buildingTie1) { weight = 0.001; other = it.buildingTie2; }
							var boost = (other.storedTotalCps * Game.globalCpsMult) - (other.storedTotalCps * Game.globalCpsMult) / (1 + me.amount * weight);
							synergyBoost += boost;
							if (!synergiesWith[other.plural]) synergiesWith[other.plural] = 0;
							synergiesWith[other.plural] += me.amount * weight;
						}
					}
					if (synergyBoost > 0) {
						for (var i in synergiesWith) {
							if (synergiesStr != '') synergiesStr += ', ';
							synergiesStr += i + ' +' + Beautify(synergiesWith[i] * 100, 1) + '%';
						}
						synergiesStr = loc("...also boosting some other buildings:") + ' ' + synergiesStr + ' - ' + loc("all combined, these boosts account for <b>%1</b> per second (<b>%2%</b> of total CpS)", [loc("%1 cookie", LBeautify(synergyBoost, 1)), Beautify((synergyBoost / Game.cookiesPs) * 100, 1)]);
					}
				}

				if (Game.prefs.screenreader) {
					if (me.locked) ariaText = 'This building is not yet unlocked. ';
					else ariaText = name + '. ';
					if (!me.locked) ariaText += 'You own ' + me.amount + '. ';
					ariaText += (canBuy ? 'Can buy 1 for' : 'Cannot afford the') + ' ' + Beautify(Math.round(price)) + ' cookies. ';
					if (!me.locked && me.totalCookies > 0) {
						ariaText += 'Each ' + me.single + ' produces ' + Beautify((me.storedTotalCps / me.amount) * Game.globalCpsMult, 1) + ' cookies per second. ';
						ariaText += Beautify(me.totalCookies) + ' cookies ' + me.actionName + ' so far. ';
					}
					if (!me.locked) ariaText += desc;

					var ariaLabel = l('ariaReader-product-' + (me.id));
					if (ariaLabel) ariaLabel.innerHTML = ariaText.replace(/(<([^>]+)>)/gi, ' ');
				}
				var icon = backgroundImgUnlocked ? 'background-image:url(\'' + 'Mods/ameliaWatson' + '/watsonicon.png\')' : writeIcon([0, 7]);

				return '<div style="min-width:350px;padding:8px;"><div class="icon" style="float:left;margin-left:-8px;margin-top:-8px;' + icon + ';"></div><div style="float:right;text-align:right;"><span class="price' + (canBuy ? '' : ' disabled') + '">' + Beautify(Math.round(price)) + '</span>' + Game.costDetails(price) + '</div><div class="name">' + name + '</div>' + '<small><div class="tag">' + loc("owned: %1", me.amount) + '</div>' + (me.free > 0 ? '<div class="tag">' + loc("free: %1!", me.free) + '</div>' : '') + '</small>' +
					'<div class="line"></div><div class="description">' + desc + '</div>' +
					(me.totalCookies > 0 ? (
						'<div class="line"></div><div class="data">' +
						(me.amount > 0 ? '&bull; ' + loc("each %1 produces <b>%2</b> per second", [me.single, loc("%1 cookie", LBeautify((me.storedTotalCps / me.amount) * Game.globalCpsMult, 1))]) + '<br>' : '') +
						'&bull; ' + loc("%1 producing <b>%2</b> per second", [loc("%1 " + me.bsingle, LBeautify(me.amount)), loc("%1 cookie", LBeautify(me.storedTotalCps * Game.globalCpsMult, 1))]) + ' (' + loc("<b>%1%</b> of total CpS", Beautify(Game.cookiesPs > 0 ? ((me.amount > 0 ? ((me.storedTotalCps * Game.globalCpsMult) / Game.cookiesPs) : 0) * 100) : 0, 1)) + ')<br>' +
						(synergiesStr ? ('&bull; ' + synergiesStr + '<br>') : '') +
						(EN ? '&bull; <b>' + Beautify(me.totalCookies) + '</b> ' + (Math.floor(me.totalCookies) == 1 ? 'cookie' : 'cookies') + ' ' + me.actionName + ' so far</div>' : '&bull; ' + loc("<b>%1</b> produced so far", loc("%1 cookie", LBeautify(me.totalCookies))) + '</div>')
					) : '') +
					'</div>';
			};
		}, 1000)

	}
});
if (CEModLib === undefined) var CEModLib = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/' + (0 ? 'Beta/' : '') + 'CCSE.js');
CEModLib.name = 'CEModLib';
CEModLib.version = '1';
CEModLib.GameVersion = '2.053';


CEModLib.launch = function(){
	CEModLib.init = function(){
		//TODO: FIGURE OUT WHY THE HELL THIS DOESN'T ALWAYS LOAD / INIT...
		//perhaps CCSE's fault? (Likely mine)
		//^ we probably need to use CCSE's init shit... so I'd have to set all of that up, and then do it for Heavenly Archives / GabeDNFPU.
		//man
		//function CE_Init() {
		console.log("OH HEY THE MOD ACTUALLY LOADED... I think...")
		CE = this; //not using a var or let makes this GLOBAL (very good)

		const cookieMonsterDetected = Game.mods && Game.mods.cookieMonsterFramework; //fuckin hell CookieMonster;

		//CE.TestFunc=function(){console.log("AAA")}
		
		CE.eternalSeed = Game.seed;

		Game.registerHook('reset',(hard)=>{
			if (hard) {
				CE.eternalSeed = Game.seed;
			}
		})

		CE.Nums = {
			//exists as I was semi-tired of manually typing out numbers.
			//will have to extend it to be more than just decillion though...
			Thousand: 1e3,
			Million: 1e6,
			Billion: 1e9,
			Trillion: 1e12,
			Quadrillion: 1e15,
			Quintillion: 1e18,
			Sextillion: 1e21,
			Sepillion: 1e24,
			Octillion: 1e27,
			Nonillion: 1e30,
			Decillion: 1e33,
		};
		CE.N = CE.Nums

		CE.GetData = function(type, name) {
			//examples:
			//'Upgrades','Legacy'
			//'Objects','Cursor'
			console.log("//////////////////////////////");
			var data = Game[type][name];
			if (!data) {
				console.warn(`No ${type} found with name: ${name}`);
				return;
			}
			for (let key in data) {
				console.log(`${key}: `, data[key]);
			}
		};
		
		CE.sp = {
			NormalDummy: 0,
			HeavenlyDummy: 0,
			TagNum: 0,
		}

		CE.Dummy = function(type){
			//Creates a dummy upgrade.
			//for heavenly/prestige, useful for marking where an upgrade should be.
			//for normal or "" (or unknown), just kinda exists and is created, can be useful for something!
			if (type == "heavenly" || type == "prestige") {
				CCSE.NewHeavenlyUpgrade(`Dummy Upgrade ${CE.sp.HeavenlyDummy + 1}`,"This is a dummy heavenly upgrade<q>Now this is ADVANCED dummy-ing...<br>is dummying even a real word?</q>",0,[17,5],0,0,["Legacy"])
				Game.last.dummy = 1;
				CE.sp.HeavenlyDummy += 1;
				Game.BuildAscendTree();
				if (Game.DebuggingPrestige) {
					setTimeout(function(){
					Game.EditAscend();
					setTimeout(function(){Game.EditAscend()},1000)
					},100)
				}
			}
			if (type == "normal" || type == "" || !type) {
				CCSE.NewUpgrade(`Dummy Upgrade ${CE.sp.NormalDummy + 1}`,"This is a dummy upgrade<q>Pay no attention to what this is doing here",0,[17,5])
				Game.last.dummy = 1;
				CE.sp.NormalDummy += 1;
				Game.last.unlock();
			}
		}

		CE.LogDummy = function(num,dataname){
			//dataname is akin to the one used by CE.GetData
			console.log(Game.Upgrades["Dummy Upgrade "+num][dataname]); //example being CE.LogDummy(1,'posX')
		}

		CE.flags = {
			isBroken: (item) => !!item?.isBroken,
			isModded: (item) => !!item?.modOrigin
		};
		//the above functions as the below.
		//but more, more things exist.
		//you can always check if(Game.mods["ModID"])
		//but a bit more checks just in case never hurt (and UpMostInfinity is shoved in here)
	
		// CE.isBrokenCheck = function(item) {
		// 	//item can be a building, upgrade, achievement, really anything, as long as it is tagged appropriately
		// 	return !!(item && item.isBroken === true);
		// 	//this is so we can *slowly* have more and more of a "Universal Modding Language",
		// 	//mod tags something as broken, other mods should check if it is broken.
		// 	//might also have to inject code into vanilla functions to have these checks as well.
		// };

		CE.precision = function(val, degree) {
			//Forcefully rounds `val` down to the nearest `degree`.
			//Example: CE.precision(1.01999999, 0.01) => 1.01.
			//Meant to remove floating-point noise.
			if (degree === 0) return val;

			const factor = 1 / degree;
			const precise = Math.round(val * factor) / factor;

			// if (val == precise) {
			// 	console.warn("Cannot adjust:", val);
			// }

			return precise;
		}



		CE.tags = {}
		CE.NewTag = function(tagname,hexidecimalcolor,labelprinted,upgrades,additional,andoror) {
			/*
			CE.NewTag(
			tagname,            // String - Visible and internal tag name
			hexidecimalColor,   // String - Hex color code
			labelPrint,         // Bool - If the label should only show up if you have the Label printer upgrade
			upgrades,           // Array - Upgrade names to apply the tag to
			additional,         // Function - Optional additional condition. (default always returns true)
			andOrOr             // String - "or" or "||" to make it an or statement (used for if both the upgrade and additional condition must pass true (and), or if only one of the two must pass true (or))
								// default is and
			)
			*/
			if (CE.tags[`${tagname}`]) {
				console.warn(`Tag ${tagname} already exists!`)
				return;
			}
			labelprinted = labelprinted ?? false;
			additional = additional ?? function(me){return true;}

			var newtag = {
				name: tagname,
				color: hexidecimalcolor,
				labelprinted: labelprinted,
				upgrades: upgrades,
				additionalCheck: additional,
				upgradeCheck: function(upgrades,current){
					if (upgrades.includes(current.name)) {
						return true;
					} else {
						return false;
					}
				},
			}
			
			CE.tags[`${tagname}`] = newtag

			var printto = `if (me.isVaulted()) tags.push(loc("Vaulted"),'#4e7566');`
			if (labelprinted) printto = `if (me.name=='Label printer' || me.name=='This upgrade') tags.push(loc("Tier:")+' '+loc("[Tier]Self-referential"),'#ff00ea');` 
			
			var andor = `&&`
			if (andoror === "or" || andoror === "||") andor = `||`


			CCSE.ReplaceCodeIntoFunction('Game.crateTooltip', printto, `
				/* New tag created. Tag '${tagname}' */
					if (CE.tags["${tagname}"].upgradeCheck(CE.tags["${tagname}"].upgrades,me) ${andor} CE.tags["${tagname}"].additionalCheck(me)) tags.push(loc("${tagname}"),"${hexidecimalcolor}");`, 1);
			
			
		}

		
		CE.ListTags = function() {
			for (let tag in CE.tags) {
				let tagData = CE.tags[tag];
				let matched = Game.UpgradesById.filter(u => tagData.upgradeCheck(tagData.upgrades, u) && tagData.additionalCheck(u));
				console.log(`Tag: ${tag} (${matched.length} upgrades)`);
			}
		};


		CE.NewTag("Dummy","#33ff00",false,[],function(me){if (me.dummy) {if (me.dummy == 1) {return true;}} return false;},"or")

		CE.SummonShimmer = function(type,nocount = 0, obj, amount = 1,safety = 1) {
			//obj would be: {type:'cookie storm drop'}
			//or {noWrath:true}
			//specifics you'd have to look at Game.shimmer to figure out.
			//
			
			if (safety != 1 || safety != true) {
				console.warn("Safety is off!")
			}
			var a = 0;
			while (a < amount) {
			if (type == "golden") {
				let newShimmer = new Game.shimmer('golden');
				newShimmer.spawnLead = 1;
			}
			if (type == "reindeer") {
				let newShimmer = new Game.shimmer('reindeer');
				newShimmer.spawnLead = 1;
			}
			if (a > 1000 && safety) {
				console.warn("probably don't do that...")
				break;
			}
			a++
			}
		}

		CE.GroupMoveUpgrade = function(upgradeFrom,upgradeTo,posXmod,posYmod) {
			const start = Game.Upgrades[upgradeFrom];
			const stop = Game.Upgrades[upgradeTo];

			if (!start || !stop) {
				console.warn(`[CE.GroupMoveUpgrade] Invalid upgrade name(s): '${upgradeFrom}' or '${upgradeTo}'`);
				return;
			}

			let visited = {};
			let stack = [start];

			while (stack.length > 0) {
				let current = stack.pop();

				if (!current || visited[current.name]) continue;
				visited[current.name] = true;

				if (current.name === upgradeTo) continue;

				current.posX += posXmod;
				current.posY += posYmod;

				if (current.parents && current.parents.length > 0) {
					for (let parent of current.parents) {
						if (parent && !visited[parent.name]) {
							stack.push(parent);
						}
					}
				}
			}

			console.log(`[CE.GroupMoveUpgrade] Shifted ancestry chain from '${upgradeFrom}' to '${upgradeTo}' by [${posXmod}, ${posYmod}]`);
			Game.BuildAscendTree();
		};

		CE.MoveUpgrade = function(upgrade,posXmod,posYmod) {
			Game.Upgrades[upgrade].posX += posXmod
			Game.Upgrades[upgrade].posY += posYmod
			Game.BuildAscendTree();
		}

		CE.SetPos = function(upgrade,posX,posY) {
			Game.Upgrades[upgrade].posX = posX
			Game.Upgrades[upgrade].posY = posY
		}

		CE.Debug = function(){
			Game.OpenSesame();
			Game.Upgrades["Neuromancy"].bought = 1;
			Game.BuildAscendTree();
			Game.Notify("Debug mode!","Just a tad bit quicker...<q>though not by much</q>",[10,6]);
		}

		CE.ReParent = function(upgrade,parents){
			upgrade.parents = parents;
			if(parents.length == 0) upgrade.parents = ['Legacy'];
			upgrade.parents = upgrade.parents || [-1];
			for(var ii in upgrade.parents){
				if(upgrade.parents[ii] != -1) upgrade.parents[ii] = Game.Upgrades[upgrade.parents[ii]];
			}

			//^ sorry for just taking CCSE's code for taking a table of strings and turning it into Game.Upgrades...
			//it just efficient :(
		}

		CE.NextGameTierID = 16;
		CE.Tiers = {};
		CE.NewUpgradeTier = function(name,unlock,achievUnlock,iconRow,hexidecimalcolor,price,req,special,ID) {
			//Note: no need to make a new tag, Cookie Clicker handles that.
			//Name is the name of the tier.
			//Unlock is how many of a building you need to get the upgrade tier of said tier.
			//achievUnlock is the same but for the achievement.
			//iconRow is for if you use the normal icons.png, just use the icon within CE.NewTieredUpgrade for custom ones (sorry!)
			//hexidecimalcolor is the same as in CE.NewTag
			//price is the price of the upgrade (combined with the building's price, making it bit more dynamic)
			//req is the upgrade required for it, example being fortunes and synergies.
			//special is... either it exists and is one, or does not...
			//ID is OPTIONAL (for organization I guess... such as the synergies or fortunes, having their "id" be "synergy2" for example)
			//I genuinely don't know what special does, but if it helps fortune and the synergies have special set to 1, with the flavors not having it at all.

			if (ID != undefined) {
					if (Game.Tiers[ID])
					{
						console.log("Tier "+name+" already exists with id "+ID+"!")
						return Game.Tiers[ID]
					}
			} else {
				for (let id in Game.Tiers) {
					if (Game.Tiers[id].name === name)
					{
						console.log("Tier "+name+" already exists with id "+id+"!")
						return Game.Tiers[id]
					};
				}
			}
			
			if (ID != undefined) {
				Game.Tiers[ID] = {
					name:name,	
					unlock:unlock,
					achievUnlock:achievUnlock,
					iconRow:iconRow,
					color:hexidecimalcolor,
					price:price,
				};
				if (special) {
					Game.Tiers[ID].special = special
				}
				if (req) {
					Game.Tiers[ID].req = req
				}
				console.log("New Tier Created: "+Game.Tiers[ID].name);
				console.log("Tier with ID: "+ID+" (use this for new tiered upgrades than the name)")
				console.log("(or use CE.Tiers[\""+name+"\"] for ease of use)")
				CE.Tiers[name] = ID
				return Game.Tiers[ID];
			} else {
				while (Game.Tiers[CE.NextGameTierID]) {
					CE.NextGameTierID += 1;
				} //ensure we do not overwrite.
				Game.Tiers[CE.NextGameTierID] = {
					name:name,
					unlock:unlock,
					achievUnlock:achievUnlock,
					iconRow:iconRow,
					color:hexidecimalcolor,
					price:price,
				};
				if (special) {
					Game.Tiers[CE.NextGameTierID].special = special
				}
				if (req) {
					Game.Tiers[CE.NextGameTierID].req = req
				}
				console.log("New Tier Created: "+Game.Tiers[CE.NextGameTierID].name);
				console.log("Tier with ID: "+CE.NextGameTierID+" (use this for new tiered upgrades than the name)")
				console.log("(or use CE.Tiers[\""+name+"\"] for ease of use)")
				CE.Tiers[name] = CE.NextGameTierID
				CE.NextGameTierID += 1;
				return Game.Tiers[CE.NextGameTierID - 1];
			}
		}

		CE.NewTieredUpgrade = function(name,desc,building,tier,icon) {
			//icon is if you want a forceful custom icon.
			//the rest is normal, name, desc, building is a string of the Game.Objects[Building], and tier is tier name.
			//really simplistic here.
			//also CCSE is making any NewTier forcefully me.CCSE, it's odd... but who cares (it actually helps)

			var me = new Game.TieredUpgrade(name,desc,building,tier,synergy=false,building2=false);
			
			//the replace name, config, and some other stuff is handled by CCSE already,
			//due to it making NewTier have CCSE.NewUpgrade automatically.
			//all we need to do is just
			if (icon) {me.icon = icon};

			me.descFunc = function(){
				var upgrade = Game.Upgrades[this.buildingTie1.unshackleUpgrade]
				return ((Game.ascensionMode!=1 && Game.Has(this.buildingTie1.unshackleUpgrade) && Game.Has(Game.Tiers[this.tier].unshackleUpgrade))?('<div style="font-size:80%;text-align:center;">'+loc("Unshackled! <b>+%1%</b> extra production.",upgrade.unshacklepow)+'</div><div class="line"></div>'):'')+this.ddesc;
			};

			if(typeof LocalizeUpgradesAndAchievs !== 'undefined') LocalizeUpgradesAndAchievs();

			return me;
			//I know it's three lines of code. It's *slightly faster*.
		}

		/*
			if(!CCSE.customNewGod) CCSE.customNewGod = [];
			CCSE.NewGod = function(key, god){
				var M = Game.Objects['Temple'].minigame;
				
				M.gods[key] = god;
				
				M.godsById = [];
				var n = 0;
				for(var i in M.gods){
					M.gods[i].id = n;
					M.godsById[n] = M.gods[i];
					n++;
				}
				
				for(var i in CCSE.customNewGod) CCSE.customNewGod[i](key, god);
				CCSE.RedrawGods();
			}
		*/

		CE.NewGod = function(id,name,icon,descBefore = '',DiamondSlotDesc,RubySlotDesc,JadeSlotDesc,descAfter = '',quote) {
			var object = {
				name: name,
				icon: icon,
				descBefore: descBefore,
				desc1:DiamondSlotDesc,
				desc2:RubySlotDesc,
				desc3:JadeSlotDesc,
				descAfter:descAfter,
				quote:quote
			}
			
			CCSE.NewGod(id,object);
		}

		
		CE.slotNames = {
			"diamond":0.001,
			"ruby":1.001,
			"jade":2.001,
		}
		CE.addSlot = function(name){ //note, given what I have done, you can only have around 500 or 499 duplicates of a given slot (if you wanted 1K Jade Slots... I don't know what to say)
			//returns a decimal.
			//0.001 and up to 0.499 is diamond.
			//1.001 and up to 1.499 is ruby.
			//2.001 and up to 2.499 is jade.
			if (CE.slotNames[name.toLowerCase()] !== undefined) {
				if (Game.Objects["Temple"].minigameLoaded) {
					Game.Objects["Temple"].minigame.slot[CE.slotNames[name.toLowerCase()]] = -1;
					CE.slotNames[name.toLowerCase()] += 0.001;
					CE.slotNames[name.toLowerCase()] = CE.precision(CE.slotNames[name.toLowerCase()],0.001)
					var returnNum = CE.precision(CE.slotNames[name.toLowerCase()]-0.001,0.001)
					return returnNum;
				} else {
					console.log("Minigame not yet loaded!")
					return false; //nothing created :(
				}
			}	
		}



		inRect = function(x,y,rect) // I don't understand the black-magic... just roll with it.
		{
			//find out if the point x,y is in the rotated rectangle rect{w,h,r,o} (width,height,rotation in radians,y-origin) (needs to be normalized)
			//I found this somewhere online I guess
			var dx = x+Math.sin(-rect.r)*(-(rect.h/2-rect.o)),dy=y+Math.cos(-rect.r)*(-(rect.h/2-rect.o));
			var h1 = Math.sqrt(dx*dx + dy*dy);
			var currA = Math.atan2(dy,dx);
			var newA = currA - rect.r;
			var x2 = Math.cos(newA) * h1;
			var y2 = Math.sin(newA) * h1;
			if (x2 > -0.5 * rect.w && x2 < 0.5 * rect.w && y2 > -0.5 * rect.h && y2 < 0.5 * rect.h) return true;
			return false;
		}

		CE.DebugAddWrinklersMax = 0; //used for how many additional wrinklers the player should have... mainly for debugging (don't use this for your mod upgrades please)

		Game.customGetWrinklersMax.push(function(n){
			return CE.DebugAddWrinklersMax;
		})

		Game.wrinklerLimit = 1e308 //screw 14 being the limit... seriously, why was there a limit in the first place? What, magically producing more and more wrinklers? Or not wanting someone to code in more?



		

		// INJECTIONS

		if (!Game.customWrinklerSuck) {
			Game.customWrinklerSuck = []

		CCSE.ReplaceCodeIntoFunction('Game.UpdateWrinklers', 'var toSuck=1.1', `
			// Game.UpdateWrinklers injection point 1 from CE
			for(var i in Game.customWrinklerSuck) toSuck = Game.customWrinklerSuck[i](toSuck);`, 1);
		}

		if (!Game.customWrinklerSucked) {
			Game.customWrinklerSucked = []

		CCSE.ReplaceCodeIntoFunction('Game.UpdateWrinklers', 'me.sucked*=toSuck;', `
			// Game.UpdateWrinklers injection point 2 from CE
			for(var i in Game.customWrinklerSucked) me.sucked = Game.customWrinklerSucked[i](me,toSuck);`, 1);
		}

		if (!Game.customShimmerTypes['reindeer'].customReindeerPopMoni) {
			Game.customShimmerTypes['reindeer'].customReindeerPopMoni = []

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['reindeer'].popFunc", 'Game.Earn(moni)', `
			// Game.shimmerTypes['reindeer'].popFunc injection point 1 from CE
			for(var i in Game.customShimmerTypes['reindeer'].customReindeerPopMoni) moni *= Game.customShimmerTypes['reindeer'].customReindeerPopMoni[i](moni);`, -1);
		}

		if (!Game.customResearchT) {
			Game.customResearchT = []
		
		
		CCSE.ReplaceCodeIntoFunction("Game.SetResearch","if (Game.Has('Persistent memory)) Game.researchT=Math.ceil(Game.baseResearchTime/10);",`
			// Game.SetResearch injection point 1 from CE;
			for(var i in Game.customResearchT) Game.rersearchT=Game.customResearchT[i](what,Game.researchT)`,1)
		}//we pass Game.researchT instead of time, as time goes unused. And knowing what the current time is is kinda useful
		
		//Please Ortiel and/or Opti and/or Klattmose and/or poor person seeing all of this...
		//I'm sorry for all of these injections:
		if (!Game.customGoldenBuffPows) {
		Game.customGoldenBuffPows = {
			//...AAAAAAAAAAAAAAAAAAAAAAAAA (I am so sorry)
			//one name per buff.
			//please users don't hate me for doing this, power is hard-coded into every buff, I'm trying to change that...
			'building special': [],
			'free sugar lump': [],
			'frenzy': [],
			'dragon harvest': [],
			'everything must go': [],
			'multiply cookies': [], //lucky
			'ruin cookies': [], //Ruin
			'blood frenzy': [], //Elder frenzy
			'clot': [],
			'cursed finger': [],
			'click frenzy': [],
			'dragonflight': [],
			'chain cookie': [],
			'chain cookie maxpayout': [],
			'chain cookie randomEndChance': [],
			'cookie storm': [],
			'cookie storm drop': [],
			//TODO: add a way to add more blabs because why not.
		}

		//oh fuck I have to actually do that many injections and make it work? Don't I?
		//Modders or whoever that see this... this is why people make APIs, or Libraries... or frameworks... whatever this is...
		//it's for organization and not having to force others to go through this pain.
		//but don't do this for a content mod, make a separate library for it, okay?

		//I thought I could use something that already exists... clueless

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", 'var pow=Game.ObjectsById[obj].amount/10+1;', `
			// CE Game.customGoldenBuffPows injection! (Sorry there's a lot of these) (every buff here is modified, so don't freak out if your main.js and what you see here don't align)
			for (let i in Game.customGoldenBuffPows['building special']) pow = Game.customGoldenBuffPows['free sugar lump'][i](pow);`, 1);
		
		//dear god one of many

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", 'Game.gainLumps(1);', `
			var lumps = 1;
			for (let i in Game.customGoldenBuffPows['free sugar lump']) lumps = Game.customGoldenBuffPows['free sugar lump'][i](lumps);`, 0);
		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", 'popup=loc("Sweet!<br><small>Found 1 sugar lump!</small>")',
			"popup=loc(`Sweet!<br><small>Found ${lumps} sugar lump`+(lumps==1?'':'s'))",0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "buff=Game.gainBuff('frenzy',Math.ceil(77*effectDurMod),7);",`
			var pow = 7;
			for (let i in Game.customGoldenBuffPows['frenzy']) pow = Game.customGoldenBuffPows['frenzy'][i](pow);
			buff=Game.gainBuff('frenzy',Math.ceil(77*effectDurMod),pow);`,0);
		//now we repeat that a ***few*** more times.
		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "buff=Game.gainBuff('dragon harvest',Math.ceil(60*effectDurMod),15);",`
			var pow = 15;
			for (let i in Game.customGoldenBuffPows['dragon harvest']) pow = Game.customGoldenBuffPows['dragon harvest'][i](pow);
			buff=Game.gainBuff('dragon harvest',Math.ceil(60*effectDurMod),pow);`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "buff=Game.gainBuff('everything must go',Math.ceil(8*effectDurMod),5);",`
			var pow = 5;
			for (let i in Game.customGoldenBuffPows['everything must go']) pow = Game.customGoldenBuffPows['everything must go'][i](pow);
			buff=Game.gainBuff('everything must go',Math.ceil(8*effectDurMod),pow);`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "var moni=mult*Math.min(Game.cookies*0.15,Game.cookiesPs*60*15)+13;//add 15% to cookies owned (+13), or 15 minutes of cookie production - whichever is lowest",`
			for (let i in Game.customGoldenBuffPows['multiply cookies']) moni = Game.customGoldenBuffPows['multiply cookies'][i](moni);`,1);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "var moni=Math.min(Game.cookies*0.05,Game.cookiesPs*60*10)+13;//lose 5% of cookies owned (-13), or 10 minutes of cookie production - whichever is lowest",`
			for (let i in Game.customGoldenBuffPows['ruin cookies']) moni = Game.customGoldenBuffPows['ruin cookies'][i](moni);`,1);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "buff=Game.gainBuff('blood frenzy',Math.ceil(6*effectDurMod),666);",`
			var pow = 666;
			for (let i in Game.customGoldenBuffPows['blood frenzy']) pow = Game.customGoldenBuffPows['blood frenzy'][i](pow);
			buff=Game.gainBuff('blood frenzy',Math.ceil(6*effectDurMod),pow);`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "buff=Game.gainBuff('clot',Math.ceil(66*effectDurMod),0.5);",`
			var pow = 0.5;
			for (let i in Game.customGoldenBuffPows['clot']) pow = Game.customGoldenBuffPows['clot'][i](pow);
			buff=Game.gainBuff('clot',Math.ceil(66*effectDurMod),pow);`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "buff=Game.gainBuff('cursed finger',Math.ceil(10*effectDurMod),Game.cookiesPs*Math.ceil(10*effectDurMod));",`
			var pow = Game.cookiesPs*Math.ceil(10*effectDurMod);
			for (let i in Game.customGoldenBuffPows['cursed finger']) pow = Game.customGoldenBuffPows['cursed finger'][i](pow);
			buff=Game.gainBuff('cursed finger',Math.ceil(10*effectDurMod),pow);`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "buff=Game.gainBuff('click frenzy',Math.ceil(13*effectDurMod),777);",`
			var pow = 777;
			for (let i in Game.customGoldenBuffPows['click frenzy']) pow = Game.customGoldenBuffPows['click frenzy'][i](pow);
			buff=Game.gainBuff('click frenzy',Math.ceil(13*effectDurMod),pow);`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "buff=Game.gainBuff('dragonflight',Math.ceil(10*effectDurMod),1111);",`
			var pow = 1111;
			for (let i in Game.customGoldenBuffPows['dragonflight']) pow = Game.customGoldenBuffPows['dragonflight'][i](pow);
			buff=Game.gainBuff('dragonflight',Math.ceil(10*effectDurMod),pow);`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "var nextMoni=Math.max(digit,Math.min(Math.floor(1/9*Math.pow(10,this.chain+1)*digit*mult),maxPayout));",`
			for (let i in Game.customGoldenBuffPows['chain cookie']) moni = Game.customGoldenBuffPows['chain cookie'][i](moni);
			for (let i in Game.customGoldenBuffPows['chain cookie']) nextMoni = Game.customGoldenBuffPows['chain cookie'][i](nextMoni);`,1);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "var maxPayout=Math.min(Game.cookiesPs*60*60*6,Game.cookies*0.5)*mult;",`
			for (let i in Game.customGoldenBuffPows['chain cookie maxpayout']) maxPayout = Game.customGoldenBuffPows['chain cookie maxpayout'][i](maxPayout,mult);`,1);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "if (Math.random()<0.01 || nextMoni>=maxPayout)",`
			var randomEndChance = 0.01;
			for (let i in Game.customGoldenBuffPows['chain cookie randomEndChance']) randomEndChance = Game.customGoldenBuffPows['chain cookie randomEndChance'][i](randomEndChance);
			if (Math.random()<randomEndChance || nextMoni>=maxPayout)`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "buff=Game.gainBuff('cookie storm',Math.ceil(7*effectDurMod),7);",`
			var pow = 7;
			for (let i in Game.customGoldenBuffPows['cookie storm']) pow = Game.customGoldenBuffPows['cookie storm'][i](pow);
			buff=Game.gainBuff('cookie storm',Math.ceil(7*effectDurMod),pow);`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "var moni=Math.max(mult*(Game.cookiesPs*60*Math.floor(Math.random()*7+1)),Math.floor(Math.random()*7+1));//either 1-7 cookies or 1-7 minutes of cookie production, whichever is highest",`
			for (let i in Game.customGoldenBuffPows['cookie storm drop']) moni = Game.customGoldenBuffPows['cookie storm drop'][i](moni)
			//"and now we're done, until I do stuff for blab" - CE dev (there's one person here (Gabe))`,1);

		//oh my fucking god we're finally done oh-kay finally.

		//now I just have to add the stuff to Heavenly Archives (aka. The Archives).
		}

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "for(var i in Game.customShimmerTypes['golden'].customEffectDurMod) effectDurMod *= Game.customShimmerTypes['golden'].customEffectDurMod[i](me);",`
			for(var i in Game.customShimmerTypes['golden'].customEffectDurMod) effectDurMod *= Game.customShimmerTypes['golden'].customEffectDurMod[i](me,choice);
			`,0);

		CCSE.ReplaceCodeIntoFunction("Game.shimmerTypes['golden'].popFunc", "for(var i in Game.customShimmerTypes['golden'].customMult) mult *= Game.customShimmerTypes['golden'].customMult[i](me);",`
			for(var i in Game.customShimmerTypes['golden'].customMult) mult *= Game.customShimmerTypes['golden'].customMult[i](me,choice);`,0);

		//^ just shoving in choice... okay fine I'll add the rest just in case... wait it's just buff? That can be seen before is defined as 0? Alright!!

		CCSE.ReplaceCodeIntoFunction("Game.NewUnshackleBuilding", `var upgrade=new Game.Upgrade('Unshackled '+building.bplural,(obj.building=='Cursor'?getStrThousandFingersGain(25):loc("Tiered upgrades for <b>%1</b> provide an extra <b>+%2%</b> production.<br>Only works with unshackled upgrade tiers.",[cap(building.plural),Math.round((building.id==1?0.5:(20-building.id)*0.1)*100)]))+(EN?'<q>'+obj.q+'</q>':''),Math.pow(building.id+1,7)*15000000,[building.iconColumn,35]);`,`
			// Game.NewUnshackleBuilding injection point 0 by CE; (modifies stuff up-til upgrade.unshacklepow (that is still by CE, the lines after are not))
			var unshacklepow = Math.round((building.id==1?0.5:(20-building.id)*0.1)*100);
			if (unshacklepow <= 0) unshacklepow = 5; //5% for 21st building and onwards (keeps them semi-relavent);
			var upgrade=new Game.Upgrade('Unshackled '+building.bplural,(obj.building=='Cursor'?getStrThousandFingersGain(25):loc("Tiered upgrades for <b>%1</b> provide an extra <b>+%2%</b> production.<br>Only works with unshackled upgrade tiers.",[cap(building.plural),unshacklepow]))+(EN?'<q>'+obj.q+'</q>':''),Math.pow(building.id+1,7)*15000000,[building.iconColumn,35]);
			upgrade.unshacklepow = unshacklepow //adding this for future use/reference;`,0);

		CCSE.ReplaceCodeIntoFunction("Game.GetTieredCpsMult", `if (Game.ascensionMode!=1 && Game.Has(me.unshackleUpgrade) && Game.Has(Game.Tiers[me.tieredUpgrades[i].tier].unshackleUpgrade)) tierMult+=me.id==1?0.5:(20-me.id)*0.1;`,`
			// Game.GetTieredCpsMult injection point 0 by CE;
			var upgrade = Game.Upgrades[me.unshackleUpgrade];
			if (Game.ascensionMode!=1 && Game.Has(me.unshackleUpgrade) && Game.Has(Game.Tiers[me.tieredUpgrades[i].tier].unshackleUpgrade)) tierMult+=(upgrade.unshacklepow * 0.1); //this is all`,0);

		for (let i in Game.UpgradesByPool.prestige) {
			//okay I am sorry about this :(
			var me = Game.UpgradesByPool.prestige[i];
			if (me.name == "Unshackled grandmas") Game.UpgradesByPool.prestige[i].unshacklepow = 50;
			if (me.name == "Unshackled farms") Game.UpgradesByPool.prestige[i].unshacklepow = 180;
			if (me.name == "Unshackled mines") Game.UpgradesByPool.prestige[i].unshacklepow = 170;
			if (me.name == "Unshackled factories") Game.UpgradesByPool.prestige[i].unshacklepow = 160;
			if (me.name == "Unshackled banks") Game.UpgradesByPool.prestige[i].unshacklepow = 150;
			if (me.name == "Unshackled temples") Game.UpgradesByPool.prestige[i].unshacklepow = 140;
			if (me.name == "Unshackled wizard towers") Game.UpgradesByPool.prestige[i].unshacklepow = 130;
			if (me.name == "Unshackled shipments") Game.UpgradesByPool.prestige[i].unshacklepow = 120;
			if (me.name == "Unshackled alchemy labs") Game.UpgradesByPool.prestige[i].unshacklepow = 110;
			if (me.name == "Unshackled portals") Game.UpgradesByPool.prestige[i].unshacklepow = 100;
			if (me.name == "Unshackled time machines") Game.UpgradesByPool.prestige[i].unshacklepow = 90;
			if (me.name == "Unshackled antimatter condensers") Game.UpgradesByPool.prestige[i].unshacklepow = 80;
			if (me.name == "Unshackled prisms") Game.UpgradesByPool.prestige[i].unshacklepow = 70;
			if (me.name == "Unshackled chancemakers") Game.UpgradesByPool.prestige[i].unshacklepow = 60;
			if (me.name == "Unshackled fractal engines") Game.UpgradesByPool.prestige[i].unshacklepow = 50;
			if (me.name == "Unshackled javascript consoles") Game.UpgradesByPool.prestige[i].unshacklepow = 40;
			if (me.name == "Unshackled idleverses") Game.UpgradesByPool.prestige[i].unshacklepow = 30;
			if (me.name == "Unshackled cortex bakers") Game.UpgradesByPool.prestige[i].unshacklepow = 20;
			if (me.name == "Unshackled You") Game.UpgradesByPool.prestige[i].unshacklepow = 10;
		}

		if (!cookieMonsterDetected) {
			if (!Game.customKittenCps) {
			Game.customKittenCps = [];

			CCSE.ReplaceCodeIntoFunction("Game.CalculateGains", `if (Game.Has('Fortune #103')) catMult*=(1+Game.milkProgress*0.05*milkMult);`,`
				// Game.CalculateGains injection point 1 by CE;
				for (let i in Game.customKittenCps) catMult=Game.customKittenCps[i](Game.milkProgress,milkMult,catMult)`,1);
				//please note: (1+Game.milkProgress*KittenPower*milkMult)

			}

			if (!Game.customMilkMult) {
				Game.customMilkMult = [];

				CCSE.ReplaceCodeIntoFunction("Game.CalculateGains",`milkMult*=Game.eff('milk');`,`
					// Game.CalculateGains injection point 2 by CE;
					for (let i in Game.customMilkMult) milkMult*=Game.customMilkMult[i](Game.milkProgress,milkMult)`,1);
			}
		}

		if (!Game.customComputeSeasonPrices) {
			Game.customComputeSeasonPrices = [];

			CCSE.ReplaceCodeIntoFunction("Game.computeSeasonPrices",`return Game.seasonTriggerBasePrice+Game.unbuffedCps*60*Math.pow(1.5,Game.seasonUses)*m;`,`
				// Game.computeSeasonPrices injection point 1 by CE;
				var price = Game.seasonTriggerBasePrice+Game.unbuffedCps*60*Math.pow(1.5,Game.seasonUses)*m;
				for (let i in Game.customComputeSeasonPrices) price=Game.customComputeSeasonPrices[i](price,m);
				return price;`,0);
		}
		
		if (!Game.customPriceIncrease) {
			Game.customPriceIncrease = [];

			CE.computePriceIncrease = function(){
				Game.priceIncrease = 1.15;

				for (let i in Game.customPriceIncrease) Game.priceIncrease = Game.customPriceIncrease[i](Game.priceIncrease);

				//finally, a way to actually modify them whilst keeping modding compatibility!
			}

			Game.registerHook('check',()=>{
				CE.computePriceIncrease();
			})
		}

		if (!Game.customChocolateEggPrice) {
			Game.customChocolateEggBurst = [];

			CCSE.ReplaceCodeIntoFunction("Game.Upgrades['Chocolate egg'].buyFunction",`var cookies=Game.cookies*0.05;`,`
				// Game.Upgrades['Chocolate egg'].buyFunction injection point 1 by CE;
				for (let i in Game.customchocolateEggBurst) cookies=Game.customchocolateEggBurst[i](cookies);
				`,1);
		}

		if (!Game.customGoldenSpawned){
			Game.customGoldenSpawned = [];

			CCSE.ReplaceCodeIntoFunction("Game.updateShimmers",`me.spawned=1;`,`
							// Game.updateShimmers injection point 1 by CE;
							for (let i in Game.customGoldenSpawned) Game.customGoldenSpawned[i](me,i);`,1)
		}


//TODO: add more custom thingies rather than *all of this* to allow for more slots and more duplicates of slots (aka. if i = 1.1, it counts as 1,)

		CE.PantheonInjected = false;
		CE.CanPantheonInject = false;
		CE.PantheonInjectFunc = []; //add functions to run in here when CE injects into the pantheon.
		
		CCSE.MinigameReplacer(function(){
			if (CE.PantheonInjected) return;
			CE.PantheonInjected = true;

			CCSE.ReplaceCodeIntoFunction("Game.hasGod",`var god=M.gods[what];`,`
				// Game.hasGod injection point 1 by CE;
				if (typeof M === "undefined") var M = Game.Objects["Temple"].minigame //ensure it is loaded/available; (does mess with globals)
				//console.log(M,what)`,-1);
			CCSE.ReplaceCodeIntoFunction("Game.hasGod",`for (var i=0;i<3;i++)`,`
				// Game.hasGod injection point 2 by CE;
				if (!Game.slots || Game.slots.length === 0) Game.slots = [[-1,0],[-1,1],[-1,2]];
				var i = 0;
				for (var i=0;i<(Game.slots.length*1000);i++)`,0);
			CCSE.ReplaceCodeIntoFunction("Game.hasGod",`if (M.slot[i]==god.id)`,`if (M.slot[i/1000]==god.id)`,0);
			//we use the *1000 and all of that, so that decimals such as 2.1 or 2.111 are actually treated as slots, and are picked up;
			//due to i++ iterating only through whole numbers (0,1,2,3,etc.);
			//we then /1000 to actually get the decimal and to ensure the first three slots (0,1,2) aren't in the high thousands or hundreds (0,1000,2000);
			//also, a slot of 2.1 or 2.111 are treated as a slot of 2 for slot name, gem icon, and mechanical calculations. (eg. 2.1 is 2, therefore two jade slots)
			//I made this all for HA (just for a duplicate jade slot, and double slots); One heavenly upgrade resulted in all of this
			CCSE.ReplaceCodeIntoFunction("Game.hasGod",`if (Game.hasAura('Supreme Intellect')) return Math.max(1,i/100);`,`
				// Game.hasGod injection point 3 & 4 by CE;
				if (Game.hasAura('Supreme Intellect')) return Math.max(1,Math.round(i/1000));`,0);
			CCSE.ReplaceCodeIntoFunction("Game.hasGod",`else return (i+1);`,`else return Math.round((i/1000)+1);`,0);
			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Temple"].minigame.slotTooltip`,`return function(){`,`
				// M.slotTooltip injection point 1 by CE;
				var id2 = Math.round(id);
				if (typeof M === "undefined") var M = Game.Objects["Temple"].minigame //ensure it is loaded/available; (does mess with globals)`,-1)

			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Temple"].minigame.slotTooltip`,`'<div class="name templeEffect" style="margin-bottom:12px;"><div class="usesIcon shadowFilter templeGem templeGem'+(parseInt(id)+1)+'"></div>'+loc(M.slotNames[id]+" slot")+'</div>'+`,`'<div class="name templeEffect" style="margin-bottom:12px;"><div class="usesIcon shadowFilter templeGem templeGem'+(parseInt(id)+1)+'"></div>'+loc(M.slotNames[Math.round(id)]+" slot")+'</div>'+`,0)

			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Temple"].minigame.slotTooltip`,`var slot=me.slot;`,`slot=Math.round(slot); //sorry for CE doing this just to get duplicate slots working (visually & mechanically)`,1)

			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Temple"].minigame.slotTooltip`,`('<div class="name templeEffect"><div class="usesIcon shadowFilter templeGem templeGem'+(parseInt(id)+1)+'"></div>'+loc(M.slotNames[id]+" slot")+' ('+loc("empty")+')</div><div class="line"></div><div class="description">'+`,`('<div class="name templeEffect"><div class="usesIcon shadowFilter templeGem templeGem'+(parseInt(id)+1)+'"></div>'+loc(M.slotNames[Math.round(id)]+" slot")+' ('+loc("empty")+')</div><div class="line"></div><div class="description">'+`,0)

			if (!Game.customPantheonSwapT) {
			Game.customPantheonSwapT = [];
			
			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Temple"].minigame.logic`,`var t=1000*60*60;`,`
			// M.logic injection point 1 by CE;
			if (typeof M === "undefined") var M = Game.Objects["Temple"].minigame //ensure it is loaded/available; (does mess with globals)`,-1);
			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Temple"].minigame.logic`,`var t2=M.swapT+t-Date.now();`,`
			// M.logic injection point 2 by CE;
			for (let i in Game.customPantheonSwapT) t = Game.customPantheonSwapT[i](t,M.swapT)`,-1);

			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Temple"].minigame.draw`,`if (M.dragging)`,`
			// M.logic injection point 1 by CE;
			if (typeof M === "undefined") var M = Game.Objects["Temple"].minigame //ensure it is loaded/available; (does mess with globals)`,-1);
			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Temple"].minigame.draw`,`var t2=M.swapT+t-Date.now();`,`
			// M.draw injection point 2 by CE;
			for (let i in Game.customPantheonSwapT) t = Game.customPantheonSwapT[i](t,M.swapT)`,-1);
			
			}

			//I am sorry Klattmose!
			CCSE.ReplaceCodeIntoFunction(`CCSE.RedrawGods`,`str += '<div class="ready templeGod templeGod' + (i % 4) + ' templeSlot titleFont" id="templeSlot' + i + '" ' + Game.getDynamicTooltip('Game.ObjectsById[' + M.parent.id + '].minigame.slotTooltip(' + i + ')', 'this') + '><div class="usesIcon shadowFilter templeGem templeGem' + (parseInt(i) + 1) + '"></div></div>';`,`
				//CCSE.RedrawGods injection point 1 by CE; this feels weird to do!
				str += '<div class="ready templeGod templeGod' + (i) + ' templeSlot titleFont" id="templeSlot' + i + '" ' + Game.getDynamicTooltip('Game.ObjectsById[' + M.parent.id + '].minigame.slotTooltip(' + i + ')', 'this') + '><div class="usesIcon shadowFilter templeGem templeGem' + (Math.round(i) + 1) + '"></div></div>';`,0);

			CCSE.ReplaceCodeIntoFunction(`CCSE.RedrawGods`,`str += '<div class="ready templeGod templeGod' + (me.id % 4) + ' titleFont" id="templeGod' + me.id + '" ' + Game.getDynamicTooltip('Game.ObjectsById[' + M.parent.id + '].minigame.godTooltip(' + me.id + ')', 'this') + '><div class="usesIcon shadowFilter templeIcon" style="' + (icon[2]?'background-image:url('+icon[2]+');':'') + 'background-position:' + (-icon[0] * 48) + 'px ' + (-icon[1] * 48) + 'px;"></div><div class="templeSlotDrag" id="templeGodDrag' + me.id + '"></div></div>';`,`
				//CCSE.RedrawGods injection point 2 by CE; kinda hoping these changes work for more temple slots!!!
				str += '<div class="ready templeGod templeGod' + (me.id) + ' titleFont" id="templeGod' + me.id + '" ' + Game.getDynamicTooltip('Game.ObjectsById[' + M.parent.id + '].minigame.godTooltip(' + me.id + ')', 'this') + '><div class="usesIcon shadowFilter templeIcon" style="' + (icon[2]?'background-image:url('+icon[2]+');':'') + 'background-position:' + (-icon[0] * 48) + 'px ' + (-icon[1] * 48) + 'px;"></div><div class="templeSlotDrag" id="templeGodDrag' + me.id + '"></div></div>';`,0);

			if (!Game.slots || Game.slots.length === 0) Game.slots = [[-1,0],[-1,1],[-1,2]];
			Game.registerHook('check',()=>{
				for (let i in Game.Objects["Temple"].minigame.slot) {
					if (!Game.slots[i] || Game.slots[i][0] !== Game.Objects["Temple"].minigame.slot[i] || Game.slots[i][1] !== i) {
						Game.slots[i] = [Game.Objects["Temple"].minigame.slot[i],i]
					}
				}
			})

			for (let i in CE.PantheonInjectFunc) CE.PantheonInjectFunc[i](); //Run the functions!
		}, "Temple")

		CE.GrimoireInjected = false;
		CE.CanGrimoireInject = false;
		CE.GrimoireInjectFunc = []; //add functions to run in here when CE injects into the grimoire.

		CCSE.MinigameReplacer(()=>{
			if (CE.GrimoireInjected) {return;}
			CE.GrimoireInjected = true;

			if (!Game.customFailChance) {
				Game.customFailChance = [];
				
				CCSE.ReplaceCodeIntoFunction(`Game.Objects["Wizard tower"].minigame.getFailChance`,`if (spell.failFunc) failChance=spell.failFunc(failChance);`,`
				// M.getFailChance injection point 1 by CE;
				for (let i in Game.customFailChance) failChance=Game.customFailChance[i](failChance,spell);
				`,-1);
				}

			if (!Game.customSpellCostMod) {
				Game.customSpellCostMod = [];
				
				CCSE.ReplaceCodeIntoFunction(`Game.Objects["Wizard tower"].minigame.getSpellCost`,`var out=spell.costMin;`,`
				// M.getSpellCost injection point 1 by CE;
				if (typeof M === "undefined") var M = Game.Objects["Wizard tower"].minigame //ensure it is loaded/available; (does mess with globals)
				`,-1);
				CCSE.ReplaceCodeIntoFunction(`Game.Objects["Wizard tower"].minigame.getSpellCost`,`return Math.floor(out);`,`
				// M.getSpellCost injection point 2 by CE;
				for (let i in Game.customSpellCostMod) out=Game.customSpellCostMod[i](out,spell);
				`,-1);
			}

			if (!Game.customMagicPS) {
			Game.customMagicPS = [];

			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Wizard tower"].minigame.logic`,`if (Game.T%5==0) {M.computeMagicM();}`,`
			// M.logic injection point 1 by CE;
			if (typeof M === "undefined") var M = Game.Objects["Wizard tower"].minigame //ensure it is loaded/available; (does mess with globals)
			`,-1);

			CCSE.ReplaceCodeIntoFunction(`Game.Objects["Wizard tower"].minigame.logic`,`M.magic+=M.magicPS;`,`
			// M.logic injection point 2 by CE;
			for (let i in Game.customMagicPS) M.magicPS=Game.customMagicPS[i](M.magicPS,M.magic);
			`,-1);
			}

			for (let i in CE.GrimoireInjectFunc) CE.GrimoireInjectFunc[i]();
		}, "Wizard tower")
		


		// CCSE.ReplaceCodeIntoFunction(`CCSE.NewBuilding`,'Game.BuildStore();',`//Game.BuildStore();`,0);
		//^ sorry, if it's ran, many many mods will die;



		CE.isInitialized = true;
		if(CE.postLoadHooks) for(var i in CE.postLoadHooks) CE.postLoadHooks[i]();
		// }


		// if (CCSE && CCSE.isLoaded) {
        //     CE_Init.call(this);
        // } else {
        //     if (!CCSE_postLoadHooks) var CCSE_postLoadHooks = [];
        //     CCSE_postLoadHooks.push(function () {
        //         CE_Init.call(Game.mods["CEModFramework"]);
        //     });
        // }

	}
	CEModLib.save = function(){
		let saveData = {
			eternalSeed: CE.eternalSeed,
		};
		return JSON.stringify(saveData); //finally fixed up saving...
	}
	CEModLib.load = function(str){
		let save = JSON.parse(str);
		if (!save || typeof save !== "object") return;
		CE.eternalSeed = save.eternalSeed
	}
	

	if (CCSE.ConfirmGameVersion(CEModLib.name, CEModLib.version, CEModLib.GameVersion)) Game.registerMod(CEModLib.name, CEModLib);

}

if (!CEModLib.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        CEModLib.launch();
    } else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(CEModLib.launch);
    }
}
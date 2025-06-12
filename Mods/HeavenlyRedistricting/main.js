if (HeavenlyRedistricting === undefined) var HeavenlyRedistricting = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/' + (0 ? 'Beta/' : '') + 'CCSE.js');
HeavenlyRedistricting.name = 'HeavenlyRedistricting';
HeavenlyRedistricting.version = '1';
HeavenlyRedistricting.GameVersion = '2.053';

HeavenlyRedistricting.launch = function(){

		//Ermmmm, really need to fix this:
		if (CE == undefined) {
			Game.toReload = true;
		}

	HeavenlyRedistricting.init = function(){
		/*
		Why are you looking here?
		What, you wanna see how someone moves upgrades?
		The .posX and .posY of a heavenly upgrade?
		...
		okay fine I'm using CE to speed up this process
		and it's just for HA really
		*/

		if (Game.mods["More Heavenly Upgrades Remastered"]) {
			//Flower
			CE.GroupMoveUpgrade("Abandon the old gods","Flora",-500,-650);
			CE.GroupMoveUpgrade("Hades","Flora",-500,-650);
			CE.GroupMoveUpgrade("Xipe Totec","Flora",-500,-650);
			CE.MoveUpgrade("Flora",-500,-650);

			//Tower
			CE.GroupMoveUpgrade("Faster and lumpier clicking process","Sugar lump farming 101",-250,-800);
			CE.MoveUpgrade("Sugar lump farming 101",-250,-800)

			//Horseshoe
			CE.GroupMoveUpgrade("Lucky Deal","Redefine Luck",235,-220);
			CE.MoveUpgrade("Redefine Luck",235,-220);
			CE.MoveUpgrade("Unintended Results",235,-220);
			CE.MoveUpgrade("Lucky's Lucky Charm",235,-220);
			CE.MoveUpgrade("Non-lazy Wizards",235,-220);
			CE.MoveUpgrade("Is this considered lucky?",235,-220);
			CE.MoveUpgrade("It's raining sugar lumps... sometimes",235,-220); //you know, I'd say how much I hate these upgrades, but the angelic choir, sitting here, seeing such simplicity... it doesn't fully negate the sheer amuont of bloat, odd capitalization, and lack of flavour (combined with names appearing to be as if they could be flavour texts)... but it does something.

		}

		
		if (Game.mods["Even More Heavenly Upgrades"]) {
			//Starter packs
			CE.GroupMoveUpgrade("Endgame 1K pack","Starter kitchen",-850,-150);
			
			//Seasons
			CE.MoveUpgrade("Silly Wabbit",-350,100);
			CE.MoveUpgrade("Horror Story",-350,85);
			CE.MoveUpgrade("Lover's Delight",-350,85);
			CE.MoveUpgrade("Santa's Heavenly Legacy",-350,85);
			CE.MoveUpgrade("Rudolph's Recipe",-350,85);
			CE.SetPos("Rudolph's Recipe",-733,-241);

			//Divine
			CE.GroupMoveUpgrade("Magical Lumps V","Divine savings",-165,285);
			CE.GroupMoveUpgrade("Krumblor, The one and only","Divine savings",-165,285);
			CE.GroupMoveUpgrade("Divine lumps","Divine gains",-165,285); //whole lotta divine here.
			CE.MoveUpgrade("Divine gains",-165,285);
			CE.MoveUpgrade("Divine savings",-165,285);
			Game.UpgradesById[879].posX = Game.Upgrades["Divine lumps"].posX;
			Game.UpgradesById[879].posY = Game.Upgrades["Divine lumps"].posY;
			Game.UpgradesById[878].posX = Game.Upgrades["Divine unascended gains"].posX;
			Game.UpgradesById[878].posY = Game.Upgrades["Divine unascended gains"].posY;
			Game.UpgradesById[877].posX = Game.Upgrades["Divine buildings"].posX;
			Game.UpgradesById[877].posY = Game.Upgrades["Divine buildings"].posY;
			Game.UpgradesById[876].posX = Game.Upgrades["Divine gains"].posX;
			Game.UpgradesById[876].posY = Game.Upgrades["Divine gains"].posY;
			Game.UpgradesById[875].posX = Game.Upgrades["Divine savings"].posX;
			Game.UpgradesById[875].posY = Game.Upgrades["Divine savings"].posY;
			//*sigh* ^
		}

		if (Game.mods["GabeInfiniteCookieClicker"]){ //why didn't I just make it the actual name?
			CE.MoveUpgrade("Lumpification",-250,-150);
			CE.MoveUpgrade("Endless box of upgrades",-250,-150);
			CE.MoveUpgrade('"egg"?',-250,100);
			CE.MoveUpgrade("Infini-search",-250,-150);
			//wow that's all?
			//...
		}
		
		//Seasons
		CE.GroupMoveUpgrade("Keepsakes","Season switcher",-250,100);
		CE.MoveUpgrade("Season switcher",-250,100);

		//Wrinklers and lumps and whatnot
		CE.GroupMoveUpgrade("Sugar crystal cookies","Starter kitchen",-250,-150);
		CE.MoveUpgrade("Box of not cookies",-250,-150);
		CE.MoveUpgrade("Box of maybe cookies",-250,-150);
		CE.MoveUpgrade("Box of pastries",-250,-150);
		CE.MoveUpgrade("Starter kitchen",-250,-150);
		CE.MoveUpgrade("Sugar craving",-250,-150);
		CE.MoveUpgrade("Sugar aging process",-250,-150);
		CE.MoveUpgrade("Sucralosia Inutilis",-250,-150);
		CE.MoveUpgrade("Diabetica Daemonicus",-250,-150);
		CE.MoveUpgrade("Eye of the wrinkler",-250,-150);

		//now just gotta move my Heavenly Archive upgrades all around... A
	}
	HeavenlyRedistricting.save = function(){
		//use this to store persistent data associated with your mod
	}
	HeavenlyRedistricting.load = function(str){
		//do stuff with the string data you saved previously
	}

	if (CCSE.ConfirmGameVersion(HeavenlyRedistricting.name, HeavenlyRedistricting.version, HeavenlyRedistricting.GameVersion)) Game.registerMod(HeavenlyRedistricting.name, HeavenlyRedistricting);

};

if (!HeavenlyRedistricting.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        HeavenlyRedistricting.launch();
    } else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(HeavenlyRedistricting.launch);
    }
}
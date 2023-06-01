Game.registerMod("cws-borderlessCookieAchievements", {
	init: function() {

		// creating custImg variable
		var custImg = this.dir + "/borderlessIcons.png";
		
		// notification!
		Game.Notify(`Many achievement icons changed!`, `Contain yourself, alright?`, [3,5,],10,1);
		
		// So begins the arduous task. Every icon changed.
		// Buckle in. There's 42 to change right now...
		// And that's just on a "per category" basis.
		
		// Starting with "per run".
		Game.Achievements['Affluent bakery'].icon = [0,0,custImg];
		Game.Achievements['World-famous bakery'].icon = [1,0,custImg];
		Game.Achievements['Cosmic bakery'].icon = [2,0,custImg];
		Game.Achievements['Galactic bakery'].icon = [3,0,custImg];
		Game.Achievements['Universal bakery'].icon = [4,0,custImg];
		Game.Achievements['Timeless bakery'].icon = [5,0,custImg];
		Game.Achievements['Infinite bakery'].icon = [6,0,custImg];
		Game.Achievements['Immortal bakery'].icon = [7,0,custImg];
		Game.Achievements['Don\'t stop me now'].icon = [8,0,custImg];
		Game.Achievements['You can stop now'].icon = [9,0,custImg];
		Game.Achievements['Cookies all the way down'].icon = [10,0,custImg];
		Game.Achievements['Overdose'].icon = [0,1,custImg];
		Game.Achievements['How?'].icon = [1,1,custImg];
		Game.Achievements['The land of milk and cookies'].icon = [2,1,custImg];
		Game.Achievements['He who controls the cookies controls the universe'].icon = [3,1,custImg];
		Game.Achievements['Tonight on Hoarders'].icon = [4,1,custImg];
		Game.Achievements['Are you gonna eat all that?'].icon = [5,1,custImg];
		Game.Achievements['We\'re gonna need a bigger bakery'].icon = [6,1,custImg];
		Game.Achievements['In the mouth of madness'].icon = [7,1,custImg];
		Game.Achievements['Brought to you by the letter <div style="display:inline-block;background:url(img/money.png);width:16px;height:16px;"></div>'].icon = [8,1,custImg];
		Game.Achievements['The dreams in which I\'m baking are the best I\'ve ever had'].icon = [9,1,custImg];
		Game.Achievements['Set for life'].icon = [10,1,custImg];
		Game.Achievements['Panic! at Nabisco'].icon = [0,2,custImg];
		Game.Achievements['Bursting at the seams'].icon = [1,2,custImg];
		Game.Achievements['Just about full'].icon = [2,2,custImg];
		Game.Achievements['Hungry for more'].icon = [3,2,custImg];
		Game.Achievements['Feed me, Orteil'].icon = [4,2,custImg];
		Game.Achievements['And then what?'].icon = [5,2,custImg];
		Game.Achievements['I think it\'s safe to say you\'ve got it made'].icon = [6,2,custImg];
		Game.Achievements['A sometimes food'].icon = [7,2,custImg];
		Game.Achievements['Not enough of a good thing'].icon = [8,2,custImg];
		Game.Achievements['Horn of plenty'].icon = [9,2,custImg];
		Game.Achievements['Large and in charge'].icon = [10,2,custImg];
		Game.Achievements['Absolutely stuffed'].icon = [0,3,custImg];
		Game.Achievements['It\'s only wafer-thin'].icon = [1,3,custImg];
		Game.Achievements['Think big'].icon = [2,3,custImg];
		Game.Achievements['Hypersize me'].icon = [3,3,custImg];
		Game.Achievements['Max capacity'].icon = [4,3,custImg];
		Game.Achievements['Fake it till you bake it'].icon = [5,3,custImg];
		Game.Achievements['History in the baking'].icon = [6,3,custImg];
		Game.Achievements['What do you get for the baker who has everything'].icon = [7,3,custImg];
		Game.Achievements['Bottomless pit'].icon = [8,3,custImg];
		
		// Now "Per Second".
		Game.Achievements['Mass producer'].icon = [0,0,custImg];
		Game.Achievements['Cookie vortex'].icon = [1,0,custImg];
		Game.Achievements['Cookie pulsar'].icon = [2,0,custImg];
		Game.Achievements['Cookie quasar'].icon = [3,0,custImg];
		Game.Achievements['Oh hey, you\'re still here'].icon = [4,0,custImg];
		Game.Achievements['Let\'s never bake again'].icon = [5,0,custImg];
		Game.Achievements['A world filled with cookies'].icon = [6,0,custImg];
		Game.Achievements['When this baby hits 36 quadrillion cookies per hour'].icon = [7,0,custImg];
		Game.Achievements['Fast and delicious'].icon = [8,0,custImg];
		Game.Achievements['Cookiehertz : a really, really tasty hertz'].icon = [9,0,custImg];
		Game.Achievements['Woops, you solved world hunger'].icon = [10,0,custImg];
		Game.Achievements['Turbopuns'].icon = [0,1,custImg];
		Game.Achievements['Faster menner'].icon = [1,1,custImg]; // <3
		Game.Achievements['And yet you\'re still hungry'].icon = [2,1,custImg];
		Game.Achievements['The Abakening'].icon = [3,1,custImg];
		Game.Achievements['There\'s really no hard limit to how long these achievement names can be and to be quite honest I\'m rather curious to see how far we can go.<br>Adolphus W. Green (1844–1917) started as the Principal of the Groton School in 1864. By 1865, he became second assistant librarian at the New York Mercantile Library; from 1867 to 1869, he was promoted to full librarian. From 1869 to 1873, he worked for Evarts, Southmayd & Choate, a law firm co-founded by William M. Evarts, Charles Ferdinand Southmayd and Joseph Hodges Choate. He was admitted to the New York State Bar Association in 1873.<br>Anyway, how\'s your day been?'].icon = [4,1,custImg];
		Game.Achievements['Fast'].icon = [5,1,custImg];
		Game.Achievements['Knead for speed'].icon = [6,1,custImg];
		Game.Achievements['Well the cookies start coming and they don\'t stop coming'].icon = [7,1,custImg];
		Game.Achievements['I don\'t know if you\'ve noticed but all these icons are very slightly off-center'].icon = [8,1,custImg];
		Game.Achievements['The proof of the cookie is in the baking'].icon = [9,1,custImg];
		Game.Achievements['If it\'s worth doing, it\'s worth overdoing'].icon = [10,1,custImg];
		Game.Achievements['Running with scissors'].icon = [0,2,custImg];
		Game.Achievements['Rarefied air'].icon = [1,2,custImg];
		Game.Achievements['Push it to the limit'].icon = [2,2,custImg];
		Game.Achievements['Green cookies sleep furiously'].icon = [3,2,custImg];
		Game.Achievements['Leisurely pace'].icon = [4,2,custImg];
		Game.Achievements['Hypersonic'].icon = [5,2,custImg];
		Game.Achievements['Gotta go fast'].icon = [6,2,custImg];
		Game.Achievements['Bake him away, toys'].icon = [7,2,custImg];
		Game.Achievements['You\'re #1 so why try harder'].icon = [8,2,custImg];
		Game.Achievements['Haven\'t even begun to peak'].icon = [9,2,custImg];
		Game.Achievements['What did we even eat before these'].icon = [10,2,custImg];
		Game.Achievements['Heavy flow'].icon = [0,3,custImg];
		Game.Achievements['More you say?'].icon = [1,3,custImg];
		Game.Achievements['Keep going until I say stop'].icon = [2,3,custImg];
		Game.Achievements['But I didn\'t say stop, did I?'].icon = [3,3,custImg];
		Game.Achievements['With unrivaled fervor'].icon = [4,3,custImg];
		Game.Achievements['I am speed'].icon = [5,3,custImg];
		Game.Achievements['And on and on'].icon = [6,3,custImg];
		Game.Achievements['Everything happens so much'].icon = [7,3,custImg];
		Game.Achievements['I\'ll rest when I\'m dead'].icon = [8,3,custImg];
		
		// Added Golden Achievements now!
		Game.Achievements['Fortune'].icon = [11,3,custImg];
		Game.Achievements['Leprechaun'].icon = [12,3,custImg];
		Game.Achievements['Black cat\'s paw'].icon = [13,3,custImg];
		
		// And then there's these two upgrades.
		Game.Upgrades['Basic wallpaper assortment'].icon = [8,1,custImg];
		Game.Upgrades['Distinguished wallpaper assortment'].icon = [6,1,custImg];
		
		// And now... Compatibility with the aligned mod.
		if (Game.mods['cws alignedCookieAchievements']) { // Checking first!
			// Per run:
			Game.Achievements['Brought to you by the letter <div style="display:inline-block;background:url(img/money.png);width:16px;height:16px;"></div>'].icon = [11,0,custImg];
			Game.Achievements['The dreams in which I\'m baking are the best I\'ve ever had'].icon = [12,0,custImg];
			Game.Achievements['Set for life'].icon = [13,0,custImg];
			Game.Achievements['Panic\! at Nabisco'].icon = [11,1,custImg];
			Game.Achievements['Bursting at the seams'].icon = [12,1,custImg];
			Game.Achievements['Just about full'].icon = [13,1,custImg];
			Game.Achievements['Hungry for more'].icon = [11,2,custImg];
			Game.Achievements['Feed me, Orteil'].icon = [12,2,custImg];
			Game.Achievements['And then what?'].icon = [13,2,custImg];
			
			// And per second:
			Game.Achievements['I don\'t know if you\'ve noticed but all these icons are very slightly off-center'].icon = [11,0,custImg];
			Game.Achievements['The proof of the cookie is in the baking'].icon = [12,0,custImg];
			Game.Achievements['If it\'s worth doing, it\'s worth overdoing'].icon = [13,0,custImg];
			Game.Achievements['Running with scissors'].icon = [11,1,custImg];
			Game.Achievements['Rarefied air'].icon = [12,1,custImg];
			Game.Achievements['Push it to the limit'].icon = [13,1,custImg];
			Game.Achievements['Green cookies sleep furiously'].icon = [11,2,custImg];
			Game.Achievements['Leisurely pace'].icon = [12,2,custImg];
			Game.Achievements['Hypersonic'].icon = [13,2,custImg];
			
			// And a wayward upgrade.
			Game.Upgrades['Basic wallpaper assortment'].icon = [11,0,custImg];
		}
		
		// And, double whammy! Compatibility with Better Gold!
		if (Game.mods['cws betterGoldenAchievements']) { // Checking first!
			// Just these four achievements, though:
			Game.Achievements['Four-leaf cookie'].icon = [14,0,custImg];
			Game.Achievements['Seven horseshoes'].icon = [14,1,custImg];
			Game.Achievements['All-natural cane sugar'].icon = [14,2,custImg];
			Game.Achievements['Last Chance to See'].icon = [14,3,custImg];
		}

	}
});
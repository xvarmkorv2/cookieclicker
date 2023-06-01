/*
	You can use language files like this one to modify and augment localization strings for any supported language, including English.
	Valid language codes are EN (English), FR (French), DE (German), NL (Dutch), CS (Czech), PL (Polish), IT (Italian), ES (Spanish), PT-BR (Portuguese), JA (Japanese), ZH-CN (Chinese), and RU (Russian).
	You can also use the language code "*" to apply to any language.
	You may call ModLanguage multiple times in a single file to augment multiple languages. The game will only load what it needs for the current language.
	You may also use this to add flavor text to upgrades and achievements, which is omitted in non-English languages. This is done via the syntax "[Upgrade quote ID]upgrade's original English name":"your custom flavor text". See below for examples.
	Note that the game has various hard-coded exceptions for English which may not be easy to change through localization files alone.
	The special "REPLACE ALL" key is provided as a utility for replacing every single instance of a string in the game's language files with another. At the moment this does not apply to default english flavor text.
	Please refer to the /loc directory for the default localization files, which you may use for reference.
*/
ModLanguage('EN',{
	
	"REPLACE ALL": {
		"cookie":"cooki :3",
		"grandmapocalypse":"grandmapocalypse",
		"grandma":"floofer",// this is where grandmatriarchs name comes from i guess
		"wrinklers":"scrunklers",
		"wrinkler":"scrunkler",
		"Wrinkler":"Scrunkler",
		"popped":"booped",
		"pop":"boop",
		"Scary stuff":"Silly stuff",
		"Cursors":"Beans",
		"wrinkled":"poofy",
		"flesh":"floof",
		"digest":"absorb"
	},
	
	//we're already changing "cookie" and "grandma" in the REPLACE ALL so some of the following is redundant and mostly just for the sake of example
	
	"cookie": "cooki",
	
	"%1 cookie": [
		"%1 cooki",
		"%1 cooki"
	],
	
	"Cursor": "Bean",
	"Cursor (short)": "Bean",//this is displayed in the building section! this lets you shorten the name if it doesn't need
	"cursor": "bean",
	"cursors": "beans",
	"%1 cursor": [
		"%1 bean",
		"%1 beans"
	],


	"Grandma": "Floofer",
	"Grandma (short)": "Floofer",//this is displayed in the building section! this lets you shorten the name if it doesn't need
	"grandma": "floofer",
	"grandmas": "floofer",
	"%1 grandma": [
		"%1 floofer",
		"%1 floofers"
	],



	"[Grandma quote]A nice grandma to bake more cookies.": "nice.",
	"awoken": "silly",
	"displeased": "sillier",
	"angered": "chaotic",
	
	"[Upgrade name 0]Reinforced index finger": "Extra bean",
	"[Upgrade desc 0]Reinforced index finger": "You grow a third bean, allowing you to click <b>twice as much</b>.",
	"[Upgrade quote 0]Reinforced index finger": "Also increases your mittens budget by 50%.",
	
	"[Achievement name 0]Wake and bake": "OwO! A cookie!",
	"[Achievement desc 0]Wake and bake": "Somehow produce <b>an entire cookie</b>.",
	"[Achievement quote 0]Wake and bake": "crumnchy :3",
	


	"Exploded a wrinkler": "Booped a scrunkler",


	"Ticker (grandma)": [
		"yummy cookis",
		"Fwof.",
		"mweeg.",
		"give hug pls.",
		"wanT SOFT HUG?",
		"*sqek*"
	],
	"Ticker (threatening grandma)": [
		"imma boop u", // absolutely disgusting
		"Your cookies are making me hungy",
		"You make me happ :3"
	],
	"Ticker (angry grandma)": [
		"You're the reason I'm here ;3",
		"Is it true you sold a floofer once? ;w;",
		"I can smell your delicious cookies, now give me some!!!"
	],
	"Ticker (grandmas return)": [
		"hug cooki for more cooki",
		"gamering",
		"squishy cooki",
		"*nomf*",
	],
	"Ticker (grandma invasion start)": [
		"millions of people reported.... meowing??",
		"families around the continent report frenzied, affection-crazed scrunklers!",
		"nurses report \"strange scent of cookie dough\" around patients!"
	],
	"Ticker (grandma invasion rise)": [
		"town in disarray as strange old ladies break into homes to abduct infants and baking utensils!",
		"whole continent undergoing mass exodus of old ladies!",
		"old women freeze in place in streets, ooze warm sugary syrup!"
	],
	"Ticker (grandma invasion full)": [
		"poofy \"floof pillows\" visible from space!",
		"all hope \"lost\" as growing mass of floof towers over whole city! We personally think this is an improvement though.",
		"dream continues as poofy acres of floof expand at alarming speeds!"
	]







});
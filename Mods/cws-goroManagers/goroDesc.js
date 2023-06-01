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
	"[Upgrade name 646]Kitten wages": "Goro's blessing",
	"[Upgrade desc 646]Kitten wages": "Through enlisting one of their own kind, this makes kitten upgrades <b>10% cheaper</b>.",
	"[Upgrade quote 646]Kitten wages": "Attention all Nyamco employees, Named Mappy. Attention all Nyamco Employees Named Mappy if your name is Mappy please report to Goro's office immediately. If your name is not Mappy you are not required to report to Goro's office at this time. Please, Mappys Only.",	
});
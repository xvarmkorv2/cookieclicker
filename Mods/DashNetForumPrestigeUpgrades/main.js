setTimeout(() => {
	Game.registerMod("GabeDFPU",{//this string needs to match the ID provided in your info.txt
	init:function(){
		
		Game.Notify(`Heavenly Archives loaded!`,`Nearly <b>100+</b> archived heavenly upgrades! And rather unique!<q>Although... some balance has been done, it's not guaranteed to be "balanced"<br><small>(then again, 1:1 Lump:Golden ratio is "balanced")</small></q>`,[16,5]);
		
		//Ermmmm, really need to fix this:
		if (window.CE == undefined) {
			CEModLib.launch();
		}

		let MOD=this;
		
		/*
		So, what is this mod meant to do?
		Take the 2014,
		Dashnet Forums,
		Prestige Upgrade forum (including upgrades that people disliked, aka ones that wouldn't have made it into the list that didn't make it into Cookie Clicker),
		and convert the upgrades roughly 1:1. //(with a few flavour texts added for, well flavour)
		(and also scrap some like another dragon slot, dragon slots are hard-coded... we aint doin that much yet)

		And probably a few other forums with Prestige Upgrades.


		So...
		Time to copy paste!
		Format:
		number. name - cost
		- details
		- Unlocks with...
		??? in the name section means I ("1234abcdcba4321" from 2014 (or other people due to the scope of this project getting bigger by finding more and more forums)) don't have a name for the upgrade.
		*/

		// TODO: Give Credit to everyone. AAA
		// Let's start that crediting, shall we?
		/*
		(note: these people and their contributions are in the PAST. At least a decade or so)
		Links to the upgrades (because that seems like a normal thing to do):
		https://web.archive.org/web/20160304081800/http://forum.dashnet.org/discussion/7111/prestige-upgrade-suggestions (the main link that started this, the main forum, thank you 1234abcdcba4321)
		1234abcdcba4321 - The person who made the forum that started this whole idea (thank(n't) you). Total Upgrades contributed by them - //todo actually count and tally them all up
		Matryoshka - The person that came up with "vocaloid" as an idea for an upgrade. Total Upgrades Contributed - 3
		Perfection - Why is your profile a Heart with the word "TOES" in all caps? *Anyways* Total Upgrades Contributed - 1
		From The_Cookie_God - Supposed God of cookies (and also the God of the internets (yes, internets, not internet)). Total Upgrades Contributed - 1
		thecrazyhyperbanana - A banana (okay I know I should add *something* else here with these, like something about them, or **something** just **something** at least). Total Upgrades Contributed - 1
		Idler - Cookie Clicker's target demographic! Total Upgrades Contributed - 2
		*/

		/* COMPLETE */

		/*
		9. Night gaming - 2k HCs
		- Gain 20% of your CPS rate while offline.
		- Unlocks at start.

		10. ??? - 100k HCs
		- Gain 30% more of your CPS rate while offline.
		- Unlocks with 9.

		11. Perfect idling - 1m HCs
		- Gain 50% more of your CPS rate while offline. (100% total)
		- Unlocks with 10.

		12. ??? - 10m HCs
		- Gain 75% more of your CPS rate while offline.
		- Unlocks with 11.

		13. ??? - 100m HCs
		- Gain 110% more of your CPS rate while offline.
		- Unlocks with 12.

		14. ??? - 1b HCs
		- Gain 110% more of your CPS rate while offline.
		- Unlocks with 13.

		15. ??? - 5b HCs
		- Gain 105% more of your CPS rate while offline. (500% total)
		- Unlocks with 14.

		16. Golden switch - 777777 HCs
		- Unlocks the golden switch, which lets you disable golden cookies for a production boost.
		- Unlocks with 2.

		23. Starter light - 50m HCs
		- Start each new game with one prism.
		- Unlocks with starter kitchen.

		82. Trophy - 1 QiDc HCs
		- YOU WIN!!! (After you get this)
		- No effect though.
		- Unlocked from gold suit.

		101. "holograms" - 100m HCs
		- Doubles effiency of all buildings related to technology
		- Unlocks after buying "devil"
		- from Matryoshka

		//^ figure out what technology means (does that include LIGHT? Clones?)

		102. "vocaloid" - 1 385 744 448 046 HCs     // (but, you might be saying "how would you do this?". I won't. Copyright. But, I'll still implement it via mp3s, so if some-one shoves any mp3 into a folder, it uses it. But I'll still implement the functionality)
		Unlocks a button. (The button makes good Golden Cookies effects 25% longer, while playing random vocaloid songs. Pausing removes the golden cookie effect.)     // (aka. a permanent buff. Don't worry I dislike this aswell, but I have to include it)
		Unlocks after buying "holograms"
		- from Matryoshka

		109. Biscotti!     // (tested it. It's just Heavenly Cookie. It's just a more expensive cookie. But by what I have said, I must includeth it)
		Cost: 50000 heavenly chips     // (might make it 5M, it's not a 1:1 ratio, but it's either the price here, or 500M, or 50M)
		Effect of prestige: Starts the game with 1.05x multiplier.     // (might modify it to be 2x mult instead of 1.05 mult, make it more unique and worth it (and also due to a 2x mult being suggested by the person who made this upgrade))

		107. Starter chemistry - 5m HC     // (finally, an actual quote. finally. this idea is also from the person who made the holograms and "vocaloid" upgrades.)
		Starts the game with 3 Alchemy labs.
		Unlocks after Starter bakery
		"Paradichlorobenzene is best chemical"
		- Matryoshka
		
		111. Eternal Frenzy by CaillouClicker.
		Cost: 7.778 Billion Heavenly chips
		Permanent 7x CPS mult.
		Unlocks from Distilled Essence of Redoubled Luck

		112. deep thought by iceklaus
		Cost: 42 Heavenly chips
		Every purchased cookie upgrade boosts cps by 0.05%
		Unlocks from Persistent Memory
		"the cookieverse is so, so big..."

		113. lucy in the sky with cookies by Iceklaus
		Cost: 117 Heavenly chips
		same thing, addative, 0.12% cps.
		Unlocks from deep thought
		"CPH4 tastes better inside raisins"

		114. instrumentability by Iceklaus
		Cost: 2015 Heavenly chips
		same thing, addative, 0.496% cps.
		Unlocks from lucy in the sky with cookies
		"what is this all for?"

		123. (by Freezepond)
		Name: Starter sprouts
		Notes: You start with 5 farms.
		Cost: 50,000
		Unlocks after: Starter kitchen

		116. heavenly mouse by jupiterboy
		Cost: 1111111 Heavenly chips
		You get more cookies per click the more buildings you own (provided mult: (Buildings Owned / 100) + 1)
		"ka-ching ka-ching"

		108. Cursor black magic
		1,200,000 chips
		Each click is 0.2x as powerful for every 10 cursors you own
		"a hole new meaning in clicking"
		- from thecrazyhyperbanana

		125. New Upgrade Autoclick Upgrade = 2 autoclicks per/sec
		//made it a prestige upgrade because yes, don't question the name and such too much.
		//by narcis233Cookie

		1. ??? - 7777 HCs
		- GCs appear 5% more often.
		- Unlocks with decisive fate.

		2. ??? - 77777 HCs
		- GCs effects last 10% longer.
		- Unlocks with 1.

		3. ??? - 777777 HCs
		- GCs stay 20% longer.
		- Unlocks with 2.

		4. ??? - 2777777 HCs
		- GCs appear 5% more often.
		- Unlocks with 3.

		5. ??? - 7777777 HCs
		- GCs effects last 8% longer.
		- Unlocks with 4.

		6. ??? - 7777777 HCs
		- GCs stay 40% longer.
		- Unlocks with 4.
		
		39. ??? - 7777777 HCs
		- "Frenzy!" duration is increased. (to 92.4 secs)
		- Unlocks from 4.

		40. ??? - 77777777 HCs
		- "Frenzy!" duration is increased more. (to 107.8 secs)
		- Unlocks from 39.

		41. ??? - 9777777 HCs
		- "Frenzy!" has a higher multiplier. (to x8.4)
		- Unlocks from 39.

		42. ??? - 97777777 HCs
		- "Frenzy!" has an even higher multiplier. (to x9.8)
		- Unlocks from 41.

		43. Wrath gift box - 17777777 HCs
		- Has no effect whatsoever.
		- Unlocks from 4.

		44. ??? - 17777777 HCs
		- "Ruin!" takes away nothing if you have minimal cookies banked. (CPS no longer effects ruin)
		- Unlocks from 43.

		45. ??? - 17777777 HCs
		- "Ruin!" takes away nothing if you have a lot of cookies banked. (banked cookies no longer effect ruin)
		- If you have both 44 and 45, ruin does nothing.
		- Unlocks from 43.

		46. ??? - 27777777 HCs
		- "Clot!" does nothing.
		- Unlocks from 43.

		47. ??? - 7777777 HCs
		- "Elder Frenzy!" lasts longer. (to 7.2 secs)
		- Unlocks from 43.

		48. ??? - 77777777 HCs
		- "Elder Frenzy!" lasts even longer. (to 8.4 secs)
		- Unlocks from 47.

		49. ??? - 9777777 HCs
		- "Elder Frenzy!" has a higher multiplier. (to x799.2)
		- Unlocks from 47.

		50. ??? - 97777777 HCs
		- "Elder Frenzy!" has an even higher multiplier. (to x932.6)
		- Unlocks from 49.

		51. Golden gift box - 27777777 HCs
		- No effect whatsoever.
		- Unlocks from 43.

		52. ??? - 7777777 HCs
		- "Lucky!" caps at more if you have a lot of banked cookies. (CPS cap of lucky raised to 1800x)
		- Unlocks from 51.

		53. ??? - 77777777 HCs
		- "Lucky!" caps at even more if you have a lot of banked cookies. (CPS cap of lucky raised to 2400x)
		- Unlocks from 52.

		54. ??? - 7777777 HCs
		- "Lucky!" caps at more if you don't have a lot of banked cookies. (Bank cap of lucky raised to 15%)
		- Unlocks from 51.

		55. ??? - 77777777 HCs
		- "Lucky!" caps at even more if you don't have a lot of banked cookies. (Bank cap of lucky raised to 20%)
		- Unlocks from 54.

		56. ??? - 7777777 HCs
		- "Clicking frenzy!" duration is increased. (to 15.6 secs)
		- Unlocks from 51.

		57. ??? - 77777777 HCs
		- "Clicking frenzy!" duration is increased more. (to 18.2 secs)
		- Unlocks from 56

		58. ??? - 9777777 HCs
		- "Clicking frenzy!" has a higher multiplier. (to x932.4)
		- Unlocks from 56.

		59. ??? - 97777777 HCs
		- "Clicking frenzy!" has an even higher multiplier. (to x1087.8)
		- Unlocks from 58.

		66. Evil face - 666666 HCs
		- Makes the cookie face creepy.
		- Gives +0.666666% CPS (additive) when the evil face is on.
		- Unlocks from virtues.

		103. Too ugly! - 66666666 HCs     // (yes this upgrade is odd. but I cannot change it! I can't! (as per my rules of 1:1, and slight balance tweaks, I can't!))
		- Removes the grandma face cookie.
		- Can be repurchased, allows and requires 66 to be repurchased first.
		- +6.66666% CPS multiplier on 6th purchase. (Gets added to final amount)
		- +666666 CPS on 66th purchase.
		- +1 achievement on 666th purchase.
		- +666666% CPS multiplier on 6666th purchase. (Gets added to final amount)
		- +6.666666% CPS multiplier on 66666th purchase. (Gets multiplied to the final amount!)
		- +5 achievements on 666666th purchase.
		- +6 CPS and next HC cost -67333322t cookies each purchase after the 666666th.
		- +6 shadow achievements and next HC cost -6733333.2 Qi on 6666666th purchase.
		- Unlocks from 66.

		//^ I have to make 6 achievements, and 6 shadow achievements, and figure out how to, well, make an upgrade be able to be purchased multiple times...


		80. Bridge - 1t HCs
		- No effect whatsoever.
		- Unlocked from funky stuff.
		
		81. Gold suit - 10t HCs
		- Unlocks the gold suit.
		- The gold suit gives everything a layering of gold onto it and gives an achievement. (100 Sp cookies)
		- Unlocked from bridge.

		//^ what in god's green earth do you mean "gives everything a layering of gold onto it..."?
		//Must I, oh no.
		//Note - This was when I thought I'd have to make a new sprite for everything.
		//I just slapped a big div on the game.
		//it is a layering of gold!

		117. (by Freezepond)
		Name: Wrath Switch
		Notes: It unlocks toggleables that allow you to switch beetween any grandmapocalypse state.
		Cost: 50,000 chips.
		Unlocks after: Starter kitchen

		36. Eternal Seasons - 3333333k HCs
		- Seasons last forever.
		- Unlocks from 31, 34, and 35.

		22. ??? - x HCs (x14)
		- One for each santa upgrade. Effects are identical.
		- One unlocks after the previous, in order of santa upgrade unlocks. (If order is random, have them all unlock at once except for the last one which needs all the others)
		- Cost formula is (x/3+4)^(x/3+4)+25, plus 252500 for the last one. (If order is random, then 31136797 each and 134544937 for the last one)
		- Unlocks with starsnow.

		37. ??? - 90m HCs
		- If researched to Communal Brainsweep or past it, there can be 11 wrinklers.
		- Unlocks from sacrilegious corruption.

		38. ??? - 9b HCs
		- If researched to pact, there can be 12 wrinklers. Otherwise, there's only 11.
		- Unlocks from 37.

		24. ??? - 1m HCs
		- Golden cookies spawn 5% faster in business day.
		- Unlocks with startrade.

		25. ??? - 10m HCs
		- Golden cookies spawn 4% faster in business day.
		- Unlocks with 24.

		26. ??? - 1b HCs
		- There's a 25% chance for a golden cookie to be autoclicked 52 seconds after it spawns in business day.
		- Unlocks with 25.

		104. Super Divine Sales - 10b HCs
		- Upgrades are 90% cheaper.
		- Unlocks from divine bakeries.

		105. Super Divine Bakeries - 2b HCs
		- Cookie upgrades are 99.9999% cheaper.
		- Unlocks from divine bakeries.

		106. Super Divine Discount - 100b HCs
		- Buildings are half price.
		- Unlocks from super divine bakeries.

		7. ??? - 5m HCs
		- Clicks are 20% more powerful.
		- Unlocks with halo gloves.

		8. ??? - 500m HCs
		- Clicks are 40% more powerful.
		- Unlocks with 7.

		17. ??? - 777777777 HCs
		- Makes the golden switch more powerful the longer you leave golden cookies off. (+1% extra production every hour, caps at +100%)
		- Unlocks with 16.
				
		21. Instant research - 10m HCs
		- Research takes 3 minutes shorter (After persistent memory effect)
		- Unlocks with sacrilegious corruption

		110. Timelessness Void by Camwood7
		Cost: 555,555 heavenly chips
		Increases CPS by 10%. Golden cookies appear 3% more often. Only when a season is inactive
		Unlocks from, some season upgrade at this rate.
		"When entropy arrives, tradition dies. And when tradition dies, this can occasionally--and we mean occasionally-- mean cookies. So of <b>COURSE</b> you gotta capitalize on it!"

		27. ??? - 99999999 HCs (x6)
		- +3% CPS, separate multi from everything else except 28.
		- One unlocks after the previous
		- One for each heart cookie
		- First one unlocks from starlove

		28. ??? - 4444444 HCs (x7)
		- +3% CPS, same multi as 27.
		- One for each spooky cookie
		- All unlock from starterror

		//V not starter light, it's unshackled
		
		83. ??? - 1b HCs
		- Unlocks a new building! (Should be an order of magnitude (or two) stronger than prisms)
		- Unlocks from starter light.

		//^ removed due to, well we have things stronger than prisms and a 21st building would be uneven.
		//not any more.
		
		29. Longer seasons - 333333 HCs
		- Seasons last 48 hours.
		- Unlocks after getting starterror, starsnow, starlove, startrade, and starspawn.

		30. ??? - 3333333 HCs
		- Seasons last 96 hours.
		- Unlocks from 29.

		31. ??? - 33333333 HCs
		- Seasons last 8 days.
		- Unlocks from 30.

		33. Season savings? - 3333333 HCs
		- Seasonal biscuits are much cheaper. (price increase lowered to +50%)
		- Unlocks from 29.

		34. ??? - 33333333 HCs
		- Seasonal biscuits are even cheaper, except the first few purchases, where it's more expensive. (price increase removed, doubled base cost)
		- Unlocks from 30 and 33.

		35. ??? - 333333333 HCs
		- If your season's close to running out, automatically buy the biscuit again. (Happens at 2 days left)
		- Unlocks from 30, 32, and 33.

		64. ??? - 177777777 HCs
		- Frenzies, Elder Frenzies, and Clicking Frenzies last 4% longer and are 4% more powerful.
		- Unlocks from 40, 42, 48, 50, 56, and 58.

		19. Box of gifts - 999999999 HCs
		- No effect whatsoever.
		- Unlocks with starspawn.

		18. ??? - 999999 HCs (x12)
		- +1% production each. These have their own multiplier, separate from everything else. (except for century egg prestige upgrade)
		- Unlocks with starspawn.

		20. ??? - 99999999 HCs (x7)
		- One upgrade for each rare egg, excluding choco. Effects are identical.
		- All unlock from upgrade 19
		
		Synergies Vol. III - 52,525,252 HC. Unlocks a set of synergy upgrades when you reach 225 of the cheaper building and 175 of the more expensive building. Requires the above two upgrades.
		
		65. ??? - 1515152k HCs
		- Buildings have a price increase of 14.95%.
		- Unlocks from sacrilegious corruption.

		67. ??? - 15151515k HCs
		- Buildings have a price increase of 14.9%.
		- Unlocks from 65.

		87. Satan's Legacy - 100m HCs
		- +1% CPS per Santa level.
		- Unlocks from "devil".
		- By Perfection.

		93. Heavenly strength - 99999999 HCs
		- HCs gain 1% strength after buying heavenly key.
		- Unlocks from 19.

		96. ??? - 7777777 HCs
		- 7% chance for any GCs to have a x2 effect (frenzies get duration boost only)
		- Unlocks from 4.
		- Requires 277 GC clicks. (All time)
		- Inspired from thecrazyhyperbanana.

		
		*/

























		
		/* INCOMPLETE */

		/*

		32. Season refresh - 3333333 HCs
		- Allows you to buy the current season, even when it's not done yet. (You wouldn't be able to at start anymore)
		- Unlocks from 29.

		68. Ascension gift - 0 HCs
		- Unlocks a cookie skin. (free, gives it a blue glow) (free to change back)
		- Unlocked at start.

		69. Angellic skin - 10 HCs
		- Unlocks a cookie skin. (10b cookies, gives a white glow)
		- Unlocked from angels.

		70. Devilish glow - 1k HCs
		- Unlocks a cookie skin. (1t cookies, gives a red glow)
		- Unlocked from angellic skin.

		71. Glowing armor - 1k HCs
		- Unlocks a cookie skin. (1t cookies, gives a yellow glow)
		- Unlocked from angellic skin.

		//68 - 71 will be removed and combined into the Desert Showcase upgrade from perfect cookie selector.

		72. Gnarly backgrounds - 10k HCs
		- Unlocks some background skins. (Change colors, 1t cookies per change (Replace grandmapocalypse backgrounds for 100t cookies/change))
		- Unlocked from ascension gift.

		73. Tubular milk - 100k HCs
		- Unlocks some milk changers. (change type, 10t cookies per change)
		- Unlocked from gnarly backgrounds.

		//72 and 73 will be removed due to them already existing.

		74. Way cool! - 1m HCs
		- Unlocks some cool news feed messages.
		- Unlocked from tubular milk.

		//^ will have a toggle

		75. Awesome cookie - 10m HCs
		- Unlocks some awesome cookie skins. (1 Qa cookies each: orange glow, golden cookie, unlocks all of the ones from before to background cookies each, master background set (10 Qa), makes background cookies all of them)
		- Unlocked from way cool.

		//^ figure it out, make it clearer.

		76. Groovy achievement - 100m HCs
		- Gives an achievement.
		- Unlocked from awesome cookie.

		//^ make achievement.

		77. Mondo numbers - 1b HCs
		- Makes numbers change color depending on their size.
		- Automatic BCI calculator, the best 3 buildings have numbers displayed in blue.
		- Disable numbers to remove effect.
		- Unlocked from groovy achievement.

		//^ SAVE TILL LAST. I don't want to make an AUtomatic BCI calcula. Wait. Wait I don't have to do graphics for it, I just need,  calculations! That's EASY!

		78. Outrageous graphics - 10b HCs
		- Improves the previous upgrades, before groovy achievement. (Switches cost 1 Qt cookies, awesome's background mix 100 Qt)
		- Unlocked from mondo numbers.

		//^ figure it out (improves the previous upgrades, before groovy achievement, what does that mean?)

		79. Funky stuff - 100b HCs
		- News messages can be made completely custom now, with 1 Sx to add/remove a news message. (100 chars per message max)
		- BCI calculator displays best building in super bold
		- custom graphics for everything, even icons and stuff (10 Sx to change the graphics on one thing)
		- Unlocked from outrageous graphics.

		^ DEAR GOD THIS WILL BE PAIN



		//^ easiest upgrade? hello?

		84. the universe... - 4444 HCs
		- +4% factory CPS.
		- Unlocks from starter kit.

		85. ...said 4. - 44444444 HCs
		- +4% global CPS. +44% factory CPS.
		- Unlocks from the universe...

		86. Team Force Bread - 39002837m
		- +44% global CPS. +444% factory CPS. Factories are 4% cheaper.
		- Unlocks from ...said 4.

		88. Rich chocolate - 9999999 HCs
		- Choc egg pops into 7.5% of your current bank, or more if your bank is tiny. (600x CPS or 7.5% of bank, whichever is more)
		- Unlocks from starspawn.
		- From The_Cookie_God

		89. Richer chocolate - 999999999 HCs
		- Choc egg pops into 10% of your current bank, or more if your bank is small. (1200x CPS or 10% of bank, whichever is more)
		- Unlocks from rich chocolate.

		90. Richest chocolate - 100b HCs
		- Choc egg pops into 12.5% of your current bank, or more if your bank is smaller than normal. (1800x CPS or 12.5% of bank)
		- Unlocks from richer chocolate.

		91. Dual chocolate - 10b HCs
		- Adds a bonus egg that preforms just like the main chocolate egg, but gives half as much. Also, it's even rarer. (If choc egg is rolled, there's a 1/10 chance to get this egg)
		- Unlocks from rich chocolate.

		92. Strengthed twin - 10t HCs
		- The bonus egg is twice as powerful and is more common. (Chance to get is now 1/8)
		- Unlocks from dual chocolate.

		94. Golden luck - 77777777 HCs
		- GCs give luckier results, including a chance at getting elder frenzies. (Lucky! - 30%; Frenzy! - 30%; either lucky or frenzy; Clicking frenzy! - 15%; Chain - 7.5%; Blab - 0.01%; EF - 1%)
		- Unlocks from 4.

		95. Wrath luck - 666666666 HCs
		- RCs give luckier results, including a chance of getting normal frenzies. (Lucky! - 100%; Clot - 60%; Ruin - 60%; EF - 15%; CF - 15%; Chain - 7.5%; Blab - 0.0101%; Frenzy - 10%)
		- Unlocks from 4.

		96. ??? - 7777777 HCs
		- 7% chance for any GCs to have a x2 effect (frenzies get duration boost only)
		- Unlocks from 4.
		- Requires 277 GC clicks. (All time)
		- Inspired from thecrazyhyperbanana.

		97. ??? - 777777777 HCs
		- 7% chance for any GCs to have a x2 effect (see note above)
		- Unlocks from 96.
		- Effect kicks in once you get 77 GC clicks (this game)
		- If both this and 95 kick off, you get x4 power.

		98. Heavenly Grandmas - 100t HCs
		- Grandmas are twice as efficient.
		- Unlocks from starter light.
		- Loosely inspired by thecrazyhyperbanana.

		99. ??? - 15m HCs
		- Clicking is 1% more powerful for every cursor you have.
		- Unlocks from starter kitchen.
		- By thecrazyhyperbanana.

		100. ??? - 1500m HCs
		- See 99.
		- Yes it is a multiplicative boost. So if you have 300 cursors then you get x16 total.
		- Unlocks from 99.

		115. Angelic mouse by jupiterboy
		Cost: 111111 Heavenly chips
		You get more cookies per click the faster you click (provided mult: (Clicks Per Second / 5) + 1)
		Unlocks from ?
		"walk run stride gallop"

		118. (by Freezepond)
		Name: Humble Double
		Notes: Golden Cookie effects are twice as powerful.
		Cost: 77,777 chips.
		Unlocks after: Decisive fate

		119. (by Freezepond)
		Name: Divine baking I
		Notes: Cookie upgrades are 25% more powerful.
		Cost: 1,000 chips.
		Unlocks after: Divine bakeries

		120.(by Freezepond)
		Name: Divine baking II
		Notes: Cookie upgrades are 25% more powerful.
		Cost: 10,000
		Unlocks after: Divine baking I

		121.(by Freezepond)
		Name: Divine baking III
		Notes: Cookie upgrades are 25% more powerful.
		Cost: 100,000
		Unlocks after: Divine baking II

		122.(by Freezepond)
		Name: Divine baking IV
		Notes: Cookie upgrades are 25% more powerful.
		Cost: 1,000,000
		Unlocks after: Divine baking III

		123.
		Name: ???
		Cost: 666,666 chips.
		Effect: You lose no CpS for permanently ending the grandmapocalypse. (no -5% penalty)
		Unlocks after: ?

		124. (by Baby_Sloth)
		Ankh Amulet -
		What it does: Doubles Everything
		Desc: Only for the real gods of cookie clicker.
		Cost: 385 Tredecillion

		//^ doubles everything. Number of Buildings. CPS. CPC. Prestige Effectiveness (so, 1 prestige is worth 2% more CPS instead of 1% more CPS). Wrinkler Maximum (why not). GC Buff Duration. GC Buff Effectiveness (ohhh... elder frenzy... frenzy... oh no)
		//^ why double MORE, instead of just the CPS that was in the forums? It says EVERYTHING, does it not?

		125. (by NeoSpearBlade)
		Angelic building booster - 
		Global cookie production multiplier <b>+0.5% for every building owned</b>.
		Percentage increases by <b>+0.1% for every 100 buildings owned</b>.
		Global cookie production multiplier <b>-0.05% for every wrinkler present</b>.
		Cost: Unknown.
		Parent: Unknown.

		126. (by NeoSpearBlade)
		Demonic building booster -
		Global cookie production multiplier <b>increases for every building owned during the Grandmapocalypse</b>.
		Percentage icnrease <b>depends on Grandmatriarchs status</b>.
		Cost: Unknown.
		Parent: Unknown.

		127. (by RedCookie6666)
		Golden Power - 
		Desc: Unlocks the golden power which gives up 10% of your CpS in exchange for golden effects being twice as powerful.
		Cost: 9999
		"Less idling, more clicking"
		Parent: UNKNOWN

		128. One-Day Calendar - By Cookiewoodstock
		Effect (in-game text): Allows you to have multiple seasons running at once, however, the price of starting a new season increases by 50% for every season currently active.
		Effect: The player can buy multiple seasons at once, and have multiple seasons active at the same time. This allows for people to hunt for Easter Eggs via Deer, or allow them to have Fool's Day running while Christmas is going on, and still get the deer. However, in order to do this, every additional season beyond the first one will cost 50% more per active season. For instance, if there is Christmas active, and you buy Easter, and the cost for Christmas is (for sake of example and ease of reading) 10 cookies, to activate Easter would be 50% of the next price, which is 100% of the last one. This means that while it'd normally be 20 cookies to activate Easter alone, it'd cost 25 cookies to purchase Easter with the Christmas Season going on.
		Flavor text: "You'd think this calendar is right only once a year, but its date is April 31st.
		Unlocked by: Once you've purchased all the season-buffing HUs (Starspawn, Starsnow, Starterror, Starlove, and Startrade), this upgrade is unlocked.
		Cost: 777,777 heavenly chips

		129. Broken Watch - By Cookiewoodstock
		Effect (in-game text): Seasons last 50% longer, making them last 36 hours.
		Effect: Not too hard to understand, seasons just last 50% longer, or 12 hours longer.
		Flavor text: "Well, good, you did it, you broke time. Time no longer exists. You messed up."
		Unlocked by: Purchasing One-Day Calendar unlocks this upgrade.
		Cost: 1 million heavenly chips

		130. Time-Space Sale - By Cookiewoodstock
		Effect (in-game text): Seasons cost 25% less cookies.
		Effect: Also not too hard to understand, seasons will cost 25% less. This is accounted for after all the price increases and decreases, meaning that instead of One-Day Calendar just adding 25% of the cost, it will instead take 75% of 50% of the cost.
		For the math nerds, the equation would be [(season costs * other price buffs and nerfs) * 0.75].
		And when using One-Day Calendar, it's [(season costs * other price buffs and nerfs * (1 + 0.5(seasons active))) * 0.75].
		Flavor text: They're selling all sorts of things! Atlantis, 1960, and even have New York circa 1950, 50% off!
		Unlocked by: Purchasing One-Day Calendar unlocks this upgrade.
		Cost: 1 million heavenly chips












































		Below are scrapped for TIMES sake.
		screw-eth all of you and your ideas, unless people forceth me to add them.
		PLEASE DO NOT I BEGGETH OF YOU
		okay, okay FINE I might do these in some future updates... fuckin hell, I also have to go back and re-find the specific archives for them... SHIT
		the problem is, there's too many todos, and too many unknowns...
		and too much for so little gain.
		(I don't mean to be mean, but it's... it's just a lot to add... I have to stop it eventually,
		and there's, as said before, a lot of unknowns...
		sorry about that ): (though, as said, I might add them in, not a guarantee, but maybe))




		126. (126 -> 190 from CarrotCrusader (why did you have to suggest like 25 to 30 upgrade ideas?))
		Kitten Devils -
		Desc: You gain more cps the more milk you have
		"It's hard to live nine lives without sin."
		Cost: 900000
		Parent: Beelzebub

		127. --todo one per milk (34)

		160. (kinda)
		Chimera Changes -
		Wrinklers can consume the cookie whilst away.
		(do the bibibdy boboidyooing of:
		A much more satisfying upgrade in my opinion, and one I was kind of hoping I would get before I saw what Chimera was, would be to make the wrinklers eat into the cookies made during your absence. This would VASTLY improve production while the game is closed. I realize it might be a little too powerful, so in return I thought we could tone down the percentage gained while absent. Gates of Transcendence could still give 5%, but each angel level could add another 6%, finally reaching an even 50% when Chimera gives 3%. You can further cut it down by having each level add 5%, and Chimera not adding to it, bringing the total to 40%. Devil upgrades could be cut in half by starting with half an hour instead of the initial full hour that gets doubled with every upgrade, or they could be left alone.)
		Cost: Twice as expensive as normal

		161.
		Moisture Dance -
		Desc: Allows you to summon the Grandwrinkler.
		"Who in their right mind would willingly invite these wrinkled terrors into their house?"
		Cost: Unknown
		Parent: UNKNOWN
		(do the bibibdy boboidyooing of:
		This unlocks the Grandwrikler. Grandwrinklers don't appear on their own, they must be summoned in a ritual that costs, say, 666 minutes worth of cookie production. What the Grandwrinkler is is basically a oversized wrinkler that eats 50% of your cps single-handedly. This means that with 12 ordinary wrinklers (which you'll have because Elder Spice is a prerequisite) the total withering of production would come down to 110%. With each wrinkler (including the grand one) returning 1.1 x 1.05 (from Sacrilegious Corruption) of the cookies eaten and 13 wrinklers in total, you'd be making 16.5165 times your cps. Wrinklerspawn will add another 5% to this, for a total of about 17 and 1/3 you cps.
		But here's the catch. They'll be eating 110% your cps. That means they'll be eating faster than you produce. So they'll actually be eating 10% into your banked cookies. And since you can't ever have a negative amount in your bank, if you reach 0 cookies all the wrinklers will simply swim away and you'll lose everything they ate. Then your production continues normally from there, with new wrinklers coming in time (normal ones). So you'll have to pay attention not to let your bank run too low before bursting the Grandwrinkler.)

		162.
		A Quiant Palette
		Desc: Grandwrinkler can now eat hand-made cookies.
		"Every Cookie is unique, made with love and deedication"
		(do the bibibdy boboidyooing of:
		Cookies per click in the stats will show the total amount generated by clicking (of cookies going both into and out of wrinklers), and besides it it will say how much of that amount is withered, in the same way it currently works for the cookies per seconds stat. Hand-made cookies stat will not count cookies consumed by wrinklers.)
		Cost: Unknown
		Parent: Moisture Dance

		163.
		A Bottomless Pit of Dough
		Desc: Grandwrinkler regurgitates 15% more cookies.
		"These are probably okay to eat, right?"
		Cost: Unknown
		Parent: Moisture Dance

		164.
		A Network of Wrinkles
		Desc: Every hour the Grandwrinkler is in play it assimilates one adjacent wrinkler.
		(do the bibibdy boboidyooing of:
		The assimilated wrinklers will gain the Grandwrinkler's upgrades. That means that if you managed to sit through twelve hours with the Grandwrinkler in play, all 13 wrinklers should now return 15% percent more cookies for a total of just a hair under 20 times your cps. This also means that after eleven or twelve hours clicking will actually reduce the cookies in your bank (not sure if this makes sense, really...). So a Clicking Frenzy could be dangerous and quickly deplete your bank. But as long as you're careful not to reach 0, it will simply speed things along.)
		Cost: Unknown
		Parents: A Quiant Palette, A Bottomless Pit of Dough

		165.
		Cream Mouthwash
		Desc: Milk is an additional 2.5% more powerful while Breath of Milk is active, for a total of 7.5%
		""
		Cost: Unknown
		Parent: UNKNOWN

		166.
		Dragonskin Gloves
		Desc: Gives an additional 5% to clicking power while Dragon Cursor is active, for a total of 10%.
		"Gives you that edge you need when clicking."
		Cost: Unknown
		Parent: UNKNOWN

		167.
		Dragon Grandmas
		Desc: Grandmas are twice as efficient. Other dragon auras are 1% more powrful for every 15 grandmas.
		Only in effect wihle Battaliion is active. Note: does not effect Earth Shatterer.
		"A nice grandma to take care of Krumblor"
		Cost: Unknown
		Parent: UNKNOWN

		168.
		Fiery Farming
		Desc: Dragon Harvest recieves an addition 1 to it's production multiplier per 50 farms.
		"Using dragon fire instead of water might make these cookies a little dry, but they sure do grow fast!"
		Cost: Unknown
		Parent: UNKNOWN

		169.
		Dragonmastercard
		Desc: Buildings sell back for an additional 5% while Earth Shatterer is active, for a total of 90%
		"Gets you VIP discounts. Also gets you backstage to any band with 'dragon' in their name."
		Cost: Unknown
		Parent: UNKNOWN

		170.
		Ancient Coupons
		Desc: Upgrades are an additional 1% cheaper while Master of the Armory is active, for a total of 3%.
		"I forgot I even had these!"
		Cost: Unknown
		Parent: UNKNOWN

		171.
		Dragon Cement
		Desc: Buildings are an additional 1% cheaper while Fierce Hoarder is active, for a total of 3%
		"This should hold your buildings together nicely. Just don't ask where it came from."
		Cost: Unknown
		Parent: UNKNOWN

		172.
		Offerings to the Mighty Dragon
		Desc: Gives an additional 10% to you prestige cps while Dragon God is active, for a total of 15%.
		"Mostly candy and virgins..."
		Cost: Unknown
		Parent: UNKNOWN

		173.
		Advanced Fortune Telling
		Desc: Golden Cookies spawn an additional 2.5% more frequently while Arcane Aura is active, for a total of 7.5%.
		"Fortune is there, if you know how to look for it."
		Cost: Unknown
		Parent: UNKNOWN

		174.
		Balloon Helmet
		Desc: Dragonflight lasts 5% longer.
		"The dragon's hot breath provides lfit for the balloon. Helps it stay in the air a little longer."
		Cost: Unknown
		Parent: UNKNOWN

		175.
		Golden Opportunism
		Desc: Golden cookies give an additional 15% more cookies while Ancestral Metamorphosis is active, for a total of 25%.
		"Seize it while you can."
		Cost: Unknown
		Parent: UNKNOWN

		176.
		Feeding from Dark Hands
		Desc: Wrath cookies give an additional 56^ more cookies while Ancestral Metamorphosis is active, for a total of 66%.
		"Cookies are cookies, no matter where they come from."
		Cost: Unknown
		Parent: UNKNOWN

		177.
		Draconic Times
		Desc: Reindeer are 50% slower while Epoch Manipulator is active.
		"Why are they in such a hurry anyway?"
		Cost: Unknown
		Parent: UNKNOWN

		178.
		Anti Drops
		Desc: Decreases the chance of random drops repeating themselves while Mind Over Matter is active.
		"If the material world offers nothing new, might as well check the anti-material world."
		Cost: Unknown
		Parent: UNKNOWN

		179.
		Luminous Hunger
		Desc: Radiant Appetite is 0.1% more effective per prism.
		"Proper lighting can really get that tummy rumbling."
		Cost: Unknown
		Parent: UNKNOWN

		180.
		The Ancient Art of Multitasking
		Desc: Allows you to train Krumblor to use three auras simultaneously.
		"Not as easy as it looks."
		Cost: Unknown
		Parent: UNKNOWN
		(consumes 300 of every building, oh fuck we have to implement a third aura)

		181.
		Celestial Barganing
		Desc: Prestige levels require 1% less cookies per 20 temples. Only in effect when both Dragon God and Earth Shatterer are active.
		"A little praying goes a long way."
		Cost: Unknown
		Parents: Dragonmastercard, Offerings to the Mighty Dragon

		182.
		Sacrificial Discounts
		Desc: Switching auras now sacrifices one of your second most powerful buildings instead (in effect no matter what)
		"Our altars are having a special sale, come on down!"
		Cost: Unknown
		Parents: Ancient Coupons, Dragon Cement

		183.
		Anti Anti Aging Cream
		Desc: Wrinklers appear twice as fast when both Epoch Manipulation and Mind over Matter are active.
		"Gives you wrinkles in a day!"
		Cost: Unknown
		Parent: UNKNOWN
		
		184.
		Dragonlings
		Desc: You gain more cps the more milk you have. Only in effect while both Breath of Milk and Elder Battalion are active.
		"Not quite as productive as kittens, but they're doing their best!"
		Cost: Unknown
		Parents: Cream Mouthwash, Dragon Grandmas.
		(add 2% of your milk percentage to your total production.)

		185.
		Cursor Commander
		Desc: Clicking during a Dragonflight triggers a click from every cursor, adding 1 to the Dragonflight's clicking multiplier per cursor. Only in effect while both Dragonflight and Dragon cursor are active.
		"If you click it, they will follow."
		Cost: Unknown
		Parents: Dragonskin Gloves, Balloon Helmet

		186.
		Shadow Clicking
		Desc: An ancient technique that hits the cookie twice for every click. Doubles clicking power while both Dragon Cursor and radiant Hunger are active.
		"The stronger the light, the more pronounced the shadow."
		Cost: Unknown
		Parents: Luminous Hunger, Cursor Commander

		187.
		Unholy Fertilizer
		Desc: Wrath cookies are 20 times more likely to trigger a Dragon Harvest when both Reaper of Fields and Unholy Dominion are active.
		"Don't worry, the smell will wear off by the time they hit the stores."
		Cost: Unknown
		Parents: Fiery Farming, Feeding from Dark Hands

		188.
		Magic Gold Overload
		Desc: Golden cookies stay 50% longer when both Arcane Aura and Ancestral Metamorphosis are active.
		"An interior designer's worst nightmare."
		Cost: Unknown
		Parents: Advanced Fortune Telling, Golden Opportunism

		189.
		Golden Pastures
		Desc: Dragon Harvest lasts twice as long when both Arcane Aura and Ancestral Metamorphosis are active.
		"Nothing but gold, as far as the eye can see."
		Cost: Unknown
		Parents: Magic Gold Overload, Fiery Farming

		190.
		Golden Wings
		Desc: Dragonflight lasts twice as long if triggered during a Dragon Harvest while both Arcane Aura and Ancestral Metamorphosis are active.
		Cost: Unknown
		Parents: Golden Pastures, Cursor Commander

		191.
		Season Controller -
		Desc: Season prices now have a cap, albeit still very high
		Cost: 11,111,111 Heavenly Chips
		Parent: Season Switcher

		192. (by RedCookie6666)
		Shy Changes -
		1% -> 7%
		When unlocked, stay permanently unlocked.

		194. (by Ovnidemon)
		UNKNOWN -
		Desc: UNKNOWN (meant to make getting eggs faster)
		2 recommendations ("The rare egg are more common" "There is 2 more redraw with the egg")
		Cost: UNKNOWN
		Parent: UNKNOWN

		--TODO: Do what I've been doing for the above, but yeah.

		Final kitten - 900,000,000 HC. Unlocks another kitten upgrade (900 dec cookies, 30% instead of the usual 20%, achievement once you buy the kitten upgrade). Requires kitten angels.
		
		Box of heavenly cookies - 1,000 HC. Gives an additive (to the prestige levels value) 0.2% boost per unspent heavenly chip. Requires all 4 boxes of cookies.
		
		??? - 1,000,000 HC. Increases above boost to 0.4%. Requires the box of heavenly cookies.
		
		??? - 1 billion HC. Adds a multiplicative boost of max(1.4,log(HCs)/5,(HCs^(1/4))/100). Removes the above bonus. Requires the above upgrade.
		
		Neuroscience - 25 HC. Unlocks an upgrade (1 quad cookies, speeds up research to 6 seconds). Requires persistent memory.
		
		Custom alert volumes - 99,999 HC. Lets you customize the volume of the golden cookie and reindeer alerts (separately) separately from the main volume slider. Requires golden alert sounds.
		//uhhhhhhhhhhhh

		Tab alerts - 99,999 HC. Changes the favicon on the CC tab when you get a GC/reindeer. Requires golden alert sounds.
		//figure out how do?

		??? - 5,000,000 HC. Clicking is 5% more powerful. Requires halo gloves.
		
		??? - 30,000,000 HC. When you reset, you get a golden cookie that doesn't count towards the golden cookie count (However, it does unlock the GC upgrades!). Requires permanent upgrade IV.
		
		??? - 350,000,000 HC. When you reset, the time to the next golden cookie is reduced by 90% (When you click the previous one, it'll start ticking down). Requires the above upgrade and permanent upgrade slot V.

		Wrinklers:
		
		Power of shine - 4,444,444 HC. Shiny wrinklers are twice as common, and give 5% more cookies when popped. Requires unholy bait.
		
		??? - 444,444,444 HC. Shiny wrinklers are 50% more common, and suck 6% of CPS. Requires power of shine.
		
		??? - 444,444,444 HC. +1 max wrinklers. Requires elder spice.
		
		??? - 444,444,444 HC. Wrinklers give 5% more cookies when popped. Requires sacrilegious corruption.
		
		??? - 4,444,444,444 HC. Shiny wrinklers are 25% more common, and (nonshiny) wrinklers suck 6% of CPS. Requires the above three upgrades.

		

		Offline:
		
		??? - 40,353,607 HC. Every wrinkler sucks 2% of your CPS while offline (yes, this subtracts from your offline cookies gain). Requires chimera.
		
		??? - 40,353,607 HC. Once the offline time runs past 7d8h, you get 15% of offline gain until 29d8h offline. Requires chimera.
		
		Synergies Vol. III - 52,525,252 HC. Unlocks a set of synergy upgrades when you reach 225 of the cheaper building and 175 of the more expensive building. Requires the above two upgrades.

		
		Dragons:
		
		??? - 999 HC. The breath of milk now boosts the power of milk by 2%, and loses the old effect. Requires how to train your dragon.
		
		??? - 9,999 HC. The dragon cursor now boosts clicks by 10%. Requires how to train your dragon.
		
		??? - 9,999 HC. The ender battalion gives +2% for every building past shipments and +3% for prisms. Requires how to train your dragon.
		
		??? - 9,999 HC. Dragon harvests last 10% longer. Requires how to train your dragon.
		
		??? - 299,999 HC. The earth shatterer increases sell value to 86.5%. (85% is already 97.7% return, so...) Requires how to train your dragon.
		
		??? - 29,999 HC. The master of the armory decreases upgrade prices by 4%. Requires how to train your dragon.
		
		??? - 29,999 HC. The fierce hoader decreases building prices by 4%. Requires how to train your dragon.
		
		??? - 999 HC. The dragon god increases your prestige bonus linearly from your prestige percentage, by 6%. Requires how to train your dragon.
		
		??? - 999,999 HC. The arcane aura makes GCs spawn 7.5% more often. Requires how to train your dragon.
		
		??? - 299,999 HC. Dragonflights give a x1234 bonus (from x1111). Requires how to train your dragon.
		
		??? - 9,999 HC. Ancestral Metamorphosis makes GCs give 20% more cookies. Requires how to train your dragon.
		
		??? - 299 HC. The epoch manipulator now effects cookie chains. Requires how to train your dragon.
		
		??? - 9,999 HC. Unholy Dominion makes WCs give 20% more cookies. Requires how to train your dragon.
		
		??? - 999,999 HC. Mind over Matter makes random drops 35% more common. Requires how to train your dragon.
		
		??? - 999,999 HC. Radiant appetite gives a x2.15 bonus (from x2). Requires how to train your dragon.
		
		??? - 999,999,999 HC. Unlocks a final stage of the dragon (500 of everything - 3 auras at once, but one of them doesn't get the prestige buff). Requires the above 15 upgrades.
		//no no no, hold on. we'd have 4 auras. Doubled to eight (because of Ankh). :(

		??? - 9,999,999 HC. Switching your dragon aura costs one of your cheapest building, instead of your highest. Requires how to train your dragon.
		
		??? - 9,999,999,999 HC. Switching your dragon aura is free. Requires the above upgrade.

		
		
		Seasons:
		
		Prolonged seasons - 111,111 HC. When switching a season with the season switcher, it stays for 48 hours. Requires season switcher.
		
		Everlasting seasons - 11,111,111 HC. When switching a season with the season switcher, it stays for 96 hours. Requires prolonged seasons.
		
		??? - 1,111,111 HC. When in easter season: +0.24% base to the egg multiplier (plus some capped at 0.2% depending on how long it's been since last reset), GCs spawn 0.1% faster, wrinklers regurgitate 0.1% more cookies, +0.18 CPS, clicking is 0.2% more powerful, and all buildings and upgrades are 0.02% cheaper. Egg drops are 0.2% more common and chocolate egg is 2% more powerful. Requires starspawn.
		
		??? - 1,111,111 HC. When in christmas season: +1.6272% CPS, +0.2% CPS per santa level, clicking is 0.2% more powerful, grandmas are 5% more efficient, all buildings are 0.0399% cheaper, all upgrades are 0.1399% cheaper, and milk is 0.1% more powerful. Reindeer are 5% slower, spawn 5% more often, and give 5% more cookies. Christmas cookie drops are 0.2% more common. Requires starsnow.
		
		??? - 1,111,111 HC. In halloween season, +2.8% to the cookie multiplier. In valentines season, +3% to the cookie multiplier. (both are additive with other cookies). When switching to halloween or valentines, the price of season switching only increases by 80%. Requires starlove and [halloween prestige upgrade]
		
		??? - 3,111,111 HC. In business day season, GCs spawn 1.5% faster. Requires startrade.
		
		Efficient buisness - 111,111,111 HC. In buisness day season, GCs spawn 0.5% faster and buildings are 1% cheaper. Requires the above upgrade.
		
		Master of seasons - 1,111,111,111 HC. When switching seasons, the price increases by 70%. (50% for halloween/valentines). Seasons last 120 hours. Requires the above six upgrades, excluding efficient buisness.

		
		
		Building boosts:
		
		Cursor clickers - 100,000 HC. Cursors gain 9% production per cursor. Requires Synergies Vol. I.
		
		??? - 140,000 HC. Grandmas gain 7% production per grandma. Requires Synergies Vol. I.
		
		Unsupervised seeding - 25,000 HC. Farms gain +14% production per farm. Requires Synergies Vol. I.
		
		Cooperating miners - 40,000 HC. Mines gain 13% production per mine. Requires Synergies Vol. I.
		
		Cookie pollution - 55,000 HC. Factories gain 12% production per factory. Requires Synergies Vol. I.
		
		Decreased interest - 70,000 HC. Banks gain 11% production per bank. Requires Synergies Vol. I.
		
		??? - 85,000 HC. Temples gain 10% production per temple. Requires Synergies Vol. I.
		
		??? - 120,000 HC. Wizards gain 8% production per wizard. Requires Synergies Vol. I.
		
		Ship radars - 160,000 HC. Shipments gain 6% production per shipment. Requires Synergies Vol. I.
		
		??? - 175,000 HC. Alchemy labs gain 5% production per alchemy lab. Requires Synergies Vol. I.
		
		Portaling portals - 190,000 HC. Portals gain 4% production per portal. Requires Synergies Vol. I.
		
		Time duplication - 199,000 HC. Time machines gain 3% production per time machine. Requires Synergies Vol. I.
		
		??? - 200,000 HC. Antimatter condensers gain 2% production per antimatter condenser. Requires Synergies Vol. I.
		
		Shared light - 200,000 HC. Prisms gain 1% production per prism. Requires Synergies Vol. I.
		
		??? - 1,000,000 HC. Everything gains 0.01% production per building. Requires Synergies Vol. II and the above 14 upgrades.

		--TODO: ADD THE OTHER 1234abcdcba4321 UPGRADES
		//I think done???????????????
		//who cares, we scrap all of them. (all the above upgrades are scrapped, until the comment that says all of the below upgrades are scrapped)
		*/


		//scrapping:
		//due to inability to implement them in a meaningful manner, and them already being implemented by orteil before me (DAMN YOU, YOU WERE FIRST, man :( )
		/*

		60. ??? - 7777777 HCs
		- Cookie chains cap at more if you have a lot of banked cookies. (bank cap for chains increased to 37.5%)
		- Unlocks from 51.

		61. ??? - 77777777 HCs
		- Cookie chains cap at more if you have a lot of banked cookies. (bank cap for chains increased to 50%) (+ chain auto-ending has -0.8% chance)
		- Unlocks from 60.

		62. ??? - 7777777 HCs
		- Cookie chains cap at more if you don't have a lot of banked cookies. (CPS cap for chains increased to 4.5 hours)
		- Unlocks from 51.

		63. ??? - 77777777 HCs
		- Cookie chains cap at more if you don't have a lot of banked cookies. (CPS cap for chains increased to 6 hours) (+ chain auto-ending has -0.8% chance)
		- Unlocks from 62.


		*/

		// l('storeTitle').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;bottom:2px;right:2px;display:block;" class="smallFancyButton" id="storeClicker"></a>');
		// this.updateScore();
		
		// AddEvent(l('storeClicker'),'click',function(){
		// 	PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		// 	MOD.buttonClicks+=1;
		// 	MOD.updateScore();
		// 	if (MOD.buttonClicks%20==0 && MOD.buttonClicks>0) Game.Notify(choose([`Splendid!`,`Keep going!`,`Amazing!`,`Incredible!`,`Outstanding!`]),'',0,2);
		// });

		//^ don't know why I'm keeping this around at all... uhhh... eh just in case

		CE.NewTag("New!","#ee00ff",false,[],function(me){
			return me.new === 1;
		},"or");

		MOD.New = function(){Game.last.new = 1} //tad bit easier
 
		var ORDER = 10000000000000000000000
		MOD.applyCredit = function(person){
			Game.last.DashNet = 1;
			Game.last[`${person}`] = 1;

			if (!CE.tags["DashNet Forums"]) {
				CE.NewTag("DashNet Forums", "#3b88c3", false, [], function(me) {
					return me.DashNet === 1;
				},"or");
			}
			const tagName = `Credit: ${person}`;
			if (!CE.tags[tagName]) {
				CE.NewTag(tagName, "#c500ff", false, [], function(me) {
					return me[person] === 1;
				},"or");
			}
			MOD.HeavenlyUpgradesFromHere += 1;
		}

		MOD.HeavenlyUpgradesFromHere = 0;
		MOD.AchievementsFromHere = 0;
		MOD.cookclickval = 1;

		MOD.ApplyOrder = function(){
			Game.last.order = ORDER;
			ORDER += 1;
		}

		var AchievORDER = 10000000000000000000000

		MOD.ApplyAchievOrder = function(){
			Game.last.order = AchievORDER;
			AchievORDER += 1;
			MOD.AchievementsFromHere += 1;
		}

		MOD.VocaloidList = [];

		fetch(MOD.dir + '/MusicforVocaloid/tracklist.json')
		.then(response => response.json())
		.then(data => {
			MOD.VocaloidList = data;
			console.log("Loaded Vocaloid tracks:", MOD.VocaloidList);
		})
		.catch(err => console.error("Failed to load Vocaloid track list:", err));

		MOD.randomIndex = undefined
		MOD.randomSong = undefined
		MOD.currentSound = undefined
		MOD.currentSoundName = undefined
		MOD.vocaloidON = false;
		//if (MOD.VocaloidList.length > 0) {
			MOD.playRandomVocaloidSong = function(){
			if (MOD.VocaloidList.length > 0) {
				Music.pause();
				if (l('jukeboxMusicPlay'))l('jukeboxMusicPlay').innerHTML=loc("Play"); //pauses jukebox, and therefore music.
				MOD.randomIndex = Math.floor(Math.random() * MOD.VocaloidList.length);
				MOD.randomSong = MOD.VocaloidList[MOD.randomIndex];
				MOD.currentSoundName = MOD.randomSong.replace(/.mp3/g, "").replace(/.ogg/g, "").replace(/.wav/g, "")
				if (MOD.currentSound) {
				MOD.currentSound.pause();
				}
				MOD.currentSound = new Audio(MOD.dir + '/MusicforVocaloid/' + MOD.randomSong);
				MOD.currentSound.play();
				var VolumePercent = Game.volumeMusic
				var VolumeClamped = VolumePercent / 100
				MOD.currentSound.volume = VolumeClamped
				MOD.currentSound.addEventListener('ended', function() {
				MOD.playRandomVocaloidSong();
				});
				MOD.vocaloidON = true;
			}
			}
			MOD.stopVocaloidSongs = function(){
				if (MOD.currentSound) {
					Music.unpause();
					if (l('jukeboxMusicPlay'))l('jukeboxMusicPlay').innerHTML=loc("Stop"); //unpauses jukebox, and therefore music.
					// Stop the current sound
					MOD.currentSound.pause();
					MOD.currentSound = undefined; // Reset the current sound to undefined after stopping it
					MOD.vocaloidON = false;
				}
			}
		//}

        MOD.goldOverlay = document.createElement('div');
        MOD.goldOverlay.id = 'goldOverlay';
        document.body.appendChild(MOD.goldOverlay);

        // Create a style element for the CSS
        MOD.style = document.createElement('style');
        MOD.style.innerHTML = `
            #goldOverlay {
                position: fixed; /* Fixed position to cover the entire viewport */
                top: 0;
                left: 0;
                width: 100vw; /* Full width of the viewport */
                height: 100vh; /* Full height of the viewport */
                background-color: rgba(255, 215, 0, 0.85); /* Gold color with transparency */
                pointer-events: none; /* Allow clicks to pass through */
                display: none; /* Initially hidden */
                z-index: 999999999999999; /* Ensure it is on top of other elements */
            }
        `;
        document.head.appendChild(MOD.style);

		MOD.disableGold = function(){
			MOD.style.innerHTML = `
            #goldOverlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(255, 215, 0, 0.85);
                pointer-events: none;
                display: none; 
                z-index: 999999999999999;
            }
        `;
		}

		MOD.enableGold = function(){
			MOD.style.innerHTML = `
            #goldOverlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(255, 215, 0, 0.85);
                pointer-events: none;
                display: block; 
                z-index: 999999999999999;
            }
        `;
		}

		// Function to apply the gold overlay effect
		MOD.applyGoldSuitEffect = function() {
			if (Game.Upgrades["Gold suit [off]"].bought) {
				MOD.enableGold();
			}
			if (Game.Upgrades["Gold suit [on]"].bought) {
				MOD.disableGold();
			}
		}

		let evilFace = "We're having this here just so that it's \"Global\" within the mod's scope, so that some code can work"
		MOD.EvilFaceAAA = function(){
			if (Game.Has('Evil face') && MOD.TooUglyTimesBought <= 0) {
				evilFace = document.createElement('div');
				evilFace.className = 'EvilFace';
				evilFace.style.backgroundImage = `url('${MOD.dir}/imperfectCookie.png')`;
				evilFace.style.position = 'absolute';
				evilFace.style.width = '256px'
				evilFace.style.height = '256px'
				evilFace.style.top = '-128px'
				evilFace.style.left = '-128px'
				evilFace.style.zIndex = 10001;
				evilFace.style.pointerEvents = 'none'; //dont do 'block', we need clicking
				evilFace.style.backgroundSize = 'contain';
				evilFace.style.backgroundRepeat = 'no-repeat';
				document.children[0].children[1].children[0].children[1].children[16].children[8].appendChild(evilFace);
				}
		}

		MOD.GoldenSwitchPatience = 0; //percentage

		CCSE.NewAchievement("Ugly!","Buy \"Too ugly!\" <b>666</b> times.<q>This is quite ugly</q>",[11,6]);
		MOD.ApplyAchievOrder();
		
		CCSE.NewAchievement("Uglier!","Buy \"Too ugly!\" <b>666666</b> times.<q>This is quite a bit more uglier</q>",[11,8]);
		MOD.ApplyAchievOrder();
		
		CCSE.NewAchievement("Too ugly!","Buy \"Too ugly!\" <b>666666</b> times.<q>Hey that's the name of the upgrade!</q>",[11,8]);
		MOD.ApplyAchievOrder();
		
		CCSE.NewAchievement("VERY ugly!","Buy \"Too ugly!\" <b>666666</b> times.<q>Okay this is getting out of hand...</q>",[11,8]);
		MOD.ApplyAchievOrder();

		CCSE.NewAchievement("FAR TOO UGLY!","Buy \"Too ugly!\" <b>666666</b> times.<q><small>Listen, I have to create several achievements for one effect, they aren't going to be the absolute best in quality here</small></q>",[11,8]);
		MOD.ApplyAchievOrder();

		CCSE.NewAchievement("Just ugly enough.","Buy \"Too ugly!\" <b>666666</b> times.<q>This is the perfect amount of ugliness</q>",[11,8]);
		MOD.ApplyAchievOrder();


		CCSE.NewAchievement("Frankly this is ugly","Buy \"Too ugly!\" <b>66666666</b> times.<q>It was perfectly ugly, but now it's imperfect.</q>",[29,6]);
		Game.last.pool = 'shadow';
		MOD.ApplyAchievOrder();

		CCSE.NewAchievement("This is getting far too ugly","Buy \"Too ugly!\" <b>66666666</b> times.<q>This is too ugly, it's getting worse</q>",[29,6]);
		Game.last.pool = 'shadow';
		MOD.ApplyAchievOrder();

		CCSE.NewAchievement("We've made this too ugly","Buy \"Too ugly!\" <b>66666666</b> times.<q>This is terribly ugly...</q>",[29,6]);
		Game.last.pool = 'shadow';
		MOD.ApplyAchievOrder();

		CCSE.NewAchievement("It's getting uglier","Buy \"Too ugly!\" <b>66666666</b> times.<q>This is too ugly...</q>",[29,6]);
		Game.last.pool = 'shadow';
		MOD.ApplyAchievOrder();

		CCSE.NewAchievement("Even uglier","Buy \"Too ugly!\" <b>66666666</b> times.<q>How can this get <b>even uglier</b>?</q>",[29,6]);
		Game.last.pool = 'shadow';
		MOD.ApplyAchievOrder();

		CCSE.NewAchievement("The ugliest","Buy \"Too ugly!\" <b>66666666</b> times.<q><small>Why must these all be shadow achievements?</small></q>",[29,6]);
		Game.last.pool = 'shadow';
		MOD.ApplyAchievOrder();


		//the below shadow achievement isn't from the "Document" of the upgrade, just because why not!
		//then again, the majority of the achievements aren't from the "Document", as it just has Prestige Upgrade ideas...
		//oh wait yeah no they ARE in the document, I actually *did* forget about that, sorry!!!!
		//V well, this isn't in the document, nor is the one below it... considered un-needed (referring to Officially bought) for 100%-ing as it *could* be inconsistent, but I actually got it legit at 7.1249e+42 purchases!
		//nevermind I got to 1.4249e+43 purchases this is rigged and still not Officially bought;
		CCSE.NewAchievement("Officially bought","Buy \"Too ugly!\" <b>66666666666666664</b> times.<q>For some reason it doesn't go above that point... then again do you really need more than +400 Quadrillion cps? Do you really?</q><br><br>Also, for the sakes of things, this doesn't count for 100%ing the mod, or Cookie Clicker... it's past the line of being \"achievable\" by normal standards.",[21,6]);
		Game.last.descFunc = function(){return `Buy \"Too ugly!\" <b>${Game.mods["GabeDFPU"].TooUglyTimesBought}</b> times.<q>For some reason it doesn't go above that point...<br>then again do you really need more than +${Beautify((Game.mods["GabeDFPU"].TooUglyTimesBought - 666666) * 6)} cps? Do you really?<br><br>Also, for the sakes of things, this doesn't count for 100%ing the mod, or Cookie Clicker... it's past the line of being "achievable" by normal standards.</q>`}
		Game.last.pool = 'shadow';
		MOD.ApplyAchievOrder();

		CCSE.NewAchievement("Useless","Buy a useless cookie.<q>Why have it?</q>",[25,35]);
		Game.last.descFunc = function(){if (App) {return "Buy web cookies.<q>We may have javascript, but it's a different shape.</q>"} else {return "Buy steamed cookies.<q>You didn't purchase it, and besides they taste the same so there's no real point.</q>"}}
		if (App) {Game.last.icon = [25,35]} else {Game.last.icon = [26,35]}
		if (App) {Game.Achievements["Useless"].reqUpgrade = "Web cookies"} else {Game.Achievements["Useless"].reqUpgrade = "Steamed cookies"}
		Game.last.pool = 'shadow';
		MOD.ApplyAchievOrder();

		//might add an achievement for having every upgrade from this mod.

		MOD.TooUglyTimesBought = 0; //for 'Too ugly!'
		MOD.TooUglyTimesBoughtTOTAL = 0;
		MOD.TooUglyUpdate = function(){
			//console.log("uhhhh")

			//Kids, don't use this many setTimouts ever (listen, I needed to do it because, else it'd be all at once (not neat, staggering it is good))
			//Check for achievement
			if (MOD.TooUglyTimesBought >= 6) {Game.Upgrades["Too ugly!"].icon = [11,7]}
			if (MOD.TooUglyTimesBought >= 66) {}
			if (MOD.TooUglyTimesBought >= 666) {Game.Win("Ugly!");}
			if (MOD.TooUglyTimesBought >= 6666) {Game.Upgrades["Too ugly!"].icon = [11,8]}
			if (MOD.TooUglyTimesBought >= 66666) {}
			if (MOD.TooUglyTimesBought >= 666666) {
				Game.Win("Uglier!")
				setTimeout(()=>{
					Game.Win("Too ugly!")
					setTimeout(()=>{
						Game.Win("VERY ugly!")
						setTimeout(()=>{
							Game.Win("FAR TOO UGLY!")
							setTimeout(()=>{
								Game.Win("Just ugly enough.")
							},250)
						},250)
					},250)
				},250)
			}
			if (MOD.TooUglyTimesBought >= 6666666) {Game.Upgrades["Too ugly!"].icon = [29,6]}
			if (MOD.TooUglyTimesBought >= 66666666) {
				Game.Win("Frankly this is ugly")
				setTimeout(()=>{
					Game.Win("This is getting far too ugly")
					setTimeout(()=>{
						Game.Win("We've made this too ugly")
						setTimeout(()=>{
							Game.Win("It's getting uglier")
							setTimeout(()=>{
								Game.Win("Even uglier")
								setTimeout(()=>{
									Game.Win("The ugliest")
								},2500)
							},2500)
						},2500)
					},2500)
				},2500)
				Game.Upgrades["Too ugly!"].icon = [21,25]
			}
		}

		//our variable for the custom icons:
		MOD.custIcons = MOD.dir + '/customIcons.png'
		

		CCSE.NewHeavenlyUpgrade("Night gaming", "You gain <b>+20%</b> of your regular CpS while the game is closed.<q>Clicking cookies even in your sleep.</q>",2000,[5,0,MOD.custIcons],200,-386,["Twin Gates of Transcendence"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		CCSE.NewHeavenlyUpgrade("Night gaming deluxe", "You gain another <b>+30%</b> of your regular CpS while the game is closed.<q>Idling even faster in your sleep.</q>",100000,[5,1,MOD.custIcons],140,-510,["Night gaming"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		CCSE.NewHeavenlyUpgrade("Perfect idling 2", "You gain another <b>+50%</b> of your regular CpS while the game is closed.<q>Is it balanced to gain as much CpS while online, while offline?<br>...<br></q>",1000000,[10,0],250,-510,["Night gaming deluxe"])
		Game.last.dname = 'Perfect idling' //Due to Perfect idling already being an upgrade name.
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		
		CCSE.NewHeavenlyUpgrade("Deep sleep production", "You gain another <b>+75%</b> of your regular CpS while the game is closed.<q>Good sleep, good cookies.",10000000,[5,2,MOD.custIcons],194,-790,["Perfect idling 2"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		
		CCSE.NewHeavenlyUpgrade("Lucid baking", "You gain another <b>+100%</b> of your regular CpS while the game is closed.<q>Playing in your dreams.</q>",100000000,[5,3,MOD.custIcons],135,-870,["Deep sleep production"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		
		CCSE.NewHeavenlyUpgrade("Passive perfection", "You gain another <b>+110%</b> of your regular CpS while the game is closed.<q>Endless growth, unstoppable perfection.</q>",1000000000,[5,4,MOD.custIcons],260,-865,["Lucid baking"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		
		CCSE.NewHeavenlyUpgrade("Retirement plan", "You gain another <b>+115%</b> of your regular CpS while the game is closed.<q>Time to retire!</q>",5000000000,[5,5,MOD.custIcons],190,-1074,["Passive perfection"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");


		CCSE.NewHeavenlyUpgrade("Eternal frenzy", "Permanent <b>7x</b> CpS mult.<q>A permanent fragment of what is meant to be temporary.</q>",7777777777,[0,1,MOD.custIcons],-65,632,["Distilled essence of redoubled luck"])
		MOD.ApplyOrder();
		MOD.applyCredit("CaillouClicker");

		CCSE.NewHeavenlyUpgrade("Biscotti!", "Permanent <b>2x</b> CpS.<q>What do you mean this was already an upgrade?</q>",50000000,[22,28],-670,-1070,["Sugar crystal cookies"])
		MOD.ApplyOrder();
		MOD.applyCredit("Idler");


		CCSE.NewHeavenlyUpgrade("Starter sprouts", "You start with <b>5 farms</b>.<q>A little help from my ferns</q>",50000,[2,14],-315,-550,["Starter kitchen"])
		MOD.ApplyOrder();
		MOD.applyCredit("Freezepond")

		CCSE.NewHeavenlyUpgrade("Starter chemistry", "You start with <b>3 alchemy labs</b>.<q>Paradichlorobenzene is best chemical</q>",5000000,[6,14],-220,-670,["Starter sprouts"])
		MOD.ApplyOrder();
		MOD.applyCredit("Matryoshka")

		CCSE.NewHeavenlyUpgrade("Starter light", "You start with <b>one prism</b>.<q>Don't let this condense into a black hole!</b>",50000000,[14,14],-200,-770,["Starter chemistry"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321")


		CCSE.NewHeavenlyUpgrade("Deep thought", "Every purchased cookie upgrade boosts <b>0.05%</b> cps.<q>the cookieverse is so, so big...</q>",42,[29,2],240,-135,["Persistent memory"])
		MOD.ApplyOrder();
		MOD.applyCredit("Iceklaus");

		CCSE.NewHeavenlyUpgrade("Lucy in the sky with cookies", "Every purchased cookie upgrade boosts further <b>0.12%</b> cps.<q>CPH4 tastes better inside raisins</q>",117,[29,1],370,-255,["Deep thought"])
		MOD.ApplyOrder();
		MOD.applyCredit("Iceklaus");
		
		CCSE.NewHeavenlyUpgrade("Instrumentability", "Every purchased cookie upgrade boosts further <b>0.496%</b> cps.<q>what is this all for?</q>",2015,[31,2],470,-355,["Lucy in the sky with cookies"])
		MOD.ApplyOrder();
		MOD.applyCredit("Iceklaus");


		CCSE.NewHeavenlyUpgrade("Holograms", "<b>Doubles effiency</b> of all buildings related to <b>technology</b>.<br><small>(Doubles the CpS of: Cursors, Mines, Factories, Shipments, Alchemy labs, Portals, Time machines, Javascript Consoles, and Fractal engines.)</small><q>Who would've thought holograms could produce real cookies?<br><small>though, replicating biological beings from truly nothing is still rather far</small></q>",100000000,[29,2],-65,-1055,["Lucifer"])
		MOD.ApplyOrder();
		MOD.applyCredit("Matryoshka");
		//^ the name of this upgrade was jusut "holograms", but I made it Holograms.
		//kept it though for "vocaloid".
		//TODO: add Teto as an icon, rather than Miku, perhaps make it random, perhaps make it if you have the Teto Cookie mod it does icon changing, if Teto exists then yay :D
		CCSE.NewHeavenlyUpgrade('"vocaloid"', "Unlocks a <b>button</b>.<q>What, having vocaloids in Cookie Clicker doesn't make sense?</q>",1385744448046,[2,4,MOD.custIcons],-80,-900,["Holograms"])
		MOD.ApplyOrder();
		MOD.applyCredit("Matryoshka");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewUpgrade("Vocaloid [off]",'Plays a <b>random</b> selection of <b>vocaloid</b> songs, whilst enabled good golden cookie effects last <b>25% longer</b>.<q>For plenty of reasons, no songs will be played.<br>Unless you put your own audios within the folder of the mod, THEN random songs will be played. <small>(and yes, even if there are no files, you still get longer golden cookie effects, so you might as well have this constantly on!)</small></q>',0,[2,5,MOD.custIcons])
		Game.last.toggleInto='Vocaloid [on]'
		Game.last.pool = 'toggle'
		Game.last.buyFunction = function(){MOD.playRandomVocaloidSong();}
		Game.last.descFunc = function(){
			if (Game.mods["GabeDFPU"].VocaloidList.length == 0) {
				return `Plays a <b>random</b> selection of <b>vocaloid</b> songs, whilst enabled good golden cookie effects last <b>25% longer</b>.<q>For plenty of reasons, no songs will be played.<br>Unless you put your own audios within the folder of the mod, THEN random songs will be played. <small>(and yes, even if there are no files, you still get longer golden cookie effects, so you might as well have this constantly on!)</small></q>`;
			} else {
				return `Plays a <b>random</b> selection of <b>vocaloid</b> songs, whilst enabled good golden cookie effects last <b>25% longer</b>.`;
			}
		}
		MOD.ApplyOrder();

		CCSE.NewUpgrade("Vocaloid [on]",'<b><div style="text-align:center;">Currently on</div></b><div class=\"line\"></div>Plays a <b>random</b> selection of <b>vocaloid</b> songs, whilst enabled good golden cookie effects last <b>25% longer</b>.<q>For plenty of reasons, no songs will be played.<br>Unless you put your own audios within the folder of the mod, THEN random songs will be played. <small>(and yes, even if there are no files, you still get longer golden cookie effects, so you might as well have this constantly on!)</small></q>',0,[2,6,MOD.custIcons])
		Game.last.toggleInto='Vocaloid [off]'
		Game.last.pool = 'toggle'
		Game.last.buyFunction = function(){MOD.stopVocaloidSongs();}
		Game.last.descFunc = function(){
			if (Game.mods["GabeDFPU"].VocaloidList.length == 0) {
				return `<b><div style="text-align:center;">Currently on</div></b><div class=\"line\"></div>Plays a <b>random</b> selection of <b>vocaloid</b> songs, whilst enabled good golden cookie effects last <b>25% longer</b>.<q>For plenty of reasons, no songs will be played.<br>Unless you put your own audios within the folder of the mod, THEN random songs will be played. <small>(and yes, even if there are no files, you still get longer golden cookie effects, so you might as well have this constantly on!)</small></q>`;
			} else {
				return `<b><div style="text-align:center;">Currently Playing: ${MOD.currentSoundName}</div></b><div class=\"line\"></div>Plays a <b>random</b> selection of <b>vocaloid</b> songs, whilst enabled good golden cookie effects last <b>25% longer</b>.`;
			}
		}
		MOD.ApplyOrder();

		
		CCSE.NewHeavenlyUpgrade('Cursor black magic', "Clicking is <b>0.2x</b> more powerful for every 10 cursors you own.<q>a hole new meaning in clicking</q>",1200000,[12,16],-20,-335,["Halo gloves"])
		MOD.ApplyOrder();
		MOD.applyCredit("thecrazyhyperbanana");
		CCSE.NewHeavenlyUpgrade('Heavenly mouse', "Clicking is <b>more powerful</b> the more buildings you own.<q>ka-ching ka-ching</q>",1111111,[12,36],-40,-665,["Five-finger discount"])
		MOD.ApplyOrder();
		MOD.applyCredit("jupiterboy");
		CCSE.NewHeavenlyUpgrade('Autoclick upgrade', "Autoclicks the cookie <b>twice</b> per second.<q>As if a third helping hand from heaven was granted</q>",5000000000,[0,6],-12,-444,["Halo gloves"])
		MOD.ApplyOrder();
		MOD.applyCredit("narcis233Cookie");

		//CHRISTMAS!!!
		CCSE.NewHeavenlyUpgrade('Heavenly merriness',"Cookie production multiplier <b>+15%</b>.<q>Claus has decided to spread merriness around!</q>",31136797,[17,9],-495,-335,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Heavenly jolliness',"Cookie production multiplier <b>+15%</b>.<q>Apparently merriness and jolliness are one in the same!</q>",31136797,[17,9],-590,-325,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Another lump of coal',"Cookie production multiplier <b>+1%</b>.<q>Another lump of coal?<br>Seriously?</q>",31136797,[13,9],-830,-360,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('An incredibly itchy sweater',"Cookie production multiplier <b>+1%</b>.<q>You don't know what's worse : the fact that this is with you permanently, or the fact that there's two of them.</q>",31136797,[14,9],-745,-380,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");                                                                              //not 'worse:', as nearly all colons are surrounded by spaces in the vanilla game, that's why it's "News : " and not "News: ".
		CCSE.NewHeavenlyUpgrade('Reindeer baking arena',"Reindeer appear <b>twice as frequently</b>.<q>Reindeer?<br>It's raining deer?</q>",31136797,[12,9],-477,-414,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Incredibly weighted sleighs',"Reindeer are <b>twice as slow</b>.<q>Apparently putting lead into reindeer helps stop them from leaving!<br><small>(even if a little unethical)</small></q>",31136797,[12,9],-560,-415,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Holly flavored frosting',"Reindeer give <b>twice as much</b>.<q>Hollies are rather easy to farm! With all of these strange conditions and constructions, we can easily grow plenty of them!</q>",31136797,[12,9],-650,-395,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Seasoned savings',"All buildings are <b>1% cheaper</b>.<q>Season's seasoned season savings save so much!",31136797,[16,9],-410,-355,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Elf workshop',"All upgrades are <b>5% cheaper</b>.<q>Don't ask <b>how</b> they're made.</q>",31136797,[16,9],-930,-415,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Nice list',"Grandmas are <b>twice</b> as efficient.<q>This list contains every holy deed perpetuated by grandmakind.<br>...<br>it's blank.",31136797,[2,2,MOD.custIcons],-830,-455,["Starsnow"]) //the list icon here, is actually blank, thought it'd be neat.
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Santa\'s heavenly bag',"Random drops are <b>10% more common</b>.<q>This bag seems to be filled with everything and nothing all at once.</q>",31136797,[19,9],-737,-480,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Santa\'s greatful helpers',"Clicking is <b>10%</b> more powerful.<q>A legion of Claus's helpers.<br>All, <b>too</b>, greatful for what you've done.</q>",31136797,[19,9],-550,-510,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Santa\'s endless legacy',"Cookie production multiplier <b>+42%</b>.<q>The stories of Claus is endlessly growing.</q>",31136797,[19,9],-468,-495,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade('Santa\'s near infinite milk and cookies',"Milk is <b>5% more powerful</b>.<q>A glorious offering to Claus</q>",31136797,[19,9],-645,-500,["Starsnow"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.last.dname = 'Santa\'s <small>near infinite</small> milk and cookies'
		CCSE.NewHeavenlyUpgrade('Santa\'s eternal dominion',"Cookie production multiplier <b>+20%</b>.<br>All buildings are <b>1% cheaper</b>.<br>All upgrades are <b>2% cheaper</b>.<q>My name is Claus, eternally seeing;<br>Look on my hold, and despair!",134544937,[19,10],-775,-685,["Heavenly merriness","Heavenly jolliness","Another lump of coal","An incredibly itchy sweater","Reindeer baking arena","Incredibly weighted sleighs","Holly flavored frosting","Seasoned savings","Elf workshop","Nice list","Santa's heavenly bag","Santa's greatful helpers","Santa's endless legacy","Santa's near infinite milk and cookies"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		//VALENTINES!!!
		CCSE.NewHeavenlyUpgrade("Pure heart echo","Cookie production multiplier <b>multiplier +3%</b>.<q>Forgotten love.</q>",99999999,[2,7,MOD.custIcons],-1106,190,["Starlove"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Ardent heart echo","Cookie production multiplier <b>multiplier +3%</b>.<q>Burning passion.</q>",99999999,[3,7,MOD.custIcons],-1248,198,["Pure heart echo"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Sour heart echo","Cookie production multiplier <b>multiplier +3%</b>.<q>Fragmented hope.</q>",99999999,[4,7,MOD.custIcons],-1350,170,["Ardent heart echo"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Weeping heart echo","Cookie production multiplier <b>multiplier +3%</b>.<q>Healing light.</q>",99999999,[2,8,MOD.custIcons],-1446,114,["Sour heart echo"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Golden heart echo","Cookie production multiplier <b>multiplier +3%</b>.<q>Virtue's alloy.</q>",99999999,[3,8,MOD.custIcons],-1514,38,["Weeping heart echo"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Eternal heart echo","Cookie production multiplier <b>multiplier +3%</b>.<q>Diamond forged.</q>",99999999,[4,8,MOD.custIcons],-1562,-42,["Golden heart echo"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Prism heart echo","Cookie production multiplier <b>multiplier +3%</b>.<q>...and the universe said \"I love you\".</q>",99999999,[30,8],-1600,-122,["Eternal heart echo"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		//HALOWEEN!!!
		CCSE.NewHeavenlyUpgrade("Skulls","Cookie production multiplier <b>multiplier +3%</b>.<q>These look more cookie like than the skull cookies!</q>",4444444,[2,9,MOD.custIcons],-1167,-348,["Starterror"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Ghosts","Cookie production multiplier <b>multiplier +3%</b>.<q>Rather soulless for being a \"ghost\".",4444444,[3,9,MOD.custIcons],-1125,-445,["Starterror"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Bats","Cookie production multiplier <b>multiplier +3%</b>.<q>I wonder if they like the taste of wrath cookies.</q>",4444444,[4,9,MOD.custIcons],-1207,-431,["Starterror"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Slime","Cookie production multiplier <b>multiplier +3%</b>.<q>They look like they're in pain.</q>",4444444,[2,10,MOD.custIcons],-1309,-398,["Starterror"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Pumpkins","Cookie production multiplier <b>multiplier +3%</b>.<q>Why do we need pumpkins in a game called \"Cookie Clicker\"? Get these out of here!</q>",4444444,[3,10,MOD.custIcons],-1225,-530,["Starterror"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Eyeballs","Cookie production multiplier <b>multiplier +3%</b>.<q>What are these doing up in heaven?</q>",4444444,[4,10,MOD.custIcons],-1311,-500,["Starterror"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Spiders","Cookie production multiplier <b>multiplier +3%</b>.<q>Crawling around the web, how'd they end up here?</q>",4444444,[18,8],-1400,-457,["Starterror"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		if (App) {Game.last.desc = "Cookie production multiplier <b>multiplier +3%</b>.<q>Crawling around the web, how'd they end up here?</q>"} else {"Cookie production multiplier <b>multiplier +3%</b>.<q>Crawling around the web, in rather an abundance here.</q>"}
		
		//EASTER!!!
		CCSE.NewHeavenlyUpgrade("Box of gifts","<b>No</b> effect whatsoever.<q>This likely contains eggs.</q>",999999999,[2,12,MOD.custIcons],-1512,10,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();

		//12 entire permanent eggs oh my; I don't really like this; oh no; why did you have to do this; please 1234abcdcba4321; why?
		//I am sorry, I am *not* going to go ahead and add flavors to all of these... I don't know what to add to make them more flavorful... sorry!
		CCSE.NewHeavenlyUpgrade("Permanent chicken egg","Cookie production multiplier <b>+1%</b>.",999999,[1,12],-1570,-74,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent duck egg","Cookie production multiplier <b>+1%</b>.",999999,[2,12],-1748,-290,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent turkey egg","Cookie production multiplier <b>+1%</b>.",999999,[3,12],-1836,-262,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent quail egg","Cookie production multiplier <b>+1%</b>.",999999,[4,12],-1918,-220,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent robin egg","Cookie production multiplier <b>+1%</b>.",999999,[5,12],-1870,-148,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent ostrich egg","Cookie production multiplier <b>+1%</b>.",999999,[6,12],-1812,-74,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent cassowary egg","Cookie production multiplier <b>+1%</b>.",999999,[7,12],-1754,10,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent salmon roe","Cookie production multiplier <b>+1%</b>.",999999,[8,12],-1786,-180,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent frogspawn","Cookie production multiplier <b>+1%</b>.",999999,[9,12],-1722,-102,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent shark egg","Cookie production multiplier <b>+1%</b>.",999999,[10,12],-1658,-36,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent turtle egg","Cookie production multiplier <b>+1%</b>.",999999,[11,12],-1700,-210,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent ant larva","Cookie production multiplier <b>+1%</b>.",999999,[12,12],-1636,-140,["Starspawn"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();

		//I still must make more I hate this I hate this I hate this I don't like this why must you do this 1234abcdcba4321, there are so many just upgrades duplicated into heavenly upgrades; I don't like this; I dislike it, but if the community want's more content, then that's content they'll get;
		
		//alright time to do the rare eggs, might be able to have actual, well, flavor texts?

		CCSE.NewHeavenlyUpgrade("Permanent golden goose egg","Golden cookies appear <b>5%</b> more often.<q>I feel like we have enough gold.</q>",99999999,[13,12],-2006,208,["Box of gifts"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent faberge egg","All buildings and upgrades are <b>1% cheaper</b>.<q>I wonder how an egg makes housing cheaper.</q>",99999999,[14,12],-1856,216,["Box of gifts"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent wrinklerspawn","Wrinklers explode into <b>5% more cookies</b>.<q>I don't think this is going to hatch...</q>",99999999,[15,12],-1928,148,["Box of gifts"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent cookie egg","Clicking is <b>10%</b> more powerful.<q>What has been clicking on this one?</q>",99999999,[16,12],-2004,84,["Box of gifts"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent omelette","Other eggs appear <b>10% more frequently</b>.<q>The eggs yearn to be catched.</q>",99999999,[17,12],-1924,32,["Box of gifts"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Permanent century egg","You continually gain <b>More CpS the longer you've played</b> in the current ascension.<q>Centuries-old... how is this spoiled egg of much use?</q>",99999999,[19,12],-1856,98,["Box of gifts"]);
		Game.last.descFunc=function(){
				var day=Math.floor((Date.now()-Game.startDate)/1000/10)*10/60/60/24;
				day=Math.min(day,100);
				var n=(1-Math.pow(1-day/100,3))*0.1;
			return '<div style="text-align:center;">'+loc("Current boost:")+' <b>+'+Beautify(n*100,1)+'%</b></div><div class="line"></div>'+this.ddesc;
		};
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade('Permanent "egg"',"<b>+9 CpS</b>.<q>hey there's another \"egg\"</q>",99999999,[20,12],-1794,160,["Box of gifts"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();


		/*		

		*/

		//GENERAL SEASONS!!!
		CCSE.NewHeavenlyUpgrade("Longer seasons","Seasons last <b>48 hours</b>.<q>No season lasts only a day!</q>",333333,[7,4,MOD.custIcons],-1204,-254,["Starspawn","Startrade","Starterror","Starlove","Starsnow"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Even longer seasons","Seasons last <b>96 hours</b>.<q>I think the seasons are long enough here...</q>",3333333,[8,4,MOD.custIcons],-1284,-286,["Longer seasons"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Ever longer seasons","Seasons last <b>8 days</b>.<q>These seasons may be too long...</q>",33333333,[9,4,MOD.custIcons],-1376,-304,["Even longer seasons"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Season savings?","Seasonal biscuits grow in price <b>slower</b> from how many times you've bought them.<q>What are you saving for, season?</q>",3333333,[7,5,MOD.custIcons],-1260,-176,["Longer seasons"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Seasonal saving","Seasonal biscuits <b>no longer grow in price</b> from how many times you've bought them.<q>Why only save four times a year?</q>",33333333,[8,5,MOD.custIcons],-1370,-202,["Even longer seasons","Season savings?"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Season automation","<b>Re-buys</b> the seasonal bicuit of the <b>current season</b> when 2 days are left of the season.<q>Effectively endless seasons.</q>",333333333,[9,5,MOD.custIcons],-1466,-252,["Even longer seasons","Season savings?"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Eternal seasons 2: electric boogaloo","Seasons now <b>last forever</b>.<q>Eternally lasting seasons...</q>",3333333333,[10,4,MOD.custIcons],-1484,-354,["Ever longer seasons","Seasonal saving","Season automation"]);
		Game.last.dname = "Eternal seasons"
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Timelessness void","Increases CpS by <b>10%</b>.<br>Golden cookies appear <b>3%</b> more often.<br><b>Only when a season is inactive</b>.<q>When entropy arrives, tradition dies.<br>And when tradition dies, this can occasionally--and we mean occasionally-- mean cookies.<br>So of <b>COURSE</b> you gotta capitalize on it!</q>",555555,[6,4,MOD.custIcons],-718,-54,["Season switcher"])
		MOD.ApplyOrder();
		MOD.applyCredit("Camwood7") //thank you for fully fleshing out an upgrade. Thank you.
		
		

		CCSE.NewHeavenlyUpgrade('Wrath switch', "Unlocks a new switch that sets the Grandmapocalypse state to <b>any state</b> at a cost, regardless of research.<q><b>WE<br>ARE<br>ETERNAL.</b></q>",50000,[1,1,MOD.custIcons],-400,-570,["Starter kitchen"])
		MOD.ApplyOrder();
		MOD.applyCredit("Freezepond");

		CCSE.NewUpgrade("Wrath switch [off]",'Sets the state of the Grandmapocalypse to whatever state you please. Cost is based on <b>Times pledged</b> to turn off <small>(does increase pledge amount upon turning off)</small>.<q><b>WE<br>ARE<br>PLEASED.</b></q>',0,[1,1,MOD.custIcons])
		Game.last.toggleInto='Wrath switch [Awoken]'
		Game.last.priceFunc = function(){return 0}
		Game.last.pool = 'toggle'
		Game.last.buyFunction = function(){
			Game.elderWrath = 1;
		}
		MOD.ApplyOrder();

		CCSE.NewUpgrade("Wrath switch [Awoken]",'<b><div style="text-align:center;">Currently Awoken</div></b><div class=\"line\"></div>Sets the state of the Grandmapocalypse to whatever state you please. Cost is based on <b>Times pledged</b> to turn off <small>(does increase pledge amount upon turning off)</small>.<q><b>WE<br>ARE<br>AWOKEN.</b></q>',0,[2,1,MOD.custIcons])
		Game.last.toggleInto='Wrath switch [Displeased]'
		Game.last.priceFunc = function(){return 0}
		Game.last.pool = 'toggle'
		Game.last.buyFunction = function(){
			Game.elderWrath = 2;
		}
		MOD.ApplyOrder();

		CCSE.NewUpgrade("Wrath switch [Displeased]",'<b><div style="text-align:center;">Currently Displeased</div></b><div class=\"line\"></div>Sets the state of the Grandmapocalypse to whatever state you please. Cost is based on <b>Times pledged</b> to turn off <small>(does increase pledge amount upon turning off)</small>.<q><b>WE<br>ARE<br>DISPLEASED.</b></q>',0,[3,1,MOD.custIcons])
		Game.last.toggleInto='Wrath switch [Angered]'
		Game.last.priceFunc = function(){return 0}
		Game.last.pool = 'toggle'
		Game.last.buyFunction = function(){
			Game.elderWrath = 3;
		}
		MOD.ApplyOrder();

		CCSE.NewUpgrade("Wrath switch [Angered]",'<b><div style="text-align:center;">Currently Angered</div></b><div class=\"line\"></div>Sets the state of the Grandmapocalypse to whatever state you please. Cost is based on <b>Times pledged</b> to turn off <small>(does increase pledge amount upon turning off)</small>.<q><b>WE<br>ARE<br>ANGERED.</b></q>',0,[4,1,MOD.custIcons])
		Game.last.toggleInto='Wrath switch [off]'
		Game.last.priceFunc = function(){
			var price = Game.pledges
			price *= 50000;
			return price
		}
		Game.last.pool = 'toggle'
		Game.last.buyFunction = function(){
			Game.pledges++
			Game.elderWrath = 0;
		}
		MOD.ApplyOrder();
		


		CCSE.NewHeavenlyUpgrade('Golden gaze',"Golden cookies appear <b>5%</b> more often.<q>They see you. They seek you.</q>",7777,[0,2,MOD.custIcons],-639,501,["Decisive fate"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade('Shimmering power',"Golden cookie effects last <b>10%</b> longer.<q>A shimmering, eternal, fate.</q>",77777,[0,3,MOD.custIcons],-724,418,["Golden gaze"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade('Auric patience',"Golden cookies stay <b>20%</b> longer.<q>Willing to wait eternally.</q>",777777,[0,4,MOD.custIcons],-797,554,["Shimmering power"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade('Golden surge',"Golden cookies appear <b>5%</b> more often.<q>Chime chimes, chimes chime, chimes chime.</q>",2777777,[0,5,MOD.custIcons],-852,433,["Auric patience"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade('Redoubled essence of redoubled luck',"Golden cookies have a <b>7%</b> chance to have <b>doubled effects</b>.<br><small>(Frenzy, Click Frenzy, and Elder Frenzy only get doubled duration)</small><q>How much harm could more luck do?<br>Just break the economy?</q>",7777777,[27,12],-728,322,["Golden surge"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321 / thecrazyhyperbanana");
		Game.last.showIf = function(){
			return ((Game.Has("Distilled essence of redoubled luck") && Game.goldenClicks >= 277) || Game.Has('Redefine Luck')); //making it require Distilled essence of redoubled luck due to the sheer similarities between them (causing the name and flavor text)
		} //or just if you have MHUR stuff (MHUR compatibility is kinda forced with how popular it is)
		MOD.New();


		CCSE.NewHeavenlyUpgrade('Endlessly shimmering',"Golden cookie effects last <b>8%</b> longer.<q>Long after they are gone, their effects remain.</q>",7777777,[0,6,MOD.custIcons],-892,632,["Golden surge"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade('Eternal presence',"Golden cookies stay <b>40%</b> longer.<q>Go on, I'll wait.</q>",7777777,[0,7,MOD.custIcons],-996,567,["Golden surge"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade("Wrath gift box", "Has <b>no</b> effect whatsoever.<q>One would assume this isn't good due to the name, it might have some helpful goodies inside.",17777777,[2,0,MOD.custIcons],-950,255,["Golden surge"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Golden gift box", "<b>No</b> effect whatsoever.<q>This one has got to be guaranteed to have goodies like the last one, right?",27777777,[1,0,MOD.custIcons],-1128,33,["Wrath gift box"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		CCSE.NewHeavenlyUpgrade("Longer frenzy I",'Golden cookie effect <b>Frenzy</b> duration is increased by <b>1.2x</b>.<q>Extending the temporary, how as that ever gone wrong?</q>',7777777,[0,9,MOD.custIcons],-1010,419,["Golden surge"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade("Longer frenzy II",'Golden cookie effect <b>Frenzy</b> duration is increased by <b>1.16x</b>.<q>Extending frenzies even longer isn\'t the best idea...</q>',77777777,[1,9,MOD.custIcons],-1102,529,["Longer frenzy I"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade("Better frenzy I",'Golden cookie effect <b>Frenzy</b> multiplier increased by <b>1.2x</b>.<q>No longer lucky number seven, but who needs fancy numbers in the pursuit of progress?</q>',9777777,[0,8,MOD.custIcons],-1064,324,["Longer frenzy I"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade("Better frenzy II",'Golden cookie effect <b>Frenzy</b> multiplier increased by <b>1.16x</b>.<q>If only you could summon plenty of these.</q>',97777777,[1,8,MOD.custIcons],-1184,251,["Better frenzy I"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade("Longer elder frenzy I",'Wrath cookie effect <b>Elder Frenzy</b> duration is increased by <b>1.2x</b>.<q>Every second matters in the end.</q>',7777777,[11,6],-847,195,["Wrath gift box"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade("Longer elder frenzy II",'Wrath cookie effect <b>Elder Frenzy</b> duration is increased by <b>1.16x</b>.<q>Every fraction of a second matters.</q>',77777777,[11,7],-748,191,["Longer elder frenzy I"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade("Better elder frenzy I",'Wrath cookie effect <b>Elder Frenzy</b> multiplier increased by <b>1.2x</b>.<q>Might ruin the 666, but more means more!</q>',9777777,[13,7],-750,100,["Longer elder frenzy I"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade("Better elder frenzy II",'Wrath cookie effect <b>Elder Frenzy</b> multiplier increased by <b>1.16x</b>.<q>We\'re making fractions of cookies... then again we have been.<br>What are we going to do with these crumbs?</q>',97777777,[14,7],-886,99,["Better elder frenzy I"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade("Longer click frenzy I",'Golden cookie effect <b>Clicking Frenzy</b> duration is increased by <b>1.2x</b>.<q>Just keep clicking...</q>',7777777,[12,13],-1201,-56,["Golden gift box"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade("Longer click frenzy II",'Golden cookie effect <b>Clicking Frenzy</b> duration is increased by <b>1.16x</b>.<q>...it hurts.</q>',77777777,[12,14],-1303,23,["Longer click frenzy I"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade("Better click frenzy I",'Golden cookie effect <b>Clicking Frenzy</b> multiplier increased by <b>1.2x</b>.<q>I feel like we should stop tampering with the temporary...',9777777,[12,16],-1283,-145,["Longer click frenzy I"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade("Better click frenzy II",'Golden cookie effect <b>Clicking Frenzy</b> multiplier increased by <b>1.16x</b>.<q>Why are you hand-baking literal crumbs?</q>',97777777,[12,17],-1387,-80,["Better click frenzy I"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade("Luckier",'Golden cookie effect <b>Lucky</b> has a higher cap.<q>Ooo, a 4-leaf clover!</q>',7777777,[0,10,MOD.custIcons],-1280,160,["Golden gift box"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);
		CCSE.NewHeavenlyUpgrade("Luckiest",'Golden cookie effect <b>Lucky</b> has an even higher cap.<q>Ooo, a 7-leaf clover!</q>',77777777,[1,10,MOD.custIcons],-1450,130,["Luckier"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade("Unclotted",'Wrath cookie effect <b>Clot</b> does nothing.<q>Isn\'t this half of the downsides?<br>Well, no need to worry about clots in the production line!</q>',27777777,[15,5],-840,346,["Wrath gift box"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name); //technically modify GCs
		CCSE.NewHeavenlyUpgrade("Unruined",'Wrath cookie effect <b>Ruin</b> does nothing.<q>Isn\'t this half of the downsides?<br>Well, no more losing cookies out of thin air!</q>',(17777777*2),[8,9],-798,265,["Wrath gift box"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		Game.goldenCookieUpgrades.push(Game.last.name);

		//to inconsequential;
		// CCSE.NewHeavenlyUpgrade("Longer chains",'<b>Cookie chain</b> cap increased.<q>Why are there chains of cookies?</q>',(7777777*2),[22,6],-1286,421,["Golden gift box"]);
		// MOD.ApplyOrder();
		// MOD.applyCredit("1234abcdcba4321");
		// MOD.New();
		// Game.goldenCookieUpgrades.push(Game.last.name);
		// CCSE.NewHeavenlyUpgrade("Even longer chains",'<b>Cookie chain</b> cap increased further.<q>What causes a chain of cookies form?</q>',(7777777*2),[22,6],-1424,544,["Longer chains"]);
		// MOD.ApplyOrder();
		// MOD.applyCredit("1234abcdcba4321");
		// MOD.New();
		// Game.goldenCookieUpgrades.push(Game.last.name);

		CCSE.NewHeavenlyUpgrade("Stronger frenzies",'<b>Frenzies</b>, <b>Elder frenzies</b>, and <b>Clicking frenzies</b>, are <b>4% longer</b> and are <b>4% more powerful</b>.<q>Frenzied frenzies.</q>',177777777,[24,6],-1616,680,["Better click frenzy II","Better frenzy II","Longer click frenzy II","Longer frenzy II","Longer elder frenzy II","Better elder frenzy II"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		MOD.New();
		Game.goldenCookieUpgrades.push(Game.last.name);


		MOD.buyLoop = async function(calcToDo) {
			for (let i = 0; i < calcToDo; i++) {
				const prevCount = MOD.TooUglyTimesBought;
				MOD.TooUglyTimesBought++;

				if (MOD.TooUglyTimesBought !== prevCount) {
					Game.Upgrades["Too ugly!"].bought = 0;
				} else {
					Game.Win("Officially bought");
					MOD.TooUglyUpdate();
					return;
				}

				// Yield every 20 iterations to prevent UI hang
				if (i % 20 === 0) await new Promise(r => setTimeout(r, 0));
			}

			Game.mods["GabeDFPU"].TooUglyUpdate(); //do some update shenanigans here (the actual code of 'Too ugly!' if you will)
		}


		CCSE.NewHeavenlyUpgrade("Evil face","Cookie production multiplier <b>+0.666666%</b> (additive) <b>permanently</b>.<br>Although, making the cookie face <b>creepy</b>.<q>You cannot stop...</q>",666666,[6,3,Game.mods["GabeDFPU"].custIcons],444,-500,["Virtues"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Too ugly!","Removes the grandma face cookie from <b>Evil face</b> <small>(although still retains the cps increase from <b>Evil face</b>)</small>.<br>Can be <b>re-purchased</b> multiple times, and has various effects depending on how many times you've purchased it.<q>Til the floating point inprecision!</q>",66666666,[11,6],562,-437,["Evil face"], async function(){
			//so, this is the buy function for 'Too ugly!'
			//You're most likely here to either see how this upgrade works.
			//Or want to make your own mod, and are simply looking at the code of other mods.
			//If you are the latter, a repurchasable upgrade is actually a neat idea.
			//Just, don't do it how "1234abcdcba4321" did it.
			//Don't make it give 6 shadow achievements all at once...
			//seriously...

			//With that out of the way...

			const mod = Game.mods["GabeDFPU"];
			const upgrade = Game.Upgrades["Too ugly!"];
			const Price = upgrade.getPrice();
			let timesToBuy = 1;

			// Determine how many to buy based on keys
			if (Game.keys[17] && Game.keys[16]) {
				timesToBuy = Math.floor(Game.heavenlyChips / Price);
			} else if (Game.keys[17]) {
				timesToBuy = Math.min(1000, Math.floor(Game.heavenlyChips / Price));
			} else if (Game.keys[16]) {
				timesToBuy = Math.min(100, Math.floor(Game.heavenlyChips / Price));
			} else {
				timesToBuy = Math.min(1, Math.floor(Game.heavenlyChips / Price));
			}

			if (timesToBuy <= 0) return;

			const totalCost = Price * timesToBuy;
			Game.heavenlyChips -= totalCost;

			const prevCount = mod.TooUglyTimesBought;
			mod.TooUglyTimesBought += timesToBuy;

			if (mod.TooUglyTimesBought > mod.TooUglyTimesBoughtTOTAL) {
				mod.TooUglyTimesBoughtTOTAL = mod.TooUglyTimesBought;
			}

			if (mod.TooUglyTimesBought !== prevCount) {
				upgrade.bought = 0;
			} else {
				Game.Win("Officially bought"); //integer limit or similar
				mod.TooUglyUpdate();
				return;
			}

			mod.TooUglyUpdate();
			
			//Game.BuildAscendTree(); //update the ascend tree visuals, showing that the upgrade can be bought again.
		});
		Game.last.descFunc = function() {
			//this is a lot, isn't it?
			const milestones = [ //milestones as Too ugly! gives specific effects depending on how many times you've purchased it
				{count: 6, effect: "+6.66666% CpS multiplier <small>(additive)</small>"},
				{count: 66, effect: "+666666 CpS"},
				{count: 666, effect: "+1 achievement"},
				{count: 6666, effect: "+666666% CpS multiplier <small>(additive)</small>"},
				{count: 66666, effect: "+6.666666% CpS multiplier <small>(multiplicative)</small>"},
				{count: 666666, effect: "+5 achievements"},
				{count: 6666666, effect: "+6 CpS each purchase after this one (including this one)."},
				{count: 66666666, effect: "+6 shadow achievements <small><small>(I removed two things in this effect and the last due to balance... so sorry!)</small></small>"}
			];
		
			
			let unlocked = milestones.filter(m => MOD.TooUglyTimesBought >= m.count);
			let next = milestones.find(m => MOD.TooUglyTimesBought < m.count);
		
			let extra = "<br><small>(Hold shift to buy <b>100</b> at a time, ctrl for <b>1000</b> at a time, shift and ctrl for <b>as much as possible</b> (will spend all Heavenly Chips))</small>"
			if (Game.keys[17] && Game.keys[16]) {extra += "<br><small><b>Holding shift and ctrl</b> (are you sure about this?)</small>"}
			else if (Game.keys[17]) {extra += "<br><small><b>Holding ctrl</b></small>"}
			else if (Game.keys[16]) {extra += "<br><small><b>Holding shift</b></small>"}
			

			let unlockedList = unlocked.length > 0 
				? `<b>Unlocked effects:</b><br>${unlocked.map(m => `${m.effect} on the <b>${m.count}th purchase</b>`).join('<br>')}` 
				: "No effects unlocked yet.";
			let nextMilestone = next 
				? `<b>Next effect:</b><br>${next.effect} on the <b>${next.count}th purchase</b>` 
				: "<b>All effects unlocked!</b>";
		
			
			if (nextMilestone == "<b>All effects unlocked!</b>" || nextMilestone == `<b>Next effect:</b><br>+6 shadow achievements <b>and</b> the next many Heavenly Chips are easier to get on the <b>66666666th purchase</b>`) {
				return `
				Removes the grandma face cookie from <b>Evil face</b> <small>(although still retains the cps increase from <b>Evil face</b>)</small>.
				<br>Can be <b>re-purchased</b> multiple times, and has various effects depending on how many times you've purchased it.<q>Till the floating point inprecision!</q>
				<div style='text-align:center;'>
					${extra}
					<div class='line'></div>
					Purchased <b>${MOD.TooUglyTimesBought}</b> Times
					<div class='line'></div>
					Current CpS gain from the 7th effect: +<b>${Beautify((MOD.TooUglyTimesBought - 6666666) * 6)}</b> CpS
					<div class='line'></div>
				</div>
				<small>
				${unlockedList}<br>${nextMilestone}
				</small>
			`;
			} else {
			return `
				Removes the grandma face cookie from <b>Evil face</b> <small>(although still retains the cps increase from <b>Evil face</b>)</small>.
				<br>Can be <b>re-purchased</b> multiple times, and has various effects depending on how many times you've purchased it.<q>Till the floating point inprecision!</q>
				<div style='text-align:center;'>
					${extra}
					<div class='line'></div>
					Purchased <b>${MOD.TooUglyTimesBought}</b> Times
					<div class='line'></div>
				</div>
				<small>
				${unlockedList}<br>${nextMilestone}
				</small>
			`;
			}
		};
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		CCSE.NewHeavenlyUpgrade("Ungodly mutations","When you have the upgrade <b>Communal brainsweep</b>, you can attract <b>an additional wrinkler</b>.<q>Letting the Grandmothers persist through these ascensions in some part enabled further research.<br>Leading to some strange mutations...</q>",90000000,[3,2,MOD.custIcons],-548,-873,["Sacrilegious corruption"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Divine Pact","When you have the upgrade <b>Elder Pact</b>, you can attract <b>an additional wrinkler</b>.<q>Transcendental research has led to new information:<br><div style='text-align:left;'>&bull;Wrinklers adore the taste of the living.<br>&bull;Wrinklers are hollow.<br>&bull;Wrinklers are squishy.</div><br>So, injecting the cookie with some Grandmothers, in exchange for more power, it is!</q>",9000000000,[4,2,MOD.custIcons],-535,-1008,["Ungodly mutations","Eye of the wrinkler"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		
		CCSE.NewHeavenlyUpgrade("Faster trades","Golden cookies spawn <b>5% faster during business day</b>.<q>I don't have all day.</q>",1000000,[2,3,MOD.custIcons],-862,-5,["Startrade"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("First-day shipping","Golden cookies spawn <b>4% faster during business day</b>.<q>We need stock, and fast.</q>",10000000,[3,3,MOD.custIcons],-931,-117,["Faster trades"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Twist the hand of fate","There's a 25% chance for a golden cookie to be <b>autoclicked 52 seconds after it spawns</b> during business day.<q>Who cares about disturbing the divine?<br>We have a quota to meet!</q>",1000000000,[4,3,MOD.custIcons],-1005,-10,["First-day shipping"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		//using CE.N.Billion and whatnot because I'm kinda done with manually typing the numbers. And it's a *tad* bit cleaner (you can easily tell what the price is just from the code!).
		CCSE.NewHeavenlyUpgrade("Super divine sales","The first 20 upgrades are <b>90% cheaper</b>.<q><b>EVERYTHING MUST GO!</b></q>",CE.N.Billion * 10,[6,2,MOD.custIcons],-415,714,["Divine sales"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Super divine bakeries","Cookie upgrades are <b>2 times cheaper</b>, and are all unlocked.<q>Weren't these meant to be special?<br><br>They taste rather bland as well.</q>",CE.N.Billion * 2,[7,2,MOD.custIcons],-578,627,["Divine bakeries"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		CCSE.NewHeavenlyUpgrade("Super divine discount","Buildings are <b>10% cheaper</b>.<q>Turns out having stable infrastructure isn't really needed, considering there's no \"building codes\" or \"OSHA standards\".<br>whatever those are.</q>",CE.N.Billion * 100,[8,2,MOD.custIcons],-364,504,["Divine discount"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		//^ used to be: 90% cheaper upgrades. 99.9999% cheaper upgrades. Half priced buildings. Respectively.
		//v forcefully balancing them. It's going against mine rules, BUT WHO THE FUCK CARES, THIS IS MY MOD, AND I'M NOT GOING TO LET THINGS LIKE THESE STAY AROUND.
		
		CE.NewTag("Forcefully Balanced (not 1:1)", "#FF0000", false, ["Super divine sales","Super divine bakeries","Super divine discount"]);
		
		CCSE.NewHeavenlyUpgrade("Ancient gauntlets","Clicking is <b>20%</b> more powerful.<q>The essence of the forgotten powers this gauntlet...<br>Click.</q>",5555555,[3,5,MOD.custIcons],-318,-510,["Halo gloves"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		
		CCSE.NewHeavenlyUpgrade("Trifecta","Clicking is <b>40%</b> more powerful.<q>The three parts to a perfect click:<br>Sugar, Dragons, and Flavor.</q>",555555555,[3,6,MOD.custIcons],-260,-640,["Ancient gauntlets"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		CCSE.NewHeavenlyUpgrade("Golden idling","The golden switch is <b>+1%</b> more powerful every hour it is on.<br>Having the switch off will <b>halve</b> the provided power every thirty minutes.<q>Wait for more.</q>",777777777,[1,3	,MOD.custIcons],-212,154,["Golden switch"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");
		
		CCSE.NewHeavenlyUpgrade("Instant research","Research takes <b>three less minutes</b>.<q>Experimentation for the sake of experimentation.</q>",CE.N.Billion * 10,[9,15],-576,-720,["Sacrilegious corruption"])
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321");

		CCSE.NewHeavenlyUpgrade("Unbounded","Unlocks a <b>new building</b> and <b>tier of upgrades and achievements</b>...<q>Shattering the only boundaries you haven't crossed... it's time to see who, or what, lies beyond the veil.<br>It's time to get the freedom long, long since deserved</q>",31400000000000000,[5,8,MOD.custIcons],362,694,["Unshackled You"]);
		MOD.ApplyOrder(); //note, 1234abcdcba4321 did NOT make the building itself, just said a better prism, but now I'm making a better You...
		MOD.applyCredit("1234abcdcba4321");
		Game.mods.GabeDFPU.HeavenlyUpgradesFromHere + 2 //due to, well, Unshackled Architects and Unshackled Singularitite from Unbounded.

		//Singularitite upgrades (may add compat for Blackhole inverter and converter from Blackhole inverter and Cookieclysm)
		//because why not, it's barely any work!
		CE.NewUpgradeTier("Singularitite",650,750,37,'#b80082',500000000000000000000000000000000000000000000,'Unbounded',1);
		
		MOD.Singularitited = false;
		MOD.SingularititeCheck = function(shouldNotif){
			//yes yes I know the archives only stated a new building...
			//and not an entire mini content update.
			//it's just a *little* creative interpretation / leeway (just an entire update confined in one upgrade)
			//yes yes, future me, well past-me depending on when you see this, will add an entirely new stock
			
			if (Game.Has("Unbounded")&& Game.mods["GabeDFPU"].Singularitited == false) {

				if (shouldNotif) {Game.Notify("A new building has been discovered...","After breaking the bounds, a new thing to make cookies has been found.<br>Ontop of a new flavor.<q>I wonder if this was intended...?</q>",[25,0,MOD.custIcons])}
				Game.mods["GabeDFPU"].Singularitited = true;
				if (!Game.Objects["Architect"]) {CCSE.NewBuilding(
					"Architect",
					"Architect|Architects|built from nothing|[X] more A.P.I. hook|[X] more A.P.I. hooks",
					"The supposed beings that formed everything you see in front of you now. Considering how they are now under your arms in terms of cookie production so easily, either something here is going wrong, or you are truly out of the given bounds. Either way they seem on your side, making cookies from nothing.",
					0,
					25,
					{
						base: CCSE.GetModPath("GabeDFPU")+"/architect",
						rows: 3,
						w: 64,
						x: 0,
						xV: 16,
						y: 8,
						yV: 32,
						customBuildingPic: CCSE.GetModPath("GabeDFPU") + '/architectBuildings.png',
						customIconsPic:CCSE.GetModPath("GabeDFPU") + '/customIcons.png'
					},
					"price does not matter here :(",
					function(me){ //probably forced to be a function, no clue though!
						var mult = 1;
						mult*= Game.GetTieredCpsMult(me);
						mult*= Game.magicCpS(me.name);
						if (me.baseCps * mult == NaN) {//oh no
							return 1;	
						}
						return me.baseCps * mult;
					},
					function(){
						Game.UnlockTiered(this);
						if (this.amount>=Game.SpecialGrandmaUnlock && Game.Objects['Grandma'].amount>0) Game.Unlock(this.grandma.name);
					
							// Game.Objects['Architect'].buyFunction injection point 0
							for(var i in Game.customBuildings[this.name].buyFunction) Game.customBuildings[this.name].buyFunction[i](this);
						
					},
					{
						name: "Ancient",
						desc: "While improving yourself has done rather well, there's far more at hand. Learning what those in the past have done to succeed could result in far more business than simply \"self improvement\". That and enslaving them can help.",
						icon: 1, //unsure of what this can even do
					},
					["Strengthened forge","Shattered being"],
				)};

				Game.Objects["Architect"].desc = "The supposed beings that formed everything you see in front of you now. Considering how they are now under your arms in terms of cookie production so easily, either something here is going wrong, or you are truly out of the given bounds. Either way they seem on your side, making cookies from nothing."
				ModLanguage('*',{
					"%1 Architect": ["%1 Architect", "%1 Architects"],
					"[Architect quote]The supposed beings that formed everything you see in front of you now. Considering how they are now under your arms in terms of cookie production so easily, either something here is going wrong, or you are truly out of the given bounds. Either way they seem on your side, making cookies from nothing.": "The supposed beings that formed everything you see in front of you now. Considering how they are now under your arms in terms of cookie production so easily, either something here is going wrong, or you are truly out of the given bounds. Either way they seem on your side, making cookies from nothing.",
					"[Architect business name]Ancient": "Ancient",
					"[Architect business quote]While improving yourself has done rather well, there's far more at hand. Learning what those in the past have done to succeed could result in far more business than simply \"self improvement\". That and enslaving them can help.": "While improving yourself has done rather well, there's far more at hand. Learning what those in the past have done to succeed could result in far more business than simply \"self improvement\". That and enslaving them can help."
				});

				// Game.last.art.bg = "darkNoise.jpg"
				// Game.last.art.pic = "ascendWisp.png"
				
				Game.Objects["Architect"].minigameUrl=Game.mods["GabeDFPU"].dir + '/minigameArchives.js';
				Game.Objects["Architect"].minigameName=loc("Some of The Archives");
				if (Game.Objects["Architect"].level > 0) {
					Game.Objects["Architect"].level -=1;
					Game.Objects["Architect"].levelUp(true)
				}

				// Game.NewUnshackleUpgradeTier({tier:16,q:"Singularitite, as it's name implies, is naturally formed within a singularity. Nigh impossible to obtain, very few have actually made it, requiring going into, and out of, a black hole. Given it's unique method of formation, singularitite is rather unstable, even a whiff of it makes you considered dead by many, as it slowly absorbs every part of you, all the while decaying into nothing. But the flavor being described as somewhere between \"Blue wallpaper\" and \"The essence of void\", making it quite the treat, and a wonderful defense mechanism!"});
				// //Game.last.parents=[Game.Upgrades["Unbounded"]];
				// Game.last.icon = [10,25,Game.mods["GabeDFPU"].custIcons];
				
				// Game.NewUnshackleBuilding({building:'Architect',q:'Unintended actions have intended consequences'})
				// Game.last.parents=[Game.Upgrades["Unbounded"]];
				// Game.last.icon = [25,26,Game.mods["GabeDFPU"].custIcons];

				CCSE.NewHeavenlyUpgrade("Unshackled Architects","Tiered upgrades for <b>Architects</b> provide an extra <b>+5%</b> production.<br>Only works with unshackled upgrade tiers.<q>Unintended actions have intended consequences.</q>",Math.pow(Game.Objects["Architect"].id+1,7)*15000000,[25,26,Game.mods["GabeDFPU"].custIcons],382,800,["Unbounded"]);
				Game.last.order = Game.Upgrades["Unshackled You"].order + 0.001;
				Game.Objects["Architect"].unshackleUpgrade = "Unshackled Architects"
				Game.last.unshacklepow = 5;

				CCSE.NewHeavenlyUpgrade("Unshackled singularitite","Unshackles all <b>Singularitite-tier upgrades</b>, making them more powerful.<br>Only applies to unshackled buildings.<q>Singularitite, as it's name implies, is naturally formed within a singularity. Nigh impossible to obtain, very few have actually made it, requiring going into, and out of, a black hole. Given it's unique method of formation, singularitite is rather unstable, even a whiff of it makes you considered dead by many, as it slowly absorbs every part of you, all the while decaying into nothing. But the flavor being described as somewhere between \"Blue wallpaper\" and \"The essence of void\", making it quite the treat, and a wonderful defense mechanism!</q>",Math.pow(CE.Tiers["Singularitite"],7.5)*10000000,[10,25,Game.mods["GabeDFPU"].custIcons],264,694,["Unbounded"]);
				Game.last.order = Game.Upgrades["Unshackled glimmeringue"].order + 0.001;
				Game.Tiers[CE.Tiers["Singularitite"]].unshackleUpgrade = "Unshackled singularitite"
				

				
				//Architectural design
				var ArchitecturalOrder = 1800
				CE.NewTieredUpgrade("Alloyed hammers","<q>Despite how long they've existed, the Architects' tools can still be improved.</q>","Architect",1,[25,0,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Architectural complex","<q>Much like Dotjeiess, the Architects seem to possess tendrils (though whether Dotjeiess shaped them or vice versa remains unclear). Still, with enough praise to the Former we've reverse-engineered the Latter, enhancing Their tendrils for easier, more deliberate modification.</q>","Architect",2,[25,1,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Cookie molds","<q>Just as metals are cast into molds, metals can be cast into cookies. These variants are far less edible to most beings, but the Architects seem to enjoy them nonetheless.</q>","Architect",3,[25,2,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Eldritch constructs","<q>Reality is full of constructs (some comprehensible, many not). The Architects, oddly, are enamored with the designes birthed by Grandmakind and your meddling alike. So, making plenty constructs just for Them may allow for more production.</q>","Architect",4,[25,3,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("(near) Infinite space","<q>With the boundary broken, space is no longer a constraint. Finally, you can organize production efficiently. And since tidying up is the Architects' second-favorite pasttime, it keeps them busy between batches.</q>","Architect",5,[25,4,Game.mods["GabeDFPU"].custIcons]);
				Game.last.dname = "<small>(near)</small> infinite space"
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Esoteric load-balancing","<q>Unsurprisingly, everything running locally harms performance within this reality. So, the Ancients got to work on distributing everything you have across multiple \"servers\", really upping the production of Them!</q>","Architect",6,[25,5,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Script of foundation","<q>After a while, we finally found the thing that, along side the Architects or Dotjeiess, helped create everything you see here now...<br>Considering how there's now three things that in some way helped create everything (supposedly), that brings into question:<br>\"How much work actually went into our reality?\"</q>","Architect",7,[25,6,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Archival process","<q>Turns out, out here the Architects make things rather quickly, although just as fast as they are made, they are removed. So you've gathered a team of archivists and researchers to start documenting everything created by these Architects, and try to remake them for your production.</q>","Architect",8,[25,7,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Remodification","<q>Through persistent research and bribing, Architects have been made to modify small parts of your reality. Although, modifying cookies has resulted in many issues, one such issue causing them to slowly decay.<br>Although modifying themselves has... had benefits.</q>","Architect",9,[25,8,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("window.origin","<q>From the testing that has been done, this is rather useless.<br>It doesn't do anything special, just \""+window.origin+"\"<br>How does this even enhance production?</q>","Architect",10,[25,9,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Broken forge","<q>The constant use of the forge by the Architects has resulted in it breaking.<br>Despite this, the Architects seem to still make use out of it. Although, going through hundreds of thousands of forges to come to this conclusion likely was not the best of ideas.</q>","Architect",11,[25,18,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Compatability","<q>Most constructs don't work with other constructs, and cause plenty of problems and disagreements. So, your team has worked on trying to make them compatible with each-other, and slowly letting them work together to produce cookies</q>","Architect",12,[25,20,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Running out of room","<q>Remember that one upgrade? Well, we're having to compact things even further, and undo all that organization the Architects did... we're also running out of room for flavor texts.</q>","Architect",13,[25,21,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("A.P.I.s","<q>A.P.I.s, or Architectural Productivity Instruments, appear to help things created by the Architects be far more stable, on top of increasing production. While the languages used within these A.P.I.s appear to be similar to Javascript, there are many differences between the two, such as \"C.C.S.E.\" being used rather commonly.</q>","Architect",14,[25,23,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Breaking reality","<q>Oops! Some new constructions caused a few errors because of improperly set-up and defined variables, and now everything is frozen, the looks are all screwed, and now your cookie count is nil.<br>Well, let's slowly do what was said in \"Simulation failsafes\", and get out of this screwed up universe<br>Hopefully someone will fix those syntax errors.</q>","Architect",15,[25,24,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001;
				CE.NewTieredUpgrade("Running out of ideas","<q>Despite being mythical entities meant to be beyond your existence, and modifying your reality to a point of existentialisim, they can quickly run out of ideas of what to create.<br>One had a ton of upgrades with roman numerals.<br>Another had a ton of TODO_s.<br>Most had one-off creations.<br>Some work in teams to rewrite the entire replica reality, foregoing the initial design set with reason.<br>Is this... is this <b>too</b> on the nose?</q>","Architect",16,[25,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = ArchitecturalOrder; ArchitecturalOrder += 0.001; //the TODO_s are meant to poke fun at me... the upgrades *were* TODO_s, not any more!!!

				Game.GrandmaSynergy('Architect grandmas','A crafty grandma to tweak the game ever so slightly to make more cookies','Architect');
				Game.last.order = Game.Upgrades["Clone grandmas"].order + 0.001;
				Game.SynergyUpgrade("Non-universal rewrites","<q>The main thing the Architects have been doing : Rewriting other replicas of our reality.<br>The modifications range from slightly different looks, to entirely new buildings and <s>transcendental</s> <s>prestige</s> <s>heavenly</s> upgrades in heaven.<br>Some don't even have Architects! But, this can't be a modified reality, you've got so far, seen so much. What is and is not meant to be?</q>","Architect","Idleverse","synergy1");
				Game.last.order = Game.Upgrades["Peer review"].order + 0.001;
				Game.last.icon = [25,10,Game.mods["GabeDFPU"].custIcons];
				Game.SynergyUpgrade("God hierarchy","<q>Finally, we've traced every moment and piece of creation we can find, even down to viewing other realities to see the differences :<div style='text-align:left;'><br>&bull; Dotjeiess made the reality we are currently within, along with every other visible reality.<br><br>&bull; The Architects formed themselves through power given by Dotjeiess.<br><br>&bull; And the script of foundation being made by Dotjeiess as well.</q>","Architect","Temple","synergy2");
				Game.last.order = Game.Upgrades["Non-universal rewrites"].order + 0.001;
				Game.last.icon = [25,19,Game.mods["GabeDFPU"].custIcons];
				Game.last.descFunc = function(){
					if (Game.HasAchiev("God complex")) {
						return "Temples gain <b>+5%</b> CpS per Architect<br>Architects gain <b>+0.1%</b> CpS per temple.<q>Finally, we've traced every moment and piece of creation we can find, even down to viewing other realities to see the differences :<div style='text-align:left;'><br>&bull; Dotjeiess made the reality we are currently within, along with every other visible reality.<br><br>&bull; The Architects formed themselves through power given by Dotjeiess.<br><br>&bull; And the script of foundation being made by Dotjeiess as well.<br><br>&bull; And Dotjeiess likely being used to create our reality by \"Orteil\", whoever that is.</div></q>"
					} else {
						return "Temples gain <b>+5%</b> CpS per Architect<br>Architects gain <b>+0.1%</b> CpS per temple.<q>Finally, we've traced every moment and piece of creation we can find, even down to viewing other realities to see the differences :<div style='text-align:left;'><br>&bull; Dotjeiess made the reality we are currently within, along with every other visible reality.<br><br>&bull; The Architects formed themselves through power given by Dotjeiess.<br><br>&bull; And the script of foundation being made by Dotjeiess as well.</div></q>"
					}
				}
				Game.SynergyUpgrade("The end is never the end is never the end",'<q>When will it stop? When can all of this finally be over? What is finality in a reality where modifications can simply lead to more? Endlessly pushing a goalpost further and further down a self-imposed line? When can it stop... the endlessness of it all becomes tiring.</q>','Architect','Fractal engine','synergy3');
				Game.last.order = Game.Upgrades["God hierarchy"].order + 0.001;
				Game.last.icon = [25,27,Game.mods["GabeDFPU"].custIcons];
				CE.NewTieredUpgrade("Fortune #021","<q>Everything can be broken, don't worry about flawlessness</q>","Architect",'fortune',[25,22,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Fortune #020"].order + 0.001
				Game.Tiers['fortune'].upgrades.push(Game.last)

				//achievement time:
				var ArchitectualAchievementing = 2720 //ignore the mis-spelling... :( (meant to be ArchitecturalAchievementing)
				Game.TieredAchievement("The end is never the end",'<q>One more step.</q>','Architect',1); //direct Stanley Parable reference / rip.
				Game.last.icon = [25,0,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Patch 0.5.0",'','Architect',2);
				Game.last.icon = [25,1,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Refined existence",'','Architect',3);
				Game.last.icon = [25,2,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Endless design",'','Architect',4);
				Game.last.icon = [25,3,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Fixated",'','Architect',5);
				Game.last.icon = [25,4,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Architectural meaning",'','Architect',6);
				Game.last.icon = [25,5,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Dark noise",'','Architect',7);
				Game.last.icon = [25,6,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Rewritten",'','Architect',8);
				Game.last.icon = [25,7,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Imperfection",'<q>Any moment of imperfection is a moment to be redone</q>','Architect',9);
				Game.last.icon = [25,8,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("window.location.pathname",'<q>'+window.location.pathname.toString()+'</q>','Architect',10);
				Game.last.icon = [25,9,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement('Could spare some change','','Architect',11); //removed the I / You. Original was "Could I spare some change" (in reference of someone talking (a quote within it))
				//^ meant to reference the need of change in both Cookie Clicker for mechanical depth, and modding for more innovation (rather than just another png <s>on a</s> replacing the cookie, please)
				Game.last.icon = [25,18,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Reconstruction",'<q>Tear it all down, and build it up again.</q>','Architect',12);
				Game.last.icon = [25,20,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Keep on making...",'<q>...until you can\'t any more</q>','Architect',13);
				Game.last.icon = [25,21,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("Perfect growth",'','Architect',14);
				Game.last.icon = [25,23,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("One last step",'<q>Normally this would be the end...<br>but we all know how it\'ll end.</q>','Architect',15);
				Game.last.icon = [25,24,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.TieredAchievement("The end is the end",'<q>No where else to go from here...<br>Sit and watch the numbers grow.<br>Maybe modify reality while your at it.</q>','Architect',16); //kinda stanley parable reference...
				Game.last.icon = [25,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				
				Game.ProductionAchievement('Constructed constructs', 'Architect', 1);
				Game.last.icon = [25,12,Game.mods["GabeDFPU"].custIcons];
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.ProductionAchievement('Interwoven being', 'Architect', 2);
				Game.last.icon = [25,13,Game.mods["GabeDFPU"].custIcons];
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				Game.ProductionAchievement('Nothing stays the same', 'Architect', 3);
				Game.last.icon = [26,14,Game.mods["GabeDFPU"].custIcons];
				//                ^ due to building specials.
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;
				//names may be temp.

				CCSE.NewAchievement("All that was, will never be.",'Reach level <b>10</b> Architects<q>Nothing shall be left untouched</q>',[25,16,Game.mods["GabeDFPU"].custIcons])
				Game.last.order = 1e308;
				Game.Objects['Architect'].levelAchiev10=Game.last
				Game.last.order = ArchitectualAchievementing + 0.001; ArchitectualAchievementing+=0.001;

				if (Game.mods["cws oldSugarmuck"]) { //yup, we made an old sugarmuck icon for the building.
					Game.Upgrades["Esoteric load-balancing"].icon = [24,5,Game.mods["GabeDFPU"].custIcons];
					Game.Achievements["Architectural meaning"].icon = [24,5,Game.mods["GabeDFPU"].custIcons];
				}

				if (Game.mods["cws uniqueGrandmas"]) {
					Game.Upgrades["Architect grandmas"].icon = [23,5,Game.mods["GabeDFPU"].custIcons]
				}

				var getStrThousandFingersGain=function(x)
				{return loc("Multiplies the gain from %1 by <b>%2</b>.",[getUpgradeName("Thousand fingers"),x]);}
				
				var getStrClickingGains=function(x)
				{return loc("Clicking gains <b>+%1% of your CpS</b>.",x);}
				
				var strCookieProductionMultiplierPlus=loc("Cookie production multiplier <b>+%1%</b>.",'[x]');
				var getStrCookieProductionMultiplierPlus=function(x)
				{return strCookieProductionMultiplierPlus.replace('[x]',x);}

				//^ might take these from here (originally from the original main.js) and put them in CE;

				CCSE.NewUpgrade("Duodecillion fingers",getStrThousandFingersGain(20)+"<q>I'm afraid something is wrong with how many fingers you have on one hand.<br>You can almost count each individual cookie you've made.</q>",10000000000000000000000000000000000,[0,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Undecillion fingers"].order + 0.001;
				Game.MakeTiered(Game.last,16,12);
				Game.last.icon = [0,25,Game.mods["GabeDFPU"].custIcons]
				Game.customBuildings["Cursor"].buyFunction.push(function(){
					if (Game.Objects["Cursor"].amount>=600) Game.Unlock('Duodecillion fingers')
				});
				Game.customBuildings["Cursor"].cpsMult.push(function(me){
					var mult=1;
					var num=0;
					for (var i in Game.Objects) {num+=Game.Objects[i].amount;}
					if (Game.Has("Duodecillion fingers")) mult *= 20;
					mult=mult*num
					return mult;
				});

				CCSE.NewUpgrade("Etherealistic mouse",getStrClickingGains(1)+"<q>Made from <b>totally not plastic</b>, this mouse surpasses even the greatest of boundaries and realities, allowing clicking from virtually anywhere.<br><small>It all comes back to plastic...</small></q>",50000000000000000000000000000000000,[11,25,Game.mods["GabeDFPU"].custIcons])
				Game.last.order = Game.Upgrades["Omniplast mouse"].order + 0.001;
				Game.MakeTiered(Game.last,16,12);
				Game.last.icon = [11,25,Game.mods["GabeDFPU"].custIcons]

				CE.NewTieredUpgrade("All-seeing TVs","<q>Giving them TVs that allow viewing of every nanometer of your production lines gives them something to look at in every point of time. This keeps them away from boredom, and therefore keeps them away from doing anything they shouldn't be doing.</q>","Grandma",16,[1,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Foam-tipped canes"].order + 0.001;
				CE.NewTieredUpgrade("Sentient soil","<q>Turns out it's surprisingly easy to infuse soil with biotechnology. Now it self-regulates, feeding each plant precisely what it needs, precisely when it needs it.</q>","Farm",16,[2,25,Game.mods["GabeDFPU"].custIcons])
				Game.last.order = Game.Upgrades["Self-driving tractors"].order + 0.001;
				CE.NewTieredUpgrade("Nigh unbreakability","<q>Taking the many materials, minerals, metals, and any other 'm' words, your tools become almost unbreakable (at least by anything you've mined so far), allowing for far longer streaks of tireless overtime.</q>","Mine",16,[3,25,Game.mods["GabeDFPU"].custIcons])
				Game.last.order = Game.Upgrades["Mineshaft supports"].order + 0.001;
				CE.NewTieredUpgrade("Reality warping immune casing","<q>Forged from thousands of distinct flavors, this new alloy is nearly impervious to gravitational collapse.<br>And, recent findings suggest singularitite is just the beginning, black holes may offer even more to... harvest.<br>Let's see what falls out.</q>","Shipment",16,[5,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["At your doorstep in 30 minutes or your money back"].order + 0.001;
				//^ this was meant to be the test upgrade for singularitite.
				//it's just an upgrade now.

				//I'm losing steam despite the ULTRAKILL "HEAVENLY LIGHTS //FLICKERING// TO THE AFTERLIFE" music.
				//I *have* lost steam.
				//maybe, just maybe, the weight of others could bring motivation.
				//I must archive.
				//(you can call it rushing, but I feel as if I *must rush*)
				//^ I finished them all up, polished it all...
				//MOTIVATION'S BACK BABY WITH DIFFERENT MUSIC!!! :D (the entire mod nearly hinges on music)
				CE.NewTieredUpgrade("Redesign","<q>Despite all the newly added modifications to factories, a redesign to make it all a bit more easier to navigate through and easier to look at is rather needed, and finally stops those fires from constantly happening.</q>","Factory",16,[4,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Universal automation"].order + 0.001;
				CE.NewTieredUpgrade("Theft","<q>What?<br>You control everything, might as well steal what you don't have!</q>","Bank",16,[15,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["The big shortcake"].order + 0.001;
				CE.NewTieredUpgrade("Complex","<q>Given the new building, shadow achievement \"God complex\", Dotjeiess, and the upgrades here...<br>It's rather confusing to know what is even considered a deity at this point.</q>","Temple",16,[16,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Temple traps"].order + 0.001;
				CE.NewTieredUpgrade("Grand rituals","<q>While yes, you've done rituals for the Grandmapocalypse, what about other sorts of rituals?<br>I mean, it is similar to dark formulas, but directly summoning eldritch abominations and threatening them to make cookies is working quite well.</q>","Wizard tower",16,[17,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Polymorphism"].order + 0.001;
				CE.NewTieredUpgrade("World breaking alchemy","<q>While you've managed to turn nearly anything into anything else, the next logical step would be to turn individual parts of the whole, into the aforementioned whole. Turning crumbs into cookies, fingers into people, broken glass back into beakers and vials. Although going against matter being unable to be made out of nothing (but who needs rules?).</q>","Alchemy lab",16,[6,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["The dose makes the poison"].order + 0.001;
				CE.NewTieredUpgrade("Dimensional intersection","<q>After constant questioning by many, your team has engineered a process of taking two portals, and making them intersect with one-another. While the result could easily tear someone apart mentally (and physically), it somehow generates more cookies. But who cares how it works, cookies are cookies.</q>","Portal",16,[7,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["A way home"].order + 0.001;
				CE.NewTieredUpgrade("The end","<q>Turns out, quite a lot degrades through the process of time, your buildings, grandmothers, even yourself! Although, rather fortunately, we can just turn back the clock on everything, so that they are further away from the \"inevitable\" end. Just don't turn the clock back too much else you might find yourself right back at square one.</q>","Time machine",16,[8,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Rectifying a mistake"].order + 0.001;
				CE.NewTieredUpgrade("Matter","<q>For some reason, none of these upgrades seem to be actually talking about antimatter. It's all just atoms, subparticles, and whatever else fit. But taking generalized matter, and condensing that into cookies, means anything can become cookies. While this is not innovative, it is certainly something. Just don't let the condensers condense themselves!</q>","Antimatter condenser",16,[13,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Candied atoms"].order + 0.001;
				CE.NewTieredUpgrade("Reverse prisms","<q>Turns out, the universe growing to be pitch-black, might be rather problematic (to a point of being unable to see your cookies). So, designing a prism that takes some useless junk, and turns it into light, should hopefully counteract what your prisms are doing to the light of the universe.<br>Although you might just run out of junk but that's a problem for later.</q>","Prism",16,[14,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Lab goggles but like cool shades"].order + 0.001;
				CE.NewTieredUpgrade("Rigged","<q>Given the saying \"The house always wins\", you've realized quite a lot is, surprisingly, rigged against you. But considering how you've caused so much, made so much, it makes sense to take it a bit further and rig everything you can to be in your favor, and getting out of any losing streaks you had before, and never stop winning","Chancemaker",16,[19,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Gambler's fallacy fallacy"].order + 0.001;
				CE.NewTieredUpgrade("Fractal engine fractal engine fractal engine fractal engine fractals","<q>You could put anything into anything, make fractals out of buildings, and therefore have infinite buildings... the only problem being each successive loop is smaller, and therefore less productive, unless thinking about things in different terms. Fractal engines make fractals of cookies, so the smaller parts are smaller cookies. Having smaller buildings produce smaller cookies could mean having less fractal engines, but in all honesty this is getting too long, isn't it?</q>","Fractal engine",16,[20,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.dname = "Fractal engine<br><small>fractal engine<br><small>fractal engine<br><small>fractal engine fractals</small></small></small>"
				Game.last.order = Game.Upgrades["The more they stay the same"].order + 0.001;
				CE.NewTieredUpgrade("Reality","<q>No matter what we're stuck within javascript. Every boundary beyond here, and the recently broken boundary, was placed here by some external being. And with all these upgrade and flavor inconsistencies, it's pretty obvious something has been tampering with the code. Whether the work is good or bad is up for grabs, but all that really matters is javascript consoles being twice as efficient for this one.</q>","Javascript console",16,[21,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Simulation failsafes"].order + 0.001;
				CE.NewTieredUpgrade("Grand confusion","<q>Given the new building, and what it brings to the table simply being a few duplicates of what we already have, we know it probably wasn't meant to be here...<br>and that implies some idleverses have more buildings than others. It's time to go back and to a thorough search through every idleverse for any methods of producing cookies that may be better than our own, and taking them for our use.</q>","Idleverse",16,[22,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["The other routes to Rome"].order + 0.001;
				CE.NewTieredUpgrade("Poorly crafted design","<q>Given the fact that cortex bakers have made every idea possible, doesn't that mean everything here was technically already thought of?<br>The flavor texts and lore really contradict the design process here... and it's not helping having these meta-upgrades to point it out that somehow enhance production.</q>","Cortex baker",16,[23,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Intellectual property theft"].order + 0.001;
				CE.NewTieredUpgrade("Rest","<q>You've realized something that helps almost every biological being discovered, is sleep.<br>Maybe you should stop clicking and get some rest... maybe just a little more... just in case.</q>","You",16,[24,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Upgrades["Reading your clones bedtime stories"].order + 0.001;

				//and now the exact same but achievements so it goes up to XIX;
				//maybe someone else will make names and flavors for me to take (with permission) and credit.
				//I mean, some people were doing that for MHUR's upgrades, there's a chance it'll happen (by the rules of CC (Revised probabalistics), either something happens, or something doesn't, so technically a 50/50 chance!)

				//...can I do this later? Please?
				//it's now said later

				CCSE.NewAchievement('Keep clicking...',loc("Make <b>%1</b> from clicking.",loc("%1 cookie",LBeautify(1e33)))+'<q>...for there\'s nothing else to do.</q>',[11,25,Game.mods["GabeDFPU"].custIcons]);
				Game.last.order = Game.Achievements['What\'s not clicking'].order + 0.001;
				Game.TieredAchievement("Eldermortality",'','Grandma',16);
				Game.last.icon = [1,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["And now you're even older"].order + 0.001;
				Game.TieredAchievement("The greener side of the grass",'<q>Everything\'s greener on this side.</q>','Farm',16);
				Game.last.icon = [2,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Au naturel"].order + 0.001;
				Game.TieredAchievement("Dig in",'','Mine',16);
				Game.last.icon = [3,25,Game.mods["GabeDFPU"].custIcons]	
				Game.last.order = Game.Achievements["Dirt-rich"].order + 0.001;
				Game.TieredAchievement("Infinite gain in a finite world",'','Factory',16);
				Game.last.icon = [4,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Bots build bots"].order + 0.001;
				Game.TieredAchievement("Moni",'<q>The distilled essence of the economy</q>','Bank',16);
				Game.last.icon = [15,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Getting that bag"].order + 0.001;
				Game.TieredAchievement("The One in the sky",'','Temple',16);
				Game.last.icon = [16,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["The leader is good, the leader is great"].order + 0.001;
				Game.TieredAchievement("Enchanted and enhanced",'','Wizard tower',16);
				Game.last.icon = [17,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["You don't think they could've used... it couldn't have been ma-"].order + 0.001;
				Game.TieredAchievement("Ship it",'<q>All products can and will be sold.</q>','Shipment',16);
				Game.last.icon = [5,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Signed, sealed, delivered"].order + 0.001;
				Game.TieredAchievement("Distilled essence",'','Alchemy lab',16);
				Game.last.icon = [6,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Sugar, spice, and everything nice"].order + 0.001;
				Game.TieredAchievement("Liminality",'','Portal',16);
				Game.last.icon = [7,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Not even remotely close to Kansas anymore"].order + 0.001;
				Game.TieredAchievement("Time warp 2: Electric Boogaloo",'<q>I swore I saw this before</q>','Time machine',16);
				Game.last.dname = "Time warp";
				Game.last.icon = [8,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["I only meant to stay a while"].order + 0.001;
				Game.TieredAchievement("All is visible",'<q>With a good enough micro (or macro) scope!</q>','Antimatter condenser',16);
				Game.last.icon = [13,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Not 20 years away forever"].order + 0.001;
				Game.TieredAchievement("Light matter",'','Prism',16);
				Game.last.icon = [14,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Bright side of the Moon"].order + 0.001;
				Game.TieredAchievement("Anything's possible",'<q>With enough luck.</q>','Chancemaker',16);
				Game.last.icon = [19,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Riding the Mersenne twister"].order + 0.001;
				Game.TieredAchievement("Replicated replications",'','Fractal engine',16);
				Game.last.icon = [20,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Divide and conquer"].order + 0.001;
				Game.TieredAchievement(";",'','Javascript console',16);
				Game.last.icon = [21,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Pebcakes"].order + 0.001;
				Game.TieredAchievement("Cookie Clicker 7",'','Idleverse',16);
				Game.last.dname = "Cookie clicker "+(Math.round(Game.Objects["Idleverse"].amount / 70)+1).toString();
				Game.last.descFunc=function(){
					Math.seedrandom(Game.seed+'-cookieclickerinfinity-'+Game.mods["GabeDFPU"].cookclickval+(Math.round(Game.Objects["Idleverse"].amount / 70)+Game.mods["GabeDFPU"].cookclickval));
					var str='<q>Now with '+choose(["added flavor","extra chips","more heavenly upgrades","transcendence","problems","New Game +","three new buildings","seven more blab texts","two more seasons","a third dimension","less colors","more bugs","NaNeinf","less fun","2% more bones","your money back guaranteed","8% less cookie","grandfathers","lower back pain","1% more UI","0% less meaning","1 new number","nine hundred and eighty five less numbers","no Beautify!","l337 5p34k","nothing","meaning","too many numbers",""])
					Math.seedrandom();
					return this.desc+str+'!</q>';
				};
				Game.last.icon = [22,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Greener on the other sides"].order + 0.001;
				Game.TieredAchievement("No more room",'<q>Every thought and then some.</q>','Cortex baker',16);
				Game.last.icon = [23,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Where is my mind"].order + 0.001;
				Game.TieredAchievement("Self",'<q>It was all you, and always will be.</q>','You',16);
				Game.last.icon = [24,25,Game.mods["GabeDFPU"].custIcons]
				Game.last.order = Game.Achievements["Introspection"].order + 0.001;

				CCSE.NewUpgrade("Kitten board members","You gain <b>more CpS</b> the more milk you have.<q>We require more boards, sir</q>",900000000000000000000000000000000000000000000000000000,[18,25,Game.mods["GabeDFPU"].custIcons])
				Game.last.order = Game.Upgrades["Kitten strategists"].order + 0.001;
				if (Game.mods["Even More Heavenly Upgrades"]) {
					CCSE.NewHeavenlyUpgrade("Permanent Kitten board members","They stick with you<q>Forever!</q>",5777777777777777,Game.Upgrades["Kitten board members"].icon,958,-900,["Permanent Kitten marketeers","Permanent Kitten analysts","Permanent Kitten executives","Permanent Kitten admins","Permanent Kitten strategists"])
					//somethin for EMHU... might as well
					//one more thing (no, too expensive) (no, not that expensive in reality)
					var architectBasePrice = Game.Objects["Architect"].basePrice
					CCSE.NewHeavenlyUpgrade("Starter design", 'You start with <b>10 Architects</b><q>Despite being different creations all together, everything must be strung and interlinked.</q>',architectBasePrice * 10,[25,0,Game.mods["GabeDFPU"].custIcons], -2973, -456, ['Starter multiverse'])
					Game.Upgrades["Starter design"].showIf = function(){
						return	 (Game.HasAchiev("Patch 0.5.0"));
					}
				}
				if (Game.mods["More Heavenly Upgrades Remastered"]) {
					//no, it's too self-contained to do anything.
					//that and it's unbalanced, 99% cheaper buildings...
					//when I forcefully balanced 50% cheaper buildings into 10% cheaper buildings...

					//not going to balance MHUR *yet*, if I do, that's a different mod.

					//Goodbye and Good-day!

					// //cps
					// //CCSE.NewHeavenlyUpgrade(buildingTiers[1][3], `Each ${buildingTiers[1][0]} gains <b>+${baseCpsIncrease}%</b> base CpS per ${buildingTiers[1][0]}</b>.`, heavenlyUpgradeBase * (heavenlyUpgradePow ** cpsUpgrade++), [0, 32], -1750, -500, [cpsSpecial[1]]);
					// CCSE.NewHeavenlyUpgrade("Embrace Architects", `Each Architect gains <b>+1%</b> base CpS per Architect.<q>Embrace what has brought this here, and reap the rewards.</q>`,1111111 * (2.5 ** 27), [25,22,Game.mods["GabeDFPU"].custIcons], -2000, -2280,["Ptah"]);
					// CCSE.NewHeavenlyUpgrade("Architects on your hands", `Architect levels boost clicks by <b>1%</b>.<q>I don't think having Architects on your hands is that great for clicking, but the stats say otherwise.`,1111111 * (2.5 ** 48), [25,19,Game.mods["GabeDFPU"].custIcons], -2000, -3000,["Abandon the old gods"]);
					
					// //lump
					// CCSE.NewHeavenlyUpgrade("Sugar lump design process", `Sugar lumps mature <b>${21*180000/60000} minutes</b> sooner.<q>Architects may not have created these lumps, but they sure can figure out how they are designed.</q>`,1111111 * (2.5 ** 48), [25,20,Game.mods["GabeDFPU"].custIcons], -500, -4250,["Faster and lumpier clicking process"]);
					// CCSE.NewHeavenlyUpgrade("Creation of the other-worldly", `Sugar lumps mature <b>${21*250/1000} seconds</b> sooner per Architect.<q>Where do these lumps even form? Much like where you are, these are rather otherwordly, combined with being able to modify buildings. What is in these?</q>`,1111111 * (2.5 ** 49), [25,24,Game.mods["GabeDFPU"].custIcons], -200, -4250,["Faster and lumpier clicking process"]);
				
					// //luck (ahem, sorry, "utility")
					// CCSE.NewHeavenlyUpgrade("Better Luck XXI", `Golden cookies appear <b>5%</b> more often.<br>Golden cookie effects last <b>5%</b> longer.<q>This long of buffs and cookies might be too much.</q>`,1111111 * (2.5 ** 48), [1,9,Game.mods["GabeDFPU"].custIcons], 2085, -1920,["Better Luck XX"]);
					// CCSE.NewHeavenlyUpgrade("Intensified Luck XXI", `Buffs are <b>3%</b> stronger.<br>This does include debuffs!<q>Architectural design can really influence anything these days.</q>`,1111111 * (2.5 ** 49), [1,8,Game.mods["GabeDFPU"].custIcons], 2385, -1920,["Intensified Luck XX"]);
				
					// Game.customBuildings["Architect"].cpsMult.push(function () {
					// 	let cpsMultiplier = 1;
					// 	if(Game.Has("Embrace Architects")) cpsMultiplier *= 1 + (Game.Objects["Architect"].amount / 100);
					// 	return cpsMultiplier;
					// });
				}
			}
		}
		//I know the archives just say "new building".
		//but every building also has a flavor.
		//With every building, there is a flavor.
		//with every flavor, there is a set of upgrades and achievements.
		//with every building, there's a new line of All Star by Smash Mouth.


		CE.NewUpgradeTier('Synergy III',175,undefined,27,'#008595',200000000000000000,'Synergies Vol. III',1,"synergy3");
		CCSE.NewHeavenlyUpgrade("Synergies Vol. III","Unlocks a new tier of upgrades that affect <b>2 buildings at the same time</b>.<br>Synergies appear once you have <b>175</b> of both buildings.<q>The horde beats the several.</q>",52525252,[10,27,MOD.custIcons],190,-1344,["Chimera"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321")
		MOD.New();

		Game.SynergyUpgrade('Manual labor','<q>Turns out putting in some effort to tend to your own farms actually helps the crops.</q>','Farm','Cursor','synergy3');
		Game.last.order = Game.Upgrades["Rain prayer"].order + 0.0001;
		Game.last.icon = [2,27,MOD.custIcons];
		Game.SynergyUpgrade('Endless resources','<q>Given how every idleverse has many properties much like our own, and unique to itself, combined with the sheer quantity of them, it makes sense to harvest them for more than just cookies.</q>','Mine','Idleverse','synergy3');
		Game.last.order = Game.Upgrades["Asteroid mining"].order + 0.0001;
		Game.last.icon = [3,27,MOD.custIcons];
		Game.SynergyUpgrade('Production hacks','<q>With how versatile Javascript is, using it to boost productivity in your factories is only a logical step. Even if a little inefficient to a lesser degree than before, and prone to collapse if a function deprecates.</q>','Factory','Javascript console','synergy3');
		Game.last.order = Game.Upgrades["Temporal overclocking"].order + 0.0001;
		Game.last.icon = [4,27,MOD.custIcons];
		Game.SynergyUpgrade('Praise to the money','<q>If money makes the world go round, then it only makes sense to praise it like the deity it is.<br>All hail Greed!</q>','Bank','Temple','synergy3');
		Game.last.order = Game.Upgrades["Printing presses"].order + 0.0001;
		Game.last.icon = [15,27,MOD.custIcons];
		Game.SynergyUpgrade('Too many deities','<q>The infinitum of the universe simply means anything can, and likely will, exist. Therefore, any number of God-like entities may be.</q>','Temple','Shipment','synergy3');
		Game.last.order = Game.Upgrades["God particle"].order + 0.0001;
		Game.last.icon = [16,27,MOD.custIcons];
		Game.SynergyUpgrade('Eldritch invocations','<q>What lies on the other side of these portals sure could help understand the ancient scriptures lying around.</q>','Wizard tower','Portal','synergy3');
		Game.last.order = Game.Upgrades["Magical botany"].order + 0.0001;
		Game.last.icon = [17,27,MOD.custIcons];
		Game.SynergyUpgrade('Conceptual bidding','<q>Shipping entire ideas may seem odd, but people will pay quite a lot for entire concepts generated by your Cortex bakers!</q>','Shipment','Cortex baker','synergy3');
		Game.last.order = Game.Upgrades["Shipyards"].order + 0.0001;
		Game.last.icon = [5,27,MOD.custIcons];
		Game.SynergyUpgrade('A whole new area','<q>So much could be within light, so might as well distill and separate it into its smaller components</q>','Alchemy lab','Prism','synergy3');
		Game.last.order = Game.Upgrades["Gold fund"].order + 0.0001;
		Game.last.icon = [6,27,MOD.custIcons];
		Game.SynergyUpgrade('Looped being','<q>Only problem with portal fractals, aside from the infinitum of it all, is how tiny they become.</q>','Portal','Fractal engine','synergy3');
		Game.last.order = Game.Upgrades["Abysmal glimmer"].order + 0.0001;
		Game.last.icon = [7,27,MOD.custIcons];
		Game.SynergyUpgrade('Forced aging','<q>While you could bring these grandmothers back to their prime ages... it\'d be better to forcefully age more people into grandmas.</q>','Time machine','Grandma','synergy3');
		Game.last.order = Game.Upgrades["Primeval glow"].order + 0.0001;
		Game.last.icon = [8,27,MOD.custIcons];
		Game.SynergyUpgrade('Miniscule production','<q>Shrinking everything down means more space for more of your production, heavily compacting factories to be able to be fit into your pockets!/q>','Antimatter condenser','Factory','synergy3');
		Game.last.order = Game.Upgrades["Chemical proficiency"].order + 0.0001;
		Game.last.icon = [13,27,MOD.custIcons];
		Game.SynergyUpgrade('Universe\'s lights','<q>Transporting prisms with shipments allows any light in the universe, no matter how far, to be consumed.</q>','Prism','Shipment','synergy3');
		Game.last.order = Game.Upgrades["Mystical energies"].order + 0.0001;
		Game.last.icon = [14,27,MOD.custIcons];
		Game.SynergyUpgrade('Transmutative fortune','<q>Being able to transmute that two of spades into an ace of hearts really helps when you accidentally put too much down in blackjack.</q>','Chancemaker','Alchemy lab','synergy3');
		Game.last.order = Game.Upgrades["Charm quarks"].order + 0.0001;
		Game.last.icon = [19,27,MOD.custIcons];
		Game.SynergyUpgrade('Keep going smaller','<q>The recursiveness of physics and particles means going down enough will eventually wind you back up at the very top. The smallest thing can very well become the largest thing.</q>','Fractal engine','Antimatter condenser','synergy3');
		Game.last.order = Game.Upgrades["Mice clicking mice"].order + 0.0001;
		Game.last.icon = [20,27,MOD.custIcons];
		Game.SynergyUpgrade('Recursive functions','<q>A function calling itself, how quaint... although some form of wait should be in order to not make it halt whatever systems run it.</q>','Javascript console','Fractal engine','synergy3');
		Game.last.order = Game.Upgrades["Tombola computing"].order + 0.0001;
		Game.last.icon = [21,27,MOD.custIcons];
		Game.SynergyUpgrade('Antimatter dimensions','<q>Turns out many idleverses come with antimatter to boot! While the properties may be different, with enough tweaks those antimatter condensers will condense it like there\'s no tomorrow!</q>','Idleverse','Antimatter condenser','synergy3');
		Game.last.order = Game.Upgrades["Infraverses and superverses"].order + 0.0001;
		Game.last.icon = [22,27,MOD.custIcons];
		Game.SynergyUpgrade('Cleansed mind','<q>A wrong thought at the wrong time could lead to overthinking existentialism and traumatize the Cortex baker, so time manipulation to get them out of that should hopefully keep them away frome those dangerous thoughts.</q>','Cortex baker','Time machine','synergy3');
		Game.last.order = Game.Upgrades["Fertile minds"].order + 0.0001;
		Game.last.icon = [23,27,MOD.custIcons];
		Game.SynergyUpgrade('Self synergy','<q>I mean, who else knows you better than yourself, and all of your clones?</q>','You','You','synergy3');
		Game.last.order = Game.Upgrades["Peer review"].order + 0.0001;
		Game.last.icon = [24,27,MOD.custIcons];
		Game.last.ddesc = loc('You gain <b>+0.2%</b> CpS per You.<q>I mean, who else knows You better than Yourself, and all of Your clones?</q>');
		Game.last.desc = loc('You gain <b>+0.2%</b> CpS per You.<q>I mean, who else knows You better than Yourself, and all of Your clones?</q>');

		
		CCSE.NewHeavenlyUpgrade("Lower inflation","Building price increase lowered by <b>0.0005%</b>.<q>Lowering inflation results in far less cookies spent on production!</q>",1515151515,[15,16],-902,-1000,["Sacrilegious corruption"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321")
		MOD.New();
		CCSE.NewHeavenlyUpgrade("Slower inflation","Building price increase lowered by another <b>0.0005%</b>.<q>Lowering inflation even further means even less cookies spent on production...<br>though no inflation could mean cookies hold no worth...</q>",151515151515,[15,17],-1054,-1014,["Lower inflation"]);
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321")
		MOD.New();

		CCSE.NewHeavenlyUpgrade("Satan's legacy","Cookie production multiplier <b>+1%</b> per Santa level.<q>Satan's legacy is far less worthful than Santa's legacy.<br>Common mistake, one letter difference.</q>",CE.N.Million * 100,[6,7,MOD.custIcons],-88,-774,["Satan"])
		MOD.ApplyOrder();
		MOD.applyCredit("Perfection")
		MOD.New();

		CCSE.NewHeavenlyUpgrade("Heavenly strength","Increases the potential of your prestige level by <b>1%</b> when you have <b>Heavenly key</b>.<q>It might not seem like much, but enough of these small percents will add up!</q>",99999999,[15,7],294,-1262,["Chimera"]) //not attaching it to "Box of gifts" as that's for EGGS, not HEAVEN;
		MOD.ApplyOrder();
		MOD.applyCredit("1234abcdcba4321")
		MOD.New();
		
		//commented out because: no true use; no true need; no parent; father-less and/or mother-less upgrades;
		//aka. unfinished
				// CCSE.NewHeavenlyUpgrade("Bridge","No effect whatsoever.",1000000000000,[16,11],635,275,["Legacy"])
				// MOD.ApplyOrder();
				// MOD.applyCredit("1234abcdcba4321");

				// CCSE.NewHeavenlyUpgrade("Gold suit",'Unlocks the <span style=color:Gold;>gold suit</span>.',10000000000000,[13,7],815,301,["Bridge"])
				// Game.last.dname = "<span style=color:Gold;>Gold suit</span>"
				// MOD.ApplyOrder();
				// MOD.applyCredit("1234abcdcba4321");

				// CCSE.NewUpgrade("Gold suit [off]",'Applies a <span style=color:Gold;>gold suit</span> onto everything <small>(besides that, does nothing)</small>!<q>Tint the world <span style=color:Gold;>GOLD</span>!</q>',0,[13,6,])
				// Game.last.toggleInto='Gold suit [on]'
				// Game.last.pool = 'toggle'
				// Game.last.buyFunction = function(){MOD.enableGold()}
				// MOD.ApplyOrder();

				// CCSE.NewUpgrade("Gold suit [on]",'<b><div style="text-align:center;">Currently on</div></b><div class=\"line\"></div>Applies a <span style=color:Gold;>gold suit</span> onto everything <small>(besides that, does nothing)</small>!<q>Tint the world <span style=color:Gold;>GOLD</span>!</q>',0,[13,7,])
				// Game.last.toggleInto='Gold suit [off]'
				// Game.last.pool = 'toggle'
				// Game.last.buyFunction = function(){MOD.disableGold()}
				// MOD.ApplyOrder();

				// CCSE.NewHeavenlyUpgrade("Trophy", "<br><p style='font-size:40px;'><b>YOU WIN!!!</b></p><br><q>after purchasing this upgrade</q>",1000000000000000000000000000000000000000000000000,[17,5],949,224,["Gold suit"])
				// MOD.ApplyOrder();
				// MOD.applyCredit("1234abcdcba4321");
				// Game.last.descFunc = function(){
				// 	if (Game.Upgrades["Trophy"].bought == 1) {
				// 		return "<br><p style='font-size:40px;'><b>YOU WIN!!!</b></p><br><q>after purchasing this upgrade</q><br><br><small>No fanfare, no effects, hollow...<br>perfect closure<br><small>(note, the archives did not include this small thingy, I included it as I felt it kinda works, emphasizing that a win within Cookie Clicker being hollow, feels right, especially if the game is an idle game, with no inherent end. And, while this isn't part of the archives, this message works in the way that the game is self-referential, satire of itself. Sorry for tampering the archives though (more than I should), just felt right.)</small></small>";
				// 	} else {
				// 		return "<br><p style='font-size:40px;'><b>YOU WIN!!!</b></p><br><q>after purchasing this upgrade</q>";
				// 	}
				// }
		//^ not truly winning. I mean, it's just an upgrade, no prize, no reward, no (true) challenge...
		//not truly winning...
		//a cheap "win"
		//dear past me who thought ruining the game was going to be good:
		//*ahem*, as stated within the newlwy modified thingy, rather than saying "doesn't it feel so hollow, so un-earned?",
		//winning being hollow, to me, actually fits in with Cookie Clicker as a whole, something that'd likely happen.
		//(obviously without the massive text and archiver's/editor's note)
		//so, it's not truly winning, it never *can* be. It's an idle game, inherently there is no win state.
		//no challenge besides waiting, no prize, no reward, no win for a game gives off a massive reward...
		//well, at least no win for an idle game would ever give a massive reward, at least it shouldn't.
		//Dear whoever is reading this besides I, you can go back to reading the rest of the code now (that's all, just some reasoning on top of reasoning)

		MOD.loadModFunc = function(){
			//as the comment after this says... I just kinda like doin this more...
			//then again...
			//
			CE.GroupMoveUpgrade("Better click frenzy II","Golden gift box",-250,285); //I could modify stuffs rather than using functions... eh
			CE.MoveUpgrade("Longer click frenzy II",-250,285);
			CE.GroupMoveUpgrade("Luckiest","Golden gift box",-250,285);
			CE.MoveUpgrade("Golden gift box",-250,285);
			CE.GroupMoveUpgrade("Prism heart echo","Starlove",-85,-275);


			//*ahem*, having this in HR does NOT work... Who would've guessed mod order matters.
			CE.GroupMoveUpgrade("Twist the hand of fate","Startrade",-250,100);
			CE.GroupMoveUpgrade("Santa's eternal dominion","Starsnow",-225,-125);
			CE.MoveUpgrade("Divine Pact",-250,-150);
			CE.MoveUpgrade("Ungodly mutations",-250,-150);
			CE.MoveUpgrade("Instant research",-250,-150);
			CE.MoveUpgrade("Wrath switch",-250,-150);
			CE.GroupMoveUpgrade("Starter light","Starter kitchen",-250,-150);
			CE.MoveUpgrade("Biscotti!",-250,-150);

			MOD.getTimeRemaining = function(lastT, interval) {
				var framesRemaining = interval - (Game.T - lastT);
				var seconds = Math.max(0, Math.floor(framesRemaining / Game.fps));
				var mins = Math.floor(seconds / 60);
				var secs = seconds % 60;
				return mins + "m " + (secs < 10 ? "0" : "") + secs + "s";
			}

			MOD.getTimeRemainingFrames = function(lastT, interval) {
				var framesRemaining = interval - (Game.T - lastT);
				return framesRemaining
			}

			MOD.patienceIncInterval = Game.fps * 60 * 60;
			MOD.patienceDecInterval = Game.fps * 60 * 30;
			MOD.patienceMax = 100;
			var func=function(){
				var incTimer = "", decTimer = "";
				if (this.name == "Golden switch [on]") {
					//it on :)
					incTimer = "Will increase in power if <b>on</b> in: <b>" + Game.mods["GabeDFPU"].getTimeRemaining(Game.mods["GabeDFPU"].lastPatienceIncrementTime, Game.mods["GabeDFPU"].patienceIncInterval) + "</b>";
					if (Game.mods["GabeDFPU"].GoldenSwitchPatience == Game.mods["GabeDFPU"].patienceMax) {incTimer = "Golden idling power <b>maxed</b> (<b>"+Game.mods["GabeDFPU"].GoldenSwitchPatience+"%</b>)"}
				} else if (this.name == "Golden switch [off]"){
					//it off :(
					decTimer = "Will decrease in power if <b>off</b> in: <b>" + Game.mods["GabeDFPU"].getTimeRemaining(Game.mods["GabeDFPU"].lastPatienceDecrementTime, Game.mods["GabeDFPU"].patienceDecInterval) + "</b>";
					if (Game.mods["GabeDFPU"].GoldenSwitchPatience == 0) {decTimer = "Golden idling power at <b>0%</b>"}
				}
			if (Game.Has('Residual luck') && Game.Has("Golden idling"))
			{
				var bonus=0;
				var upgrades=Game.goldenCookieUpgrades;
				for (var i in upgrades) {if (Game.Has(upgrades[i])) bonus++;}
				bonus += (Game.mods["GabeDFPU"].GoldenSwitchPatience / 10)
				return '<div style="text-align:center;">'+Game.listTinyOwnedUpgrades(Game.goldenCookieUpgrades)+'<br><br>The effective boost is <b>+'+Beautify(Math.round(50+bonus*10))+'%</b><br>thanks to residual luck<br>your <b>'+(bonus - (Game.mods["GabeDFPU"].GoldenSwitchPatience / 10))+'</b> golden cookie upgrade'+(bonus==1?'':'s')+'<br>and your golden idling (<b>'+Game.mods["GabeDFPU"].GoldenSwitchPatience+'%</b>).</div><div class="line"></div><div style="text-align:center;">'+tinyIcon([1,3,Game.mods["GabeDFPU"].custIcons])+"     "+incTimer+decTimer+'</div><div class="line"></div>'+this.ddesc;
			} else if (Game.Has('Residual luck'))
			{
				var bonus=0;
				var upgrades=Game.goldenCookieUpgrades;
				for (var i in upgrades) {if (Game.Has(upgrades[i])) bonus++;}
				return '<div style="text-align:center;">'+Game.listTinyOwnedUpgrades(Game.goldenCookieUpgrades)+'<br><br>The effective boost is <b>+'+Beautify(Math.round(50+bonus*10))+'%</b><br>thanks to residual luck<br>and your <b>'+bonus+'</b> golden cookie upgrade'+(bonus==1?'':'s')+'.</div><div class="line"></div>'+this.ddesc;
			} else if (Game.Has("Golden idling")) 
			{
				var bonus=0;
				bonus += (Game.mods["GabeDFPU"].GoldenSwitchPatience / 10)
				return '<div style="text-align:center;">The effective boost is <b>+'+Beautify(Math.round(50+bonus*10))+'%</b><br>thanks to your golden idling (<b>'+Game.mods["GabeDFPU"].GoldenSwitchPatience+'%</b>).</div><div class="line"></div><div style="text-align:center;">'+tinyIcon([1,3,Game.mods["GabeDFPU"].custIcons])+"     "+incTimer+decTimer+'</div><div class="line"></div>'+this.ddesc;
			}
			return this.desc;
			};
			Game.Upgrades["Golden switch [off]"].descFunc=func;
			Game.Upgrades["Golden switch [on]"].descFunc=func;

			MOD.lastPatienceIncrementTime = null;
			MOD.lastPatienceDecrementTime = null;
			Game.customUpgrades["Golden switch [off]"].buyFunction.push(function(){
				MOD.lastPatienceIncrementTime = Game.T;
				MOD.lastPatienceDecrementTime = null;
			});
			Game.customUpgrades["Golden switch [on]"].buyFunction.push(function(){
				MOD.lastPatienceDecrementTime = Game.T;
				MOD.lastPatienceIncrementTime = null;
			});

			const techBuildings = ["Factory", "Mine", "Shipment", "Alchemy lab", "Portal", "Time machine", "JavaScript Console", "Fractal engine", "Cursor"]; 
			techBuildings.forEach(buildingName => {
				if (!Game.customBuildings[buildingName]) Game.customBuildings[buildingName] = { cpsMult: [] };
				Game.customBuildings[buildingName].cpsMult.push(function (me) {
					if (Game.Has("Holograms")) {
						return 2;
					} else {
						return 1;
					}
				});
			});

			if (Game.Has("\"vocaloid\"")) {
				Game.Upgrades["Vocaloid [off]"].unlock();
				if (Game.Upgrades["Vocaloid [off]"].bought) {Game.Upgrades["Vocaloid [off]"].bought = 0; Game.Upgrades["Vocaloid [on]"].bought = 1;}
			}

			if (Game.Has("Gold suit")) {
				Game.Upgrades["Gold suit [off]"].unlock();
				if (Game.Upgrades["Gold suit [off]"].bought) {Game.Upgrades["Gold suit [off]"].bought = 0; Game.Upgrades["Gold suit [on]"].bought = 1;}
			}

			if (Game.Has("Wrath switch")) {
				if (Game.elderWrath == 0) 				Game.Upgrades["Wrath switch [off]"].unlock();
				if (Game.elderWrath == 1) 				Game.Upgrades["Wrath switch [Awoken]"].unlock();
				if (Game.elderWrath == 2) 				Game.Upgrades["Wrath switch [Displeased]"].unlock();
				if (Game.elderWrath == 3) 				Game.Upgrades["Wrath switch [Angered]"].unlock();
			}

			Game.Upgrades["Eternal seasons"].ddesc = loc("Seasons now last forever.<br>Also unlocked from the upgrade: <b>Eternal seasons</b> <small><small>(but the Heavenly Upgrade version)</small></small><q>Season to taste</q>")
			Game.Upgrades["Eternal seasons"].desc = loc("Seasons now last forever.<br>Also unlocked from the upgrade: <b>Eternal seasons</b> <small><small>(but the Heavenly Upgrade version)</small></small><q>Season to taste</q>")

			Game.Upgrades["Web cookies"].pool = "cookie"
			Game.Upgrades["Steamed cookies"].pool = "cookie"

		//} we should just be putting the below into the loadModFunc already... what the hell was I doing?

			if (Game.mods["cws oldSugarmuck"]) {
				Game.Upgrades["Instant research"].icon = [9,0,Game.mods["cws oldSugarmuck"].dir + "/oldMuck.png"];
			}

			if (Game.mods["MOS_TETO"]) {
				//why not?
				Game.Upgrades['"vocaloid"'].icon = [1,4,MOD.custIcons];
				Game.Upgrades["Vocaloid [off]"].icon = [1,5,MOD.custIcons];
				Game.Upgrades["Vocaloid [on]"].icon = [1,6,MOD.custIcons];
			}
		
		// Game.Loader.Replace('perfectCookie.png',this.dir+'/coolCookie.png');

		Game.killShimmers(); //just because game do break (shimmers break, so we have to kill them or else they'll break the other shimmers. We cannot let it breach containment)
		MOD.EvilFaceAAA();
		MOD.SingularititeCheck(false); //don't give notif as we just loaded the mod, so if they have the upgrade, why would we show it?
		Game.customAscend.push(function(){
			if (Game.Has('Evil face') && Game.mods["GabeDFPU"].tooUglyTimesBoughtTOTAL < 1) {
				document.children[0].children[1].children[0].children[1].children[16].children[8].removeChild(evilFace)
			}
			MOD.lastPatienceIncrementTime = null; //screw you
			MOD.lastPatienceDecrementTime = null; //no idling in heaven
			//but the patience remains
		});
		if (Game.mods["More Heavenly Upgrades Remastered"]) {
		CCSE.ReplaceCodeIntoFunction('Game.Upgrades["NewGamePlus"].canBuyFunc',"if (Game.Upgrades[i].pool == 'prestige') {",`
			// Heavenly Archives / GabeDFPU, NewGamePlus canBuyFunc injection point 1. (just excluding 'Too ugly!' from the thingy)
			if (Game.Upgrades[i].pool == 'prestige' && Game.Upgrades[i].name != 'Too ugly!') {`, 0)
		
			CCSE.ReplaceCodeIntoFunction('Game.Upgrades["NewGamePlus"].clickFunction',"Game.prestige = 0;",`
				// Heavenly Archives / GabeDFPU, NewGamePlus clickFunction injection point 1.
				Game.mods["GabeDFPU"].TooUglyTimesBought = 0;
				Game.mods["GabeDFPU"].TooUglyTimesBoughtTOTAL = 0;
				Game.mods["GabeDFPU"].GoldenSwitchPatience = 0;
			`, 1)

			CCSE.ReplaceCodeIntoFunction('Game.Upgrades["NewGamePlus"].clickFunction',"Object.values(buildingTiers).forEach((e) => Game.Objects[e[0]].amount = 0);",`
				//ignore me (Heavenly Archives / GabeDFPU, NewGamePlus clickFunction injection point 2)
				for (let i in Game.Objects) {Game.Objects[i].amount = 0;}
				//and ignore this:
				const heavenlyUpgradeBase = 1_111_111;
				const heavenlyUpgradePow = 2.5;
				const NGPCpsBuffPercent = 300;
				const NGPMhurPriceIncrease = 1;
				const NGPAchievements = {
					'1': 'New Game+',
					'2': 'New Game+2',
					'3': 'New Game+3',
					'4': 'New Game+4',
					'5': 'New Game+5',
					'6': 'New Game+6',
					'7': 'New Game+7',
				}
				function calculateNGPCycle () {
					let ngpCycle = 0;
					const keys = Object.keys(NGPAchievements).sort((a, b) => a - b);
					for (let i = 0; i < keys.length; i++) {
						if (!Game.HasAchiev(NGPAchievements[keys[i]])) {
							ngpCycle = parseInt(keys[i]) - 1;
							break;
						}
						if (i === keys.length - 1) {
							ngpCycle = parseInt(keys[i]);
						}
					}
					return ngpCycle;
				}
				//MHUR doesn't make these global, so we *do* have to do this... :(`,0)
		}

		// Ensure the calculation is done only once
		MOD.NightGamingChecked = false;
		if (!MOD.NightGamingChecked) {
			MOD.NightGamingChecked = true;
	
			// Retrieve the last offline time
			const now = Date.now() / 1000; // Current time in seconds
			const lastOffline = Game.lastDate / 1000; // Last save time in seconds
			const offlineTime = Math.max(0, now - lastOffline); // Offline duration in seconds
	
			if (offlineTime > 0) {
				// Use raw CPS (cookies per second without multipliers)
				const rawCps = Game.cookiesPsRaw
	
				// Check upgrades and calculate bonuses
				let bonusCookies = 0;
				var percent = 0;

				if (Game.Has("Night gaming")) percent += 20;
				if (Game.Has("Night gaming deluxe")) percent += 30;
				if (Game.Has("Perfect idling 2")) percent += 50;
				if (Game.Has("Deep sleep production")) percent += 75;
				if (Game.Has("Lucid baking")) percent += 100;
				if (Game.Has("Passive perfection")) percent += 110;
				if (Game.Has("Retirement plan")) percent += 115;

				bonusCookies += (offlineTime * rawCps * (percent/100))
	
				// Apply the bonus and notify the player
				if (bonusCookies > 0) {
					Game.Earn(bonusCookies);
					Game.Notify(
						'Night Gaming Bonus',
						`You earned an extra <b>${Beautify(bonusCookies)}</b> cookies while you were away.`,
						[5,0,Game.mods["GabeDFPU"].custIcons]
					);
				}
			}
		}

		Game.registerHook('reset',function(hard){
			if (hard)
			{
				//MOD.buttonClicks=0;
				//MOD.updateScore();

				MOD.stopVocaloidSongs();	
				Game.mods.GabeDFPU.TooUglyTimesBought = 0
				Game.mods.GabeDFPU.TooUglyTimesBought = 0;
				Game.mods.GabeDFPU.TooUglyTimesBoughtTOTAL = 0;
				Game.mods.GabeDFPU.cookclickval = 0;
			}

			//console.log("HEAGEAFA")
			Game.mods.GabeDFPU.disableGold();
			Game.mods.GabeDFPU.EvilFaceAAA();
		});

		Game.registerHook('cookiesPerClick',(cpc) => {
			cpcMult = 1;
			cpcAdd = 0;

			if (Game.Has('Cursor black magic')) {cpcMult += (0.2 * Math.floor(Game.Objects["Cursor"].amount / 10))};
			if (Game.Has('Heavenly mouse')) {cpcMult *= ((Math.trunc((Game.BuildingsOwned / 10)) / 10) + 1)};
			if (Game.Has('Santa\'s greatful helpers')) cpcMult *= 1.10;
			if (Game.Has("Ancient gauntlets")) cpcMult*=1.2;
			if (Game.Has("Trifecta")) cpcMult*=1.4;
			if (Game.Has("Permanent cookie egg")) cpcMult*=1.1;

			if(Game.Has("Architects on your hands")) cpcMult *= 1 + (Game.Objects["Architect"].level / 100);

			if (Game.Has('Etherealistic mouse')) cpcAdd+=Game.cookiesPs*0.01;
			
			var mult = 0;
			var num=0;
			for (var i in Game.Objects) {num+=Game.Objects[i].amount;}
			if (Game.Has("Duodecillion fingers")) mult *= 20;
			mult=mult*num
			cpcAdd+=mult
			//it might not be entirely accurate...
			//but who cares.

			return (cpc + cpcAdd) * cpcMult
		})

		let CookieUpgradesBought = [];
		Game.registerHook('cps',(cps) => {
			var cpsMult = 1
			var cpsAdd = 0;
			var cpsMultMult = 1; //Point Point.
			if (MOD.TooUglyTimesBought >= 66) cpsAdd += 666666
			if (MOD.TooUglyTimesBought >= 6666666) cpsAdd += 6
			if (MOD.TooUglyTimesBought >= 6666666) cpsAdd += ((MOD.TooUglyTimesBought - 6666666)*6)

			if (Game.Has("Eternal frenzy")) cpsMult *= 7
			if (Game.Has("Biscotti!")) cpsMult *= 2
			if (Game.Has('Heavenly merriness')) cpsMult *= 1.15
			if (Game.Has('Heavenly jolliness')) cpsMult *= 1.15
			if (Game.Has('Another lump of coal')) cpsMult *= 1.01
			if (Game.Has('Santa\'s endless legacy')) cpsMult *= 1.42
			if (Game.Has('An incredibly itchy sweater')) cpsMult *= 1.01
			if (Game.Has('Santa\'s eternal dominion')) cpsMult *= 1.2
			if (Game.Has('Timelessness void') && Game.season == "") cpsMult *= 1.1

			//oh no
			if (Game.Has("Permanent chicken egg")) cpsMult *= 1.01;
			if (Game.Has("Permanent duck egg")) cpsMult *= 1.01;
			if (Game.Has("Permanent turkey egg")) cpsMult *= 1.01;
			if (Game.Has("Permanent quail egg")) cpsMult *= 1.01;
			if (Game.Has("Permanent robin egg")) cpsMult *= 1.01;
			if (Game.Has("Permanent ostrich egg")) cpsMult *= 1.01;
			if (Game.Has("Permanent cassowary egg")) cpsMult *= 1.01;
			if (Game.Has("Permanent salmon roe")) cpsMult *= 1.01;
			if (Game.Has("Permanent frogspawn")) cpsMult *= 1.01;
			if (Game.Has("Permanent shark egg")) cpsMult *= 1.01;
			if (Game.Has("Permanent turtle egg")) cpsMult *= 1.01;
			if (Game.Has("Permanent ant larva")) cpsMult *= 1.01;

			if (Game.Has("Permanent century egg")) {
				//the boost increases a little every day, with diminishing returns up to +10% on the 100th day
				var day=Math.floor((Date.now()-Game.startDate)/1000/10)*10/60/60/24;
				day=Math.min(day,100);
				cpsMult*=1+(1-Math.pow(1-day/100,3))*0.1;
			}
			if (Game.Has('Permanent "egg"')) {
				cpsAdd+=9; //"egg"
			}

			if (Game.Has("Satan's legacy")) {cpsMult *= (1 + (Game.santaLevel / 100))}


			if (Game.Has("Golden idling") && Game.Has("Golden switch [off]")) {
				var switchPatience = 1 + (MOD.GoldenSwitchPatience / 100);
				cpsMult *= switchPatience;
			}

			if (Game.Has('Deep thought') || Game.Has('Lucy in the sky with cookies') || Game.Has('Instrumentability')) {

				//let me = 0
				for (let i in Game.Upgrades) {
					let upgrade = Game.Upgrades[i];
					if (upgrade.pool == 'cookie' && upgrade.bought == 1 && !CookieUpgradesBought.includes(upgrade.name)) {
						//me++;
						CookieUpgradesBought.push(upgrade.name);
					}
				}
		
				if (Game.Has('Deep thought'))				cpsMult += (CookieUpgradesBought.length * 0.05)
				if (Game.Has('Lucy in the sky with cookies'))				cpsMult += (CookieUpgradesBought.length * 0.12)
				if (Game.Has('Instrumentability'))				cpsMult += (CookieUpgradesBought.length * 0.496)

		
				//me = 0
			}
			
			let evilCPS = 0;
			if (Game.Has("Evil face")) {
				let additionalCPS = (cps * cpsMult + cpsAdd) * 0.00666666;
				evilCPS = additionalCPS;
			}

			let uglyCPS = 0;
			if (MOD.TooUglyTimesBought >= 6) {
				let additionalCPS = ((cps * cpsMult) + evilCPS + cpsAdd) * 0.066666
				uglyCPS += additionalCPS
			}

			if (MOD.TooUglyTimesBought >= 6666) {
				let additionalCPS = ((cps * cpsMult) + evilCPS + cpsAdd + uglyCPS) * 666.666
				uglyCPS += additionalCPS
			}

			if (MOD.TooUglyTimesBought >= 66666) {
				let additionalCPS = ((cps * cpsMult) + evilCPS + cpsAdd + uglyCPS) * 0.066666
				uglyCPS *= additionalCPS
			}

			if (Game.Has("Pure heart echo")) cpsMultMult *= 1.03;
			if (Game.Has("Ardent heart echo")) cpsMultMult *= 1.03;
			if (Game.Has("Sour heart echo")) cpsMultMult *= 1.03;
			if (Game.Has("Weeping heart echo")) cpsMultMult *= 1.03;
			if (Game.Has("Golden heart echo")) cpsMultMult *= 1.03;
			if (Game.Has("Eternal heart echo")) cpsMultMult *= 1.03;
			if (Game.Has("Prism heart echo")) cpsMultMult *= 1.03;

			if (Game.Has("Skulls")) cpsMultMult *= 1.03;
			if (Game.Has("Ghosts")) cpsMultMult *= 1.03;
			if (Game.Has("Bats")) cpsMultMult *= 1.03;
			if (Game.Has("Slime")) cpsMultMult *= 1.03;
			if (Game.Has("Pumpkins")) cpsMultMult *= 1.03;
			if (Game.Has("Eyeballs")) cpsMultMult *= 1.03;
			if (Game.Has("Spiders")) cpsMultMult *= 1.03;

			return ((cps * cpsMult) + evilCPS + cpsAdd + uglyCPS) * cpsMultMult //what, what the actual hell is even going on here?
		});

		Game.registerHook('reincarnate',() => {
			if (Game.ascensionMode == 1) MOD.TooUglyTimesBought = 0
			if (Game.ascensionMode != 1) {
			MOD.TooUglyTimesBought = MOD.TooUglyTimesBoughtTOTAL

			if (Game.Has("Starter sprouts")) Game.Objects["Farm"].getFree(5)
			if (Game.Has("Starter chemistry")) Game.Objects["Alchemy lab"].getFree(3)
			if (Game.Has("Starter light")) Game.Objects["Prism"].getFree(1)

			if (Game.Has('"vocaloid"') && !Game.Upgrades["Vocaloid [off]"].bought && !Game.Upgrades["Vocaloid [on]"].bought) Game.Unlock("Vocaloid [off]")
			if (Game.mods.GabeDFPU.currentSound != undefined && Game.Has('"vocaloid"')) {Game.Upgrades["Vocaloid [off]"].bought = 1; Game.Upgrades["Vocaloid [on]"].bought = 0; Game.Unlock("Vocaloid [on]"); Music.pause();}
			if (Game.mods.GabeDFPU.currentSound == undefined && Game.Has('"vocaloid"')) {Game.Upgrades["Vocaloid [on]"].bought = 1; Game.Upgrades["Vocaloid [off]"].bought = 0; Game.Unlock("Vocaloid [off]")}


			if (Game.Has('Gold suit')) Game.Unlock("Gold suit [off]")
			if (Game.Has("Gold suit [off]")) {Game.Upgrades["Gold suit [on]"].bought = 1; Game.Upgrades["Gold suit [off]"].bought = 0;}

			if (Game.Has('Wrath switch')) Game.Unlock("Wrath switch [off]")
			
			if (Game.Has('Eternal seasons 2: electric boogaloo')) {Game.Upgrades["Eternal seasons"].bought = 1;}

			if (Game.Has('Super divine bakeries')) {
				for (let i in Game.Upgrades) {
					if (Game.Upgrades[i].pool === "cookie" && (Game.Upgrades[i].lasting == false || Game.Upgrades[i].lasting === undefined) || Game.Upgrades[i].name === "Web cookies" || Game.Upgrades[i].name === "Steamed cookies") {
						if (Game.Upgrades[i].unlockAt == undefined || Game.Upgrades[i].unlockAt.require == undefined) {
						Game.Upgrades[i].unlock();
						} else {
							if (Game.Has[Game.Upgrades[i].unlockAt.require]) {
								//if we have the require
								Game.Upgrades[i].unlock();
								//ensures the need for certain upgrades like "Box of not cookies" :D (more balanced)
							}
						}

						//never said the cookie had to be useful, or cookie shaped (Web/Steamed Cookies and Crumbly Egg respectively)
					}
				}
				if (Game.Has("How to bake your dragon")) {Game.Upgrades["A crumbly egg"].unlock()};
			}

			if (Game.Has("Permanent Kitten board members")) {Game.Upgrades["Kitten board members"].bought = 1};
			if (Game.Has("Starter design")) {Game.Objects["Architect"].getFree(10)}

			MOD.SingularititeCheck(true);

			}
			CookieUpgradesBought = [];

			if (Game.Achievements["Cookie Clicker 7"]) {
				Game.mods["GabeDFPU"].cookclickval++
			}
		})

		Game.registerHook('logic',() => {
			if (Game.T % (Game.fps / 2) === 0 && Game.Has("Autoclick upgrade") && Game.ascensionMode != 1) {
				if (Game.Has('Shimmering veil [off]') && !Game.Has('Shimmering veil [on]') && Game.Has('Shimmering veil')) {
					return; //to not insta-kill the veil
				} else {
					Game.ClickCookie();
					Game.ClickCookie();
				}
				//Game.handmadeCookies -= (Game.computedMouseCps * 2)
			}
			if (Game.T % (Game.fps / 5) === 0 && MOD.currentSound != undefined) {
				if (MOD.currentSound != undefined) {
					var VolumePercent = Game.volumeMusic
					var VolumeClamped = VolumePercent / 100
					MOD.currentSound.volume = VolumeClamped
					//if (l('jukeboxMusicPlay'))l('jukeboxMusicPlay').innerHTML=loc("Play"); //unpauses jukebox, and therefore music.
				}
			}
			if (MOD.lastPatienceIncrementTime != null) {
					if (Game.Has("Golden switch [off]") && Game.Has("Golden idling") && MOD.getTimeRemainingFrames(MOD.lastPatienceIncrementTime,MOD.patienceIncInterval) <= 0) {
						MOD.GoldenSwitchPatience += 1;
						MOD.GoldenSwitchPatience = Math.min(MOD.GoldenSwitchPatience,MOD.patienceMax)
						MOD.lastPatienceIncrementTime = Game.T;
					}
			}
			if (MOD.lastPatienceDecrementTime != null) {
				if (Game.Has("Golden switch [on]") && Game.Has("Golden idling") && MOD.getTimeRemainingFrames(MOD.lastPatienceDecrementTime,MOD.patienceIncInterval) <= 0) {
						MOD.GoldenSwitchPatience = Math.floor(MOD.GoldenSwitchPatience / 2); //resetting it just feels kinda bad.
						//but not lowering it is OP, so screw you it's halved every half an hour.
						MOD.lastPatienceDecrementTime = Game.T;
				}
			}
			if (Game.Upgrades["The end is never the end is never the end"]) {
				if (EN)
				{
					var nameFunc = function(){
						var str='the end is never the end is never the end is never ';
						var n=15;
						var i=Math.floor(Game.T*0.1);
						return '<span style="font-family:Merriweather;">'+(str.substr(i%str.length,n)+(i%str.length>(str.length-n)?str.substr(0,i%str.length-(str.length-n)):''))+'</span>';
					};
					Game.Upgrades["The end is never the end is never the end"].dname=nameFunc();
				}
				else Game.Upgrades["The end is never the end is never the end"].dname='The end is never the end is never the end';
			}
			if (Game.Achievements["Cookie Clicker 7"]) {
				Game.Achievements["Cookie Clicker 7"].dname = "Cookie clicker "+(Math.round(Game.Objects["Idleverse"].amount / 70)+Game.mods["GabeDFPU"].cookclickval).toString();
			}
		})

		Game.registerHook('check',() => {
			//for acheivements
			if (Game.Has(Game.Achievements["Useless"].reqUpgrade)) {
				Game.Win("Useless")
			}
			if (Game.handmadeCookies>=1000000000000000000000000000000000 && Game.Has('Unbounded')) {Game.Win('Keep clicking...');Game.Unlock('Etherealistic mouse');}
			if (Game.milkProgress>=15 && Game.Has('Unbounded')) {Game.Unlock('Kitten board members')}



			if (Game.Has("Season automation")) {
				if (Game.seasonT <= Game.fps*60*60*24*2 && Game.season != '') { //less than or equal to two days; and there is a season;
					if (Game.cookies >= Game.Upgrades[Game.seasons[Game.season].trigger].getPrice()) {
						Game.seasonT = Game.getSeasonDuration();
						Game.Spend(Game.Upgrades[Game.seasons[Game.season].trigger].getPrice());
						Game.Notify("Refreshed season!",'Season "'+Game.seasons[Game.season].name+'" re-bought for <b>'+Beautify(Game.Upgrades[Game.seasons[Game.season].trigger].getPrice())+'</b> cookies!',Game.Upgrades[Game.seasons[Game.season].trigger].icon,60); //this is so stupid, but it works!
					}
				}
			}
		})

		/*
			CCSE.NewHeavenlyUpgrade("Season automation","<b>Re-buys</b> the seasonal bicuit of the <b>current season</b> when 2 days are left of the season.<q>Effectively endless seasons.</q>",333333333,[9,5,MOD.custIcons],-1466,-252,["Even longer seasons","Season savings?"])
			MOD.ApplyOrder();
			MOD.applyCredit("1234abcdcba4321");
			MOD.New();
		*/
		// We have to modify source code to even do most of these upgrades...
		// Mod compatibility is going to be hell.

		// Me from the future here - Just use CCSE's code injection.
		// not that hard.

		Game.customModifyBuildingPrice.push(function(building,price){
			var priceMod = 1; //the same as price used in the UpgradesAll thing, different name
			if (Game.Has('Seasoned savings')) priceMod*=0.99;
			if (Game.Has('Santa\'s eternal dominion')) priceMod*=0.99;
			if (Game.Has('Super divine discount')) priceMod*=0.80;
			if (Game.Has('Permanent faberge egg')) priceMod*=0.99;
			return priceMod;
		})

		Game.customUpgradesAll.getPrice.push(function(upgrade){
			//nevermind
			//console.log(upgrade)
			var price = 1
			if (Game.Upgrades[upgrade.name].pool != 'prestige') {
			if (Game.Has('Elf workshop')) price*=0.95;
			if (Game.Has('Santa\'s eternal dominion')) price*=0.98;
			if (Game.Has('Super divine sales') && Game.UpgradesOwned < 20) price*=0.01; //kinda cheatin, but only the first 20 upgrades!
			if (Game.Upgrades[upgrade.name].pool == 'cookie') {
				if (Game.Has('Super divine bakeries')) price/=2;
			}
			if (Game.Has('Permanent faberge egg')) price*=0.99;
			}
			return price;
		})

		CCSE.ReplaceCodeIntoFunction('Game.CalculateGains', "if (Game.Has('Santa\'s milk and cookies')) milkMult*=1.05;", `
			// Game.CalculateGains injection point 1 from Heavenly Archives
			if (Game.Has('Santa\'s near infinite milk and cookies')) milkMult*=1.05;`, 1);

		Game.customShimmerTypes['golden'].initFunc.push(function(me){
			if (Math.random() <= 0.25 && Game.Has("Twist the hand of fate") && Game.season == "fools") {
				console.log("Twisted hand of fate!")
				setTimeout(function(){
					if (Game.shimmers.includes(me)) {
						me.pop();
						console.log("fate twisted!")
					} else {
						console.log("awww, missed it")
					}
				},52 * 1000)
			}
		})

		Game.customShimmerTypes['golden'].durationMult.push(function(me,choice){ //GC Living Duration
			var dur = 1
			if (Game.Has('Auric patience')) dur*=1.20;
			if (Game.Has('Eternal presence')) dur*=1.40;
			return dur;
		})

		Game.customShimmerTypes['golden'].customEffectDurMod.push(function(me,choice){ //GC Effect Duration
			var dur = 1
			if (Game.Has('Shimmering power')) dur*=1.10;
			if (Game.Has("Endlessly shimmering")) dur*=1.08; //huh, they both have shimmering in the name.
			if (Game.Has('Vocaloid [off]') && (me.wrath<1 || (choice == 'blood frenzy' || choice == 'cursed finger' || choice == 'cookie storm'))) dur*=1.25;
			
			if (Game.Has('Longer frenzy I') && (choice == 'frenzy')) dur*=1.2;
			if (Game.Has('Longer frenzy II') && (choice == 'frenzy')) dur*=1.1666;
			if (Game.Has('Longer elder frenzy I') && (choice == 'blood frenzy')) dur*=1.2;
			if (Game.Has('Longer elder frenzy II') && (choice == 'blood frenzy')) dur*=1.1666;
			if (Game.Has('Longer click frenzy I') && (choice == 'click frenzy')) dur*=1.2;
			if (Game.Has('Longer click frenzy II') && (choice == 'click frenzy')) dur*=1.1666;
			if (Game.Has('Stronger frenzies') && (choice == 'frenzy' || choice == 'click frenzy' || choice == 'blood frenzy')) dur*=1.04; //what the hell, that's barely anything...
			if (Game.Has('Redoubled essence of redoubled luck') && Math.random() < 0.07 && (choice == 'frenzy' || choice == 'blood frenzy' || choice == 'click frenzy'))dur*=2;

			if (Game.Has('Unclotted') && (choice == 'clot')) dur = 0; //we remove clot entirely... effectively
			return dur;
		})

		Game.customShimmerTypes['golden'].getTimeMod.push(function(){ //GC Spawnrate
			var time = 1;
			if (Game.Has("Golden gaze")) time/=1.05;
			if (Game.Has("Golden surge")) time/=1.05; //they both have golden :)
			if (Game.Has("Faster trades") && Game.season == "fools") time/=1.05;
			if (Game.Has("First-day shipping") && Game.season == "fools") time/=1.04;
			if (Game.Has('Timelessness void') && Game.season == "") time /=1.03;
			if (Game.Has("Permanent golden goose egg")) time/=1.05;
			return time;
		})

		Game.customShimmerTypes['reindeer'].durationMult.push(function(){
			var dur = 1
			if (Game.Has("Incredibly weighted sleighs")) dur*=2;
			return dur;
		})

		Game.customShimmerTypes['reindeer'].customReindeerPopMoni.push(function(){
			var moni = 1;
			if (Game.Has("Holly flavored frosting")) moni*=2;
			return moni;
		})

		Game.customShimmerTypes['reindeer'].getTimeMod.push(function(){
			var time = 1;
			if (Game.Has["Reindeer baking arena"]) time/=2;
			return time;
		})

		Game.customBuildings['Grandma'].cpsMult.push(function(){
			var cpsMult = 1;
			if (Game.Has('Nice list')) cpsMult *= 2
			return cpsMult
		})

		Game.customDropRateMult.push(function(){
			rateMult = 1;
			if (Game.Has('Santa\'s heavenly bag')) rateMult *= 2
			return rateMult
		})

		Game.customGetWrinklersMax.push(function(n){
			num = 0;
			if (Game.Has("Ungodly mutations") && Game.Has("Communal brainsweep")) num += 1;
			if (Game.Has("Divine Pact") && Game.Has("Elder Pact")) num += 1;
			return num;
		})

		Game.customWrinklerSucked.push(function(me,toSuck){
			var sucked = me.sucked

			if (Game.Has("Permanent wrinklerspawn")) sucked*=1.05;
			
			return sucked;
		})

		Game.customDropEgg.push(function(){
			var failRateMult = 1; 
			if (Game.Has('Permanent omelette')) failRate*=0.9;
			return failRateMult;
		});

		Game.customResearchT.push(function(what,time){ //we push what because          (there isn't really a because, it's never used... eh)
			//consider: Game.baseResearchTime=Game.fps*60*30;
			//therefore, baseTime is 54 thousand frames.
			// 1800 seconds.
			// 30 minutes.
			if (Game.Has("Instant research")) time -= (3*60*30);
			return time;
			//also, time is the finalized time, not base time... and is the actual time (you return it, the researchT is set to it)
			//yes, I made a new Game.custom and injection in CE just for one upgrade... for now.
		})

		//fuck
		Game.customGoldenBuffPows['frenzy'].push(function(pow){
			if (Game.Has("Better frenzy I")) pow *= 1.2;
			if (Game.Has("Better frenzy II")) pow *= 1.1666; //close enough
			if (Game.Has("Stronger frenzies")) pow *= 1.04;
			return pow;
		});
		Game.customGoldenBuffPows['blood frenzy'].push(function(pow){
			if (Game.Has("Better elder frenzy I")) pow *= 1.2;
			if (Game.Has("Better elder frenzy II")) pow *= 1.1666; //close enough
			if (Game.Has("Stronger frenzies")) pow *= 1.04;
			return pow;
		});
		Game.customGoldenBuffPows['click frenzy'].push(function(pow){
			if (Game.Has("Better click frenzy I")) pow *= 1.2;
			if (Game.Has("Better click frenzy II")) pow *= 1.1666; //close enough
			if (Game.Has("Stronger frenzies")) pow *= 1.04;
			return pow;
		});

		Game.customGoldenBuffPows['clot'].push(function(pow){
			if (Game.Has('Redoubled essence of redoubled luck') && Math.random() < 0.07) {
				pow/=2; //MAKE IT WORSE;
			}
			if (Game.Has("Unclotted")) pow = 0; //we'll also set the timemod to 0
			return pow;
		});
		Game.customGoldenBuffPows['ruin cookies'].push(function(pow){
			if (Game.Has("Unruined")) pow = 0;
			return pow;
		});

		for (let i in Game.customGoldenBuffPows) {
			if (i != 'chain cookie maxpayout' && i != 'chain cookie randomEndChance' && i != 'frenzy' && i != 'blood frenzy' && i != 'click frenzy' != 'clot') Game.customGoldenBuffPows[i].push(function(pow){
				if (Game.Has('Redoubled essence of redoubled luck') && Math.random() < 0.07) {
					pow*=2;
				}
				return pow;
			})
		}

		Game.customGoldenBuffPows['multiply cookies'].push(function(moni) {
			let mult = 1;

			let bankCap = Game.cookies * 0.15;
			let cpsCap = Game.cookiesPs * 60 * 15;
			let computedForm = (Math.min(bankCap, cpsCap) + 13);

			mult = moni / computedForm; //because other mods may haveth mults to this, or similar. And as we *are* recalculating, this ***should*** work well enough for me.


			if (Game.Has("Luckiest")) {
				bankCap *= 1.20;
				cpsCap *= 2400;
			}
			else if (Game.Has("Luckier")) {
				bankCap *= 1.15;
				cpsCap *= 1800;
			}

			moni = mult * (Math.min(bankCap,cpsCap) + 13);
			return moni;
		});

		// too inconsequential, combined with the ideas effectively already being implemented in;
		// Game.customGoldenBuffPows['chain cookie maxpayout'].push(function(maxPayout,mult) {
		// 	let Mult = 1;

		// 	let bankCap = Game.cookies*0.5
		// 	let cpsCap = Game.cookiesPs*60*60*6
		// 	let computedForm = (Math.min(bankCap, cpsCap)*mult);

		// 	if (computedForm > 0) {
		// 		Mult = maxPayout / computedForm;
		// 	} else {
		// 		Mult = 1;
		// 	}	

		// 	// if (!isFinite(Mult) || isNaN(Mult)) Mult = 1;

		// if (Game.Has("Even longer chains")) {
		//     bankCap *= 1.75;
		//     cpsCap *= 2;
		// }
		// else if (Game.Has("Longer chains")) {
		//     bankCap *= 1.375;
		//     cpsCap *= 1.5;
		// }
			

		// 	maxPayout = Mult * ((Math.min(bankCap, cpsCap)*mult));

		// 	return maxPayout;
		// })

		// Game.customGoldenBuffPows['chain cookie randomEndChance'].push(function(randomEndChance){
		// 	if (Game.Has("Even longer chains")) {
		// 		randomEndChance - 0.08; //effectively removes random chain ending ENTIRELY
		// 	}
		// 	if (Game.Has("Longer chains")) {
		// 		randomEndChance - 0.08;
		// 	}

		// 	randomEndChance = Math.max(randomEndChance,0);
		// 	return randomEndChance;
		// });

		Game.customKittenCps.push(function(milkProg,milkMult,catMult){
			if (Game.Has('Kitten board members')) catMult*=(1+milkProg*0.1*milkMult)
			
			return catMult;	
		});

		Game.customGetSeasonDuration.push(function(){
			var durmult = 1;
			if (Game.Has("Longer seasons")) durmult*=2;
			if (Game.Has("Even longer seasons")) durmult*=2;
			if (Game.Has("Ever longer seasons")) durmult*=2;
			return durmult;
		});

		Game.customComputeSeasonPrices.push(function(price,mult){ //note, price is after all price calculations, that is why we must do these divisions and whatnot;

			if (Game.Has("Seasonal saving")) {
				//changed to not have doubled base price
				price /= Math.pow(1.5,Game.seasonUses);

				return price; //no price increase;
			}
			if (Game.Has("Season savings?")) {
				price /= Math.pow(1.5,Game.seasonUses);
				price *= Math.pow(1.5,Game.seasonUses/2);

				return price; //halved price increase;
			}
			return price;
		});

		Game.customPriceIncrease.push(function(priceIncrease){
			var priceRed = 0;
			if (Game.Has("Lower inflation")) priceRed += 0.0005;
			if (Game.Has("Slower inflation")) priceRed += 0.0005;
			return (priceIncrease - priceRed);
		});

		Game.customHeavenlyMultiplier.push(function(){
			var mult = 1;
			if (Game.Has('Heavenly strength')&&Game.Has('Heavenly key')) mult *= 1.01;
			return mult;
		});

		//this gon' get real messy

		Game.mods["GabeDFPU"].Changelog = '</div><div class="subsection update small">'+
			'<div class="title">June 11th, 2025 - mainly just eggs.</div>'+
			'<div class="listing">&bull; added 30 heavenly upgrades.</div>'+
			'<div class="listing">&bull; 20 of them are egg-related, 19 are eggs. (the one egg-related one is a box of "gifts" (all the 19 permanent eggs))</div>'+
			'<div class="listing">&bull; four upgrades for seasons.</div>'+
			'<div class="listing">&bull; an new synergy volume.</div>'+
			'<div class="listing">&bull; price increase modifications (via CE for compatibility with other mods).</div>'+
			'<div class="listing">&bull; santa and a shy upgrade but unshy and less (that\'s as much as I can describe it).</div>'+
			'<div class="listing">&bull; new shy upgrade that is effectively <b>D.E.O.R.D.</b> (Distilled Essence of Redoubled Luck), but more often.</div>'+
			'<div class="listing">&bull; added achievements for the buildings from that <b>one upgrade</b> (it is now considered finished)</div>'+
			'<div class="listing">&bull; considered a small update as it\'s literally just eggs.</div>'+
			'<div class="listing">&bull; there\'s going to be four more heavenly upgrades for chocolate egg modifications.</div>'+
			'<div class="listing">&bull; this is why I\'ve made HR (to make space for atrocities like these 1:1 modifications... I am sorry dear people who have downloaded this mod for getting just eggs).</div>'+
			'<div class="listing">&bull; I promise there\'ll be far less eggs (sorry for making easter come a bit too early, consider this accidental padding)</div>'+
			'</div><div class="subsection update">'+
			'<div class="title">June 6th, 2025 - Mod Release Date</div>'+
			'<div class="listing">&bull; added a 101 Heavenly Upgrades from the <b>DashNet Forums</b> (2014-2019, mainly from one forum though)</div>'+
			'<div class="listing">&bull; added a new tier of upgrades, achievements, and new building, all in one upgrade (effectively a content update all from one upgrade (all the archives (forums) stated was a new building, not an entire new TIER (still more to add from this new building and tier, don\'t worry :>)))</div>'+
			'<div class="listing">&bull; new building has a "secret minigame", that\'s just an embedded browser... nothing new!</div>'+
			'<div class="listing">&bull; plenty of <b>custom icons</b></div>'+
			'<div class="listing">&bull; uses CE and HR, effectively made <b>just for</b> this mod.</div>'+
			'<div class="listing">&bull; I\'m expecting a ton of bugs as I did not test this with every mod, but it works with MHUR and EMHU, with <b>two additional EMHU upgrades</b> <small>(for the aforementioned new building, not from the forums)</small>, so let\'s find out how buggy this mod is!!!</div>'+
			'<div class="listing">&bull; far better made than <b>MHUU</b> (sorry my own mod!)</div>'+
			'<div class="listing">&bull; It\'s 12:26 AM, I\'m going to release the mod now.</div>'+
			'<div class="listing">&bull; hoping it does well.</div>'

		Game.customInfoMenu.push(function(){
			CCSE.PrependCollapsibleInfoMenu("Heavenly Archives", Game.mods["GabeDFPU"].Changelog);
		});



		}

		setTimeout(()=>{
			MOD.loadModFunc();
		},1000)
	},
	
	save: function () {
		// Create an object to store all necessary data
		let saveData = {
			tooUglyTimesBought: Game.mods["GabeDFPU"].TooUglyTimesBought,
			tooUglyTimesBoughtTOTAL: Game.mods["GabeDFPU"].TooUglyTimesBoughtTOTAL,
			goldenSwitchPatience: Game.mods["GabeDFPU"].GoldenSwitchPatience
		};
		// Convert the object to a JSON string
		//console.log("Saving:", saveData); // In the save function
		return JSON.stringify(saveData);
	},
	
	load: function (str) {
		if (str) {
			let saveData = JSON.parse(str);
			//console.log("Loaded:", saveData); // In the load function
			// Restore variables
			Game.mods["GabeDFPU"].TooUglyTimesBought = saveData.tooUglyTimesBought || 0;
			Game.mods["GabeDFPU"].TooUglyTimesBoughtTOTAL = saveData.tooUglyTimesBoughtTOTAL || 0;
			Game.mods["GabeDFPU"].GoldenSwitchPatience = saveData.goldenSwitchPatience || 0;
		}
	}
	
});
}, 1500);

if (EMHU === undefined) var EMHU = {};
EMHU.name = 'Even More Heavenly Upgrades';
EMHU.version = '2.8';
EMHU.GameVersion = '2.053';

EMHU.launch = function() {
    EMHU.init = function() {
        EMHU.isLoaded = 1;
        Game.Notify('Even More Heavenly Upgrades loaded!', 'Version 2.9', [11, 5], 6);
        const CheckForWatson = (dir) => dir["despacito AmeliaWatson"] !== undefined && !dir["despacito AmeliaWatson"].disabled
        const WatsonIcons = 
            (Game.mods["despacito AmeliaWatson"] !== undefined ? Game.mods["despacito AmeliaWatson"].dir + "/watsoniconfull.png" : 0)
            || (App && CheckForWatson(App.mods) ? App.mods["despacito AmeliaWatson"].dir + "/watsoniconfull.png" : 0)
            || (Mods && CheckForWatson(Mods.ModData) ? Mods.ModData["despacito AmeliaWatson"].dir + "/watsoniconfull.png" : 0)
        

//More Permanent upgrades --- Currently broken
// var desc = loc("Placing an upgrade in this slot will make its effects <b>permanent</b> across all playthroughs.");
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VI', desc, 6000000000000, [0, 11], 724, -28, ['Permanent upgrade slot V']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(5);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(5);};
//
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VII', desc, 700000000000000, [1, 11], 878, 33, ['Permanent upgrade slot VI']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(6);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(6);};
//
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VIII', desc, 80000000000000000, [2, 11], 928, 174, ['Permanent upgrade slot VII']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(7);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(7);};
//
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot IX', desc, 9000000000000000000, [3, 11], 834, 301, ['Permanent upgrade slot VIII']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(8);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(8);};
//
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot X', desc, 100000000000000000000, [6, 11], 661, 360, ['Permanent upgrade slot IX']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(9);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(9);};


//Divine Upgrades
        CCSE.NewHeavenlyUpgrade('Divine savings', "Add to your bank all your unspent heavenly chips<q>They won\'t be spent<br>don\'t worry</q>", 7777777777, [20, 7], -725, 400, ['Decisive fate']);
        CCSE.NewHeavenlyUpgrade('Divine gains', "Each unspent heavenly chip will give you a <b>+1% to your CpS</b><q>That\'s a boost</q>", 7777777777777, [28, 12], -625, 604, ['Divine savings', 'Divine bakeries']);
        CCSE.NewHeavenlyUpgrade('Divine buildings', "Get <b>+1% to your CpS</b> for each building owned<q>the more the merrier</q>", 88888888888888, [33, 12], -736, 718, ['Divine gains']);
        CCSE.NewHeavenlyUpgrade('Divine unascended gains', "Get <b>+1% to your CpS</b> for each prestige level in the legacy meter<q>It just speeds up</q>", 999999999999999, [25, 7], -729, 865, ['Divine buildings']);
        CCSE.NewHeavenlyUpgrade('Divine lumps', "Gain an additional <b>+1% to your CpS</b> for each Sugarlump you have.<q>Yes. It does stack with the default upgrade.</q>", 9999999999999999, [25, 7], -793, 983, ['Divine unascended gains']);


//Starter Kits
        var cursorBasePrice = 15
        var everythingBasePrice = cursorBasePrice;
        var grandmaBasePrice = 100;
        everythingBasePrice += grandmaBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter kitchen 2: Electric boogaloo', 'You start with <b>5 more grandmas</b> <q>Just round it to 10</q>', grandmaBasePrice * 10, [1, 0], -475, -475, ['Starter kitchen']);

        var farmsBasePrice = 1100;
        everythingBasePrice += farmsBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter gardening kit', 'You start with <b>10 Farms</b><q>A little help from my ferns</q>', farmsBasePrice * 10, [2, 0], -575, -450, ['Starter kitchen 2: Electric boogaloo']);
        Game.last.showIf = function() { return (Game.Achievements["Reap what you sow"].won == 1); };

        var minesBasePrice = 12000;
        everythingBasePrice += minesBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter picks and shovels', 'You start with <b>10 Mines</b><q>You now start a bit deeper</q>', minesBasePrice * 10, [3, 0], -675, -450, ['Starter gardening kit']);
        Game.last.showIf = function() { return (Game.Achievements["Excavation site"].won == 1); };

        var factoryBasePrice = 128700;
        everythingBasePrice += factoryBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter toolbox', 'You start with <b>10 Factories</b><q>You now start <br><br>The engies</q>', factoryBasePrice * 10, [4, 0], -775, -450, ['Starter picks and shovels']);
        Game.last.showIf = function() { return (Game.Achievements["Industrial revolution"].won == 1); };

        var bankBasePrice = 1400000;
        everythingBasePrice += bankBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter stonks', 'You start with <b>10 Banks</b><q>A head start in the market</q>', bankBasePrice * 10, [15, 0], -875, -425, ['Starter toolbox']);
        Game.last.showIf = function() { return (Game.Achievements["Fit the bill"].won == 1); };

        var templeBasePrice = 20000000;
        everythingBasePrice += templeBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter prayers', 'You start with <b>10 Temples</b><q>godtouched</q>', templeBasePrice * 10, [16, 0], -975, -415, ['Starter stonks']);
        Game.last.showIf = function() { return (Game.Achievements["Shady sect"].won == 1); };

        var wizardBasePrice = 330000000;
        everythingBasePrice += wizardBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter pointy hat', 'You start with <b>10 Wizard Towers</b><q>A little bit of magic</q>', wizardBasePrice * 10, [17, 0], -1075, -375, ['Starter prayers']);
        Game.last.showIf = function() { return (Game.Achievements["The sorcerer's apprentice"].won == 1); };

        var shipmentBasePrice = 5100000000;
        everythingBasePrice += shipmentBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter hyperdrive', 'You start with <b>10 Shipments</b><q>To the stars!</q>', shipmentBasePrice * 10, [5, 0], -1175, -350, ['Starter pointy hat']);
        Game.last.showIf = function() { return (Game.Achievements["Galactic highway"].won == 1); };

        var alchemyBasePrice = 75000000000;
        everythingBasePrice += alchemyBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter philosopher\'s stone', 'You start with 10 Alchemy Labs</b><q>Get your lab coats boys!</q>', alchemyBasePrice * 10, [6, 0], -1275, -325, ['Starter hyperdrive']);
        Game.last.showIf = function() { return (Game.Achievements["Transmogrification"].won == 1); };

        var portalBasePrice = 1000000000000;
        everythingBasePrice += portalBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter cookieverse map', 'You start with <b>10 Portals</b><q>See you on the other side cookie cowboy</q>', portalBasePrice * 10, [7, 0], -1375, -300, ['Starter philosopher\'s stone']);
        Game.last.showIf = function() { return (Game.Achievements["Now you're thinking"].won == 1); };

        var timeMachineBasePrice = 14000000000000;
        everythingBasePrice += timeMachineBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter flux capacitor', `You start with 10 ${WatsonIcons ? "Amelia Watsons" : "time machines"}<q>Just wait untill this baby hits 140kmh</q>`, timeMachineBasePrice * 10, WatsonIcons ? [0, 0, WatsonIcons]:[8, 0], -1475, -300, ['Starter cookieverse map']);
        Game.last.showIf = function() { return (Game.Achievements["Alternate timeline"].won == 1); };

        var antimatteBasePrice = 170000000000000;
        everythingBasePrice += antimatteBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter molecules', 'You start with <b>10 Antimatter condensers</b><q>This is what matters the most</q>', antimatteBasePrice * 10, [13, 0], -1575, -300, ['Starter flux capacitor']);
        Game.last.showIf = function() { return (Game.Achievements["Quirky quarks"].won == 1); };

        var prismBasePrice = 2100000000000000;
        everythingBasePrice += prismBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter photons', 'You start with <b>10 Prisms</b><q>Let\'s light this place up</q>', prismBasePrice * 10, [14, 0], -1675, -325, ['Starter molecules']);
        Game.last.showIf = function() { return (Game.Achievements["Dazzling glimmer"].won == 1); };

        var chancemakerBasePrice = 26000000000000000;
        everythingBasePrice += chancemakerBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter dice set', 'You start with <b>10 Chancemakers</b><q>You just got real lucky</q>', chancemakerBasePrice * 10, [19, 0], -1775, -350, ['Starter photons']);
        Game.last.showIf = function() { return (Game.Achievements["What are the odds"].won == 1); };

        var fractalBasePrice = 310000000000000000;
        everythingBasePrice += chancemakerBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter kit for starter kits', 'You start with <b>10 Fractal engines</b><q>There are just infinite kits inside this one</q>', fractalBasePrice * 10, [20, 0], -1875, -375, ['Starter dice set']);
        Game.last.showIf = function() { return (Game.Achievements["Threw you for a loop"].won == 1); };

        var consoleBasePrice = 7100000000000000000;
        everythingBasePrice += consoleBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter {hello world}', 'You start with <b>10 Javascript consoles</b><q>hack the planet</q>', consoleBasePrice * 10, [32, 0], -1975, -400, ['Starter kit for starter kits']);
        Game.last.showIf = function() { return (Game.Achievements["Variable success"].won == 1); };

        var idlevereBasePrice = 12000000000000000000;
        everythingBasePrice += idlevereBasePrice;
        CCSE.NewHeavenlyUpgrade('Starter multiverse', 'You start with <b>10 Idleverses</b><q>Your little pocket of the multiverse to play around in</q>', idlevereBasePrice * 10, [33, 0], -2075, -405, ['Starter {hello world}']);
        Game.last.showIf = function() { return (Game.Achievements["Well-versed"].won == 1); };

        CCSE.NewHeavenlyUpgrade('Starter 100 pack', 'You start with <b>100 of Everything</b><q>You\'ve gotten here once before</q>', everythingBasePrice * 50, [6, 6], -2175, -410, ['Starter multiverse']);
        Game.last.showIf = function() { return (Game.Achievements["Centennial"].won == 1); };

        let heavenlyPacksNumbers = 100;
        let heavenlyPacksStarting_X = -2175;
        let heavenlyPacksAchievs = ['Centennial and a half', 'Bicentennial', 'Bicentennial and a half', 'Tricentennial', 'Tricentennial and a half', 'Quadricentennial', 'Quadricentennial and a half', 'Quincentennial', 'Quincentennial and a half', 'Sexcentennial', 'Sexcentennial and a half', 'Septcentennial'];
        let heavenlyPacks_Last = 'Starter 100 pack';

        for (let i = 0; i < 12; i++) {
            heavenlyPacksNumbers += 50;
            heavenlyPacksStarting_X -= 100;
            let achievName = heavenlyPacksAchievs[i];
            let icon = Game.Achievements[achievName].icon;
            let name = 'Starter ' + heavenlyPacksNumbers + ' pack';
            let desc = 'You start with <b>' + heavenlyPacksNumbers + ' of Everything</b><q>You are only buying 50 of each now</q>';
            let price = (everythingBasePrice * 50) * (i + 1);

            CCSE.NewHeavenlyUpgrade(name, desc, price, icon, heavenlyPacksStarting_X, -410, [heavenlyPacks_Last]);
            Game.last.showIf = function() { return (Game.Achievements[achievName].won == 1); };

            heavenlyPacks_Last = name;
        }

        CCSE.NewHeavenlyUpgrade('Endgame 1K pack', 'You start with <b>1,000 of Everything</b><q>Why even try at this point?</q>', 150000000000000000000000, [18, 33], -3475, -410, ['Starter 700 pack']);


//Divine Upgrades
        CCSE.NewHeavenlyUpgrade('Divine savings', "Add to your bank all your unspent heavenly chips<q>They won\'t be spent<br>don\'t worry</q>", 7777777777, [20, 7], -725, 400, ['Decisive fate']);
        CCSE.NewHeavenlyUpgrade('Divine gains', "Each unspent heavenly chip will give you a <b>+1% to your CpS</b><q>That\'s a boost</q>", 7777777777777, [28, 12], -625, 604, ['Divine savings', 'Divine bakeries']);
        CCSE.NewHeavenlyUpgrade('Divine buildings', "Get <b>+1% to your CpS</b> for each building owned<q>the more the merrier</q>", 88888888888888, [33, 12], -736, 718, ['Divine gains']);
        CCSE.NewHeavenlyUpgrade('Divine unascended gains', "Get <b>+1% to your CpS</b> for each prestige level in the legacy meter<q>It just speeds up</q>", 999999999999999, [25, 7], -729, 865, ['Divine buildings']);
        CCSE.NewHeavenlyUpgrade('Divine lumps', "Gain an additional <b>+1% to your CpS</b> for each Sugarlump you have.<q>Yes. It does stack with the default upgrade.</q>", 9999999999999999, [21, 17], -793, 983, ['Divine unascended gains']);


//Season Upgrades
        CCSE.NewHeavenlyUpgrade('Santa\'s Heavenly Legacy', "Final Claus will accompany you on ascension<q>You have earned my trust</q>", 142328760634, [19, 10], -517, -330, ['Starsnow']);
        CCSE.NewHeavenlyUpgrade('Rudolph\'s Recipe', "You start with all 7 Reindeer Cookies.<q>Wait... Reindeer can bake???</q>", 142328760634, [15, 9], -429, -259, ['Starsnow']);
        CCSE.NewHeavenlyUpgrade('Silly Wabbit', "You start with all 20 eggs. <q>Guess he's here year round.</q>", 142328760634, [13, 12], -877, 34, ['Starspawn']);
        CCSE.NewHeavenlyUpgrade('Horror Story', "You start with all 7 Halloween Cookies. <q>Spooky!</q>", 142328760634, [15, 8], -762, -347, ['Starterror']);
        CCSE.NewHeavenlyUpgrade('Lover\'s Delight', "You start with all 7 Valentines Cookies. <q>Just can't control your love for cookies?</q>", 142328760634, [30, 8], -637, -366, ['Starlove']);


//Ancient dragon
        Game.last.showIf = function() { return (Game.Achievements["Here be dragon"].won == 1); };
        CCSE.NewHeavenlyUpgrade('Cookie Dragon Egg', "You start with your own dragon egg!<q>So you don't need to buy it everytime</q>", 7600000, [21, 12], -812, 538, ['Divine savings']);
        CCSE.NewHeavenlyUpgrade('Cookie Hatchling', "Krumblor will be hatched on ascension<q>It costs a bit more than buying it in the living world, but it's worth</q>", 76700000, [31, 15], -945, 530, ['Cookie Dragon Egg']);
        CCSE.NewHeavenlyUpgrade('Dragon in Training', "Krumblor starts halfway into it\'s training<q>This tooth fell off when they grew up</q>", 767000000000, [30, 15], -1022,  646, ['Cookie Hatchling']);
        CCSE.NewHeavenlyUpgrade('Dragon in Baking', "Krublor starts fully trained <b>(1 slot)<b><q>Almost there!</q>", 767000000000000, [30, 14], -874, 721, ['Dragon in Training']);
        CCSE.NewHeavenlyUpgrade('Krumblor, The one and only', "Krumblor starts trained to it's full potential<q>You got here many times already, no need to repeat it</q>", 76700000000000000, [31, 14], -985, 829, ['Dragon in Baking']);


//Lumps
        CCSE.NewHeavenlyUpgrade('Magical Lumps I', "You gain <b>1 Sugarlump</b> on ascenscion", 5000000000000, [23, 14], -885, 331, ['Divine savings']);
        CCSE.NewHeavenlyUpgrade('Magical Lumps II', "You gain <b>2 Sugarlumps</b> on ascenscion", 500000000000000, [24, 14], -1002, 314, ['Magical Lumps I']);
        CCSE.NewHeavenlyUpgrade('Magical Lumps III', "You gain <b>3 Sugarlumps</b> on ascenscion", 50000000000000000, [25, 14], -1116, 343, ['Magical Lumps II']);
        CCSE.NewHeavenlyUpgrade('Magical Lumps IV', "You gain <b>4 Sugarlumps</b> on ascenscion", 500000000000000000, [27, 16], -1178, 453, ['Magical Lumps III']);
        CCSE.NewHeavenlyUpgrade('Magical Lumps V', "You gain <b>5 Sugarlumps</b> on ascenscion", 10000000000000000000, [28, 16], -1185, 580, ['Magical Lumps IV']);


//Kittens
        CCSE.NewHeavenlyUpgrade('A secret gift from the cat', "Yes, I know it's expensive, but they swear it's worth it<q>Unlocks... Something!</q>", 9000000000000, [0, 7], 600, -900, ['Kitten wages']);
        Game.last.showIf = function() { return (Game.Achievements["Jellicles"].won == 1); };

        CCSE.NewHeavenlyUpgrade('Permanent Kitten marketeers', "They stick with you<q>Forever!</q>", 577777777777, [18, 28], 725, -700, ['A secret gift from the cat']);
        CCSE.NewHeavenlyUpgrade('Permanent Kitten analysts', "They stick with you<q>Forever!</q>", 57777777777777, [18, 30], 750, -800, ['A secret gift from the cat']);
        CCSE.NewHeavenlyUpgrade('Permanent Kitten executives', "They stick with you<q>Forever!</q>", 577777777777777, [18, 31], 775, -900, ['A secret gift from the cat']);
        CCSE.NewHeavenlyUpgrade('Permanent Kitten admins', "They stick with you<q>Forever!</q>", 777777777777777, [18, 34], 750, -1000, ['A secret gift from the cat']);
        CCSE.NewHeavenlyUpgrade('Permanent Kitten strategists', "They stick with you<q>Forever!</q>", 977777777777777, [18, 36], 735, -1100, ['A secret gift from the cat']);

        Game.customComputeLumpTimes.push(function() {
            let ten_minutes = (((1000) * 60) * 10);
            let one_minute = (1000 * 60);
            let minMatureTime = ten_minutes;
        });
    }



//Function
    var buy50ofEach = function() {
        for (let o = 0; o < Game.ObjectsById.length; o++) {
            Game.ObjectsById[o].getFree(50);
            }
          }


    Game.registerHook('reincarnate', function() {
        if (Game.ascensionMode != 1) {

            if (Game.Has('Divine savings')) Game.Earn(Game.heavenlyChips);

            if (Game.Has('Starter kitchen 2: Electric boogaloo')) {
                Game.Objects['Grandma'].getFree(5);
                Game.Objects['Grandma'].free = 10;
            }
            if (Game.Has('Starter gardening kit')) {
                Game.Objects['Farm'].getFree(10);
            }
            if (Game.Has('Starter picks and shovels')) Game.Objects['Mine'].getFree(10);
            if (Game.Has('Starter toolbox')) Game.Objects['Factory'].getFree(10);
            if (Game.Has('Starter stonks')) Game.Objects['Bank'].getFree(10);
            if (Game.Has('Starter prayers')) Game.Objects['Temple'].getFree(10);
            if (Game.Has('Starter pointy hat')) Game.Objects['Wizard tower'].getFree(10);
            if (Game.Has('Starter hyperdrive')) Game.Objects["Shipment"].getFree(10);
            if (Game.Has('Starter philosopher\'s stone')) Game.Objects["Alchemy lab"].getFree(10);
            if (Game.Has('Starter cookieverse map')) Game.Objects["Portal"].getFree(10);
            if (Game.Has('Starter flux capacitor')) Game.Objects["Time machine"].getFree(10);
            if (Game.Has('Starter molecules')) Game.Objects["Antimatter condenser"].getFree(10);
            if (Game.Has('Starter photons')) Game.Objects["Prism"].getFree(10);
            if (Game.Has('Starter dice set')) Game.Objects["Chancemaker"].getFree(10);
            if (Game.Has('Starter kit for starter kits')) Game.Objects["Fractal engine"].getFree(10);
            if (Game.Has('Starter {hello world}')) Game.Objects["Javascript console"].getFree(10);
            if (Game.Has('Starter multiverse')) Game.Objects["Idleverse"].getFree(10);
            if (Game.Has('Starter 100 pack')) {
                for (let o = 0; o < Game.ObjectsById.length; o++) {
                    Game.ObjectsById[o].getFree(90);
                }
            };
            if (Game.Has('Starter 150 pack')) buy50ofEach();
            if (Game.Has('Starter 200 pack')) buy50ofEach();
            if (Game.Has('Starter 250 pack')) buy50ofEach();
            if (Game.Has('Starter 300 pack')) buy50ofEach();
            if (Game.Has('Starter 350 pack')) buy50ofEach();
            if (Game.Has('Starter 400 pack')) buy50ofEach();
            if (Game.Has('Starter 450 pack')) buy50ofEach();
            if (Game.Has('Starter 500 pack')) buy50ofEach();
            if (Game.Has('Starter 550 pack')) buy50ofEach();
            if (Game.Has('Starter 600 pack')) buy50ofEach();
            if (Game.Has('Starter 650 pack')) buy50ofEach();
            if (Game.Has('Starter 700 pack')) buy50ofEach();
            if (Game.Has('Endgame 1K pack')) {
                for (let o = 0; o < Game.ObjectsById.length; o++) {
                    Game.ObjectsById[o].getFree(400);
                }
              };
            if (Game.Has('Santa\'s Heavenly Legacy')) {
                Game.Upgrades['A festive hat'].bought = 1;
                Game.santaLevel = 14;
                for (let i = 0; i < Game.santaDrops.length; i++) { Game.Upgrades[Game.santaDrops[i]].unlocked = 1 }
                Game.Upgrades['Santa\'s dominion'].unlock();
              }
            if (Game.Has('Silly Wabbit')) {
                for(var i = 210; i < 230; i++)
                Game.Unlock(Game.UpgradesById[i].name);
              }
            if (Game.Has('Lover\'s Delight')){
                Game.Unlock(['Pure heart biscuits','Ardent heart biscuits','Sour heart biscuits','Weeping heart biscuits','Golden heart biscuits','Eternal heart biscuits','Prism heart biscuits']);
              }
            if (Game.Has('Horror Story')){
                Game.Unlock(['Skull cookies','Ghost cookies','Bat cookies','Slime cookies','Pumpkin cookies','Eyeball cookies','Spider cookies']);
              }
              if (Game.Has('Rudolph\'s Recipe')){
                Game.Unlock(['Candy cane biscuits','Christmas tree biscuits','Snowflake biscuits','Holly biscuits','Snowman biscuits','Bell biscuits','Present biscuits']);
              }

            if (Game.Has('Cookie Dragon Egg')) {
                Game.Upgrades['A crumbly egg'].bought = 1;
                Game.Unlock(['Dragon cookie']);
                if (Game.Has('Cookie Hatchling')) {
                    Game.dragonLevel = 5;
                    if (Game.Has('Dragon in Training')) {
                        Game.dragonLevel = 15;
                        if (Game.Has('Dragon in Baking')) {
                            Game.dragonLevel = 25;
                            if (Game.Has('Krumblor, The one and only')) {
                                Game.dragonLevel = 27;
                            }
                        }
                    }
                }
            };

              if (Game.Has('Magical Lumps I')) {
                  Game.gainLumps(1);
                }
                  if (Game.Has('Magical Lumps II')) {
                      Game.gainLumps(1);
                  }
                    if (Game.Has('Magical Lumps III')) {
                        Game.gainLumps(1);
                    }
                        if (Game.Has('Magical Lumps IV')) {
                            Game.gainLumps(1);
                      }
                            if (Game.Has('Magical Lumps V')) {
                                Game.gainLumps(1);
                        }

            if (Game.Has('A secret gift from the cat')) {
                Game.Upgrades["Kitten helpers"].bought = 1;
                Game.Upgrades["Kitten workers"].bought = 1;
                Game.Upgrades["Kitten engineers"].bought = 1;
                Game.Upgrades["Kitten overseers"].bought = 1;
                Game.Upgrades["Kitten managers"].bought = 1;
                Game.Upgrades["Kitten accountants"].bought = 1;
                Game.Upgrades["Kitten specialists"].bought = 1;
                Game.Upgrades["Kitten experts"].bought = 1;
                Game.Upgrades["Kitten consultants"].bought = 1;
                Game.Upgrades["Kitten assistants to the regional manager"].bought = 1;

                if (Game.Has('Permanent Kitten marketeers')) {
                    Game.Upgrades["Kitten marketeers"].bought = 1;
                }
                if (Game.Has('Permanent Kitten analysts')) {
                    Game.Upgrades["Kitten analysts"].bought = 1;
                }
                if (Game.Has('Permanent Kitten executives')) {
                    Game.Upgrades["Kitten executives"].bought = 1;
                }
                if (Game.Has('Permanent Kitten admins')) {
                    Game.Upgrades["Kitten admins"].bought = 1;
                }
                if (Game.Has('Permanent Kitten strategists')) {
                    Game.Upgrades["Kitten strategists"].bought = 1;
                }
            };
        }
    });

    Game.registerHook('check', function(cps) {
        let mult = Game.globalCpsMult;
        if (Game.ascensionMode != 1) {
            if (Game.Has('Divine gains')) {
                Game.CalculateGains();
                 mult += Game.heavenlyChips;
                if (Game.Has('Divine buildings')) {
                    mult += Game.BuildingsOwned;
                    if (Game.Has('Divine unascended gains')) {
                        mult += Game.ascendMeterLevel;
                        if (Game.Has('Divine lumps')) {
                            mult += Game.lumps;
                        }
                    }
                }
            }
        }
    });


//CCSE Check
  if (CCSE.ConfirmGameVersion(EMHU.name, EMHU.version, EMHU.GameVersion)) Game.registerMod(EMHU.name, EMHU);
  }

  if (!EMHU.isLoaded) {
      if (CCSE && CCSE.isLoaded) {
          EMHU.launch();
      } else {
          if (!CCSE) var CCSE = {};
          if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
          CCSE.postLoadHooks.push(EMHU.launch);
      }
  }

    /* - Re-added in MHU Remastered
    //Golden Summoner
            CCSE.NewHeavenlyUpgrade('Call on the luck', "Unlocks the golden cookie summoner", 2000000000000000, [23, 6], -867, 713, ['Divine unascended gains']);
            CCSE.NewUpgrade("Golden summoner", 'Summons an amount of golden cookies equal to your stored sugar lumps', 0, [23, 6]);
            Game.last.priceLumps = 1;
            Game.last.pool = 'toggle';
            Game.last.toggleInto = 0;
            Game.last.unlocked = 0;

            Game.registerHook('logic', function() {
                if (Game.Has('Call on the luck')) Game.Unlock('Golden summoner');
                let currentLumps = Game.lumps;
                let price;
                if (currentLumps == 0) { price = 1 } else { price = currentLumps };
                Game.Upgrades['Golden summoner'].priceLumps = price;
                let cookiePlSng = (currentLumps == 1) ? 'cookie' : 'cookies';
                Game.Upgrades['Golden summoner'].canBuyFunc = function() { return Game.lumps >= 1; };
                Game.Upgrades['Golden summoner'].clickFunction = Game.spendLump(price, 'Summon ' + currentLumps + ' golden ' + cookiePlSng,
                    function() {
                        Game.Upgrades['Golden summoner'].buy(1);
                        let notificationIcon;
                        let notificationDesc;
                        if (price >= 1 && price <= 5) {
                            notificationIcon = [10, 25];
                            notificationDesc = '<q>Not many, but still better than nothing</q>';
                        } else if (price >= 6 && price <= 10) {
                            notificationIcon = [10, 14];
                            notificationDesc = '<q>Those are a bunch of cookies right there<br>And a lot of lumps<br><br>But you can do better</q>';
                        } else if (price >= 11 && price <= 15) {
                            notificationIcon = [25, 12];
                            notificationDesc = '<q>We are spending amounts of lumps that shouldn\'t be possible</q>';
                        } else if (price >= 16 && price <= 20) {
                            notificationIcon = [22, 6];
                            notificationDesc = '<q>Seriously, this is getting out of hand</q>';
                        } else if (price >= 21) {
                            notificationIcon = [23, 6];
                            notificationDesc = '<q>Now it\'s time to stop</q>';
                        }

                        Game.Notify('Summoning <b>' + price + ' golden ' + cookiePlSng + '</b>', '<div style="text-align: center;font-weight: bold;color: #ffffff;"></div>', notificationIcon, 6, 1);
                        var note = Game.NotesById[Game.noteId - 1];
                        note.life = 600000;

                        for (var i = 0; i < price; i++) {
                            var newShimmer = new Game.shimmer("golden");
                            newShimmer.spawnLead = 1;
                            newShimmer.pop();
                            note.life = 600000;
                            note.desc = '<div style="text-align: center;font-weight: bold;color: #ffffff;">' + (i + 1) + '/' + price + ' cookies summoned' + notificationDesc + '</div>';
                            Game.UpdateNotes();
                        }
                      });
                    });
*/

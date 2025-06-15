//original by klattmose
//slightly modified by xvarmkorv2 to include features from CookiStocker
if(IdleTrading === undefined) var IdleTrading = {};
IdleTrading.name = 'Idle Trading';
IdleTrading.version = '1.10';
IdleTrading.GameVersion = '2.053';

IdleTrading.sessionStart = new Date()
IdleTrading.sessionProfits = 0
IdleTrading.sessionPurchases = 0
IdleTrading.sessionSales = 0
IdleTrading.modeDecoder = ['stable', 'slowly rising', 'slowly falling', 'rapidly rising', 'rapidly falling', 'fluctuating'] // meanings of each market trend (good.mode)
IdleTrading.goodIcons = [
    [2, 33],
    [3, 33],
    [4, 33],
    [15, 33],
    [16, 33],
    [17, 33],
    [5, 33],
    [6, 33],
    [7, 33],
    [8, 33],
    [13, 33],
    [14, 33],
    [19, 33],
    [20, 33],
    [32, 33],
    [33, 33],
    [34, 33],
    [35, 33],
    [36, 33],
    [38, 33]
];

IdleTrading.launch = function(){
	IdleTrading.defaultConfig = function(){
		
		var conf = {
			goods: [],
			autoBuy: 1,
			autoSell: 1,
			transactionNotifications: 0,
			fastNotifications: 0,
			consoleAnnouncements: 0,
			activityReport: 0,
			activityReportFrequency: 1000 * 60 * 60,
			verboseNotifications: 0
		};
		
		for(var iG = 2; iG < Game.ObjectsN; iG++){
			conf.goods.push({
				active: true,
				buyThresh: -1,
				sellThresh: -1,
				minPrice: 99999,
				maxPrice:-99999,
				lastMode: -1,
				priceBought: 0,
				stock: 0
			});
		}
		
		return conf;
	}

	IdleTrading.init = function(){
		IdleTrading.isLoaded = 1;
		
		IdleTrading.restoreDefaultConfig(1);
		
		IdleTrading.ReplaceGameMenu();
		CCSE.MinigameReplacer(IdleTrading.ReplaceNativeMarket, "Bank");
		if(!Game.customMinigame['Bank'].tick) Game.customMinigame['Bank'].tick = [];
		Game.customMinigame['Bank'].tick.push(IdleTrading.Logic);
        
		
		//***********************************
		//    Post-Load Hooks 
		//    To support other mods interfacing with this one
		//***********************************
		if(IdleTrading.postloadHooks) {
			for(var i = 0; i < IdleTrading.postloadHooks.length; ++i) {
				IdleTrading.postloadHooks[i]();
			}
		}
		
		if (Game.prefs.popups) Game.Popup(IdleTrading.name + ' loaded!');
		else Game.Notify(IdleTrading.name + ' loaded!', '', '', 1, 1);
	}


	//***********************************
	//    Menu Replacer
	//***********************************
	
	IdleTrading.ReplaceGameMenu = function(){
		Game.customOptionsMenu.push(function(){
			CCSE.AppendCollapsibleOptionsMenu(IdleTrading.name, IdleTrading.getMenuString());
		});
		
		Game.customStatsMenu.push(function(){
			CCSE.AppendStatsVersionNumber(IdleTrading.name, IdleTrading.version);
		});
	}

	IdleTrading.getMenuString = function(){
		if(Game.Objects["Bank"].minigameLoaded){
			let m = CCSE.MenuHelper;
			var M = Game.Objects['Bank'].minigame;
			
			var str = 	'<div class="listing">' + m.ActionButton("IdleTrading.restoreDefaultConfig(2); Game.UpdateMenu();", 'Restore Default') +  
						(typeof InsugarTrading == 'undefined' ? '' : m.ActionButton("IdleTrading.importInsugarTrading(); Game.UpdateMenu();", 'Import from Insugar Trading')) + 
						'</div>' + 
						'<div class="listing">' + m.ToggleButton(IdleTrading.config, 'autoBuy', 'IdleTrading_autoBuyButton', 'AutoBuy ON', 'AutoBuy OFF', "IdleTrading.Toggle") +
												  m.ToggleButton(IdleTrading.config, 'autoSell', 'IdleTrading_autoSellButton', 'AutoSell ON', 'AutoSell OFF', "IdleTrading.Toggle") +
						'</div>' +
						'<div class="listing">' + m.ToggleButton(IdleTrading.config, 'transactionNotifications', 'IdleTrading_transactionNotificationsButton', 'Transaction Notifications ON', 'Transaction Notifications OFF', "IdleTrading.Toggle") +
												  m.ToggleButton(IdleTrading.config, 'fastNotifications', 'IdleTrading_fastNotificationsButton', 'Fast Notifications ON', 'Fast Notifications OFF', "IdleTrading.Toggle") +
						'</div>' +
						'<div class="listing">' + m.ToggleButton(IdleTrading.config, 'consoleAnnouncements', 'IdleTrading_consoleAnnouncementsButton', 'Console Announcements ON', 'Console Announcements OFF', "IdleTrading.Toggle") +
												  m.ToggleButton(IdleTrading.config, 'activityReport', 'IdleTrading_activityReportButton', 'Activity Report ON', 'Activity Report OFF', "IdleTrading.Toggle")+ '</div>';
			
			str += m.Header('Goods');
			
			for(var iG = 0; iG < M.goodsById.length; iG++){
				var me = M.goodsById[iG];
				var conf = IdleTrading.config.goods[iG];
				
				str += '<div class="listing" style="text-align:left;"><div class="icon" style="pointer-events:none;display:inline-block;transform:scale(0.5);margin:-16px -18px -16px -14px;vertical-align:middle;background-position:' + (-me.icon[0] * 48) + 'px ' + (-me.icon[1] * 48) + 'px;"></div><span class="bankSymbol" style="width:30px;overflow:hidden;white-space:nowrap;">' + me.symbol + '</span>';
				str += '<label> Buy at:</label>' + m.InputBox('IdleTrading_buyThresh_' + iG, 65, conf.buyThresh, 'IdleTrading.UpdatePref(' + iG + ', this.value, 0)');
				str += '<label> Sell at:</label>' + m.InputBox('IdleTrading_sellThresh_' + iG, 65, conf.sellThresh, 'IdleTrading.UpdatePref(' + iG + ', this.value, 1)');
				str += '<label>Historical min: <b>$' + Beautify(conf.minPrice, 2) + '</b>; Historical max: <b>$' + Beautify(conf.maxPrice, 2) + '</b></label>';
				str += '</div>';
			}
			
			return str;
		}
		else{
			return '<div class="listing">Stock market minigame not loaded!</div>';
		}
	}


	//***********************************
	//    Configuration
	//***********************************
	
	IdleTrading.save = function(){
		return JSON.stringify(IdleTrading.config);
	}

	IdleTrading.load = function(str){
		var config = JSON.parse(str);
			
		for(var pref in config){
			if(pref == "goods"){
				for(var iG = 0; iG < config.goods.length; iG++){
					if(IdleTrading.config.goods[iG]){
						for(var pref2 in config.goods[iG]){
							IdleTrading.config.goods[iG][pref2] = config.goods[iG][pref2];
						}
					}
				}
			}
			else{
				IdleTrading.config[pref] = config[pref];
			}
		}
		if(Game.Objects["Bank"].minigameLoaded){
       		IdleTrading.startingProfits = Game.ObjectsById[5].minigame.profit;
		}
	}

	IdleTrading.restoreDefaultConfig = function(mode){
		IdleTrading.config = IdleTrading.defaultConfig();
		if(mode == 2) IdleTrading.save(IdleTrading.config);
	}
	
	IdleTrading.Toggle = function(prefName, button, on, off, invert){
		if(IdleTrading.config[prefName]){
			l(button).innerHTML = off;
			IdleTrading.config[prefName] = 0;
		}
		else{
			l(button).innerHTML = on;
			IdleTrading.config[prefName] = 1;
		}
		if (prefName == "activityReport" && IdleTrading.config.activityReport) {
        	setTimeout(IdleTrading.stockerReport, IdleTrading.config.activityReportFrequency);
        }
		l(button).className = 'smallFancyButton prefButton option' + ((IdleTrading.config[prefName] ^ invert) ? '' : ' off');
	}
	
	IdleTrading.ToggleGood = function(goodID, button, on, off, invert){
		if (IdleTrading.config.goods[goodID]){
			l(button).innerHTML = off;
			IdleTrading.config.goods[goodID].active = 0;
		}else{
			l(button).innerHTML = on;
			IdleTrading.config.goods[goodID].active = 1;
		}
		
		l(button).className = 'smallFancyButton prefButton option' + ((IdleTrading.config.goods[goodID].active^invert) ? '' : ' off');
		IdleTrading.save(IdleTrading.config);
	}
	
	IdleTrading.UpdatePref = function(goodID, value, mode){
		var val = parseFloat(value);
		if(!isNaN(val)){
			if(mode == 0) IdleTrading.config.goods[goodID].buyThresh = val;
			if(mode == 1) IdleTrading.config.goods[goodID].sellThresh = val;
		}
		Game.UpdateMenu();
	}
	
	IdleTrading.importInsugarTrading = function(){
		var config = IdleTrading.config;
		var quant = InsugarTrading.settings.quantilesToDisplay;
		var bankLevel = Game.Objects["Bank"].level;
		var sellThresh = -1;
		var buyThresh = 2;
		
		for(var i = 0; i < quant.length; i++){
			if(quant[i] < buyThresh) buyThresh = quant[i];
			if(quant[i] > sellThresh) sellThresh = quant[i];
		}
		
		for(var iG = 0; iG < config.goods.length; iG++){
			config.goods[iG]['buyThresh'] = Math.round(100 * InsugarTrading.quantile(bankLevel, iG, buyThresh)) / 100;
			config.goods[iG]['sellThresh'] = Math.round(100 * InsugarTrading.quantile(bankLevel, iG, sellThresh)) / 100;
		}
	}
	
	
	//***********************************
	//    Functionality
	//***********************************
	
	IdleTrading.ReplaceNativeMarket = function() {
		IdleTrading.startingProfits = Game.Objects['Bank'].minigame.profit;
		if (IdleTrading.config.activityReport) {
        	setTimeout(IdleTrading.stockerReport, IdleTrading.config.activityReportFrequency);
        }
	}

	const stockerTimeBeautifier = function stockerTimeBeautifier(duration) {
		var milliseconds = Math.floor((duration % 1000) / 100),
			//seconds = Math.floor((duration / 1000) % 60),
			minutes = Math.floor((duration / (1000 * 60)) % 60),
			hours = Math.floor((duration / (1000 * 60 * 60))); //% 24),
		//days = Math.floor((duration / (1000 * 60 * 60 * 24)));

		if (hours > 0) {
			if (hours == 1) {
				hours = hours + ' hour'
			} else hours = hours + ' hours'
		} else hours = -1;

		if (minutes >= 1) {
			minutes = (minutes == 1) ? minutes + ' minute' : minutes + ' minutes';
		} else minutes = -1;

		if ((hours != -1) && (minutes != -1)) {
			return hours + ' and ' + minutes;
		} else if ((hours == -1) && (minutes != -1)) {
			return minutes;
		} else if ((hours != -1) && (minutes == -1)) {
			return hours;
		} else if ((hours == -1) && (minutes == -1)) {
			return 'not that long actually';
		}
	}

	IdleTrading.stockerReport = function () {
        if (Game.timedout) return
        var stockerUptime = new Date() - IdleTrading.sessionStart;
        if ((IdleTrading.sessionPurchases + IdleTrading.sessionSales) == 0) {
            Game.Notify(
                'Idle Trading report',
                'This session has been running for ' + stockerTimeBeautifier(stockerUptime) +
                ', but no good investment opportunities were detected! Luck is not on our side, yet.', [26, 7], IdleTrading.config.fastNotifications
            );
        } else {
            Game.Notify(
                'Idle Trading report',
                'This session has been running for ' + stockerTimeBeautifier(stockerUptime) +
            	', and has made ' + IdleTrading.sessionProfits.toFixed(0) +
                '$ in ' + IdleTrading.sessionPurchases + ' purchases and ' + IdleTrading.sessionSales + ' sales.', [26, 7], IdleTrading.config.fastNotifications
            );
        }
		if (IdleTrading.config.activityReport) {
        	setTimeout(IdleTrading.stockerReport, IdleTrading.config.activityReportFrequency);
        }
    }

	IdleTrading.Logic = function(){
		var M = Game.Objects['Bank'].minigame;
		for(var iG = 0; iG < M.goodsById.length; iG++){
			var good = M.goodsById[iG];
			var conf = IdleTrading.config.goods[iG];
			var price = Math.round(100 * M.getGoodPrice(good)) / 100;

            conf.stock = good.stock;

			if((good.mode != conf.lastMode) && (good.building.amount > 0)) // new trend detected in a stock that is active)
			{
				if (IdleTrading.config.consoleAnnouncements) {
                    console.log(good.name.replace('%1',Game.bakeryName) + ' has changed the mode from [' + IdleTrading.modeDecoder[conf.lastMode] + '] to [' + IdleTrading.modeDecoder[good.mode] + ']');
    			}

				if (good.mode != 5 && conf.lastMode == 5) { // ignore unstable stocks
                    if (IdleTrading.config.transactionNotifications && IdleTrading.config.verboseNotifications) Game.Notify(good.name + ' went unstable', 'Ignoring the stock for a time', [1, 33], IdleTrading.config.fastNotifications);
                }

				if(IdleTrading.config.autoBuy && conf.buyThresh != -1){
					if((
						(conf.lastMode == 2) && ((good.mode != 4) && (good.mode != 5)) || // slow fall stopped
						(conf.lastMode == 4) && ((good.mode != 2) && (good.mode != 5)) || // fast fall stopped
						(conf.lastMode == 5) && ((good.mode != 2) && (good.mode != 4)) // chaotic stopped
						) &&
						price - conf.buyThresh * 0.1 <= conf.buyThresh) {
							if (M.buyGood(iG, 10000)) {
								conf.priceBought = price;
								IdleTrading.sessionPurchases++;
								if (IdleTrading.config.transactionNotifications) Game.Notify('Buying ' + good.name.replace('%1',Game.bakeryName), 'The price has stopped ' + IdleTrading.modeDecoder[conf.lastMode] + ' at ' + Math.floor(conf.priceBought) + '$ per unit, and is ' + IdleTrading.modeDecoder[good.mode] + ' now.', good.icon, IdleTrading.config.fastNotifications);
								if (IdleTrading.config.consoleAnnouncements) console.log('=====$$$== Buying ' + good.name.replace('%1',Game.bakeryName));
							}
						}
				}
				if(IdleTrading.config.autoSell && conf.sellThresh != -1){
					if((
							(conf.lastMode == 1) && ((good.mode != 3) && (good.mode != 5)) || // slow rise stopped
							(conf.lastMode == 3) && ((good.mode != 1) && (good.mode != 5)) || // fast rise stopped
							(conf.lastMode == 5) && ((good.mode != 1) && (good.mode != 3)) // chaotic stopped
						) &&
						(price + conf.sellThresh * 0.1 >= conf.sellThresh)) {
							if (M.sellGood(iG, 10000)) {
								conf.priceBought = -1;
								IdleTrading.sessionSales++;
                            	if (IdleTrading.config.transactionNotifications) Game.Notify('Selling ' + good.name.replace('%1',Game.bakeryName), 'At a profit of ' + Math.floor(good.val - conf.priceBought) + '$ per unit (total ' + Math.floor(good.val - conf.priceBought) * conf.stock + '$ profit), and is ' + IdleTrading.modeDecoder[good.mode] + ' now.', good.icon, IdleTrading.config.fastNotifications);
                            	if (IdleTrading.config.consoleAnnouncements) ('=====$$$== Selling ' + good.name.replace('%1',Game.bakeryName) + ' at a profit of ' + (good.val - conf.priceBought).toFixed(2));
							}
						};
				}
			}
			if(price < conf.minPrice) conf.minPrice = price;
			if(price > conf.maxPrice) conf.maxPrice = price;
			conf.lastMode = good.mode;
		}
		IdleTrading.sessionProfits = M.profit - IdleTrading.startingProfits;
	}
	
	
	if(CCSE.ConfirmGameVersion(IdleTrading.name, IdleTrading.version, IdleTrading.GameVersion)) Game.registerMod(IdleTrading.name, IdleTrading); // IdleTrading.init();
}

if(!IdleTrading.isLoaded){
	if(CCSE && CCSE.isLoaded){
		IdleTrading.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(IdleTrading.launch);
	}
}
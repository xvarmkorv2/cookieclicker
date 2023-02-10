Game.registerMod("nabiBetterAccounting",{
	init: function () {
		var betterAccountingMod = this;
		var stockMarketActive = false;
		setInterval(this.updateLoop, 1000, this);
	},

	getTotalPortfolioValue: function () {
		let total = 0.00;
		for (let i = 0; i <= 16; i++) {
			let me = Game.Objects['Bank'].minigame.goodsById[i];
			let goodPrice = Game.Objects['Bank'].minigame.getGoodPrice(me);
			total += me.stock * goodPrice;
		}
		return total;
	},

	getLiquidAssets: function () {
		return Game.cookies / Game.cookiesPsRawHighest;
	},

	displayPortfolioInfo: function () {
		let pVal = this.getTotalPortfolioValue();
		let lAssets = this.getLiquidAssets();
		let potentialProfit = pVal + Game.Objects['Bank'].minigame.profit;
		let infoString = 'Portfolio value: $' + pVal.toFixed(2) + ", Liquid assets: $" + lAssets.toFixed(2) + ", Potential profit: $" + potentialProfit.toFixed(2);
		l('portfolioInfo').innerHTML = infoString;
	},
	initializePortfolioElement: function () {
		l('bankHeader').insertAdjacentHTML('beforeend', '<p style="padding:1px 4px;font-size:12px;color:rgba(255,255,255,0.5);" id="portfolioInfo">Loading...</p>');
	},
	updateLoop: function (modObject) {
		if (Game.Objects['Bank'].minigameLoaded) {
			if (!modObject.stockMarketActive)
				modObject.initializePortfolioElement();
			modObject.stockMarketActive = true;
			modObject.displayPortfolioInfo();
		}
		else
			modObject.stockMarketActive = false;
	},
});
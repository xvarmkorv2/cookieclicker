Game.registerMod("prestigeCalc", {
	init: () => {
		//===============================PrestigeCount==========================================
		let ascendNowToGet = 0;
		let prestigeLvlAfter = () => Math.floor(Game.prestige + ascendNowToGet);
		let prestigeLvlAfterStr = () => (Beautify(prestigeLvlAfter(), 1)).replace(' ', '&nbsp;');

		// Find the parent node and the reference node to prepend the new element to
		let prestigeparent = document.querySelector('#legacyButton'),
			reference = document.querySelector('#ascendNumber');

		let prestigeCount = document.createElement('div');
		prestigeCount.innerHTML = prestigeLvlAfterStr();
		prestigeCount.className = "roundedPanel";
		prestigeCount.setAttribute('id', 'prestigeCalc');

		prestigeCount.style.position = 'absolute';
		prestigeCount.style.right = reference.clientWidth + 115 + 25 + 'px';
		prestigeCount.style.top = '20px';
		prestigeCount.style.fontSize = '12px';
		prestigeCount.style.fontWeight = 'bold';
		prestigeCount.style.fontFamily = 'Georgia';
		prestigeCount.style.color = '#999';

		prestigeparent.insertBefore(prestigeCount, reference);

		//===============================PrestigeCount End======================================

		//===============================SevenCount=============================================
		let sevenCount = () => (prestigeLvlAfter().toString().match(/7/g) || []).length;
		let sevenCountStr = () => (sevenCount());

		let sevenCounter = document.createElement('div');
		sevenCounter.innerHTML = sevenCountStr();
		sevenCounter.className = "roundedPanel";
		sevenCounter.setAttribute('id', 'sevenCounter');

		sevenCounter.style.position = 'absolute';
		sevenCounter.style.right = reference.clientWidth + 115 + 25 + 'px';
		sevenCounter.style.top = '0';
		sevenCounter.style.fontSize = '12px';
		sevenCounter.style.fontWeight = 'bold';
		sevenCounter.style.fontFamily = 'Georgia';
		sevenCounter.style.color = '#DAA520';

		prestigeparent.insertBefore(sevenCounter, prestigeCount);

		//===============================SevenCount End=========================================
		let logic = () => {
			if (prestigeLvlAfter() > 0) {
				ascendNowToGet = Math.floor(Game.HowMuchPrestige(Game.cookiesReset + Game.cookiesEarned)) - Math.floor(Game.HowMuchPrestige(Game.cookiesReset));

				prestigeCount.innerHTML = prestigeLvlAfterStr();
				prestigeCount.style.display = 'block';
				prestigeCount.style.right = reference.clientWidth + 115 + 25 + 'px';

				sevenCounter.innerHTML = sevenCountStr();
				sevenCounter.style.display = 'block';
				sevenCounter.style.right = reference.clientWidth + 115 + 25 + 'px';

			} else {
				prestigeCount.style.display = 'none';
				sevenCounter.style.display = 'none';
			}
		};

		Game.registerHook('logic', () => {
			if (Game.T % 15 == 0) logic();
		});

		logic();
	}
});
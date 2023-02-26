if(PrideBG === undefined) var PrideBG = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

PrideBG.launch = function(){
	PrideBG.isLoaded = 1;
	const NewBackgroundSelection = function (name, icon, pic, div) {
		// name		What the game will display in the selector
		// icon		An array [x, y, (optional)url] See how upgrades handle icons to get an idea
		// pic		Url to your picture

		let bg = { name: name, icon: icon, pic: pic, order: 99, div: div ? true : false };
		Game.customUpgrades['Background selector'].choicesFunction.push(function (choices) {
			choices.push(bg);
		});
	}
	NewBackgroundSelection('Transgender', [0, 0, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/923ftq.png', true);
	NewBackgroundSelection('Lesbian',     [1, 0, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/4nd0wm.png');
	NewBackgroundSelection('Gay',         [2, 0, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/vanq8s.png');
	NewBackgroundSelection('Genderfluid', [3, 0, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/uay9qh.png');
	NewBackgroundSelection('Non-Binary',  [0, 1, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/09ayur.png');
	NewBackgroundSelection('Progress',    [1, 1, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/56nl62.png');
	NewBackgroundSelection('Bi',          [2, 1, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/eaupei.png');
	NewBackgroundSelection('Intersex',    [0, 2, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/zaj36a.png');
	NewBackgroundSelection('Ace',         [1, 2, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/2dpzqh.png');
	NewBackgroundSelection('Pan',         [2, 2, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/aryd6i.png');
}

if(!PrideBG.isLoaded){
	if(CCSE && CCSE.isLoaded){
		PrideBG.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(PrideBG.launch);
	}
}

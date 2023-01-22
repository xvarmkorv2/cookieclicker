if(PrideBG === undefined) var PrideBG = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

PrideBG.launch = function(){
	PrideBG.isLoaded = 1;
	CCSE.NewBackgroundSelection('Transgender', [0, 0, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/923ftq.png');
	CCSE.NewBackgroundSelection('Lesbian',     [1, 0, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/4nd0wm.png');
	CCSE.NewBackgroundSelection('Gay',         [2, 0, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/vanq8s.png');
	CCSE.NewBackgroundSelection('Genderfluid', [3, 0, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/uay9qh.png');
	CCSE.NewBackgroundSelection('Non-Binary',  [0, 1, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/09ayur.png');
	CCSE.NewBackgroundSelection('Progress',    [1, 1, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/56nl62.png');
	CCSE.NewBackgroundSelection('Bi',          [2, 1, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/eaupei.png');
	CCSE.NewBackgroundSelection('Intersex',    [0, 2, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/zaj36a.png');
	CCSE.NewBackgroundSelection('Ace',         [1, 2, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/2dpzqh.png');
	CCSE.NewBackgroundSelection('Pan',         [2, 2, 'https://files.catbox.moe/45g5hf.png'], 'https://files.catbox.moe/aryd6i.png');

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

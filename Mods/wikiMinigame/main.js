Game.registerMod("wiki minigame",{
	init:function() {
		Game.registerHook('create',()=>{
			Game.Objects['Cortex baker'].minigameUrl=this.dir + '/minigameWiki.js';
			Game.Objects['Cortex baker'].minigameName=loc("Wiki");
		})
	}
});
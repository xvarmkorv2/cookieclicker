var vanillaPlayChime = ()=>{};
var vanillaChoicesFunction = ()=>{};
Game.registerMod("bad bone",{
	init:function() {
		Game.registerHook('create',()=>{
			

			vanillaPlayChime = Game.playGoldenCookieChime.bind({});
			vanillaChoicesFunction = Game.Upgrades['Golden cookie sound selector'].choicesFunction.bind({});

			Game.playGoldenCookieChime = () => {
			
				if (Game.chimeType==5) PlaySound(`${this.dir}/riff.mp3`);
				vanillaPlayChime();
			
			};

			Game.Upgrades['Golden cookie sound selector'].choicesFunction = () => {
				let icon = [12,7];
				if (Game.mods['bad bone gold']) {
					icon = [13,7];
				};
				let trueChimeType = Game.chimeType;
				Game.chimeType = 0;
				let choices = vanillaChoicesFunction();
				choices[5] = {name:'Bad to the Bone Riff',icon:icon};
				Game.chimeType = trueChimeType;
				
				choices[Game.chimeType].selected = 1
				
				return choices;
			}
		})
	}
});
if (sesame === undefined) var sesame = {};
Game.registerMod("sesame",{
	init:function(){
		sesame.version = "1.01";
		sesame.active = 0;

		Game.registerHook("check", sesameCheck);

		l('versionNumber').insertAdjacentHTML('beforeend','<a style="position:relative;left:4px;top:7px;overflow:hidden;z-index:10;" class="option neato" id="sesamereload">Reload</a>');
		l('versionNumber').insertAdjacentHTML('beforeend','<a style="position:relative;left:4px;top:7px;overflow:hidden;z-index:10;" class="option neato" id="sesamedebug">Debug</a>');

		AddEvent(l('sesamereload'),'click',function(){
			Game.toReload=true;
		});

		AddEvent(l('sesamedebug'),'click',function(){
			PlaySound('snd/tick.mp3');
			Game.OpenSesame();
			sesame.active = 1;
			l('sesamedebug').style.display='none';
		});

		function sesameCheck() {
			if (sesame.active == 1 && !Game.HasAchiev("Cheated cookies taste awful")) Game.Achievements['Cheated cookies taste awful'].won=1; // reminding cheaters of their sins
		}
		
		Game.Notify("Sesame loaded!", "Version "+sesame.version, [10, 6], 2, 1);
	}
});
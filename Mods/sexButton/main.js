function sex() {
	PlaySound('snd/tick.mp3');
	Game.Notify('Sex','Sex',[0,8]);
};

Game.registerMod("sex button",{
	init:function() {
		if (CCSE){
			if(!Game.customOptionsMenu) Game.customOptionsMenu = [];
			Game.customOptionsMenu.push(function () {
				//document.getElementsByClassName('listing')[8].innerHTML += '<a class="option" onclick="sex()">Sex</a><label>(OMG!)</label><br>';
				let listings = document.getElementsByClassName('listing');
				listings[listings.length - 1].innerHTML += '<a class="option" onclick="sex()">Sex</a><label>(OMG!)</label><br>';
			});
		} else {
			var menu = Game.UpdateMenu;
			Game.UpdateMenu = function () {
				menu();
				if (Game.onMenu == 'prefs') {
					//document.getElementsByClassName('listing')[8].innerHTML += '<a class="option" onclick="sex()">Sex</a><label>(OMG!)</label><br>';
				let listings = document.getElementsByClassName('listing');
				listings[listings.length - 1].innerHTML += '<a class="option" onclick="sex()">Sex</a><label>(OMG!)</label><br>';
				}
			}
		}
	}
});
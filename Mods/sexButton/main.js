function sex() {
	PlaySound('snd/tick.mp3');
	Game.Notify('Sex','Sex',[0,8]);
};

Game.registerMod("sex button",{
	init:function() {

		// Copy vanilla code for menu updating into a new function
		var oldUpdateMenu = Game.UpdateMenu.bind({});

		// Overwrite the old function with my code, but run the copied vanilla code as well, as to preserve functionality
		Game.UpdateMenu = () => {
			oldUpdateMenu();
			if (Game.onMenu=='prefs') {
				//document.getElementsByClassName('listing')[8].innerHTML += '<a class="option" onclick="sex()">Sex</a><label>(OMG!)</label><br>';
				let listings = document.getElementsByClassName('listing');
				listings[listings.length - 1].innerHTML += '<a class="option" onclick="sex()">Sex</a><label>(OMG!)</label><br>';
			}
		}

	}
});
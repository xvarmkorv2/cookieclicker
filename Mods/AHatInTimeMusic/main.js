Game.registerMod("A Hat in Time Music", {
    init: function () {
		Music.addTrack('Title Screen', 'Pascal Michael Stiefel', this.dir + '/TitleScreen.mp3');
		Music.addTrack('File Select', 'Pascal Michael Stiefel', this.dir + '/FileSelect.mp3');
		Music.addTrack('Your Contract has expired', 'Pascal Michael Stiefel', this.dir + '/YourContractHasExpired.mp3');
		Music.addTrack('Roll the Slots', 'Pascal Michael Stiefel', this.dir + '/RollTheSlots.mp3');
		Game.jukebox.tracks.push(
			'Title Screen',
			'File Select',
			'Your Contract has expired',
			'Roll the Slots'
		)
    }
})
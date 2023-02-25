Game.registerMod("A Hat in Time Music", {
    init: function () {
		Music.addTrack('Title Screen', 'Pascal Michael Stiefel', this.dir + '/02TitleScreen.mp3');
		Music.addTrack('File Select', 'Pascal Michael Stiefel', this.dir + '/03FileSelect.mp3');
		Music.addTrack('Welcome to Mafia Town', 'Pascal Michael Stiefel', this.dir + '/06WelcometoMafiaTown.mp3');
		Music.addTrack('Time Piece Released', 'Pascal Michael Stiefel', this.dir + '/08TimePieceReleased.mp3');
		Music.addTrack('Train Rush', 'Pascal Michael Stiefel', this.dir + '/33TrainRush.mp3');
		Music.addTrack('Dead Bird Studio Basment', 'Pascal Michael Stiefel', this.dir + '/38DeadBirdStudioBasement.mp3');
		Music.addTrack('Dead Bird Studio is Closed', 'Pascal Michael Stiefel', this.dir + '/39DeadBirdStudioIsClosed.mp3');
		Music.addTrack('The Battle of Award 42', 'Pascal Michael Stiefel', this.dir + '/39DeadBirdStudioIsClosed.mp3');
		Music.addTrack('Heart To Heart', 'Pascal Michael Stiefel', this.dir + '/40TheBattleofAward42.mp3');
		Music.addTrack('Your Contract has expired', 'Pascal Michael Stiefel', this.dir + '/41HeartToHeart.mp3');
		Music.addTrack('Roll the Slots', 'Pascal Michael Stiefel', this.dir + '/72RollTheSlots.mp3');
		Game.jukebox.tracks.push(
			'Title Screen',
			'File Select',
			'Welcome to Mafia Town',
			'Time Piece Released',
			'Train Rush',
			'Dead Bird Studio Basment',
			'Dead Bird Studio is Closed',
			'The Battle of Award 42',
			'Heart To Heart',
			'Your Contract has expired',
			'Roll the Slots'
		)
    }
})
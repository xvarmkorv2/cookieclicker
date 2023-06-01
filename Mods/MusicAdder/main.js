var paths = [];
var titles = [];
var authors = [];
var modpath = "";
var initialload = true;

function addSong(path, title, author) {
	//console.log(title + " by " + author + " in " + path + " added.");
	Music.addTrack(title.replace(/(\r\n|\n|\r)/gm, ""), author.replace(/(\r\n|\n|\r)/gm, ""), modpath+"/music/"+path.replace(/(\r\n|\n|\r)/gm, ""));
	Game.jukebox.tracks.push(title.replace(/(\r\n|\n|\r)/gm, ""));
	paths.push(path.replace(/(\r\n|\n|\r)/gm, ""));
	titles.push(title.replace(/(\r\n|\n|\r)/gm, ""));
	authors.push(author.replace(/(\r\n|\n|\r)/gm, ""));
}

function addSongPrompt() {
	PlaySound('snd/tick.mp3');
	Game.Prompt('<id AddSong><h3>'+loc("Add Custom Music")+'</h3><a id="openFolder" class="option" onclick="PlaySound(\'snd/tick.mp3\');">'+loc("Insert File Here First")+'</a><br><div class="block">'+loc("File Name")+'</div><div class="block"><textarea id="pathArea" style="width:100%;height:15px;"></textarea></div><div class="block">'+loc("Track Title")+'</div><div class="block"><textarea id="titleArea" style="width:100%;height:15px;"></textarea></div><div class="block">'+loc("Track Author")+'</div><div class="block"><textarea id="authorArea" style="width:100%;height:15px;"></textarea></div>',[[loc("Add Track"),'if (l(\'titleArea\').value.length==0 || l(\'pathArea\').value.length==0){return false;}else{Game.ClosePrompt();addSong(l(\'pathArea\').value, l(\'titleArea\').value, l(\'authorArea\').value)}'],loc("Nevermind")]);
		l('pathArea').focus();
		AddEvent(l('openFolder'),'click',()=>{send({id:'open folder',loc:modpath+"/music"});});
};

function removeSong(id) {
	PlaySound('snd/tick.mp3');
	paths.splice(id, 1);
	titles.splice(id, 1);
	authors.splice(id, 1);
	l("songoption" + id).remove();
}

function removeSongPrompt() {
	PlaySound('snd/tick.mp3');
	let prompttext = '<id RemoveSong><h3>'+loc("Remove Custom Music")+'</h3><div class="block">'+loc("Click a track to remove it. Restart the game for changes to take effect.")+'</div>';
	for (let i = 0; i < titles.length; i++) {
		prompttext += '<a id="songoption' + i + '" class="option" onclick="removeSong(' + i + ')">' + titles[i] + '</a><br>';
	}
	Game.Prompt(prompttext,[loc("All done!")]);
};

Game.registerMod("music adder",{
	init:function(){
		modpath = this.dir;
		var oldUpdateMenu = Game.UpdateMenu.bind({});

		Game.UpdateMenu = () => {
			oldUpdateMenu();
			if (Game.onMenu=='prefs' && Game.Has('Sound test')) {
				let listings = document.getElementsByClassName('listing');
				listings[listings.length - 1].innerHTML += '<a class="option" onclick="addSongPrompt()">'+loc("Add Custom Music")+'</a><label>'+loc("(add a custom track to the Jukebox)")+'</label><br>';
				listings[listings.length - 1].innerHTML += '<a class="option" onclick="removeSongPrompt()">'+loc("Remove Custom Music")+'</a><label>'+loc("(remove custom music from the Jukebox; requires restart to take effect)")+'</label><br>';
			}
		}
	},
	save:function(){
		if (paths.length == 0) {
			//console.log('{"paths":[], "titles":[], "authors":[]}');
			return String('{"paths":[], "titles":[], "authors":[]}');
		} else {
			//console.log('{"paths":["' + paths.join('", "') + '"], "titles":["' + titles.join('", "') + '"], "authors":["' + authors.join('", "') + '"]}');
			return String('{"paths":["' + paths.join('", "') + '"], "titles":["' + titles.join('", "') + '"], "authors":["' + authors.join('", "') + '"]}');
		}
	},
	load:function(str){
		//console.log(str);
		obj = JSON.parse(str);
		paths = obj.paths;
		titles = obj.titles;
		authors = obj.authors;
		//console.log(paths + "\n" + titles + "\n" + authors);
		if (initialload) {
			for (let i = 0; i < titles.length; i++) {
				Music.addTrack(titles[i], authors[i], this.dir+"/music/"+paths[i]);
				Game.jukebox.tracks.push(titles[i]);
			}
			initialload = false;
		}
	},
});
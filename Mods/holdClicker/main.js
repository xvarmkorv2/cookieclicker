Game.registerMod('HoldClicker', {
    condition: {
        mouseDown: false,
        mouseHover: false,
    },

    config: {
        speed: 10,
    },

    interval: undefined,

    init: function() {
        console.log(this)
        // Game.customOptionsMenu.push(this.addOptionsMenu);
        this.conditionDetect();

        // Menu

		var UpdateMenu = Game.UpdateMenu.bind({});
        if (CCSE){
			if(!Game.customOptionsMenu) Game.customOptionsMenu = [];
			Game.customOptionsMenu.push(function () {
				let listings = document.getElementsByClassName('listing');
                listings[listings.length - 1].innerHTML += `
                <br>
                <div class="sliderBox">
                    <div style="float:left;">Clicks per second</div>
                    <div style="float:right;" id="speedSliderValue">${this.config.speed}</div>
                    <input class="slider" id="speedSlider" style="clear:both;" type="range" min="1" max="30" step="1" value="${this.config.speed}" oninput="Game.mods.HoldClicker.config.speed = l('speedSlider').value; l('speedSliderValue').innerHTML = l('speedSlider').value"></input>
                </div>`;
			});
		} else {
			var menu = Game.UpdateMenu;
			Game.UpdateMenu = function () {
				menu();
				if (Game.onMenu == 'prefs') {
					let listings = document.getElementsByClassName('listing');
                    listings[listings.length - 1].innerHTML += `
                    <br>
                    <div class="sliderBox">
                        <div style="float:left;">Clicks per second</div>
                        <div style="float:right;" id="speedSliderValue">${this.config.speed}</div>
                        <input class="slider" id="speedSlider" style="clear:both;" type="range" min="1" max="30" step="1" value="${this.config.speed}" oninput="Game.mods.HoldClicker.config.speed = l('speedSlider').value; l('speedSliderValue').innerHTML = l('speedSlider').value"></input>
                    </div>`;
				}
			}
		}

    },

    load: function(str) {
        const config = JSON.parse(str);
        for(const c in config) this.config[c] = config[c];
    },

    save: function() {
        return JSON.stringify(this.config);
    },

    conditionDetect: function() {
        const mod = this
        document.body.onmousedown = function(e) {
            if (e.button == 0) {
                mod.condition.mouseDown = true
                mod.clicker(mod)
            }
        }
        document.body.onmouseup = function(e) {
            if (e.button == 0) {
                mod.condition.mouseDown = false
                mod.clicker(mod)
            }
        }
        document.getElementById('bigCookie').addEventListener('mouseover', function () {
            mod.condition.mouseHover = true
            mod.clicker(mod)
        });
        document.getElementById('bigCookie').addEventListener('mouseout', function () {
            mod.condition.mouseHover = false
            mod.clicker(mod)
        });
    },

    clicker: function (mod) {
        if (mod.condition.mouseDown && mod.condition.mouseHover) {
            mod.interval = setInterval(function () {Game.ClickCookie(0)}, 1000/mod.config.speed);
        } else {
            clearInterval(mod.interval);
        }
    }
});

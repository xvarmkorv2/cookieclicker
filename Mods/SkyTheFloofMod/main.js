Game.registerMod("skythefloof mod",{//this string needs to match the ID provided in your info.txt
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		
		//writing mods for Cookie Clicker may require a decent understanding of javascript.
		//dig around in the game files and look for "main.js", almost the entire source code is in there including further mod hook instructions and more examples! search for "MODDING API".
		
		Game.Notify(`Kawaii Cookie Mod Loaded!`,`Things are cuter now! :3`,[30,8]);
		
		//this mod adds the very silly functionality of letting you click a little button next to the Store header to increase a number displayed on it.
		//how anyone could find this kind of idle clicking fun is beyond us, but this is just an example.
		//to finish off, we're replacing the big cookie picture with a cool cookie, why not (the image is in this mod's directory)
		Game.Loader.Replace('perfectCookie.png',this.dir+'/kawaiiCookie.png');
		Game.Loader.Replace('buildings.png',this.dir+'/kawaiiBuildings.png');
		Game.Loader.Replace('wrinkler.png',this.dir+'/scrunkler.png');
		Game.Loader.Replace('winterWrinkler.png',this.dir+'/scrunkler.png');
		Game.Loader.Replace('goldCookie.png',this.dir+'/kawaiiGoldCookie.png');
		Game.Loader.Replace('wrathCookie.png',this.dir+'/kawaiiWrathCookie.png');
		Game.Loader.Replace('bgBlue.jpg',this.dir+'/bgPink.jpg');
		Game.Loader.Replace('grandmas1.jpg',this.dir+'/bgSpectrum.jpg');
		Game.Loader.Replace('grandmas2.jpg',this.dir+'/bgSpectrum.jpg');
		Game.Loader.Replace('grandmas3.jpg',this.dir+'/bgSpectrum.jpg');
		Game.Loader.Replace('shadedBordersSoft.png',this.dir+'/shadedBorders.png');
		Game.Loader.Replace('wrinklerBits.png',this.dir+'/scrunkler.png');
		Game.Loader.Replace('wrinklerShadow.png',this.dir+'/scrunklerShadow.png');
		Game.Loader.Replace('cursor.png',this.dir+'/cursor.png');
		
		//Game.ObjectsById[1].icon = L;

		//Game.ObjectsById[1].icon = [10,20,this.dir+'/img/kawaiiBuildings.png'];
		//Game.Loader.Replace('grandma.png',this.dir+'/grandmareplacement.png');








		document.getElementById("productIcon1").classList.add("grandma");
		document.getElementById("productIconOff1").classList.add("grandmaoff");
		document.getElementById("mutedProduct1").classList.add("grandma");
		
		const grandma = document.createElement("style");
		grandma.innerHTML = `
		.grandma {
			background: url('${this.dir}/kawaiiBuildings.png') !important;
			background-position: 0px -128px !important;
		}
		.grandmaoff {
			background: url('${this.dir}/kawaiiBuildings.png') !important;
			background-position: -64px -64px !important;
		}
		`;

		document.body.appendChild(grandma);

		// REMOVE BELOW IF IT BREAKS

		document.getElementById("productIcon0").classList.add("cursor");
		document.getElementById("productIconOff0").classList.add("cursoroff");
		
		const cursor = document.createElement("style");
		cursor.innerHTML = `
		.cursor {
			background: url('${this.dir}/kawaiiBuildings.png') !important;
			background-position: 0px 0px !important;
		}
		.cursoroff {
			background: url('${this.dir}/kawaiiBuildings.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(cursor);

		// REMOVE ABOVE IF IT BREAKS








	},






});


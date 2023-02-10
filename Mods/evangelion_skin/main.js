Game.registerMod("evangelion skin",{//this string needs to match the ID provided in your info.txt
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		
		//writing mods for Cookie Clicker may require a decent understanding of javascript.
		//dig around in the game files and look for "main.js", almost the entire source code is in there including further mod hook instructions and more examples! search for "MODDING API".
		
		Game.Notify(`AT field has been exceeded`,`Everything will be ok, we are turning on the EVA 01.`,[16,5]);
		
		//to finish off, we're replacing the big cookie picture with a cool cookie, why not (the image is in this mod's directory)
				
		//cookie
				Game.Loader.Replace('perfectCookie.png',this.dir+'/evangelion_cookie.png');
				Game.Loader.Replace('wrinkler.png',this.dir+'/Longuinus_Wrinkler.png');
                Game.Loader.Replace('winterWrinkler.png',this.dir+'/Longuinus_Wrinkler.png');
                Game.Loader.Replace('shinyWrinkler.png',this.dir+'/Longuinus_ShinyWrinkler.png');
                Game.Loader.Replace('wrinklerShadow.png',this.dir+'/nothing.png');
				Game.Loader.Replace('cookieShadow.png',this.dir+'/nothing.png');
				Game.Loader.Replace('smallCookies.png',this.dir+'/LCL.png');
				Game.Loader.Replace('cookieShower1.png',this.dir+'/LCLR.png');
				Game.Loader.Replace('cookieShower2.png',this.dir+'/LCLR.png');
				Game.Loader.Replace('cookieShower3.png',this.dir+'/LCLR.png');
				Game.Loader.Replace('cursor.png',this.dir+'/longuinus_cursor.png');

		//builds

				//Cursor
				Game.Objects.Cursor.displayName = "Longinus Spear";

				document.getElementById("productIcon0").classList.add("spear");
				document.getElementById("productIconOff0").classList.add("spear");
			
				const style = document.createElement("style");
				style.innerHTML = `
				.spear { 
				  background: url('${this.dir}/0longinus.png') !important;
				  background-position: 0px 0px !important;
				}
				.spear off {
				  background-position: -64px 0px !important;
				}
				`;
				document.body.appendChild(style);
				
				
				
				
	},
	save:function(){
		//use this to store persistent data associated with your mod
		//note: as your mod gets more complex, you should consider storing a stringified JSON instead
		return String(this.buttonClicks);
	},
	load:function(str){
		//do stuff with the string data you saved previously
		this.buttonClicks=parseInt(str||0);
		this.updateScore();
	},
	updateScore:function()
	{
		//this is not a standard mod hook - it's a custom function we're defining for ease of use; it simply sets the text on our button to reflect the current number of clicks
		l('storeClicker').innerHTML='Overcome!<br>'+Beautify(this.buttonClicks);
	},
});
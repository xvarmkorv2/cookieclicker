if (betterHighResSupport === undefined) var betterHighResSupport = {};
Game.registerMod("betterHighResSupport",{
	init:function(){
		betterHighResSupport.version = "2.02";

		var style = document.createElement("style");
		style.innerText =`
		/* make everything crispy. pixelated should cover basically every browser now */
		body {
			image-rendering: pixelated;
		}

		/* exclude buff crate because it's weirdly scaled */
		div.crate.enabled.buff::before {
			image-rendering: auto;
		}
		`;

		document.head.appendChild(style);
		
		Game.Notify("Better High Res Support loaded!", "Version "+betterHighResSupport.version, [21, 1], 2, 1);
	}
});
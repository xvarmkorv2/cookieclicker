Game.registerMod("cpm",{
	init:function(){
		drawCPM = function(){			
			if (!Game.OnAscend)
			{
				var str ='<div style="font-size:50%;'+(Game.cpsSucked>0?' color:#f00;':'')+'" id="cookiesPerMinute"'+'>'+loc("per minute:")+' '+Beautify(Game.cookiesPs*60*(1-Game.cpsSucked),1)+'</div>';
				l('cookies').innerHTML=l('cookies').innerHTML+str;
			}
		};		
		Game.registerHook('draw', drawCPM);		
	},	
});
Game.registerMod("cph",{
	init:function(){
		drawCPH = function(){			
			if (!Game.OnAscend)
			{
				var str ='<div style="font-size:50%;'+(Game.cpsSucked>0?' color:#f00;':'')+'" id="cookiesPerHour"'+'>'+loc("per hour:")+' '+Beautify(Game.cookiesPs*60*60*(1-Game.cpsSucked),1)+'</div>';
				l('cookies').innerHTML=l('cookies').innerHTML+str;
			}
		};		
		Game.registerHook('draw', drawCPH);		
	},	
});
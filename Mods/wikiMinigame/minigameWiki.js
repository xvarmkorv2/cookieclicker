var M={};
M.parent=Game.Objects['Cortex baker'];
M.parent.minigame=M;
M.launch=function()
{
	var M=this;
	M.name=M.parent.minigameName;
	M.init=function(div)
	{
		M.div = div;

		//Game.Notify('Log','Managed to init the minigame',[0,8]);
		
		M.reset();

		
		//M.parent.switchMinigame(1);
	}
	M.onResize=function()
	{
		M.div.innerHTML = '';

		var frame = document.createElement('iframe');

		//frame.type = 'text/html'
		frame.src = 'https://cookieclicker.fandom.com/wiki/';
		frame.style.width = '100%';
		frame.style.height = '700px';

		frame.onchange = (e)=>{
			Game.Notify('Wiki',e,[0,8]);
		};

		M.div.appendChild(frame);
	}
	M.onLevel=function(level)
	{
		
	}
	M.onRuinTheFun=function()
	{
		
	}
	M.save=function()
	{
		
	}
	M.load=function(str)
	{
		
	}
	M.reset=function(hard)
	{
		setTimeout(function(M){return function(){M.onResize();}}(M),10);
	}
	M.logic=function()
	{
		
	}
	M.draw=function()
	{
		
	}
	M.init(l('rowSpecial'+M.parent.id));
}
var M=0;
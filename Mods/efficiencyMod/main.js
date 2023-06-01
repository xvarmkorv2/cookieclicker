Game.registerMod("efficiency mod",{//this string needs to match the ID provided in your info.txt
	init:function(){
		//this function is called as soon as the mod is registered
		
		this.insertText();
		
		let MOD = this;

		//declare hooks here
		Game.registerHook('logic', function () {
			MOD.updateEfficiency();
		});
		
		//note: this mod does nothing but show a notification at the bottom of the screen once it's loaded
		Game.Notify(`Efficiency mod loaded!`,'',[16,5]);
	},
	save:function(){
		//use this to store persistent data associated with your mod
	},
	load:function(str){
		//do stuff with the string data you saved previously
	},
	
	insertText: function () {
		Game.ObjectsById.forEach(obj => {
			obj
				.l.getElementsByClassName("content")[0]
				.insertAdjacentHTML('beforeend', '<div class="efficiencyMod" style="position: absolute;top: 0px;right: 0px;"><span class="efficiency" style="vertical-align: top;">0%</span></div>');
		});
	},
	
	updateEfficiency: function () {
		Game.ObjectsById.forEach(obj => {
			var efficiency = this.getEfficiency(obj);
			var efficiencyDiv = obj.l.getElementsByClassName("content")[0].getElementsByClassName("efficiency")[0];

			efficiencyDiv.innerHTML = '<b>' + Beautify(efficiency, 1) + '</b>';
		});
	},
	
	getEfficiency: function (me) {
		
		//Synergy stuff
		//Copied and modified from game main.js line 7845
		
		var synergyBoost=0;
		
		if (me.amount>0)
		{
			if (me.name=='Grandma')
			{
				for (var i in Game.GrandmaSynergies)
				{
					if (Game.Has(Game.GrandmaSynergies[i]))
					{
						var other=Game.Upgrades[Game.GrandmaSynergies[i]].buildingTie;
						
						var multOriginal=me.amount*0.01*(1/(other.id-1));
						var boostOriginal=(other.storedTotalCps*Game.globalCpsMult)-(other.storedTotalCps*Game.globalCpsMult)/(1+multOriginal);
						
						// + 1 as we need to work out what it is if we add another of this building
						var multNew=(me.amount+1)*0.01*(1/(other.id-1));
						var boostNew=(other.storedTotalCps*Game.globalCpsMult)-(other.storedTotalCps*Game.globalCpsMult)/(1+multNew);
						
						//Boost is the difference between them
						synergyBoost+=boostNew - boostOriginal;
					}
				}
			}
			else if (me.name=='Portal' && Game.Has('Elder Pact'))
			{
				var other=Game.Objects['Grandma'];
				
				var boostOriginal=(me.amount*0.05*other.amount)*Game.globalCpsMult;
				
				// + 1 as we need to work out what it is if we add another of this building
				var boostNew=((me.amount+1)*0.05*other.amount)*Game.globalCpsMult;
				
				//Boost is the difference between them
				synergyBoost+=boostNew - boostOriginal;
			}
			
			for (var i in me.synergies)
			{
				var it=me.synergies[i];
				if (Game.Has(it.name))
				{
					var weight=0.05;
					var other=it.buildingTie1;
					if (me==it.buildingTie1) {weight=0.001;other=it.buildingTie2;}
					
					var boostOriginal=(other.storedTotalCps*Game.globalCpsMult)-(other.storedTotalCps*Game.globalCpsMult)/(1+me.amount*weight);
					
					// + 1 as we need to work out what it is if we add another of this building
					var boostNew=(other.storedTotalCps*Game.globalCpsMult)-(other.storedTotalCps*Game.globalCpsMult)/(1+(me.amount + 1)*weight);
					
					//Boost is the difference between them
					synergyBoost+=boostNew - boostOriginal;
				}
			}
		}
		
		//Main efficiency calculation + synergy	
		var efficiency = me.amount > 0 ? me.bulkPrice / (((me.storedTotalCps/me.amount)*Game.globalCpsMult) + synergyBoost) : me.bulkPrice / ((me.baseCps*Game.globalCpsMult) + synergyBoost);
		return efficiency;
	}	
});
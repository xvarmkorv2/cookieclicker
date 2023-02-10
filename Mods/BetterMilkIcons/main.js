Game.registerMod("BetterMilkIcons", {
	
	init: function() {

		//this is new code, added to display the new icon for the milk selector in the upgrade section, and to display the updated icon on the heavenly upgrade bubble in the stats menu. if you wish to change the icon here simply change "1plainMilkb.png" to the filename for another milk bottle and it should work.
		var milkSicon = this.dir + "/img/1plainMilkB.png";
		Game.Upgrades['Milk selector'].icon = [0, 0, milkSicon];
		Game.Upgrades['Classic dairy selection'].icon = [0, 0, milkSicon];

		var milkB1=Game.AllMilks.find(it=>it.bname=='Plain milk');
		var milkB2=Game.AllMilks.find(it=>it.bname=='Orange milk');
		var milkB3=Game.AllMilks.find(it=>it.bname=='Caramel milk');
		var milkB4=Game.AllMilks.find(it=>it.bname=='Banana milk');
		var milkB5=Game.AllMilks.find(it=>it.bname=='Lime milk');
		var milkB6=Game.AllMilks.find(it=>it.bname=='Blueberry milk');
		var milkB7=Game.AllMilks.find(it=>it.bname=='Strawberry milk');
		var milkB8=Game.AllMilks.find(it=>it.bname=='Vanilla milk');
		var milkB9=Game.AllMilks.find(it=>it.bname=='Honey milk');
		var milkB10=Game.AllMilks.find(it=>it.bname=='Coffee milk');
		var milkB11=Game.AllMilks.find(it=>it.bname=='Tea milk');
		var milkB12=Game.AllMilks.find(it=>it.bname=='Maple milk');
		var milkB13=Game.AllMilks.find(it=>it.bname=='Mint milk');
		var milkB14=Game.AllMilks.find(it=>it.bname=='Licorice milk');
		var milkB15=Game.AllMilks.find(it=>it.bname=='Dragonfruit milk');
		var milkB16=Game.AllMilks.find(it=>it.bname=='Melon milk');
		var milkB17=Game.AllMilks.find(it=>it.bname=='Blackcurrant milk');
		var milkB18=Game.AllMilks.find(it=>it.bname=='Midnight milk');
		var milkB19=Game.AllMilks.find(it=>it.bname=='Soy milk');
		//code below here updated to display the original milks in the stats menu where milks unlocked are displayed instead of displaying cursor icons, this is a temporary fix.
		milkB1.icon=[1,8, this.dir + '/img/1plainMilkB.png'];
		milkB2.icon=[4,8, this.dir + '/img/2orangeMilkB.png'];
		milkB3.icon=[5,8, this.dir + '/img/3caramelMilkB.png'];
		milkB4.icon=[6,8, this.dir + '/img/4bananMilkB.png'];
		milkB5.icon=[7,8, this.dir + '/img/5limeMilkB.png'];
		milkB6.icon=[8,8, this.dir + '/img/6blueberryMilkB.png'];
		milkB7.icon=[9,8, this.dir + '/img/7strawbMilkB.png'];
		milkB8.icon=[10,8, this.dir + '/img/8nillaMilkB.png'];
		milkB9.icon=[21,23, this.dir + '/img/9honeyMilkB.png'];
		milkB10.icon=[22,23, this.dir + '/img/10coffeeMilkB.png'];
		milkB11.icon=[23,23, this.dir + '/img/11teaMilkB.png'];
		milkB12.icon=[28,23, this.dir + '/img/12mapleMilkB.png'];
		milkB13.icon=[29,23, this.dir + '/img/13mintMilkB.png'];
		milkB14.icon=[30,23, this.dir + '/img/14licoriceMilkB.png'];
		milkB15.icon=[21,24, this.dir + '/img/15dfruitMilkB.png'];
		milkB16.icon=[22,24, this.dir + '/img/16melonMilkB.png'];
		milkB17.icon=[23,24, this.dir + '/img/17currantMilkB.png'];
		milkB18.icon=[5,7, this.dir + '/img/18midnightMilkB.png'];
		milkB19.icon=[27,23, this.dir + '/img/19soyMilkB.png'];
	
	}
});
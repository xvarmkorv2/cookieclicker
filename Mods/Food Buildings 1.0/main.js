Game.registerMod("food",{
	init:function(){
		
		var Nicon = this.dir + "/Nicon.png";
		Game.Notify(`• Food Buildings •`,`Completed loading ;D`,[16, 5, Nicon]);
		
		Game.Loader.Replace('cursor.png',this.dir+'/knife.png');
		Game.Loader.Replace('grandmaBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('farmBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('mineBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('factoryBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('bankBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('templeBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('wizardtowerBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('shipmentBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('alchemylabBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('portalBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('timemachineBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('antimattercondenserBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('prismBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('chancemakerBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('fractalEngineBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('javascriptconsoleBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('idleverseBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('cortexBackground.png',this.dir+'/1.png');
		Game.Loader.Replace('bank.png',this.dir+'/burger.png');
		Game.Loader.Replace('mine.png',this.dir+'/fries.png');
		Game.Loader.Replace('wizardtower.png',this.dir+'/cola.png');
		Game.Loader.Replace('farm.png',this.dir+'/spagethii.png');
		Game.Loader.Replace('shipment.png',this.dir+'/slush.png');
		Game.Loader.Replace('portal.png',this.dir+'/chicken.png');
		Game.Loader.Replace('antimattercondenser.png',this.dir+'/pizza.png');
		Game.Loader.Replace('factory.png',this.dir+'/cake.png');
		Game.Loader.Replace('fractalEngine.png',this.dir+'/hotdog.png');
		Game.Loader.Replace('javascriptconsole.png',this.dir+'/candystrip.png');
		Game.Loader.Replace('chancemaker.png',this.dir+'/jelly.png');
		Game.Loader.Replace('timemachine.png',this.dir+'/kinder.png');
		Game.Loader.Replace('idleverse.png',this.dir+'/donut.png');
		Game.Loader.Replace('alchemylab.png',this.dir+'/sandwich.png');
		Game.Loader.Replace('temple.png',this.dir+'/steak.png');
		Game.Loader.Replace('prism.png',this.dir+'/popcorn.png');
		Game.Loader.Replace('grandma.png',this.dir+'/3.png');
		Game.Loader.Replace('alteredGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('alternateGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('antiGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('bankGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('bunnyGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('cosmicGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('elfGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('farmerGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('grandmasGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('luckyGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('metaGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('minerGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('rainbowGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('scriptGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('templeGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('transmutedGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('witchGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('workerGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('brainyGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('alteredGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('alternateGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('antiGrandma.png',this.dir+'/3.png');
		Game.Loader.Replace('cortex.png',this.dir+'/chips.png');
		
		document.getElementById("productIcon1").classList.add("baba");
		document.getElementById("productIconOff1").classList.add("babaoff");
		document.getElementById("mutedProduct1").classList.add("baba");
		
		const baba = document.createElement("style");
		baba.innerHTML = `
		.baba {
			background: url('${this.dir}/3.png') !important;
			background-position: 0px 0px !important;
		}
		.babaoff {
			background: url('${this.dir}/3.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(baba);
		
		document.getElementById("productIcon2").classList.add("farma");
		document.getElementById("productIconOff2").classList.add("farmaoff");
		document.getElementById("mutedProduct2").classList.add("farma");
		
		const farma = document.createElement("style");
		farma.innerHTML = `
		.farma {
			background: url('${this.dir}/spagethii.png') !important;
			background-position: 0px 0px !important;
		}
		.farmaoff {
			background: url('${this.dir}/spagethii.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(farma);
		
		document.getElementById("productIcon3").classList.add("kopalnia");
		document.getElementById("productIconOff3").classList.add("kopalniaoff");
		document.getElementById("mutedProduct3").classList.add("kopalnia");
		
		const kopalnia = document.createElement("style");
		kopalnia.innerHTML = `
		.kopalnia {
			background: url('${this.dir}/fries.png') !important;
			background-position: 0px 0px !important;
		}
		.kopalniaoff {
			background: url('${this.dir}/fries.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(kopalnia);
		
		document.getElementById("productIcon4").classList.add("fabryka");
		document.getElementById("productIconOff4").classList.add("fabrykaoff");
		document.getElementById("mutedProduct4").classList.add("fabryka");
		
		const fabryka = document.createElement("style");
		fabryka.innerHTML = `
		.fabryka {
			background: url('${this.dir}/cake.png') !important;
			background-position: 0px 0px !important;
		}
		.fabrykaoff {
			background: url('${this.dir}/cake.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(fabryka);
		
		document.getElementById("productIcon5").classList.add("bank");
		document.getElementById("productIconOff5").classList.add("bankoff");
		document.getElementById("mutedProduct5").classList.add("bank");
		
		const bank = document.createElement("style");
		bank.innerHTML = `
		.bank {
			background: url('${this.dir}/burger.png') !important;
			background-position: 0px 0px !important;
		}
		.bankoff {
			background: url('${this.dir}/burger.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(bank);
		
		document.getElementById("productIcon6").classList.add("swiatynia");
		document.getElementById("productIconOff6").classList.add("swiatyniaoff");
		document.getElementById("mutedProduct6").classList.add("swiatynia");
		
		const swiatynia = document.createElement("style");
		swiatynia.innerHTML = `
		.swiatynia {
			background: url('${this.dir}/steak.png') !important;
			background-position: 0px 0px !important;
		}
		.swiatyniaoff {
			background: url('${this.dir}/steak.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(swiatynia);
		
		document.getElementById("productIcon7").classList.add("wieza");
		document.getElementById("productIconOff7").classList.add("wiezaoff");
		document.getElementById("mutedProduct7").classList.add("wieza");
		
		const wieza = document.createElement("style");
		wieza.innerHTML = `
		.wieza {
			background: url('${this.dir}/cola.png') !important;
			background-position: 0px 0px !important;
		}
		.wiezaoff {
			background: url('${this.dir}/cola.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(wieza);
		
		document.getElementById("productIcon8").classList.add("statek");
		document.getElementById("productIconOff8").classList.add("statekoff");
		document.getElementById("mutedProduct8").classList.add("statek");
		
		const statek = document.createElement("style");
		statek.innerHTML = `
		.statek {
			background: url('${this.dir}/slush.png') !important;
			background-position: 0px 0px !important;
		}
		.statekoff {
			background: url('${this.dir}/slush.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(statek);
		
		document.getElementById("productIcon9").classList.add("laboratorium");
		document.getElementById("productIconOff9").classList.add("laboratoriumoff");
		document.getElementById("mutedProduct9").classList.add("laboratorium");
		
		const laboratorium = document.createElement("style");
		laboratorium.innerHTML = `
		.laboratorium {
			background: url('${this.dir}/sandwich.png') !important;
			background-position: 0px 0px !important;
		}
		.laboratoriumoff {
			background: url('${this.dir}/sandwich.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(laboratorium);
		
		document.getElementById("productIcon10").classList.add("portal");
		document.getElementById("productIconOff10").classList.add("portaloff");
		document.getElementById("mutedProduct10").classList.add("portal");
		
		const portal = document.createElement("style");
		portal.innerHTML = `
		.portal {
			background: url('${this.dir}/chicken.png') !important;
			background-position: 0px 0px !important;
		}
		.portaloff {
			background: url('${this.dir}/chicken.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(portal);
		
		document.getElementById("productIcon11").classList.add("czas");
		document.getElementById("productIconOff11").classList.add("czasoff");
		document.getElementById("mutedProduct11").classList.add("czas");
		
		const czas = document.createElement("style");
		czas.innerHTML = `
		.czas {
			background: url('${this.dir}/kinder.png') !important;
			background-position: 0px 0px !important;
		}
		.czasoff {
			background: url('${this.dir}/kinder.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(czas);
		
		document.getElementById("productIcon12").classList.add("metal");
		document.getElementById("productIconOff12").classList.add("metaloff");
		document.getElementById("mutedProduct12").classList.add("metal");
		
		const metal = document.createElement("style");
		metal.innerHTML = `
		.metal {
			background: url('${this.dir}/pizza.png') !important;
			background-position: 0px 0px !important;
		}
		.metaloff {
			background: url('${this.dir}/pizza.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(metal);
		
		document.getElementById("productIcon13").classList.add("prisma");
		document.getElementById("productIconOff13").classList.add("prismaoff");
		document.getElementById("mutedProduct13").classList.add("prisma");
		
		const prisma = document.createElement("style");
		prisma.innerHTML = `
		.prisma {
			background: url('${this.dir}/popcorn.png') !important;
			background-position: 0px 0px !important;
		}
		.prismaoff {
			background: url('${this.dir}/popcorn.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(prisma);
		
		document.getElementById("productIcon14").classList.add("szanse");
		document.getElementById("productIconOff14").classList.add("szanseoff");
		document.getElementById("mutedProduct14").classList.add("szanse");
		
		const szanse = document.createElement("style");
		szanse.innerHTML = `
		.szanse {
			background: url('${this.dir}/jelly.png') !important;
			background-position: 0px 0px !important;
		}
		.szanseoff {
			background: url('${this.dir}/jelly.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(szanse);
		
		document.getElementById("productIcon15").classList.add("silnik");
		document.getElementById("productIconOff15").classList.add("silnikoff");
		document.getElementById("mutedProduct15").classList.add("silnik");
		
		const silnik = document.createElement("style");
		silnik.innerHTML = `
		.silnik {
			background: url('${this.dir}/hotdog.png') !important;
			background-position: 0px 0px !important;
		}
		.silnikoff {
			background: url('${this.dir}/hotdog.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(silnik);
		
		document.getElementById("productIcon16").classList.add("java");
		document.getElementById("productIconOff16").classList.add("javaoff");
		document.getElementById("mutedProduct16").classList.add("java");
		
		const java = document.createElement("style");
		java.innerHTML = `
		.java {
			background: url('${this.dir}/candystrip2.png') !important;
			background-position: 0px 0px !important;
		}
		.javaoff {
			background: url('${this.dir}/candystrip2.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(java);
		
		document.getElementById("productIcon17").classList.add("swiat");
		document.getElementById("productIconOff17").classList.add("swiatoff");
		document.getElementById("mutedProduct17").classList.add("swiat");
		
		const swiat = document.createElement("style");
		swiat.innerHTML = `
		.swiat {
			background: url('${this.dir}/donut.png') !important;
			background-position: 0px 0px !important;
		}
		.swiatoff {
			background: url('${this.dir}/donut.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(swiat);
		
		document.getElementById("productIcon18").classList.add("kortex");
		document.getElementById("productIconOff18").classList.add("kortexoff");
		document.getElementById("mutedProduct18").classList.add("kortex");
		
		const kortex = document.createElement("style");
		kortex.innerHTML = `
		.kortex {
			background: url('${this.dir}/chips.png') !important;
			background-position: 0px 0px !important;
		}
		.kortexoff {
			background: url('${this.dir}/chips.png') !important;
			background-position: -64px 0px !important;
		}
		`;

		document.body.appendChild(kortex);
	},
});
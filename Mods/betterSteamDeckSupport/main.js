if (betterSteamDeckSupport === undefined) var betterSteamDeckSupport = {};
Game.registerMod("betterSteamDeckSupport",{
	init:function(){
		betterSteamDeckSupport.version = "1.0";

		window.GetModPath = (modName) => {
			let mod = App.mods[modName];
			let pos = mod.dir.lastIndexOf('\\');
			if(pos == -1) return '../mods/' + (mod.local ? 'local' : 'workshop') + '/' + mod.path;
			else return '../mods/' + mod.dir.substring(pos + 1);
		};
		
		betterSteamDeckSupport.path = window.GetModPath('betterSteamDeckSupport');

		// styling. this needs to be thoroughly documented and cleaned up some day, but not today
		var style = document.createElement("style");
		style.innerText =`
		/* ========================================================== */
		/* font alternatives - Steam Deck doesn't serve the originals */
		/* ========================================================== */

		/* TAHOMA, ARIAL */
		@font-face {
			font-family:'BPG Arial';
			font-style:normal;
			font-weight:normal;
			src:url(`+betterSteamDeckSupport.path+`/BPGArial.ttf) format('truetype');
		}

		/* GEORGIA */
		@font-face {
			font-family: 'Georgia';
			font-style: normal;
			font-weight: 300;
			src:url(`+betterSteamDeckSupport.path+`/Georgia.ttf) format('truetype');
		}

		/* GEORGIA */
		@font-face {
			font-family: 'Georgia Bold';
			font-style: normal;
			font-weight: 900;
			src:url(`+betterSteamDeckSupport.path+`/GeorgiaBold.ttf) format('truetype');
		}

		/* COURIER */
		@font-face {
			font-family:'Courier Prime';
			font-style:normal;
			font-weight:normal;
			src:url(`+betterSteamDeckSupport.path+`/CourierPrime.ttf) format('truetype');
		}

		/* COMIC SANS MS */
		@font-face {
			font-family:'Comic Neue';
			font-style:normal;
			font-weight:normal;
			src:url(`+betterSteamDeckSupport.path+`/ComicNeue.ttf) format('truetype');
		}

		/* =============== */
		/* apply the fonts */
		/* =============== */

		/* tahoma, arial */
		body,#ascendTooltip,.tag {
			font-family:'BPG Arial';
		}

		/* georgia */
		.framed q,.framed q:before,.framed q:after {
			font-family:'Georgia';
		}

		/* georgia bold */
		#ascendNumber,#prompt h3,.prompt h3,.fancyText {
			font-family:'Georgia Bold';
		}

		/* comic sans ms */
		.close {
			font-family:'Comic Neue';
		}

		/* courier */
		.monospace {
			font-family:'Courier Prime'
		}

		/* ========================================================================= */
		/* font sizes any anything else i could cram with them; !important minefield */
		/* ========================================================================= */

		/* genius accounting */
		.costDetails {
			font-size:65% !important;
		}

		small {
			font-size:80% !important;
		}

		/* a hellscape of tooltips and buffs */
		#statsAchievs .listing span,#tooltipMilk div,#tooltipChallengeMode,#checkForUpdate,.crateTip,.tag,#tooltipChallengeMode,#promptContentModData > div:nth-of-type(2),#promptContentChangeLanguage > div:nth-of-type(2),#promptContentManageMods > div:nth-of-type(3),#promptContentManageMods > div:nth-of-type(5) > div:nth-of-type(1),#promptContentManageMods > div:nth-of-type(5) > div:nth-of-type(2),#promptContentManageMods > div:nth-of-type(5) > div:nth-of-type(2) textarea,#promptContentPublishMods > div:nth-of-type(2) > div:nth-of-type(1),#promptContentUpdateMods > div:nth-of-type(2),#promptContentUpdateMods > div:nth-of-type(3) div,#prompt .tightInput,#tooltipBuff,#tooltipRefill,#grimoireInfo,#grimoireBarText {
			font-size:14px !important;
		}

		/* legacy tooltip, note descs, option descriptions, quotes, building level + mute buttons */
		#ascendTooltip,.framed.note h5,.listing label,.framed q,.productButton {
			font-size:16px;
		}

		/* lots and lots of small-ish tooltips */
		#ascendPrestige,#ascendHCs,#storeBuyAllButton,.storeBulkMode,.storeBulkAmount,#tooltipMuteBuilding,#tooltipMutedBuilding,#tooltipLumps,#tooltipReincarnate,#tooltipNextChallengeMode,#tooltipAscendData1,#tooltipAscendData2,#tooltipStorePre,#tooltipStoreBulk,#ascendInfo div {
			font-size:16px !important;
		}

		/* body, textareas, inputs, listings, note titles, number of lumps */
		body,h4,textarea,input[type="text"],.listing,.note h3,#lumpsAmount {
			font-size:18px;
		}

		/* button text, small update titles, "muted" text */
		.fancyText,.langSelectButton,.subsection.small div.title,.smallFancyButton,.option.neato,#buildingsMaster,a.option {
			font-size:20px !important;
		}

		/* menu button "buttons" */
		.subButton {
			font-size:22px;
		}

		/* h3s, achievement note title */
		#prompt h3,.prompt h3,h5 div.title {
			font-size:24px !important;
		}

		/* menu buttons */
		.panelButton {
			font-size:26px;
		}

		/* big update titles, close all notes X button */
		.subsection div.title,.framed.close.sidenote {
			font-size:30px;
		}

		/* building names */
		.productName {
			font-size:32px;
			margin-top:-4px;
		}

		/* ==================== */
		/* general misc styling */
		/* ==================== */

		/* make everything crispy */
		body {
			image-rendering:pixelated;
		}

		/* smaller cookie section */
		#sectionLeft {
			width:25%;
		}

		.separatorLeft {
			left:25%;
		}

		#sectionMiddle {
			left:25%;
		}

		/* fat scrollbars */
		::-webkit-scrollbar {
			width:25px;
		}

		.separatorRight {
			right:325px;
		}

		#sectionMiddle {
			right:326px;
		}

		/* bigger special popups (santa, dragon) */
		#specialPopup {
			width:500px;
			margin-left:-64px;
		}

		/* bigger muted building icons */
		.tinyProductIcon {
			transform:scale(1);
			margin:0px !important;
		}

		#buildingsMute {
			padding:4px 16px 0px 100px;
		}

		.storeBulkMode {
			padding:3px 0px;
		}

		/* olden days */
		#oldenDays div {
			transform:scale(1.5) !important;
			margin-right:12px;
			margin-bottom:12px;
		}

		/* fatter dev tools */
		#devConsole:hover {
			width:500px;
		}

		/* h3 feathers */
		#prompt h3:before,.prompt h3:before,#prompt h3:after,.prompt h3:after {
			top:0px;
		}

		/* crate icon extra margin */
		#tooltipCrate .icon:not(.tinyIcon),#tooltipBuilding .icon:not(.tinyIcon) {
			margin-top:-4px !important;
			margin-left:-4px !important;
			margin:8px;
		}

		/* tiny icons - margin isn't 100% accurate but prevents a few issues */
		.tinyIcon {
			transform:scale(1) !important;
			margin:-4px !important;
		}

		/* building/upgrade/achievement tags */
		.tag {
			padding:1px 4px;
		}

		/* fix buffs looking gross */
		#buffs {
			transform:scale(1) !important;
			top:32px !important;
		}

		/* ================= */
		/* menu area styling */
		/* ================= */

		/* bigger menu area */
		#comments {
			height:112px;
			background-size:100% 160px;
		}

		#centerArea {
			top:160px;
		}

		/* smaller news ticker */
		#commentsText {
			left:152px;
			right:152px;
		}

		/* bigger menu buttons */
		.panelButton {
			width:150px;
			height:72px;
			background-size:300px 288px;
		}

		#prefsButton {
			padding-top:20px;
			background-position:0px 0px;
		}

		#statsButton {
			padding-top:22px;
			background-position:0px -72px;
		}

		#statsButton:hover,#statsButton.selected {
			background-position:0px -216px;
		}

		#logButton {
			padding-top:22px;
			background-position:-150px 0px;
		}

		#logButton:hover,#logButton.selected {
			background-position:-150px -144px;
		}

		/* update notifier */
		#checkForUpdate {
			left:5px;
		}

		/* pointy lad */
		#logButton.hasUpdate:before {
			top:17px;
		}

		#legacyButton {
			padding-top:20px;
			background-position:-150px -72px;
		}

		/* wider ascension meter */
		#ascendMeterContainer {
			width:150px;
		}

		#ascendNumber {
			top:46px;
			right:165px
		}

		/* ============ */
		/* note styling */
		/* ============ */

		/* bigger notes */
		#notes {
			margin-left:-160px;
		}

		.note {
			width:320px;
		}

		/* bigger note X button */
		.framed .close {
			transform:scale(2);
			top:0px;
			right:8px;
		}

		/* note extra padding for bigger X button */
		.framed.note div.text h3 {
			padding-right:8px;
		}

		/* close all notes X button */
		.framed.close.sidenote {
			padding:0px 8px 4px 8px;
			right:-8px;
		}

		/* note achievement name extra padding */
		.framed.note h5 div.title {
			margin-top:0px !important;
			margin-bottom:4px;
		}

		/* bigger menu X button */
		.close.menuClose {
			margin-right:10px;
			margin-top:10px;
			transform:scale(1.5);
		}

		/* ============== */
		/* option styling */
		/* ============== */

		/* change language option padding */
		#changeLanguageOption {
			margin-top:4px;
			margin-left:2px;
		}

		/* make most option buttons bigger */
		a.option.smallFancyButton {
			width:180px;
		}
		
		.option {
			padding:6px 10px !important;
		}

		/* option button padding */
		.subsection a.option,.sliderBox {
			margin:4px 4px 4px 0px;
		}

		/* option description line height increase */
		label {
			line-height:24px;
			padding:2px !important;
		}

		/* bigger slider button with extra padding */
		.sliderBox {
			width:250px;
			padding:8px;
		}

		/* fat slider buttons */
		.sliderBox>input {
			display:block;
			padding-top:7px;
			padding-bottom:5px;
		}

		input[type=range]::-webkit-slider-runnable-track
		{
			height:24px;
		}

		input[type=range]::-webkit-slider-thumb
		{
			height:24px;
			width:24px;
		}

		/* jukebox music scrub. looks bad because of the automatic width setting */
		#jukeboxMusicScrubElapsed {
			left:6px !important;
			top:3px !important;
			height:12px !important;
		}

		/* jukebox music scrub padding */
		#jukeboxMusicPlay {
			margin-bottom:6px;
		}

		#jukeboxMusicAuto {
			margin-top:10px;
		}

		/* little preference button light */
		.prefButton:after {
			width:5px;
			height:5px;
			right:3px;
			top:50%;
			margin-top:-2px;
		}

		/* =============== */
		/* tooltip styling */
		/* =============== */

		/* ok these arent tooltips, this is the "buy/sell" menu */
		#storeBulk {
			height:40px;
		}

		.storeBulkAmount {
			padding:12px 0px;
		}

		/* upgrade, achievement, herald, building tooltips */
		#tooltipCrate,#tooltipHeralds,#tooltipBuilding {
			width:400px !important;
		}

		/* building level up tooltip */
		#tooltipLevel {
			width:320px !important;
		}

		/* building mute/unmute tooltips */
		#tooltipMuteBuilding,#tooltipMutedBuilding {
			width:220px !important;
			line-height:22px;
		}

		/* legacy button tooltip */
		#ascendTooltip {
			width:250px;
		}

		/* sugar lump tooltip */
		#tooltipLumps {
			width:450px !important;
			line-height:22px;
		}

		/* not a tooltip, but it's for the number of lumps */
		#lumpsAmount {
			top:3px;
		}

		/* reincarnate, challenge mode button tooltips */
		#tooltipReincarnate,#tooltipNextChallengeMode {
			min-width:300px !important;
			line-height:22px;
		}

		/* ascension data, store tooltips */
		#tooltipAscendData1,#tooltipAscendData2,#tooltipStorePre,#tooltipStoreBulk {
			min-width:400px !important;
			line-height:22px;
		}

		/* ascend info (ugly, but necessary for readability) */
		#ascendInfo div {
			margin-top:-4px !important;
		}

		/* ascend data */
		#ascendData1, #ascendData2 {
			width:270px;
		}

		/* challenge mode button pushed off to the side */
		#ascendModeButton {
			right:5px !important;
			bottom:27px !important;
		}

		/* ============== */
		/* prompt styling */
		/* ============== */

		#prompt {
			width: 310px;
			left: -160px;
		}

		#prompt.widePrompt {
			width: 620px;
			left: -310px;
		}

		#promptContentPickPermaUpgrade > div:nth-of-type(3) {
			width:325px !important;
		}

		#promptContentPickPermaUpgrade > div:nth-of-type(4) {
			width:264px !important;
		}

		#promptContentUpdateMods > div:nth-of-type(3) textarea {
			height:80px !important;
		}

		/* ================ */
		/* minigame styling */
		/* ================ */

		#grimoireBarText {
			margin-top:-1px !important;
		}

		#grimoireInfo {
			margin-bottom:8px;
		}
		`;

		document.head.appendChild(style);
	
		// start in fullscreen so it utilizes the whole screen space
		Game.prefs.fullscreen=1;
		App.setFullscreen(1);
		
		// just in case
		Game.tickerTooNarrow=1000;
		
		Game.Notify("Better Steam Deck Support loaded!", "Version "+betterSteamDeckSupport.version, [0, 0, betterSteamDeckSupport.path+"/icons.png"], 2, 1);
	}
});
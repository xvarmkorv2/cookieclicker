var BetterCCSEVersionNumber = {
    init: function () {
        l('versionNumber').innerHTML = 'v. ' + Game.version + (!App ? ('<div id="httpsSwitch" style="cursor:pointer;display:inline-block;background:url(img/' + (Game.https ? 'lockOn' : 'lockOff') + '.png);width:16px;height:16px;position:relative;top:4px;left:0px;margin:0px -2px;"></div>') : '') + (Game.beta ? ' <span style="color:#ff0;">beta</span>' : ''); var versionNumber = l('versionNumber');
        var versionDiv = document.createElement('p');
        versionDiv.innerHTML = 'CCSE v. ' + CCSE.version;
        var textDiv = document.createElement('span');
        textDiv.innerHTML = 'Game ';
        versionNumber.insertBefore(textDiv, versionNumber.firstChild);
        versionNumber.insertBefore(versionDiv, versionNumber.firstChild); Game.attachTooltip(l('httpsSwitch'), '<div style="padding:8px;width:350px;text-align:center;font-size:11px;">' + loc("You are currently playing Cookie Clicker on the <b>%1</b> protocol.<br>The <b>%2</b> version uses a different save slot than this one.<br>Click this lock to reload the page and switch to the <b>%2</b> version!", [(Game.https ? 'HTTPS' : 'HTTP'), (Game.https ? 'HTTP' : 'HTTPS')]) + '</div>', 'this');
    }
}
BetterCCSEVersionNumber.launch = () => { Game.registerMod("betterCCSEVersionNumber", BetterCCSEVersionNumber); }
if (CCSE && CCSE.isLoaded) {
    BetterCCSEVersionNumber.launch()
}
else {
    if (!CCSE) var CCSE = {};
    if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
    CCSE.postLoadHooks.push(BetterCCSEVersionNumber.launch);
}
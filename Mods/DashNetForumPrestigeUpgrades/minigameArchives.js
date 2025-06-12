//The archives serve no purpose other than to browse around them.
var M = {};
M.parent = Game.Objects['Architect'];
M.parent.minigame = M;
M.launch = function () {
    var M = this;
    M.name = M.parent.minigameName;
    M.init = function (div) {
        M.div = div;
        M.reset();
    }
    M.onResize = function () {
        M.div.innerHTML = '';
        var frame = document.createElement('iframe');
		frame.src = 'https://web.archive.org/web/20160304081800/http://forum.dashnet.org/discussion/7111/prestige-upgrade-suggestions'
        frame.style.width = '100%';
        frame.style.height = window.innerHeight * 0.6 + 'px';
        //frame.sandbox = 'allow-same-origin allow-scripts allow-popups';
        M.div.appendChild(frame);
    }
    M.onLevel = function (level) { }
    M.onRuinTheFun = function () { }
    M.save = function () { }
    M.load = function (str) { }
    M.reset = function (hard) {
        setTimeout(function (M) { return function () { M.onResize(); } }(M), 10);
    }
    M.logic = function () { }
    M.draw = function () { }
    M.init(document.getElementById('rowSpecial' + M.parent.id));
}
var M = 0;
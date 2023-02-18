Game.registerMod("more monospace numbers", {
    init: function () {
        let MOD = this;

        drawMonospace = function () {
            if (!Game.prefs.monospace) return;
            const cpsContainer = l('cookiesPerSecond');
            const cpmContainer = l('cookiesPerMinute');

            MOD.styleNode(cpsContainer);
            MOD.styleNode(cpmContainer);
        };
        Game.registerHook('draw', drawMonospace);
    },
    save: function () {
    },
    load: function (str) {
    },
    styleNode: function (node) {
        if (!node) return;
        node.classList.add('monospace');
        node.style.fontSize = '60%';
    }
});
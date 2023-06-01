Game.registerMod("monospace heavenly chips", {
    init: function () {
        let MOD = this;

        drawMonospace = function () {	
			const str = l('ascendNumber').innerHTML
			l('ascendNumber').innerHTML = '<span class="monospace" style>'+str+'</span>';
        };
        Game.registerHook('draw', drawMonospace);
    }
});
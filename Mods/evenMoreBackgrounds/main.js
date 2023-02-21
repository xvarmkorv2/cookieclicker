Game.registerMod("evenMoreBackgrounds", {
    init: function () {
        let JPG = name => `${this.dir}/img/${name}.jpg`;

        let iconPath = `${this.dir}/img/icons.png`;
        let ICON = (x, y) => [x, y, iconPath];

        var runAfterCCSEload = function () {
            CCSE.NewBackgroundSelection('White Noise', ICON(0, 0), JPG('bgWhiteNoise'));
            CCSE.NewBackgroundSelection('Black Noise', ICON(1, 0), JPG('bgBlackNoise'));
            CCSE.NewBackgroundSelection('Polished Silver', ICON(10, 0), JPG('bgPolishedSilver'));
            CCSE.NewBackgroundSelection('Polished Gold', ICON(9, 0), JPG('bgPolishedGold'));
            CCSE.NewBackgroundSelection('Coins', ICON(2, 0), JPG('bgCoins'));
            CCSE.NewBackgroundSelection('Cookies', ICON(3, 0), JPG('bgCookies'));
            CCSE.NewBackgroundSelection('Planks', ICON(4, 0), JPG('bgPlanks'));
            CCSE.NewBackgroundSelection('Neverending Legacy', ICON(5, 0), JPG('bgNeverendingLegacy'));
            CCSE.NewBackgroundSelection('Cloudy', ICON(6, 0), JPG('bgCloudy'));
            CCSE.NewBackgroundSelection('Icy', ICON(7, 0), JPG('bgIcy'));
            CCSE.NewBackgroundSelection('Space', ICON(8, 0), JPG('bgSpace'));

            let updateIcon = () => {
                // let curIcon = Game.Upgrades['Background selector'].icon;
                Game.Upgrades['Background selector'].icon = ICON(Game.Has("Distinguished wallpaper assortment"), 1);
                // if (Game.Upgrades['Background selector'].icon !== curIcon) Game.upgradesToRebuild = 1;
            };

            Game.registerHook('check', updateIcon);
            updateIcon();
            Game.upgradesToRebuild = 1;
        }

        if (CCSE.isLoaded) {
            runAfterCCSEload();
        }
        else {
            if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
            CCSE.postLoadHooks.push(runAfterCCSEload);
        }
    }
});
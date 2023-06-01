function e(e,r){const t=null===r[0];let o=new RegExp("");null!==r[0]&&(o="string"==typeof r[0]?new RegExp(r[0].replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"):r[0],o.test(e)||console.warn("Nothing to inject."));const n=/(\)[^{]*{)/,c=/(}?)$/;switch(r[2]){case"before":e=t?e.replace(n,`$1${r[1]}`):e.replace(o,`${r[1]}${r[0]}`);break;case"replace":e=t?r[1]:e.replace(o,r[1]);break;case"after":e=t?e.replace(c,`${r[1]}$1`):e.replace(o,`${r[0]}${r[1]}`);break;default:throw new Error('where Parameter must be "before", "replace" or "after"')}return e}function injectCodes(r,t,o={}){let n=r.toString();for(const r of t)n=e(n,r);const c=Function(...Object.keys(o),`return (${n})`)(...Object.values(o));return c.prototype=r.prototype,c}

Game.registerMod('MeguminclickerByGaiden', {
    init: function () {
        Game.Notify(
            `Arch Wizard of the Crimson Magic Clan`,
            `Waga na wa Megumin! Akuwizado wo nariwai toshi, saikyou no kougeki mahou "bakuretsu mahou" wo ayatsuru mono!`,
            [16, 5],
        );

	Game.Loader.Replace('brokenCookieHalo.png',this.dir + '/brokenMegumin.png');
	Game.Loader.Replace('wrinkler.png', this.dir + '/chomusuke.png');
	Game.Loader.Replace('winterWrinkler.png', this.dir + '/Explosion.png');
	Game.Loader.Replace('shinyWrinkler.png', this.dir + '/shinyMegumin.png');
	Sounds["snd/chime.mp3"] = new Audio(this.dir + '/snd/ExpCorto.mp3')
        Game.Loader.Replace('perfectCookie.png', this.dir + '/BigMeg.png');
        Game.Loader.Replace('goldCookie.png', this.dir + '/HapMeg.png');
        Game.Loader.Replace('wrathCookie.png', this.dir + '/MadMeg.png');

        Game.shimmerTypes.golden.initFunc = injectCodes(
            Game.shimmerTypes.golden.initFunc,
            [
                [
                    'img/goldCookie.png',
                    `"${this.dir}/HapMeg.png"`,
                    'replace',
                ],
                ['img/wrathCookie.png', `"${this.dir}/MadMeg.png"`, 'replace'],
            ]
        );
    },
});
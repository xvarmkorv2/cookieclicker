function e(e,r){const t=null===r[0];let o=new RegExp("");null!==r[0]&&(o="string"==typeof r[0]?new RegExp(r[0].replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"):r[0],o.test(e)||console.warn("Nothing to inject."));const n=/(\)[^{]*{)/,c=/(}?)$/;switch(r[2]){case"before":e=t?e.replace(n,`$1${r[1]}`):e.replace(o,`${r[1]}${r[0]}`);break;case"replace":e=t?r[1]:e.replace(o,r[1]);break;case"after":e=t?e.replace(c,`${r[1]}$1`):e.replace(o,`${r[0]}${r[1]}`);break;default:throw new Error('where Parameter must be "before", "replace" or "after"')}return e}function injectCodes(r,t,o={}){let n=r.toString();for(const r of t)n=e(n,r);const c=Function(...Object.keys(o),`return (${n})`)(...Object.values(o));return c.prototype=r.prototype,c}

Game.registerMod("cws-oldWrathCookies", {
	init: function() {

		// this is, in theory, very simple. unfortunately Game.Loader.Replace came from hell
		// by default, it DOESN'T WORK ON CLICKABLES??? you need instead to hijack this sucker with a LITERAL FUNCTION if you want to do something that's not just. Eval Hell
		// this is probably why this game could use an innate texture pack sample mod. or at least letting you go ahead and like... edit the golden cookies by default
		// also with special thanks to Lookas123#8194 from the dashnet discord (still feels odd to not have the forums ;_;)
		// and also the fucking morbius mod which we borrowed heavily from in the end. truly morbid
		
		// just letting you know!
		Game.Notify(`Wraths Swirled!`, `Talk about old school.`, [15,5],10,1);
		
		// initializing changing the wrath cookie! ...also
		// because of how the shimmerTypes works, you have to basically re-tell the game how standard golden cookies work
		// as otherwise, Every Other Golden Cookie Somehow Breaks. like even seasonal versions apparently
		// at least, we THINK. if someone can figure out how to do this without re-inventing the wheel PLEASE fucking tell us
		// we WILL update this mod & credit you for fixing the code!
		Game.Loader.Replace('goldCookie.png','goldCookie.png');
		Game.Loader.Replace('wrathCookie.png',this.dir+'/oldWrath.png');
		
		// using code Shamelessly stolen from the morbius mod
		// thank you morbius
		Game.shimmerTypes.golden.initFunc = injectCodes(
            Game.shimmerTypes.golden.initFunc,
            [
                [
                    'img/goldCookie.png',
                    `"img/goldCookie.png"`,
                    'replace',
                ],
                ['img/wrathCookie.png', `"${this.dir}/oldWrath.png"`, 'replace'],
            ]
        );
		}
});
Game.registerMod("catboyclicker",{
	init:function() {
        this.clickSound = this.dir + '/nyaa.mp3';
        this.cookiePic = this.dir + '/felixmyboy.png';
        
        function setClickSound(s, v) {
            // Recreate Cookie element
            var bc = document.getElementById('bigCookie');
            var bcClone = bc.cloneNode(true);
            bc.parentNode.replaceChild(bcClone, bc);
            
            // Reset cookie click events, removing the extra click sound from 'mousedown' event
            AddEvent(bigCookie,'click',Game.ClickCookie);
            AddEvent(bigCookie,'mousedown',function(event){Game.BigCookieState=1;if (event) event.preventDefault();});
            AddEvent(bigCookie,'mouseup',function(event){Game.BigCookieState=2;if (event) event.preventDefault();});
            AddEvent(bigCookie,'mouseout',function(event){Game.BigCookieState=0;});
            AddEvent(bigCookie,'mouseover',function(event){Game.BigCookieState=2;});
            
            // Set click sound
            Game.playCookieClickSound = function() {
                PlaySound(s, v);
            };
        }
        
        Game.Loader.Replace('perfectCookie.png',this.cookiePic);
        setClickSound(this.clickSound, 0.5);
    }
});

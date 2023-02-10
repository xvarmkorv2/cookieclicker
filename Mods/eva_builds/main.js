Game.registerMod("eva builds", {
  init: function () {
    
    Game.Objects.Grandma.displayName = "Katsuragi";

    document.getElementById("productIcon1").classList.add("Katsuragi");
    document.getElementById("productIconOff1").classList.add("1Katsuragi");

    const style = document.createElement("style");
    style.innerHTML = `
    .Katsuragi { 
      background: url('${this.dir}/1katsuragi.png') !important;
      background-position: 0px 0px !important;
    }
    .Katsuragi off {
      background-position: -64px 0px !important;
    }
    `;
    document.body.appendChild(style);

    
    
    
  },
  save: function () {},
  load: function (str) {},
});

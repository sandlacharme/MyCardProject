var Controller = function() {
    var forward = true;
    var controller = {
        self: null,
        initialize: function() {
            self = this;

            $(".top_card").on("click", self.clickAnimateFlipTopCard);
            $(".card").on("click", self.clickAnimateFlipCard);
        },

        clickAnimateFlipTopCard: function () {
            var numCard = Math.floor((Math.random() * 16) + 1);
          if(numCard == 1 ||numCard == 3 ||numCard == 4||numCard == 5 ||numCard == 10 
             ||numCard == 11 ||numCard == 12 ||numCard == 15 ||numCard == 16) {      
            $(".top_card")
                .transition({y:-50, duration: 200})
                .transition({y:0, duration: 200});
            $(".card").html("<img class='front' src='img/cards/Verset" + numCard + "_recto_320w.png'>"
                + "<img class='back' src='img/cards/Verset" + numCard + "_verso_320w.png'>");
            $(".card")
                 .transition({scale:1, duration: 200})
                 // .transition({perspective:'1000px',  duration: 20})
        }},

        clickAnimateFlipCard: function () {
            if(forward) {
                $(".card").transition({perspective:'1000px', rotateY:'180deg', duration: 200});
                forward = false;
            }
            else {
                $(".card")
                    .transition({perspective:'1000px', rotateY:'0deg', duration: 20})
                    .transition({y:0, duration: 200})
                    .transition({scale:0, duration: 200});
                $(".top_card")
                    .transition({y:-50, duration: 300})
                    .transition({y:0, duration: 200});
                forward = true;
            }
        },
    }
    controller.initialize();
    return controller;
}
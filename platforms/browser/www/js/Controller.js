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
            var numCard = Math.floor((Math.random() * 2) + 1);
            $(".top_card")
                .transition({y:-50, duration: 200})
                .transition({y:0, duration: 200});
            $(".card").html("<img class='front' src='img/cards/Verset" + numCard + "_recto_400x584.png'>"
                + "<img class='back' src='img/cards/Verset_" + numCard + "_verso.png'>");
            $(".card")
                 .transition({scale:0.6, duration: 200 , zIndex: 1})
                 .transition({perspective : '700px', y:0, duration: 200});
        },

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
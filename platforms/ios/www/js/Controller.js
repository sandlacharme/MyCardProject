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
            console.log('Num card'+numCard);
            $(".top_card")
                .transition({y:0, duration: 200});
            $(".card").html("<img class='front' src='img/cards/Verset" + numCard + "_recto.png'>"
                + "<img class='back' src='img/cards/Verset" + numCard + "_verso.png'>");
            $(".card")
                .transition({scale:1, duration: 200})
                .transition({y:0, x:0, duration: 200});
        },

        clickAnimateFlipCard: function () {
            if(forward) {
                $(".card").transition({perspective:'800', rotateY:'180deg', duration: 200});
                forward = false;
            }
            else {
                $(".card")
                    .transition({y:0, duration: 200})
                    .transition({scale:1, duration: 200});
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
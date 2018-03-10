var pause = false;
var forward = true;
var numCard =-1;
var carteTrouvee = false;
//Cordova events------------------------------------------------
function initialize() {
    document.addEventListener('deviceready', onDeviceReady, false);
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
}

function onDeviceReady() {
    $("#top_card").on("click", clickAnimateFlipTopCard);
    $(".card").on("click", clickAnimateFlipCard);
}

function onPause() {
      $(".card .front .small").removeAttr("srcset");
      $(".card .front .medium").removeAttr("srcset");
      $(".card .back .small").removeAttr("srcset");
      $(".card .back .medium").removeAttr("srcset");
     //timeToWait = Math.floor((Math.random() * 20) + 1);
     getVersetFromGuruGita();
  if(numCard == 1 || numCard == 3 ||numCard == 4||numCard == 5 ||numCard == 10 
             ||numCard == 11 ||numCard == 12 ||numCard == 15 ||numCard == 16)
  {
     cordova.plugins.notification.local.schedule({
        title: 'Nouveau verset',
        text: 'Verset '+ numCard,
       // trigger: { in: timeToWait, unit: 'second' },
       every: 'day',
        foreground: true
    });
  cordova.plugins.notification.local.on("click", function (notification) {
    clickAnimateFlipTopCard();
});
  }
  
}

function onResume() {
    pause = false;
    console.log("Resume");
}

function getVersetFromGuruGita(){
  numCard = Math.floor((Math.random() * 16) + 1);
  
}

//My events------------------------------------------------
function clickAnimateFlipTopCard() {
  if(numCard == -1 || carteTrouvee == false) {
      getVersetFromGuruGita(); 
  }
   console.log("NUMCARD : " + numCard);
    if(numCard == 1 || numCard == 3 ||numCard == 4||numCard == 5 ||numCard == 10 
             ||numCard == 11 ||numCard == 12 ||numCard == 15 ||numCard == 16)
    { 
    //Changing front card src
       //Changing front card src
      carteTrouvee = true;
    $(".card .front .small").attr("srcset", "img/cards/Verset" + numCard + "_recto_320w.png");
    $(".card .front .medium").attr("srcset", "img/cards/Verset" + numCard + "_recto_640w.png");
   // $(".card .front img").attr("src", "img/cards/Verset" + numCard + "_card_front.png");

    //Changing back card src
    $(".card .back .small").attr("srcset", "img/cards/Verset" + numCard + "_verso_320w.png");
    $(".card .back .medium").attr("srcset", "img/cards/Verset" + numCard + "_verso_640w.png");
   // $(".card .back img").attr("src", "img/cards/" + numCard + "_card_back.png");
    $(".card")
        .transition({scale:1, duration: 200});
       console.log("{scale:1, duration: 200} .+Card + value forward" + forward);
     numCard =-1;
    }else {
      carteTrouvee = false;
    }
    numCard =-1;
}

function clickAnimateFlipCard() {
   if(forward) {
       $(".card").transition({rotateY:'180deg', duration: 20});
     console.log("forward =>true ,{rotateY:'180deg', duration: 200 ");
       forward = false;
   }
   else {
       $(".card")
           .transition({scale:0, duration: 200})
           .transition({rotateY:'0deg', duration: 200});
        console.log("forward -->false, {scale:0, duration: 200} et {rotateY:'0deg', duration: 200});");
       forward = true;
     //changing attribute because of cache --> fix bug 
      $(".card .front .small").removeAttr("srcset");
      $(".card .front .medium").removeAttr("srcset");
        
   }
}

initialize();
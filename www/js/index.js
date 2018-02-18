specialcard = $(".card.g")
specialcard.hide()

//this.classList.toggle('flip');

function toggle() {
  if ($("#flipcard").hasClass("flip")) {
    hide()
  } else {
    specialcard.show();
    document.querySelector("#flipcard").classList.toggle("flip");
  }
}

function hide(){
  $("#flipcard").addClass("hide").removeClass("flip");
    setTimeout(function() {
      $("#flipcard").removeClass("hide");
      specialcard.hide();
    }, 900)
}
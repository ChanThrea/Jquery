// console.log("Bonjour");
$(function () {
  // Ici mon code jQuery

  //   --------------------- EVENEMENT MOUSEOVER ------------------

  $(".zone1").on("mouseover", function () {
    $(this).css("background", "Indianred");
    // $(this) === $(".zone1")
    $("#info").text("je suis dans la zone 1");
  });

  //   --------------------- EVENEMENT MOUSEMOUSE ------------------

  $(".zone2").on("mousemove", function (event) {
    $(this).text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    $("#info").text("je suis dans la zone 2");
  });

  //   --------------------- EVENEMENT MOUSEOUT ------------------

  $(".zone3").on("mousemove", function () {
    $(this).css("background", "indianred");
    $("#info").text("je suis sortie de la zone 3");
  });

  //   --------------------- EVENEMENT MOUSEENTER et MOUSELEAVE ------------------

  $(".zone4").on("mouseenter", function () {
    $(this).css("background", "indianred");
    $("#info").text("je suis entré dans la zone 4");
  });

  $(".zone4").on("mouseleave", function () {
    $(this).css("background", "khaki");
    $("#info").text("je suis sortie de la zone 4");
  });
});

//   --------------------- EVENEMENT MOUSEUP et MOUSEDOWN ------------------

$(".zone5").on("mouseup", function () {
  $(this).css("background", "indianred");
  $("#info").text("je suis entré dans la zone 5");
});

$(".zone6").on("mousedown", function () {
  $(this).css("background", "khaki");
  $("#info").text("je suis sortie de la zone 6");
});

$(".zone6").on("mouseup", function () {
  //au relâchement du bouton de souris
  $(this).css("background", "red");
  $("#info").text("je suis sortie de la zone 6");
});

//   --------------------- EVENEMENT CLICK ------------------

$(".zone7").on("click", function () {
  //au relâchement du bouton de souris
  $(this).css("background", "indianred");
  $("#info").text("je suis dans la zone 7");
});

//   --------------------- EVENEMENT DBLCLICK ------------------

$(".zone8").on("dblclick", function () {
  //au relâchement du bouton de souris
  $(this).css("background", "indianred");
  $("#info").text("je suis dans la zone 8");
});

//   --------------------- EVENEMENT CLICK DROIT ------------------

$(".zone9").contextmenu(function () {
  $(this).css("background", "indianred");
  $("#info").text("je suis dans la zone 9");
});

//   --------------------- EVENEMENT BLUR ------------------
//lorsque nous allons cliquer ailleurs après avoir cliquer sur l'élément
$(".zone10").on("blur", function () {
  $(this).css("background", "indianred");
  $("#info").text("je suis dans la zone 10");
});

//   --------------------- EVENEMENT CHANGE ------------------
//lorsque nous allons changer l'option d'un élément select
$(".zone11").on("change", function () {
  $(this).css("background", "indianred");
  $("#info").text("je suis dans la zone 11");
});

//------------------------------ EVENEMENT KEYDOWN (presser une touche)

$(".zone12").on("keydown", function () {
  $(this).css("background", "IndianRed");
  $("#info").text("je suis dans la zone 12");
});

//-------------------------------EVENEMENT KEYUP (relacher une touche)

$(".zone12").on("keyup", function () {
  $(this).css("background", "HotPink");
  $("#info").text("je suis dans la zone 12");
});

//-------------------------------EVENEMENT AU SCROLL
$(window).on("scroll", function () {
  $("#info").css("background", "lightgreen");
  $("#info").text("je scroll");
});

$(".liste").on("click", function () {
  $("h1").css("text-align", "center");
  $("h1").css("font-size", "80px");
  $("h1").css("color", "green");
  $("h1").css({
    textAlign: "center",
    fontSize: "40px",
    color: "white",
    display: "flex",
    fontFamily: "Helvetica",
  });
});

// liste
$("li").parent().css({
  textAlign: "center",
  fontSize: "20px",
  color: "white",
  display: "flex",
  fontFamily: "Helvetica",
  marginLeft: "350px",
}); //on selectionne le parent directe de nos li
$("li").parents("div").css("justifyContent", "spaceBetween");

// texte
$(".texte").on("click", function () {
  $(this).css("fontFamily", "Helvetica");
});

// header
$(".header").on("click", function () {
  $(this).css("background", "grey");
});

// image
//$("img[title='pc']").on("click", function () {
// $(this).css("fontSize", "30px");
// });

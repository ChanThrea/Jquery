// console.log("jquery est ici");
// $(document).ready(function () {}
// une autre façon d'écrire la fonction d'attente de chargement de la page
$(function () {
  // ------------------------------ SELECTION BALISE -------------------------

  // ici tout mon code jquery
  // $ permet d'attraper un élément
  let maBaliseSpan = $("span"); //je selectionne l'élément span
  console.log(maBaliseSpan);
  $(maBaliseSpan).css("color", "purple"); //changement de la propriètè css
  maBaliseSpan.css("background", "lightBlue"); //changement de la propriètè css

  // ------------------------------ SELECTION ID -------------------------

  let monID = $("#masection"); //je séléctionne l'élément #masection
  console.log(monID);
  $(monID).css("color", "red"); //changement de la propriètè css

  // ------------------------------ SELECTION CLASSE ---------------------

  let maClasse = $(".voiture"); //je selectionne les éléments .voiture
  console.log(maClasse);
  $(maClasse).css("color", "blue");
  $(maClasse).first().css("color", "green"); //selectionne le premier élément .voiture
  $(maClasse).last().css("color", "lightblue"); //selectionne le dernier élément .voiture
  $(maClasse).eq(2).css("color", "purple"); //selectionne le troisième index 2 dans la console

  // -------------------------------- SELECTION MULTIPLE -----------------------

  let mesElements = $("h1, article, aside"); //je selectionne les éléments h1 article aside
  console.log(mesElements);
  $(mesElements).css("color", "orange");

  //--------------------------------- SELECTION DES PARENTS OU ANCETRE ----------

  $("li").parent().css("border", "2px solid red"); //on selctionne le parent directe de nos li
  $("li").parents("div").css("border", "2px dashed red"); //on selectionne les ancêtre div du li

  //---------------------------------- SELECTION DES ENFANTS OU DESCENDANT ---------------

  $(".conteneur").children().css("font-weight", "700"); //on selectionne tous les enfants du conteneur
  $(".conteneur").children("#enfants").css("color", "red");
  $(".conteneur").find(".find").css("border", "2px dashed purple");

  //---------------------------------- SELECTION DES ELEMENTS FRERE -----------------------

  $("li:first-child").siblings().css("text-align", "right");

  // -------- RESUME DES PRINCIPAUX SELECTEURS
  /*
            selection de balise : $('span')
            selection d'un #id : $('#id')
            selection d'une classe .class : $('.classe')
            selection d'un élément par lui-même : $(this)
            selection d'un élément par sa balise et son type : $('input:text')
            selection d'un élément par son type (tous les types radio) : $(':radio')
            selection d'un élément par son attribut : $('img[alt]')
            selection d'un élément par son attribut (tous les attributs) : $('[alt]')
            selection d'un élément par le nom de l’attribut ET sa valeur : $("img[title='paris']")
            sélectionner plusieurs sélecteurs en même temps : $("h1, p, #id")
        */
});

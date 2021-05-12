$(function () {
  var szovegbolObjektum = JSON.parse(szovegJSON);

});

var szovegbolObjektum;

var szovegJSON = '[{"Fajta":"Kávé","Nev":"Őrölt kávé","Ar":900,"Mennyiseg":"500 g"},{"Fajta":"Kopi Luwak","Nev": "frissen pörkölt single origin arabica kávé különlegesség Jáva szigetéről", "Ar": 5000, "Mennyiseg": "500 g"}]';

$("article").append("<table>");
$("article table").append("");

function kiir() {
  for (var i = 0; i < szovegbolObjektum.length; i++) {
    $("article table").append("<tr>");
  }
  for (var item in szovegbolObjektum[i]) {
    
  }
}
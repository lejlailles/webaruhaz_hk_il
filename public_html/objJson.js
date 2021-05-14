var szovegJSON = '[{"Fajta":"Kávé","Nev":"Őrölt kávé","Ar":"900","Mennyiseg":"500 g"},{"Fajta":"Kopi Luwak","Nev": "Frissen pörkölt single origin arabica kávé különlegesség Jáva szigetéről", "Ar": "5000", "Mennyiseg": "500 g"}]';
var szovegbolObjektum = JSON.parse(szovegJSON);

$(function () {
  kiir();
  torolKiir();
  $("#OK").click(adatokElment);
  
});

function kiir() {
  $("#elso").empty();
  $("#elso").append("<table>");
  $("#elso table").append("<tr><th>Fajta:</th><th>Név:</th><th>Ár:</th><th>Mennyiség:</th><th>Törlés:</th></tr>");
  var i = 1;
  for (var index in szovegbolObjektum) {
    $("#elso table").append("<tr>");

    for (var item in szovegbolObjektum[index]) {
      $("#elso table tr").eq(i).append("<td>" + szovegbolObjektum[index][item] + "</td>");
    }
    i++;
  }
}

function torolKiir() {
  var tr = $('#elso table tr');
  var td = '<td><button>Törlés</button></td>';
  tr.each(function () {
    $(td).insertAfter($(this).find('td').eq(3));
  });
}

function adatokElment() {
  var ujadatok = {};
  ujadatok.Fajta = $("#faj").val();
  ujadatok.Nev = $("#tn").val();
  ujadatok.Ar = $("#ar").val();
  ujadatok.Mennyiseg = $("#me").val();
  szovegbolObjektum.push(ujadatok);
  console.log(ujadatok);
  kiir();
  torolKiir();
}

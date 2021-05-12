$(function () {
    kiir();
    $("OK").click();

});

var szovegJSON = '[{"Fajta":"Kávé","Nev":"Őrölt kávé","Ar":900,"Mennyiseg":"500 g"},{"Fajta":"Kopi Luwak","Nev": "frissen pörkölt single origin arabica kávé különlegesség Jáva szigetéről", "Ar": 5000, "Mennyiseg": "500 g"}]';
var szovegbolObjektum = JSON.parse(szovegJSON);

console.log(szovegbolObjektum);





function kiir() {

    $("#elso").append("<table>");
    $("#elso table").append("<tr><th>Fajta:</th><th>Név:</th><th>Ár:</th><th>Mennyiség:</th><th>Törlés:</th></tr>");
    var i = 1;
    for (var index in szovegbolObjektum) {
        $("#elso table").append("<tr>");

        console.log(szovegbolObjektum[index]);
        for (var item in szovegbolObjektum[index]) {
            $("#elso table tr").eq(i).append("<td>" + szovegbolObjektum[index][item] + "</td>");



        }
        i++;
    }
    var tr = $('#elso table tr');
    var td = '<td><button>Törlés</button></td>';
    tr.each(function () {
        $(td).insertAfter($(this).find('td').eq(3));

    });


}
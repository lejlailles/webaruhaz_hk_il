var szoveg = '[{"Fajta":"Valami","Nev":"Orölt kávé","Ar":"900","Mennyiseg":"500", "Torles":"", "Modositas":""},{"Fajta":"BopiLuwak","Nev": "Brissen pörkölt single origin arabica kávé különlegesség Jáva szigetéről", "Ar": "5000", "Mennyiseg": "1000", "Torles":"", "Modositas":""}, {"Fajta":"Kavé","Nev":"Egész szemes kávé","Ar":"1500","Mennyiseg":"250", "Torles":"", "Modositas":""}]';
var szoveg = JSON.parse(szoveg);

$(function () {
    kiir();
    torolKiir();
    modositKiir();
    $("#OK").click(adatokElment);
    $("#torol").click(adatokTorlese);
});

function kiir() {
    $("#elso").empty();
    $("#elso").append("<table>");
    //$("#elso table").append("<tr><th>Fajta:</th><th>Név:</th><th>Ár:</th><th>Mennyiség:</th><th>Törlés:</th></tr>");
    //var i = 1;

    $("#elso table").append("<tr>");
    for (var index in szoveg[0]) {
        $("#elso table tr").append("<th id=" + index + ">" + index + "</th>");
    }

    for (var i = 0; i < szoveg.length; i++) {
        $("#elso table").append("<tr>");
        for (var item in szoveg[i]) {
            $("#elso table tr").eq(i + 1).append("<td>" + szoveg[i][item] + "</td>");
        }
        //i++;
    }
    $("th").click(rendez);

}

var irany = false;

function rendez() {
    var id = $(this).attr("id");
    if (irany) {
        if (id === 'Ar' || id === 'Mennyiseg') {
            szoveg.sort(function (a, b) {
                return a[id] - b[id];
            });
        } else {
            szoveg.sort(function (a, b) {
                return Number(a[id] > b[id]) - 0.5;
            });
        }
    } else {
        if (id === 'Ar' || id === 'Mennyiseg') {
            szoveg.sort(function (a, b) {
                return b[id] - a[id];
            });
        } else {
            szoveg.sort(function (a, b) {
                return Number(a[id] < b[id]) - 0.5;
            });
        }
    }

    irany = !irany;
    console.log(szoveg);

    kiir();
    torolKiir();
    modositKiir();
}

function adatokTorlese() {
    var adatokID;
    for (var i = 0; i < szoveg.length; i++) {
        adatokID = szoveg[i];
        szoveg.splice(adatokID, i);
    }

    console.log(szoveg);
    kiir();
    torolKiir();
    modositKiir();
}

function modositKiir() {
    var tr = $('#elso table tr');
    var td = '<td><button id="modosit">Módosítás</button></td>';
    tr.each(function () {
        $(td).insertAfter($(this).find('td').eq(4));
    });
}

function torolKiir() {
    var tr = $('#elso table tr');
    var td = '<td><button id="torol">Törlés</button></td>';
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
    szoveg.push(ujadatok);
    console.log(ujadatok);
    kiir();
    torolKiir();
    modositKiir();
}
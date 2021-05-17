var szovegJSON = '[{"Fajta":"Valami","Nev":"Orölt kávé","Ar":"900","Mennyiseg":"500", "Torles":"", "Modositas":""},{"Fajta":"BopiLuwak","Nev": "Brissen pörkölt single origin arabica kávé különlegesség Jáva szigetéről", "Ar": "5000", "Mennyiseg": "1000", "Torles":"", "Modositas":""}, {"Fajta":"Kavé","Nev":"Egész szemes kávé","Ar":"1500","Mennyiseg":"250", "Torles":"", "Modositas":""}]';
var szovegJSON = JSON.parse(szovegJSON);

$(function () {
    kiir();
    torolKiir();
    modositKiir();
    $("#OK").click(adatokElment);

});

function kiir() {
    $("#elso").empty();
    $("#elso").append("<table>");
    //$("#elso table").append("<tr><th>Fajta:</th><th>Név:</th><th>Ár:</th><th>Mennyiség:</th><th>Törlés:</th></tr>");
    //var i = 1;

    $("#elso table").append("<tr>");
    for (var index in szovegJSON[0]) {
        $("#elso table tr").append("<th id=" + index + ">" + index + "</th>");
    }

    for (var i = 0; i < szovegJSON.length; i++) {
        $("#elso table").append("<tr>");
        for (var item in szovegJSON[i]) {
            $("#elso table tr").eq(i + 1).append("<td>" + szovegJSON[i][item] + "</td>");
        }
        //i++;
    }
    $("th").click(rendez);

}

var irany = false;

function rendez() {
//    if(irany){
//    szovegJSON.sort(function(a, b){return a.Ar - b.Ar});
//    } else{
//        szovegJSON.sort(function(b, a){return a.Ar - b.Ar});
//    }
//    if(irany){
//    szovegJSON.sort(function(a, b){return a.Mennyiseg - b.Mennyiseg});
//    } else {
//        szovegJSON.sort(function(b, a){return a.Mennyiseg - b.Mennyiseg});
//    }

    
//    var id = $(this).attr("id");

//  szovegJSON.sort();
  
  //  console.log(id);
    //Rendezzük kor szerint növekvő sorrendbe
//     szovegJSON.sort(function(a, b){return a - b});//ez az érték pozitív vagy negatív

    
//    szovegJSON.reverse();
    
    //név szerint ABC sorrendbe rendezünk
//     szovegJSON.sort(function (a, b) {
//         console.log(Number(a.Fajta<b.Fajta)-0.5);
//        return Number(a.Fajta>b.Fajta)-0.5;//ez az érték pozitív vagy negatív
//    });
//    szovegJSON.sort(function (a, b) {
//         console.log(Number(a.Nev<b.Nev)-0.5);
//        return Number(a.Nev>b.Nev)-0.5;//ez az érték pozitív vagy negatív
//    });



//    if (irany) {
//        szovegJSON.sort(function (a, b) {
//            return Number(a[id] > b[id]) - 0.5;
//        });
//
//    } else {
//        szovegJSON.sort(function (a, b) {
//            return Number(b[id] - a[id]) - 0.5;
//        });
//    }
//
//    if (irany) {
//        szovegJSON.sort(function (a, b) {
//            return Number(a.Ar > b.Ar);
//        });
//
//    } else {
//        szovegJSON.sort(function (a, b) {
//            return Number(a.Ar < b.Ar);
//
//        });
//    }
    irany = !irany;
    console.log(szovegJSON);


    kiir();
    torolKiir();
    modositKiir();
}

function adatokTorlese() {
    var adatokID = 0;
    for (var i = 0; i < szovegJSON.length; i++) {
        adatokID = szovegJSON[i];
        szovegJSON.splice(adatokID, i);
    }

    console.log(szovegJSON);
    kiir();
    torolKiir();
    modositKiir();
}

function modositKiir() {
    var tr = $('#elso table tr');
    var td = '<td><button>Módosítás</button></td>';
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
    szovegJSON.push(ujadatok);
    console.log(ujadatok);
    kiir();
    torolKiir();
    modositKiir();
}
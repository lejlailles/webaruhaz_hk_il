$(function () {
    
    for (var item in termekek) {
        $("article").append(item+": "+termekek[item]+"<br>");
        
    }
    
});


var termekek= {
    Fajta:"Kávé",
    Nev:"Őrölt kávé",
    Ar:900,
    Mennyiseg:"500 g"
    };


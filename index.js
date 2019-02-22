"use strict"

function kiesBoot(){
  let bootNummer = document.getElementById("bootNummerID").value;
  let beginTijd = document.getElementById("vertrekTijdID").value;
  let tochtnummer = document.getElementById("tochtnummerID").value;
  let verwijderKeuze = document.getElementById("bootNummerID");
  verwijderKeuze.remove(verwijderKeuze.selectedIndex);
  let kiesBoot = new Boottocht(tochtnummer, beginTijd, "", "", bootNummer,"");
  arrayBootTocht.push(kiesBoot);
//  console.log(kiesBoot);
  // console.log(`wat zit in arrayBootToch : ${arrayBootTocht}`);
  console.log(arrayBootTocht);
  document.getElementById('dataID').innerHTML = JSON.stringify(kiesBoot);
}

function klantKomtTerug(){
  let tochtNummerBootTerug = document.getElementById("tochtnummerIDTerug").value;
  let eindTijd = document.getElementById("eindTijdID").value;
  for (let i=0; i<arrayBootTocht.length; i++){
    if (arrayBootTocht[i].tochtnummer === tochtNummerBootTerug){
    let duurVanTocht = eindTijd - arrayBootTocht[i].beginTijd;

    let EndTIme = eindTijd;
    let StartTime = arrayBootTocht[i].beginTijd;
    var minutes = parseTime(EndTIme) - parseTime(StartTime);
    // document.getElementById('dataID2').innerHTML = "tochtnummer " + arrayBootTocht[i].tochtnummer +"<br>" +  "minuten verstreken " + minutes;
    arrayBootTocht[i].minutenOnderweg = minutes;
    arrayBootTocht[i].eindTijd = eindTijd;
    console.log(arrayBootTocht);

    let weer = document.getElementById("weerTypeID").value;
    let seizoen = document.getElementById("seizoenID").value;
    let drukte = document.getElementById("drukteID").value;
    console.log(weer);
    console.log(seizoen);
    console.log(drukte);


    let zonnig = 1.20;
    let bewolkt = 1.00;
    let neerslag = 0.95;

    let lente = 1.20;
    let zomer = 1.40;
    let herfst = 0.95;
    let winter = 0.90;

    let rustig = 0.95;
    let normaal = 1.00;
    let druk = 1.20;

    let basis = minutes * 0.30;
    let rekening = 0;

    if (weer === "zonnig"){
      rekening = basis * zonnig ;
    }
    if (weer === "bewolkt"){
      rekening = basis * bewolkt ;
    }
    if (weer === "neerslag"){
      rekening = basis * neerslag;
    }
///////////////////////////////////////////
    if (seizoen === "lente"){
      rekening = rekening * lente;
    }
    if (seizoen === "zomer"){
      rekening = rekening * zomer;
    }
    if (seizoen === "herfst"){
      rekening = rekening * herfst;
    }
    if (seizoen === "winter"){
      rekening = rekening * winter;
    }
    ///////////////////////////////////////
    if (drukte === "rustig"){
      rekening = rekening * rustig;
    }
    if (drukte === "normaal"){
      rekening = rekening * normaal;
    }
    if (drukte === "druk"){
      rekening = rekening * druk;
    }

    arrayBootTocht[i].prijs = rekening;
    console.log(rekening);
    document.getElementById('dataID').innerHTML = JSON.stringify(arrayBootTocht[i]);
    document.getElementById('dataID2').innerHTML = "tochtnummer " + arrayBootTocht[i].tochtnummer +"<br>" +  "minuten verstreken " + minutes + "<br>" + "prijs &euro; " + rekening;

////////////////////// POST

  var api = "api/boottocht";
  //var room = {roomNumber:roomNumber, roomType:roomType, numberOfBeds:numberOfBeds};
  var room = arrayBootTocht[i]
  postData(api, JSON.stringify(room));


function postData(api, data){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 201) {
    
      }
    };
    xhttp.open("POST", "http://localhost:8081/api/boottocht", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
}
////////////// hierboven POST
    }
  }
}

let arrayBootTocht = [];

function parseTime(s) {
   var c = s.split(':');
   return parseInt(c[0]) * 60 + parseInt(c[1]);
}

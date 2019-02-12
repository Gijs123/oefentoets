"use strict"

function kiesBoot(){
  let bootNummer = document.getElementById("bootNummerID").value;
  let beginTijd = document.getElementById("vertrekTijdID").value;
  let tochtnummer = document.getElementById("tochtnummerID").value;
  let verwijderKeuze = document.getElementById("bootNummerID");
  verwijderKeuze.remove(verwijderKeuze.selectedIndex);
  let kiesBoot = new Boottocht(tochtnummer, beginTijd, "", "", bootNummer);
  array.push(kiesBoot)
  document.getElementById('dataID').innerHTML = JSON.stringify(kiesBoot);
}

function klantKomtTerug(){
  let tochtnummer = document.getElementById("tochtnummerIDTerug").value;
  let eindTijd = document.getElementById("eindTijdID").value;
  for (let i=0; i<array.length; i++){
    if (array[i].tochtnummer === tochtnummer){
    let duurVanTocht = eindTijd - array[i].beginTijd;

    let EndTIme = eindTijd;
    let StartTime = array[i].beginTijd;
    var minutes = parseTime(EndTIme) - parseTime(StartTime);
    // console.log(minutes);
    document.getElementById('dataID2').innerHTML = "minuten verstreken " + minutes;
    document.getElementById('startMin').innerHTML = "minuten onderweg " + minutes;
    return minutes
    }
  }
}

let array = [];
let minu = [];

function parseTime(s) {
   var c = s.split(':');
   return parseInt(c[0]) * 60 + parseInt(c[1]);
}

function prijsBerekening(minutes){
  let weer = document.getElementById("weerTypeID").value;
  let seizoen = document.getElementById("seizoenID").value;
  let drukte = document.getElementById("drukteID").value;
  console.log(weer);
  console.log(seizoen);
  console.log(drukte);
  let min = minutes;
  console.log(typeof min);
}

// function parseTime(s) {
//    var c = s.split(':');
//    return parseInt(c[0]) * 60 + parseInt(c[1]);
// }
//   let EndTIme = "14:44";
//   let StartTime = "14:00";
//   var minutes = parseTime(EndTIme) - parseTime(StartTime);
//   console.log(minutes);
// let c = a - b;
// console.log(c);

// let d = new Date(11:13:00);
// console.log(d);

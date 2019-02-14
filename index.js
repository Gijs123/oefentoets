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
    // console.log(minutes);
    document.getElementById('dataID2').innerHTML = "minuten verstreken " + minutes;
    document.getElementById('startMin').innerHTML = "minuten onderweg " + minutes;

    // arrayBootTocht.minutenOnderweg.push(minutes);
    //Boottocht.minutenOnderweg = 12;

    arrayBootTocht[i].minutenOnderweg = minutes;
    console.log(arrayBootTocht);
  //  return minutes

    }
  }
}

let arrayBootTocht = [];

function parseTime(s) {
   var c = s.split(':');
   return parseInt(c[0]) * 60 + parseInt(c[1]);
}

function prijsBerekening(){
  let weer = document.getElementById("weerTypeID").value;
  let seizoen = document.getElementById("seizoenID").value;
  let drukte = document.getElementById("drukteID").value;
  console.log(weer);
  console.log(seizoen);
  console.log(drukte);

  
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

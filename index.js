"use strict"

function kiesBoot(){
  let bootNummer = document.getElementById("bootNummerID").value;
  let vertrekTijd = document.getElementById("vertrekTijdID").value;
  let tochtnummer = document.getElementById("tochtnummerID").value;

  let verwijderKeuze = document.getElementById("bootNummerID");
  verwijderKeuze.remove(verwijderKeuze.selectedIndex);

  let kiesBoot = new Boottocht(tochtnummer, vertrekTijd, "", "", bootNummer);
  array.push(kiesBoot)
//  console.log(array);
  document.getElementById('dataID').innerHTML = JSON.stringify(kiesBoot);
}

function klantKomtTerug(){
  let tochtnummer = document.getElementById("tochtnummerIDTerug").value;
  let eindTijd = document.getElementById("eindTijdID").value;
//  console.log(eindTijd);
  for (let i=0; i<array.length; i++){
    if (array[i].tochtnummer === tochtnummer){
  //    console.log(array[i].tochtnummer);
    //  console.log(array[i].beginTijd);
    //  console.log(array[i][vertrekTijd]);
    let duurVanTocht = eindTijd - array[i].beginTijd;
    console.log(duurVanTocht);
    console.log(array[i].beginTijd);
    }
  }

//  let duurVanTocht = eindTijd - array.vertrekTijd;
  //console.log(duurVanTocht);
}

let array = [];

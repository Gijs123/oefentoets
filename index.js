"use strict"

function kiesBoot(){
  let bootNummer = document.getElementById("bootNummerID").value;
  let vertrekTijd = document.getElementById("vertrekTijdID").value;
  let tochtnummer = document.getElementById("tochtnummerID").value;

  let verwijderKeuze = document.getElementById("bootNummerID");
  verwijderKeuze.remove(verwijderKeuze.selectedIndex);

  let kiesBoot = new Boottocht(tochtnummer, vertrekTijd, "", "", bootNummer);
  console.log(bootNummer);
  document.getElementById('dataID').innerHTML = JSON.stringify(kiesBoot);
}

function klantKomtTerug(){
  let tochtnummer = document.getElementById("tochtnummerIDTerug").value;
  let eindTijd = document.getElementById("eindTijdID").value;
  console.log(eindTijd);
}
"use strict"
class Boottocht {
  constructor (tochtnummer, beginTijd, eindTijd, prijs, bootNummer){
    this.tochtnummer = tochtnummer;
    this.beginTijd = beginTijd;
    this.eindTijd = eindTijd;
    this.prijs = prijs;
    this.bootNummer = bootNummer;
  }
  get tochtnummer(){
    return this._tochtnummer;
  }
  get beginTijd(){
    return this._beginTijd;
  }
  get eindTijd(){
    return this._eindTijd;
  }
  get prijs(){
    return this._prijs;
  }
  get bootNummer(){
    return this._bootNummer;
  }
  set tochtnummer(val){
    return this._tochtnummer = val;
  }
  set beginTijd(val){
    return this._beginTijd = val;
  }
  set eindTijd(val){
    return this._eindTijd = val;
  }
  set prijs(val){
    return this._prijs = val;
  }
  set bootNummer(val){
    return this._bootNummer = val;
  }
}

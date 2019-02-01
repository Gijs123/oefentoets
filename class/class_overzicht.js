"use trict"
class Overzicht {
  constructor (beeindigdeTochten, gemiddeldeTochtDuur, botenBeschikbaar){
    this.beeindigdeTochten = beeindigdeTochten;
    this.gemiddeldeTochtDuur = gemiddeldeTochtDuur;
    this.botenBeschikbaar = botenBeschikbaar;
  }
  get beeindigdeTochten(){
    return this._beeindigdeTochten;
  }
  get gemiddeldeTochtDuur(){
    return this._gemiddeldeTochtDuur;
  }
  get botenBeschikbaar(){
    return this._botenBeschikbaar;
  }
  set beeindigdeTochten(val){
    return this._beeindigdeTochten = val;
  }
  set gemiddeldeTochtDuur(val){
    return this._gemiddeldeTochtDuur = val;
  }
  set botenBeschikbaar(val){
    return this._botenBeschikbaar = val
  }
}

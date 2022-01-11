export class Game {
  constructor() {
    this.isTurnPlayer1 = true;
    this.isTurnPlayer2 = false;
    this.countSixesPlayer1 = 0;
    this.countSixesPlayer2 = 0;
  }

  setTurnPlayer1() {
    this.isTurnPlayer1 = !this.isTurnPlayer1;
  }
  
  setTurnPlayer2() {
    this.isTurnPlayer2 = !this.isTurnPlayer2;
  }

  resetCountSixesPlayer1(){
    this.countSixesPlayer1 = 0;
  }

  incrementCountSixesPlayer1(){
    this.countSixesPlayer1 += 1;
  }

  resetCountSixesPlayer2(){
    this.countSixesPlayer1 = 0;
  }

  incrementCountSixesPlayer2(){
    this.countSixesPlayer1 += 1;
  }
  getTurnPlayer1() {
    return this.isTurnPlayer1;
  }

  getTurnPlayer2() {
    return this.isTurnPlayer2;
  }

  getCountSixesPlayer1(){
    return this.countSixesPlayer1;
  }

  getCountSixesPlayer2(){
    return this.countSixesPlayer2;
  }

}

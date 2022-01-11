import { Player } from "./playerModule.js";
import { playGame, board } from "./gameController.js";
import { generateTiles, addTraps } from "./boardView.js";
import { getRandomDiceRoll, getRandomDiceRoll2 } from "./diceModule.js";
import { getItem, setItem } from "./storageModule.js";

window.addEventListener("DOMContentLoaded", (event) => {
  //At firstPage.js store just the name and logo for the player because
  //the player will be created on this module
  let player1Info = getItem("player1");
  let player2Info = getItem("player2");

  let player1 = new Player(player1Info.name, player1Info.logo);
  let player2 = new Player(player2Info.name, player2Info.logo);

  generateTiles();
  addTraps(board);

  let diceBtn = document.getElementById("rollDice");

  diceBtn.addEventListener("click", async () => {
    diceBtn.disabled = true;
    let diceNumber = await getRandomDiceRoll();    
    
    //This if condition is for the case when the API is not functioning.
    if(typeof(diceNumber) === "string"){
      diceNumber = getRandomDiceRoll2();
    }
    setItem("dice", diceNumber);

    let diceImg = document.getElementById("dice");
    diceImg.src = "images/dice/dice.gif";

    playGame(player1, player2, diceNumber);

    setTimeout(() => {
      diceImg.src = "/images/dice/" + diceNumber + ".png";
      diceBtn.disabled = false;
    }, 1000);

  });
});

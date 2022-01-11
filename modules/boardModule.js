import { chooseRandom } from "./helper.js";

const normalBoard = [
  //Board with the normal difficulty
  0,
  0,
  0,
  "wild",
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  -3,
  0,
  0,
  0,
  "wild",
  0,
  0,
  0,
  0,
  -1,
  0,
  0,
  4,
  0,
  0,
  0,
  0,
  -3,
  0,
  0,
  0,
  1,
  0,
  0,
  -1,
  0,
  0,
  2,
  0,
  0,
  "wild",
  0,
  0,
  -2,
  0,
  "wild",
  0,
  0,
  0,
];

const hardBoard = [
  //Board with the normal difficulty
  0,
  -1,
  0,
  "wild",
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  -3,
  0,
  0,
  0,
  "wild",
  0,
  -3,
  0,
  0,
  -1,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  -3,
  0,
  0,
  -2,
  0,
  0,
  0,
  -1,
  0,
  0,
  1,
  0,
  0,
  "wild",
  0,
  0,
  -1,
  0,
  "wild",
  0,
  -3,
  0,
];


/*
Function that will calculate the position where the player will be placed
*/
function calculatePosition(board, currentPosition, diceRoll) {
  let positionBoard = currentPosition - 1 + diceRoll;
  let value = 0;
  if (board[positionBoard] === "wild") {
    //check if wildcard is 0, future feature!!
    value = diceRoll + wildcard();
  } else {
    value = board[positionBoard] + diceRoll;
  }
  return value;
}

//Function will hold the logic
//Nr Blocked will be passed through GameController instance

function takesItDown(incomingPlayerPosition, otherPlayerPosition) {
  if (incomingPlayerPosition === otherPlayerPosition) {
    return true;
  }
}

function wildcard() {
  let options = [-3, -2, -1, 0, 1, 2, 3];
  const choice = chooseRandom(options);
  return choice;
}

export {
  normalBoard,
  hardBoard,
  takesItDown,
  calculatePosition,
};

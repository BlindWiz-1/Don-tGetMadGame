import { normalBoard, hardBoard } from "./boardModule.js";

//Used to generate the 50 tiles for the board each with a unique id corresponding to position.
function generateTiles(board) {
  let row1 = document.getElementById("row1");
  let row2 = document.getElementById("row2");
  let row3 = document.getElementById("row3");
  let row4 = document.getElementById("row4");
  let row5 = document.getElementById("row5");
  let row6 = document.getElementById("row6");
  let row7 = document.getElementById("row7");
  let row8 = document.getElementById("row8");
  let row9 = document.getElementById("row9");
  let row10 = document.getElementById("row10");

  for (let index = 1; index <= 9; index++) {
    let tile = document.createElement("div");
    tile.setAttribute("id", index);
    tile.setAttribute("class", "tile");
    tile.append(index);

    row1.appendChild(tile);
  }

  let tile10 = document.createElement("div");
  tile10.setAttribute("id", "10");
  tile10.setAttribute("class", "tile");
  tile10.append(10);
  row2.appendChild(tile10);

  for (let index = 11; index <= 19; index++) {
    let tile = document.createElement("div");
    tile.setAttribute("id", index);
    tile.setAttribute("class", "tile");
    tile.append(index);

    row3.appendChild(tile);
  }

  let tile20 = document.createElement("div");
  tile20.setAttribute("id", 20);
  tile20.setAttribute("class", "tile");
  tile20.append(20);
  row4.appendChild(tile20);

  for (let index = 21; index <= 29; index++) {
    let tile = document.createElement("div");
    tile.setAttribute("id", index);
    tile.setAttribute("class", "tile");
    tile.append(index);

    row5.appendChild(tile);
  }

  let tile30 = document.createElement("div");
  tile30.setAttribute("id", 30);
  tile30.setAttribute("class", "tile");
  tile30.append(30);
  row6.appendChild(tile30);

  for (let index = 31; index <= 39; index++) {
    let tile = document.createElement("div");
    tile.setAttribute("id", index);
    tile.setAttribute("class", "tile");
    tile.append(index);

    row7.appendChild(tile);
  }

  let tile40 = document.createElement("div");
  tile40.setAttribute("id", 40);
  tile40.setAttribute("class", "tile");
  tile40.append(40);
  row8.appendChild(tile40);

  for (let index = 41; index <= 50; index++) {
    let tile = document.createElement("div");
    tile.setAttribute("id", index);
    tile.setAttribute("class", "tile");
    tile.append(index);

    row9.appendChild(tile);
  }
}

function removeFromBoard(player) {
  let oldPosition = document.getElementById(`${player.position}`);
  oldPosition.removeAttribute("style");
}

function positionOnBoard(player) {
  let newPosition = document.getElementById(`${player.position}`);
  newPosition.style.cssText = `background-image: url('${player.logo}'); background-size: contain; background-color: moccasin; background-repeat: no-repeat; background-position: center;	`;
  //Re-check if player logo is stored as a string directly at localStorage ...
}

function doForwardPositioning(oldPosition, newPosition, player) {
  for (let i = oldPosition; i < newPosition; i++) {
    let oldTile = document.getElementById(`${i}`);
    let newTile = document.getElementById(`${i + 1}`);
    oldTile.removeAttribute("style");
    newTile.style.cssText = `background-image: url('${player.logo}'); background-size: contain; background-color: moccasin; background-repeat: no-repeat; background-position: center;	`;
  }
}

function doBackwardPositioning(oldPosition, newPosition, player) {
  for (let i = oldPosition; i > newPosition; i--) {
    let oldTile = document.getElementById(`${i}`);
    let newTile = document.getElementById(`${i - 1}`);
    oldTile.removeAttribute("style");
    newTile.style.cssText = `background-image: url('${player.logo}'); background-size: contain; background-color: moccasin; background-repeat: no-repeat; background-position: center;	`;
  }
}

function smoothMovement(oldPosition, newPosition, player) {
  if (oldPosition < newPosition) {
    doForwardPositioning(oldPosition, newPosition, player);
  } else if (oldPosition > newPosition){
    doBackwardPositioning(oldPosition, newPosition, player);
  }
}

function addTraps(board) {
  for (let i = 1; i <= board.length; i++) {
    let tile = document.getElementById(i);

    if (board[i - 1] === "wild") {
      tile.style.cssText = `background-image: url('/images/tiles/tilewild.jpg')`;
    } else if (board[i - 1] !== 0) {
      tile.style.cssText = `background-image: url('/images/tiles/tile${
        board[i - 1]
      }.jpg')`;
    }
  }

  document.getElementById(
    "50"
  ).style.cssText = `background-image: url('/images/tiles/tilewinner.jpg')`;
}

export {
  generateTiles,
  removeFromBoard,
  positionOnBoard,
  smoothMovement,
  addTraps,
};

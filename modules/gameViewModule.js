import { chooseRandom } from "./helper.js";

function addToLog(history, sentence) {
  const paragraph = document.createElement("p");
  const node = document.createTextNode(sentence);
  paragraph.appendChild(node);
  history.appendChild(paragraph);
}

function rollMessage(player, dice) {
  return `${player.name} threw the dice and rolled ${dice}.`;
}

function positionMessage(player, oldPosition, newPosition) {
  if (oldPosition === newPosition) {
    return `${player.name} got stuck inside a sandpit. He can't move in the next turn`;
  } else if (oldPosition > newPosition) {
    return `${
      player.name
    } ${getNegativeMessage()} He is now at position ${newPosition}`;
  } else if (oldPosition < newPosition) {
    return `${
      player.name
    } ${getPositiveMessage()} He is now at position ${newPosition}`;
  }

  return `${player.getName()} is at: ${player.getPosition()}`;
}

function setWinner(player, frame, paragraph, image) {
  frame.style.display = "block";
  const text = `Congratulations ${player.getName()} !!`;
  paragraph.innerHTML = text;
  image.src = player.getLogo();
}

function highlightPlayersTurn(turnNumber) {
  let playerTurnDiv = document.getElementById(`player${turnNumber}Div`);
  playerTurnDiv.classList.add("highlight-div");
}

function removeHighlightPlayersTurn(turnNumber) {
  let playerTurnDiv = document.getElementById(`player${turnNumber}Div`);
  playerTurnDiv.classList.remove("highlight-div");
}

function getNegativeMessage() {
  let arrayOfMessages = [
    "was scared by a snake.",
    "got lost and went back.",
    "fell off a cliff.",
    "was caught by the natives",
    "saw an angry hippo.",
    "was found by the pirates.",
    "went back because a hurricane came.",
    "was attacked by a tribe of natives.",
  ];

  return chooseRandom(arrayOfMessages);
}

function getPositiveMessage() {
  let arrayOfMessages = [
    "found a lead to the treasure.",
    "found a shortcut.",
    "found a map in an abandoned house. He took the shortcut.",
    "found a friendly horse to travel with.",
    "found food and after eating it felt energized. He moved ahead.",
    "passed the dangerous bridge safely.",
    "was helped by a dolphin.",
    "was helped by the natives.",
  ];

  return chooseRandom(arrayOfMessages);
}

function goToBottom(element) {
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

export {
  addToLog,
  rollMessage,
  positionMessage,
  setWinner,
  highlightPlayersTurn,
  removeHighlightPlayersTurn,
  goToBottom,
};

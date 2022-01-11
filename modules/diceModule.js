//API to generate a random number
export async function getRandomDiceRoll() {
  let dice = await fetch("https://roll-dice1.p.rapidapi.com/rollDice", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "roll-dice1.p.rapidapi.com",
      "x-rapidapi-key": "60b4df6b0emsh88873da46a94770p1e52d1jsn04ba016c6b2b",
    },
  })
    .then((response) => response.json())
    .then((response) => response.data.Dice)
    .catch((err) => "There is an error on calling the promise" + err )
  return dice;
}

export function getRandomDiceRoll2() {
   return Math.floor(Math.random() * 6) + 1;
}

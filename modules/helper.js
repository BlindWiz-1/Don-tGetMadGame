//Returns a random member of the array
export function chooseRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const chosen = array[randomIndex];
    return chosen;
}

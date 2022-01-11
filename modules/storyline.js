window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("cntToGame").addEventListener("click", logClick)

  function logClick(event) {
    event.preventDefault();
    window.location = "game.html";
  }
});

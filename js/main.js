let snakeBtn = document.getElementById("snake");
snakeBtn.addEventListener("click", snake);

function snake() {
  let userIn = "S";

  let userChoice = document.getElementById("user-choice")
  userChoice.innerText = "Snake";

  userChoice.style.backgroundColor = "var(--bg-snake)";
  mainFunction(userIn);
}

let gunBtn = document.getElementById("gun");
gunBtn.addEventListener("click", gun);

function gun() {
  let userIn = "G";

  let userChoice = document.getElementById("user-choice")
  userChoice.innerText = "Gun";

  userChoice.style.backgroundColor = "var(--bg-gun)";
  mainFunction(userIn);
}

let waterBtn = document.getElementById("water");
waterBtn.addEventListener("click", water);

function water() {
  let userIn = "W";

  let userChoice = document.getElementById("user-choice")
  userChoice.innerText = "Water";
  
  userChoice.style.backgroundColor = "var(--bg-water)";
  mainFunction(userIn);
}

let reloadButton = document.getElementById("reload-button")
reloadButton.addEventListener("click", ()=>{
  location.reload();
});

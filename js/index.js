let playTime = 0;
let yourScore = 0;
let computerScore = 0;

function mainFunction(userIn) {
  let user = userIn;
  // let user =prompt("Enter S, W or G");
  let computerInput = Math.floor(Math.random() * 3);
  let computer = ["S", "G", "W"][computerInput];

  let bgColor = "";
  let computerIn = "";
  if (computer === "S") {
    computerIn = "Snake";
    bgColor = "var(--bg-snake)";
  } else if (computer === "W") {
    computerIn = "Water";
    bgColor = "var(--bg-water)";
  } else if (computer === "G") {
    computerIn = "Gun";
    bgColor = "var(--bg-gun)";
  }

  let computerChoice = document.getElementById("computer-choice");
  computerChoice.innerText = computerIn;
  computerChoice.style.backgroundColor = bgColor;

  let winnerDescription = "";
  let winnerResult = "";
  let winner = "";

  if (user === computer) {
    winner = "tied";
    winnerDescription = "Tied: You and the Computer both choose the same, try again 😎";
  }
  if (user === "S" && computer === "W") {
    yourScore++;
    computerScore--;
    winner = "user";
    winnerDescription = "Snake vs Water : Snake drinks the water, hence winner is Snake 🐍";

  }
  if (user === "S" && computer === "G") {
    yourScore--;
    computerScore++;
    winner = "computer";
    winnerDescription = "Snake vs Gun : Gun will kill the snake, hence winner is Gun 🔫";
  }
  if (user === "W" && computer === "G") {
    yourScore++;
    computerScore--;
    winner = "user";
    winnerDescription = "Water vs Gun : The gun will drown in water, hence winner is Water 💦";
  }
  if (user === "W" && computer === "S") {
    yourScore--;
    computerScore++;
    winner = "computer";
    winnerDescription = "Water vs Snake : Snake drinks the water, hence winner is Snake 🐍";
  }
  if (user === "G" && computer === "S") {
    yourScore++;
    computerScore--;
    winner = "user";
    winnerDescription = "Gun vs Snake : Gun will kill the snake, hence winner is Gun 🔫";
  }
  if (user === "G" && computer === "W") {
    yourScore--;
    computerScore++;
    winner = "computer";
    winnerDescription = "Gun vs Water : The gun will drown in water, hence winner is Water 💦";
  }

  let newBgColor = "";
  if (winner === "tied") {
    winnerResult = "No one";
    newBgColor = "#38E54D";
  } else if (winner === "user") {
    winnerResult = "You";
    newBgColor = "#7DE5ED";
  } else if (winner === "computer") {
    winnerResult = "Computer";
    newBgColor = "#C93737";
  }

  let winnerOutput = document.getElementById("winner-output");
  winnerOutput.innerText = winnerResult;
  winnerOutput.style.backgroundColor = newBgColor;

  let yourScoreOutput = document.getElementById("your-score-output");
  yourScoreOutput.innerText = yourScore;
  yourScoreOutput.style.backgroundColor = "#FF5733";

  let computerScoreOutput = document.getElementById("computer-score-output");
  computerScoreOutput.innerText = computerScore;
  computerScoreOutput.style.backgroundColor = "#6C4AB6";

  let playTimeOutput = document.getElementById("play-time-output");
  playTimeOutput.innerText = ++playTime;
  playTimeOutput.style.backgroundColor = "#80489C";

  let winnerDescriptionResult = document.getElementById("winner-description-result")
  winnerDescriptionResult.textContent = winnerDescription;
}

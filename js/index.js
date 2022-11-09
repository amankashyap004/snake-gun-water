let playTime = 0;
let yourScore = 0;
let computerScore = 0;

function mainFunction(userIn) {
  let user = userIn;
  // let user =prompt("Enter S, W or G");
  let computerInput = Math.floor(Math.random() * 3);
  let computer = ["S", "G", "W"][computerInput];

  let bgColor;
  let computerIn;
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

  let winnerResult = "";
  let winner = "";

  if (user === computer) {
    winner = "tied";
  }
  if (user === "S" && computer === "W") {
    yourScore++;
    computerScore--;
    winner = "user";
  }
  if (user === "S" && computer === "G") {
    yourScore--;
    computerScore++;
    winner = "computer";
  }
  if (user === "W" && computer === "G") {
    yourScore++;
    computerScore--;
    winner = "user";
  }
  if (user === "W" && computer === "S") {
    yourScore--;
    computerScore++;
    winner = "computer";
  }
  if (user === "G" && computer === "S") {
    yourScore++;
    computerScore--;
    winner = "user";
  }
  if (user === "G" && computer === "W") {
    yourScore--;
    computerScore++;
    winner = "computer";
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
}

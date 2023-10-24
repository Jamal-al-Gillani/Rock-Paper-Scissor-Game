const score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};
updateScoreElement();

/*********************************************************/
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  /************* PAPER **********************/
  if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissor") {
      result = "You Lose";
    }
    /************ ROCK ***********************/
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else if (computerMove === "Scissor") {
      result = "You Win";
    }
    /************* SCISSOR **********************/
  } else if (playerMove === "Scissor") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You Win";
    } else if (computerMove === "Scissor") {
      result = "Tie";
    }
  }
  /************* SCORE CALCULATOR **********************/
  if (result === "You Win") {
    score.Wins += 1;
  } else if (result === "You Lose") {
    score.Losses += 1;
  } else if (result === "Tie") {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `Your Move  "${playerMove}" - Computers Move "${computerMove}"  `;
}
/*********************************************************/
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}
/***********************************************************/
function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = "";
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "Scissor";
  }
  return computerMove;
}

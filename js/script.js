let pScore = 0
let compScore = 0

function getComputerChoice() {
  const pick = ["rock", "paper", "scissors"];
  return (randomPick = pick[Math.floor(Math.random() * pick.length)]);
}

function playerSelection() {
  return prompt("Enter rock, paper, or scissors").toLowerCase();
}

function play(playerSelection, computerSelection) {
  console.log(`The computer chose ${computerSelection}`);
  if (computerSelection === "rock" && playerSelection === "paper") {
    pScore++
    return "Player wins!";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    pScore++
    return "Player wins!";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    pScore++
    return "Player wins!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++
    return "Computer wins!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++
    return "Computer wins!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++
    return "Computer wins!";
  } else {
    return "It's a draw!";
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    console.log((play(playerSelection(), computerChoice)));
  }
  if (pScore > compScore) {
    return "You win!";
  } else if (compScore > pScore){
    return "You lost!";
  } else {
    return "It's a tie!";
  }
}

console.log(game());

function getComputerChoice() {
  const pick = ["rock", "paper", "scissors"];
  return (randomPick = pick[Math.floor(Math.random() * pick.length)]);
}
//
// function capitalizeChoice(str) {
//   const capitalize = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   return capitalize;
// }

function playerSelection() {
  return prompt("Enter rock, paper, or scissors").toLowerCase();
}

function play(playerSelection, getComputerChoice) {
  console.log(`The computer chose ${getComputerChoice}`);
  if (getComputerChoice === "rock" && playerSelection === "paper") {
    return "Player wins!";
  } else if (getComputerChoice === "paper" && playerSelection === "scissors") {
    return "Player wins!";
  } else if (getComputerChoice === "scissors" && playerSelection === "rock") {
    return "Player wins!";
  } else if (playerSelection === "rock" && getComputerChoice === "paper") {
    return "Computer wins!";
  } else if (playerSelection === "scissors" && getComputerChoice === "rock") {
    return "Computer wins!";
  } else if (playerSelection === "paper" && getComputerChoice === "scissors") {
    return "Computer wins!";
  } else {
    return "It's a draw!";
  }
}

const computerChoice = getComputerChoice();

console.log(play(playerSelection(), computerChoice));

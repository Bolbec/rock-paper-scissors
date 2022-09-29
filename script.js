let playerScore = 0;
let computerScore = 0;
game();

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    return randomChoice === 1 ? 'rock' : randomChoice === 2 ? 'paper' : 'scissors';
}

function getPlayerChoice() {
    let playerChoice = prompt("Write one to play!", "Rock, Paper or Scissors");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') return playerChoice;
    else return null;
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) console.log(`You pick ${playerSelection} and computer picks ${computerSelection}, it's draw!.`);
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper' ){
        console.log(`You pick ${playerSelection} and computer picks ${computerSelection}, you won!.`);
        playerScore++;
    }
    else {
        console.log(`You pick ${playerSelection} and computer picks ${computerSelection}, you lose!.`);
        computerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let user = getPlayerChoice();
        let computer = getComputerChoice();
        singleRound(user, computer);
    }
    console.log(playerScore > computerScore ? `|| Player : ${playerScore} - ${computerScore} : Computer || You won the game!` : playerScore < computerScore ? `|| Player : ${playerScore} - ${computerScore} : Computer || You lose the game!` : `|| Player : ${playerScore} - ${computerScore} : Computer || You draw the game!`)
}
function getComputerChoice() {
    
    const choices = ["rock", "paper", "scissors"];

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    return computerChoice;
}

function game(playerSelection, computerSelection) {

    const choices = ["rock", "paper", "scissors"];
    

    playerSelection = playerSelection.toLowerCase();

    if(!choices.includes(playerSelection)) {
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }

    console.log("You chose " + playerSelection)
    console.log("Computer chose " + computerSelection)

    if(playerSelection == computerSelection) {
        console.log("It's a tie! You chose " + playerSelection + " and computer chose " + computerSelection)
        return 0;
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
     ) {
        console.log("You win - " + playerSelection + " beats " + computerSelection)
        return 1;
     } else {
        console.log("You lose - " + playerSelection + " loses to " + computerSelection)
        return -1;
    }

}

function fiveRounds() {

    let playerChoice = null;
    let computerChoice = null;
    let gamepoints = 0;
    for(let i = 0; i < 5; i++) {
        playerChoice = prompt("Choose rock, paper or scissors!");
        computerChoice = getComputerChoice();
        result = game(playerChoice, computerChoice);
        gamepoints = gamepoints + result;
    }

    console.log(gamepoints)

    if(gamepoints == 0) {
        return "It's a tie!"
    } else if(gamepoints > 0) {
        return "You win!"
    } else {
        return "You lost!"
    }
}

console.log(fiveRounds());
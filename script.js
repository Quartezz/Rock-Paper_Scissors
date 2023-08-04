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




const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")

rockButton.addEventListener("mouseover", highlightButton);
rockButton.addEventListener("mouseout", removeHighlight);

paperButton.addEventListener("mouseover", highlightButton);
paperButton.addEventListener("mouseout", removeHighlight);

scissorsButton.addEventListener("mouseover", highlightButton);
scissorsButton.addEventListener("mouseout", removeHighlight);

function highlightButton (e) {
    e.target.style.backgroundColor = "#f0f0f0";
}

function removeHighlight (e) {
    e.target.style.backgroundColor = "";
}



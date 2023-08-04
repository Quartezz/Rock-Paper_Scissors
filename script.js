const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("mouseover", highlightButton);
rockButton.addEventListener("mouseout", removeHighlight);

paperButton.addEventListener("mouseover", highlightButton);
paperButton.addEventListener("mouseout", removeHighlight);

scissorsButton.addEventListener("mouseover", highlightButton);
scissorsButton.addEventListener("mouseout", removeHighlight);

let playerChoice = null;

rockButton.addEventListener("click", handleButtonClick);
paperButton.addEventListener("click", handleButtonClick);
scissorsButton.addEventListener("click", handleButtonClick);


function highlightButton (e) {
    e.target.style.backgroundColor = "#f0f0f0";
}

function removeHighlight (e) {
    e.target.style.backgroundColor = "";
}

function getComputerChoice() {
    
    const choices = ["rock", "paper", "scissors"];

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    return computerChoice;
}

function handleButtonClick(e) {
    const choice = e.target.getAttribute("data-choice");
    if(choice) {
        playerChoice = choice;
    }
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function updateResultText(result) {
    const resultText = document.getElementById("result");
    const resultText2 = document.getElementById("result-text")
    
    if (result === "win") {
        resultText.textContent = "You win!";
        resultText2.textContent = "${playerChoice} beats ${computerChoice}!"
    } else if (result === "lose") {
        resultText.textContent = "You lose!";
        resultText2.textContent = "${playerChoice} loses to ${computerChoice}!"
    } else {
        resultText.textContent = "It's a tie!";
        resultText2.textContent = "No points!"
    }
}


let playerScore = 0;
let computerScore = 0;
const winningScore = 5;
let playerChoice = null;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const playerSign = document.getElementById("sign-player");
const computerSign = document.getElementById("sign-computer");

const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const playAgainButton = document.getElementById("play-again-button");


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
        console.log(playerChoice);
        const computerChoice = getComputerChoice();
        const result = compareChoices(playerChoice, computerChoice);
        updateResultText(result, playerChoice, computerChoice);
        

        updateIcons(playerSign, playerChoice);
        updateIcons(computerSign, computerChoice);

    }

}

function updateIcons(element, choice) {
    if(choice == "rock") {
        element.textContent = "✊";
    } else if(choice == "paper") {
        element.textContent = "✋";
    } else if(choice == "scissors") {
        element.textContent = "✌";
    } else {
        element.textContent = "❔";
    }
}

function updateScores() {
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");
    
    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;

    

}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        updateScores();
        return "win";
    } else {
        computerScore++;
        updateScores();
        return "lose";
    }
}

function updateResultText(result, playerChoice, computerChoice) {
    const resultText = document.getElementById("result");
    const resultText2 = document.getElementById("result-text")
    
    if (result === "win") {
        resultText.textContent = "You win!";
        resultText2.textContent = `${playerChoice} beats ${computerChoice}!`;
    } else if (result === "lose") {
        resultText.textContent = "You lose!";
        resultText2.textContent = `${playerChoice} loses to ${computerChoice}!`;
    } else {
        resultText.textContent = "It's a tie!";
        resultText2.textContent = "No points!"
    }

    if(playerScore >= winningScore) {
        resultText.textContent = "Congratulations! You win the match!";
        resultText2.textContent = "";
    } else if(computerScore >= winningScore) {
        resultText.textContent = "Oops! Computer wins the match!";
        resultText2.textContent = "";
    }

    if (playerScore >= winningScore) {
        modalMessage.textContent = "Congratulations! You won the match!";
        showModal();
    } else if (computerScore >= winningScore) {
        modalMessage.textContent = "Oops! Computer won the match!";
        showModal();
    }

}

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}

playAgainButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerChoice = null;
    updateScores();
    updateIcons(playerSign, "default"); 
    updateIcons(computerSign, "default"); 
    hideModal(); 
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        hideModal();
    }
});

rockButton.addEventListener("mouseover", highlightButton);
rockButton.addEventListener("mouseout", removeHighlight);

paperButton.addEventListener("mouseover", highlightButton);
paperButton.addEventListener("mouseout", removeHighlight);

scissorsButton.addEventListener("mouseover", highlightButton);
scissorsButton.addEventListener("mouseout", removeHighlight);

rockButton.addEventListener("click", handleButtonClick);
paperButton.addEventListener("click", handleButtonClick);
scissorsButton.addEventListener("click", handleButtonClick);

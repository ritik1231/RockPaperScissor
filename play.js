const choices = ["rock","paper","scissor"]
const dispUserChoice = document.getElementById('userChoice');
const dispComputerChoice = document.getElementById('computerChoice');
const dispResult = document.getElementById('result');
let playerChoice="";

const dispPlayerScore = document.getElementById('playerScoreDisplay');
const dispComputerScore = document.getElementById('computerScoreDisplay');
let playerScore=0;
let computerScore=0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice===computerChoice){
        result = "It's a draw!" ;
    }
    else{
        switch(playerChoice){
            case "rock":
                result =(computerChoice==="scissor") ?"Yeah! You Win" : "Oh! You lost";
                break;
            
            case "paper":
                result =(computerChoice==="rock") ?"Yeah! You Win" : "Oh! You lost";
                break;  

            case "scissor":
                result =(computerChoice==="paper") ?"Yeah! You Win" : "Oh! You lost";
                break;    
        }
    }
    dispUserChoice.textContent = `Your Choice : ${playerChoice}`;
    dispComputerChoice.textContent = `Computer's Choice : ${computerChoice}`;
    dispResult.textContent = result;

    dispResult.classList.remove("winText","lossText","drawText")

    switch(result){
        case "Yeah! You Win":
            dispResult.classList.add("winText");
            playerScore++;
            dispPlayerScore.textContent = playerScore;
            break;

        case "Oh! You lost":
            dispResult.classList.add("lossText")
            computerScore++;
            dispComputerScore.textContent = computerScore;
            break;

        case "It's a draw!":
            dispResult.classList.add("drawText");
            break;
    }
}
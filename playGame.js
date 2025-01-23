let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

let body = document.querySelector("body");
let gameText = document.createElement("div");
gameText.classList.add("game-text")
gameText.textContent = "Make your choice!"
gameText.id = "gametext"
body.prepend(gameText);

let humanScore = document.querySelector('#human-score');
let humanScoreText = document.createElement('div');
humanScoreText.classList.add('score-text')
humanScoreText.textContent = '0.0';
humanScoreText.id = 'humanscore';
humanScore.appendChild(humanScoreText);

let computerScore = document.querySelector('#computer-score');
let computerScoreText = document.createElement('div');
computerScoreText.classList.add('score-text')
computerScoreText.textContent = '0.0';
computerScoreText.id = 'computerscore';
computerScore.appendChild(computerScoreText);

rockButton.addEventListener('click', (event) =>{
    result = playRound("rock");
    updateGame(result);
});

paperButton.addEventListener('click', (event) =>{
    result = playRound("paper")
    updateGame(result);

});

scissorsButton.addEventListener('click', (event) =>{
    result = playRound("scissors")
    updateGame(result);
});

function updateGame(roundOutcome){
    let gameText = document.querySelector('#gametext');
    let humanScoreText = document.querySelector('#humanscore');
    let computerScoreText = document.querySelector('#computerscore');

    let humanNumber = Number(humanScoreText.textContent);
    let computerNumber = Number(computerScoreText.textContent);
    if (roundOutcome=="tie"){
        humanNumber = humanNumber +0.5;
        computerNumber = computerNumber + 0.5;
        humanScoreText.textContent = "" + humanNumber;
        computerScoreText.textContent = "" + computerNumber;
    }
    else if (roundOutcome == "human"){
        humanNumber = humanNumber + 1;
        humanScoreText.textContent = "" + humanNumber;
    }
    else if (roundOutcome == "computer"){
        computerNumber = computerNumber + 1;
        computerScoreText.textContent = "" + computerNumber;
    }

    if (humanNumber>=5 || computerNumber>=5){
        humanScoreText.textContent = 0;
        computerScoreText.textContent = 0;
    }
    if (humanNumber>=5 && computerNumber >=5){
        gameText.textContent = "Game tied, everyone is a winner!"
    }
    else if(humanNumber>=5){
        gameText.textContent = "Game over, you won!"
    }

    else if(computerNumber>=5){
        gameText.textContent = "Game over, you lost..."
    }
}

function playRound(humanSelection){
    console.assert(humanSelection=='rock' ||humanSelection=='paper' || humanSelection=='scissors');
    let gameText = document.querySelector('#gametext');
    let computerSelection = getComputerChoice();
    victoryMessage = humanSelection + " beats " + computerSelection + "!";
    defeatMessage = computerSelection + " beats " + humanSelection + "...";

    if (computerSelection==humanSelection){
        gameText.textContent = "It's a tie!"
        return "tie";
    }
    else if(computerSelection=='rock'){
        if (humanSelection=='paper'){
            gameText.textContent = victoryMessage;
            return "human";
        }
        else{
            gameText.textContent = defeatMessage;
            return "computer";
        }
    }
    else if(computerSelection=='paper'){
        if (humanSelection=='scissors'){
            gameText.textContent = victoryMessage;
            return "human";
        }
        else{
            gameText.textContent = defeatMessage;
            return "computer";
        }
    }
    else if(computerSelection=='scissors'){
        if (humanSelection=='rock'){
            gameText.textContent = victoryMessage;
            return "human";
        }
        else{
            gameText.textContent = defeatMessage;
            return "computer";
        }
    }
}

function getComputerChoice(){
    roll = Math.random();
    if (roll<1/3){
        return "rock";
    }
    else if (roll<2/3){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    while(true){
        choice = prompt("Enter 'rock', 'paper', or 'scissors'!");
        choice = choice.toLowerCase();
        if (choice == 'rock' || choice == 'paper' || choice == 'scissors'){
            return choice;
        }
        else{
            console.log("Invalid input...")
        }
    }
}

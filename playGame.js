const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// const body = document.querySelector("body");
// const gameText = document.createElement("div");
// gameText.classList.add("game-text")
// gameText.textContent = "Make your choice!"

const humanScore = document.querySelector('#human-score');
const computerScore = document.querySelector('#computer-score');
const humanScoreText = document.createElement('div');
humanScoreText.classList.add('score-text')
humanScoreText.textContent = '0.0';
const computerScoreText = document.createElement('div');
computerScoreText.classList.add('score-text')
computerScoreText.textContent = '0.0';

humanScore.append(humanScoreText);
computerScore.append(computerScoreText);

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

function updateGame(roundOutcome, humanScore=humanScoreText, computerScore=computerScoreText){
    humanNumber = Number(humanScore.textContent);
    computerNumber = Number(computerScore.textContent);
    switch (roundOutcome){
        case "tie":
            humanScore.textContent = "" + (humanNumber + 0.5);
            computerScore.textContent = "" + (computerNumber + 0.5);

        case "human":
            humanScore.textContent = "" + (humanNumber + 1);
            
        case "computer":
            computerScore.textContent = "" + (computerNumber + 1);
    }

    if (Number(humanScore.textContent)>=5 || Number(computerScore.textContent)>=5){
        humanScore.textContent = 0;
        computerScore.textContent = 0;
    }
}

function playRound(humanSelection){
    console.assert(humanSelection=='rock' ||humanSelection=='paper' || humanSelection=='scissors');
    const computerSelection = getComputerChoice();
    victoryMessage = "You win! " + humanSelection + " beats " + computerSelection + "!";
    defeatMessage = "You lose! " + computerSelection + " beats " + humanSelection + "...";

    if (computerSelection==humanSelection){
        console.log("It's a tie!")
        return "tie";
    }
    else if(computerSelection=='rock'){
        if (humanSelection=='paper'){
            console.log(victoryMessage);
            return "human";
        }
        else{
            console.log(defeatMessage);
            return "computer";
        }
    }
    else if(computerSelection=='paper'){
        if (humanSelection=='scissors'){
            console.log(victoryMessage);
            return "human";
        }
        else{
            console.log(defeatMessage);
            return "computer";
        }
    }
    else if(computerSelection=='scissors'){
        if (humanSelection=='rock'){
            console.log(victoryMessage);
            return "human";
        }
        else{
            console.log(defeatMessage);
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

function playGame(){
let humanScore=0;
let computerScore=0;
n = 5;

for (let i=0; i<n; i++){
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    result = playRound(computerSelection, humanSelection);
    if (result=="human"){
        humanScore = humanScore + 1;
    }
    else if (result=="computer"){
        computerScore = computerScore + 1;
    }
    else if (result=="tie"){
        humanScore = humanScore + 0.5;
        computerScore = computerScore + 0.5;
    }
}
if (computerScore>humanScore){
    console.log("Game over! The computer won with " + computerScore + " points!");
}
else if(computerScore<humanScore){
    console.log("Game over! You won with " + humanScore + " points!");
}
else{
    console.log("Game over! It's a tie, you both got " + humanScore + " points!")
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


function playRound(computerSelection, humanSelection){
    console.assert(computerSelection=='rock' || computerSelection=='paper' || computerSelection=='scissors');
    console.assert(humanSelection=='rock' ||humanSelection=='paper' || humanSelection=='scissors');
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
}

let rock = "rock";
let paper = "paper";
let  scissor = "scissor";

let humanScores = 0;
let computerScores = 0;

let totalGames = 1;

let result = " ";


function getHumanChoice () {
    let humanChoice = prompt("Enter your choice (rock, paper, scissor):").toLowerCase();

    if(humanChoice == rock) {
        return "rock";
    }
    else if( humanChoice == paper) {
        return "paper";
    }
    else {
        return "scissor";   
    }


}

function getComputerChoice() {
    let randomChoices = Math.floor(Math.random()* 3);

    if( randomChoices==0) {
        return "rock";
    }
    else if( randomChoices==1) {
        return "paper";
    }
    else {
        return "scissor";   
    }

};

function playRound(humanChoice, computerChoice) {

    if ((humanChoice == rock && computerChoice == rock) ||
        (humanChoice == scissor && computerChoice == scissor) ||
        (humanChoice == paper && computerChoice == paper)
    ) {
        return "draw"
    }
    else if (
        (humanChoice === rock && computerChoice === scissor) ||
        (humanChoice === paper && computerChoice === rock) ||
        (humanChoice === scissor && computerChoice === paper)
    ) {
        humanScores++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScores++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

}

function playGame(totalGames) {

    for (let i = 1; i < totalGames; i++) {
        
        console.log(`\n--- Round ${i} ---`);

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        console.log("Your choice: " + humanChoice);
        console.log("Computer's choice: " + computerChoice);
    
        let result = playRound(humanChoice, computerChoice);
        console.log(result);
    
        console.log(`Current Score: You - ${humanScores}, Computer - ${computerScores}`);

      }

    console.log(`\n--- Result ---`)


    if (humanScores > computerScores) {
        return result = " You Won !"
    } 
    else if ( humanScores < computerScores) {
        return result = "you lose :("
    }else {
        return result = "draw, refresh the page to try again!"
    }
   


}

playGame(6); 
console.log(result);


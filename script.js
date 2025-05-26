let gameStarted = false;

function startGame() {
    const button = document.getElementById("startGame");
    const score = document.getElementById("score");
    const header = document.getElementById("header");
    const choices = document.getElementById("choices");

    if (!gameStarted) {
        button.textContent = "GO BACK";
        gameStarted = true;

        header.classList.add("hidden")

        const scoreH1 = document.createElement("h1");
        scoreH1.textContent = "SCORE";
        scoreH1.id = "scoreTitle";
        score.appendChild(scoreH1);

        const playerScore = document.createElement("div");
        playerScore.classList.add("playerScore");
        playerScore.textContent = "Player";
        playerScore.id = "playerScore";
        score.appendChild(playerScore);

        const computerScore = document.createElement("div");
        computerScore.classList.add("computerScore");
        computerScore.textContent = "Computer";
        computerScore.id = "computerScore";
        score.appendChild(computerScore);

        const choicesH2 = document.createElement("h2")
        choicesH2.textContent = "Select Your Choices"
        choices.appendChild(choicesH2);

        const choicesRock = document.createElement("button")
        choicesRock.id = "rock"
        choicesRock.classList.add("choicesBtn")
        choicesRock.textContent = "ROCK"
        choices.appendChild(choicesRock);

        const choicesPaper = document.createElement("button")
        choicesPaper.id = "paper"
        choicesPaper.classList.add("choicesBtn")
        choicesPaper.textContent = "PAPER"
        choices.appendChild(choicesPaper);

        const choicesScissor = document.createElement("button")
        choicesScissor.id = "scissor"
        choicesScissor.classList.add("choicesBtn")
        choicesScissor.textContent = "scissor"
        choices.appendChild(choicesScissor);

        

        const buttons = document.querySelectorAll(".choicesBtn");

        

        function playGame () {
           

            let humanScores = 0
            let computerScores = 0
            let i = 0
            const playerScoreP = document.createElement("p")
            const computerScoreP = document.createElement("p")
            const notifScore = document.createElement("h3")
                
            buttons.forEach((button) => {
                
                button.addEventListener("click", () => {
                    let humanChoice = button.id
                    console.log(`\n--- Round ${i++} ---`);
                    console.log("you choices " + humanChoice) 

                    let computerChoice = Math.floor(Math.random()* 3);

                        if( computerChoice==0) {
                            computerChoice = "rock"
                            console.log("computer " + computerChoice) ;
                        }
                        else if( computerChoice==1) {
                            computerChoice = "scissor"
                            console.log("computer " + computerChoice) ;

                        }
                        else {
                            computerChoice = "paper"
                            console.log("computer " + computerChoice) ;
                    
                        }

                     if (
                        (humanChoice == "rock" && computerChoice == "rock") ||
                        (humanChoice == "scissor" && computerChoice == "scissor") ||
                        (humanChoice == "paper" && computerChoice == "paper")
                        ) {
                            console.log("draw") 
                            notifScore.textContent = "Draw!, Try Again";

                        }
                        else if (
                            (humanChoice === "rock" && computerChoice === "scissor") ||
                            (humanChoice === "paper" && computerChoice === "rock") ||
                            (humanChoice === "scissor" && computerChoice === "paper")
                        ) {
                            humanScores++;
                            playerScoreP.textContent = humanScores;
                            computerScoreP.textContent = computerScores;
                            notifScore.textContent = "You win! " + humanChoice + " beats " + computerChoice;
                            
                            console.log("You win! " + humanChoice + " beats " + computerChoice) 
                            console.log("you " + humanScores + " computer " +computerScores)
                        } else {
                            computerScores++;
                            playerScoreP.textContent = humanScores;
                            computerScoreP.textContent = computerScores;
                            notifScore.textContent = "You lose! " + computerChoice + " beats " + humanChoice;

                            console.log("You lose! " + computerChoice + " beats " + humanChoice) 
                            console.log("you " + humanScores + " computer " +computerScores)
         


                        }

                        playerScore.appendChild(playerScoreP);
                        computerScore.appendChild(computerScoreP);
                        score.appendChild(notifScore);


                });
                
                
            });
            
        }

        
        
        playGame()


    } else {

        button.textContent = "PLAY GAME";
        gameStarted = false;

        header.classList.remove("hidden")

        const scoreTitle = document.getElementById("scoreTitle");
        const playerScore = document.getElementById("playerScore");
        const computerScore = document.getElementById("computerScore");

        if (scoreTitle) score.removeChild(scoreTitle);
        if (playerScore) score.removeChild(playerScore);
        if (computerScore) score.removeChild(computerScore);

        choices.innerHTML = "";
    }

}





// THE OLD CONSOLE GAMES //

// let rock = "rock";
// let paper = "paper";
// let  scissor = "scissor";

// let humanScores = 0;
// let computerScores = 0;

// let totalGames = 1;

// let result = " ";

// function getHumanChoice () {
//     //let humanChoice = prompt("Enter your choice (rock, paper, scissor):").toLowerCase();

//     if(humanChoice == rock) {
//         return "rock";
//     }
//     else if( humanChoice == paper) {
//         return "paper";
//     }
//     else {
//         return "scissor";   
//     }


// }

// function getComputerChoice() {
//     let randomChoices = Math.floor(Math.random()* 3);

//     if( randomChoices==0) {
//         return "rock";
//     }
//     else if( randomChoices==1) {
//         return "paper";
//     }
//     else {
//         return "scissor";   
//     }

// };

// function playRound(humanChoice, computerChoice) {

//     if ((humanChoice == rock && computerChoice == rock) ||
//         (humanChoice == scissor && computerChoice == scissor) ||
//         (humanChoice == paper && computerChoice == paper)
//     ) {
//         return "draw"
//     }
//     else if (
//         (humanChoice === rock && computerChoice === scissor) ||
//         (humanChoice === paper && computerChoice === rock) ||
//         (humanChoice === scissor && computerChoice === paper)
//     ) {
//         humanScores++;
//         return `You win! ${humanChoice} beats ${computerChoice}.`;
//     } else {
//         computerScores++;
//         return `You lose! ${computerChoice} beats ${humanChoice}.`;
//     }

// }

// function playGame(totalGames) {

//     for (let i = 1; i < totalGames; i++) {
        
//         console.log(`\n--- Round ${i} ---`);

//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
        
//         console.log("Your choice: " + humanChoice);
//         console.log("Computer's choice: " + computerChoice);
    
//         let result = playRound(humanChoice, computerChoice);
//         console.log(result);
    
//         console.log(`Current Score: You - ${humanScores}, Computer - ${computerScores}`);

//       }

//     console.log(`\n--- Result ---`)


//     if (humanScores > computerScores) {
//         return result = " You Won !"
//     } 
//     else if ( humanScores < computerScores) {
//         return result = "you lose :("
//     }else {
//         return result = "draw, refresh the page to try again!"
//     }
   


// }

// playGame(6); 
// console.log(result);


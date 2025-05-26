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

                    let computerChoice = Math.floor(Math.random()* 3);

                        if( computerChoice==0) {
                            computerChoice = "rock"
                        }
                        else if( computerChoice==1) {
                            computerChoice = "scissor"

                        }
                        else {
                            computerChoice = "paper"
                    
                        }

                     if (
                        (humanChoice == "rock" && computerChoice == "rock") ||
                        (humanChoice == "scissor" && computerChoice == "scissor") ||
                        (humanChoice == "paper" && computerChoice == "paper")
                        ) {
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
                            
                        } else {
                            computerScores++;
                            playerScoreP.textContent = humanScores;
                            computerScoreP.textContent = computerScores;
                            notifScore.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
         


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






let gameStarted = false;

function startGame() {
    const button = document.getElementById("startGame");
    const score = document.getElementById("score");
    const header = document.getElementById("header");
    const choices = document.getElementById("choices");

    if (!gameStarted) {
        button.textContent = "GO BACK";
        gameStarted = true;

        header.classList.add("hidden");

        score.classList.remove("hidden");
        choices.classList.remove("hidden");

        score.innerHTML = "";

        const scoreH1 = document.createElement("h1");
        scoreH1.textContent = "SCORE";
        scoreH1.id = "scoreTitle";
        score.appendChild(scoreH1);

        const scoreLabels = document.createElement("div");
        scoreLabels.id = "scoreLabels";
        const playerLabel = document.createElement("div");
        playerLabel.textContent = "Player";
        const colonLabel = document.createElement("div");
        colonLabel.textContent = ":";
        const computerLabel = document.createElement("div");
        computerLabel.textContent = "Computer";
        scoreLabels.appendChild(playerLabel);
        scoreLabels.appendChild(colonLabel);
        scoreLabels.appendChild(computerLabel);
        score.appendChild(scoreLabels);

        const scoreValues = document.createElement("div");
        scoreValues.id = "scoreValues";
        const playerScoreValue = document.createElement("div");
        playerScoreValue.id = "playerScore";
        playerScoreValue.textContent = "0";
        const colonValue = document.createElement("div");
        colonValue.textContent = ":";
        const computerScoreValue = document.createElement("div");
        computerScoreValue.id = "computerScore";
        computerScoreValue.textContent = "0";
        scoreValues.appendChild(playerScoreValue);
        scoreValues.appendChild(colonValue);
        scoreValues.appendChild(computerScoreValue);
        score.appendChild(scoreValues);

        // Notification message
        const notifScore = document.createElement("div");
        notifScore.id = "notification";
        score.appendChild(notifScore);

        // Choices header
        const choicesH2 = document.createElement("h2");
        choicesH2.textContent = "Select Your Choices";
        choices.appendChild(choicesH2);

        // Choice buttons
        const choicesRock = document.createElement("button");
        choicesRock.id = "rock";
        choicesRock.classList.add("choicesBtn");
        choicesRock.textContent = "ROCK";
        choices.appendChild(choicesRock);

        const choicesPaper = document.createElement("button");
        choicesPaper.id = "paper";
        choicesPaper.classList.add("choicesBtn");
        choicesPaper.textContent = "PAPER";
        choices.appendChild(choicesPaper);

        const choicesScissor = document.createElement("button");
        choicesScissor.id = "scissor";
        choicesScissor.classList.add("choicesBtn");
        choicesScissor.textContent = "SCISSOR";
        choices.appendChild(choicesScissor);

        const buttons = document.querySelectorAll(".choicesBtn");

        let humanScores = 0;
        let computerScores = 0;

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                let humanChoice = button.id;

                let computerChoice = Math.floor(Math.random() * 3);
                if (computerChoice === 0) {
                    computerChoice = "rock";
                } else if (computerChoice === 1) {
                    computerChoice = "scissor";
                } else {
                    computerChoice = "paper";
                }

                if (
                    (humanChoice === "rock" && computerChoice === "rock") ||
                    (humanChoice === "scissor" && computerChoice === "scissor") ||
                    (humanChoice === "paper" && computerChoice === "paper")
                ) {
                    notifScore.textContent = "Draw! Try Again";
                } else if (
                    (humanChoice === "rock" && computerChoice === "scissor") ||
                    (humanChoice === "paper" && computerChoice === "rock") ||
                    (humanChoice === "scissor" && computerChoice === "paper")
                ) {
                    humanScores++;
                    notifScore.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                } else {
                    computerScores++;
                    notifScore.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                }

                playerScoreValue.textContent = humanScores;
                computerScoreValue.textContent = computerScores;
            });
        });

    } else {
        button.textContent = "PLAY GAME";
        gameStarted = false;

        header.classList.remove("hidden");

        score.classList.add("hidden");
        choices.classList.add("hidden");

        score.innerHTML = "";
        choices.innerHTML = "";
    }
}

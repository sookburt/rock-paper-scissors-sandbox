const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {

    const playerOneMove = document.querySelector("#player-one-move__img");
    playerOneMove.src = `./images/${moveOne}.png`;
    playerOneMove.alt = `Player One chose ${moveOne}`;
    document.querySelector("#player-one-move__name").textContent = `Player One chose ${moveOne}`;

    const playerTwoMove = document.querySelector("#player-two-move__img");
    playerTwoMove.src = `./images/${moveTwo}.png`; 
    playerTwoMove.alt = `Player Two chose ${moveTwo}`;
    document.querySelector("#player-two-move__name").textContent = `Player Two chose ${moveTwo}`;

    const outcomeDiv = document.createElement("h2");
    outcomeDiv.id = "outcome";
    outcomeDiv.textContent = outcome;
    document.body.append(outcomeDiv);
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
const round_number_span = document.getElementById("round-number");
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("pc-score");
const round_result_p = document.querySelector("#round-result > p");
const bottom_div = document.getElementById("bottom");
const btn_group = document.querySelectorAll("#player-section > .btn");

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

function computerPlay() {
    return randomChoice(['Rock', 'Paper', 'Scissors'])
  }

function playRound(playerSelection) {
    var computerSelection = computerPlay();

    if (playerSelection === computerSelection) // Tie
    {
        round_result_p.innerHTML = "Tie! Both of you played " + playerSelection;
    }
    else if ( // Player Win
        (playerSelection === "Rock" && computerSelection === "Scissors") 
    ||  (playerSelection === "Scissors" && computerSelection === "Paper")
    ||  (playerSelection === "Paper" && computerSelection === "Rock"))
    {    
        playerScore += 1;
        playerScore_span.innerHTML = playerScore;
        round_result_p.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else // Player Lose
    {
        computerScore += 1;
        computerScore_span.innerHTML = computerScore;
        round_result_p.innerHTML = "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    roundNumber += 1;
    round_number_span.innerHTML = roundNumber;

    if (computerScore >= 5){
        round_result_p.innerHTML = "You Lose the Game!";
        endGame();
    }

    if (playerScore >= 5){
        round_result_p.innerHTML = "You Win the Game!";
        endGame();
    }
  }

function endGame(){
    btn_group.forEach(btn => btn.disabled = true);
    bottom_div.classList.remove("hidden");
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    round_number_span.innerHTML = 0;
    playerScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    round_result_p.innerHTML = "Choose Your Move";
    bottom_div.classList.add("hidden");
    btn_group.forEach(btn => btn.disabled = false);
}

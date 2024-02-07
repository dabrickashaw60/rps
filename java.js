const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
let usrScore = 0;
let cpuScore = 0;

function playGame(){

function getComputerChoice(){
  let cpuOptions = ["rock","paper","scissors"];
  let random = Math.floor(Math.random() * cpuOptions.length);
  let cpuChoice = cpuOptions[random];
  return cpuChoice;
}
function getUserChoice(){
  let usrChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
  return usrChoice;
}

function playRound(playerSelection, computerSelection){

  if(playerSelection === computerSelection){
    endGame = "It's a draw!";
    let getBack = [endGame];
    return getBack;
  }
  else if(playerSelection === ROCK && computerSelection === SCISSORS){
    endGame = "Rock beats Scissors! User wins";
    usrScore++;
    let getBack = [endGame, usrScore];
    return getBack;
  }
  else if(playerSelection === ROCK && computerSelection === PAPER){
    endGame = "Paper beats Rock! CPU wins";
    cpuScore++;
    let getBack = [endGame, cpuScore];
    return getBack;
  }
  else if(playerSelection === PAPER && computerSelection === ROCK){
    endGame = "Paper beats Rock! User wins"
    usrScore++;
    let getBack = [endGame, usrScore];
    return getBack;
  }
  else if(playerSelection === PAPER && computerSelection === SCISSORS){
    endGame = "Scissors beats Paper! CPU wins"
    cpuScore++;
    let getBack = [endGame, cpuScore];
    return getBack;
  }
  else if(playerSelection === SCISSORS && computerSelection === PAPER){
    endGame = "Scissors beats Paper! User wins"
    usrScore++;
    let getBack = [endGame, usrScore];
    return getBack;
  }
  else if(playerSelection === SCISSORS && computerSelection === ROCK){
    endGame = "Rock beats Scissors! CPU wins"
    cpuScore++;
    let getBack = [endGame, cpuScore];
    return getBack;
  }
}  

const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();
const thisRound = playRound(playerSelection,computerSelection);
console.log("User: " + playerSelection);
console.log("CPU: " + computerSelection);
console.log(thisRound[0]);
console.log("User Score: "+ usrScore);
console.log("CPU Score: " + cpuScore);
console.log("************************");
}
while(usrScore < 4 && cpuScore < 4){
  playGame()
}
  console.log("GAME OVER!");
  console.log("FINAL SCORE: ");
  console.log("USER: " + usrScore);
  console.log("CPU: " + cpuScore);
  if (usrScore > cpuScore){
    console.log("USER WINS!!!");
    console.log("************************");
  }
  else if (cpuScore > usrScore){
    console.log("CPU WINS :(");
    console.log("************************");
  }
const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
let usrScore = 0;
let cpuScore = 0;
let currentRound = 1;
const startBtn = document.querySelector('#start');
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const btnClass = document.querySelectorAll('buttons');
const holder = document.querySelector('#holder');

startBtn.addEventListener('click', () => {
  startGame();
});

function startGame(){

function playGame(){ 

holder.replaceChildren();

function getComputerChoice(){
  let cpuOptions = ["rock","paper","scissors"];
  let random = Math.floor(Math.random() * cpuOptions.length);
  let cpuChoice = cpuOptions[random];
  return cpuChoice;
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


const computerSelection = getComputerChoice();
const thisRound = playRound(playerSelection,computerSelection);
const content = document.createElement('div');
content.innerHTML = "<h2>" + 'ROUND ' + currentRound + "</h2>";
content.innerHTML += 'USER: ' + playerSelection + "<br />";
content.innerHTML += 'CPU: ' + computerSelection + "<br />";
content.innerHTML += thisRound[0] + "<br />";
content.innerHTML += 'User Score: ' + usrScore + "<br />";
content.innerHTML += 'CPU Score: ' + cpuScore + "<br />";

holder.appendChild(content);
currentRound++;

}

  rockBtn.addEventListener('click', () => {
    playerSelection = "rock";
  
    playGame();

    if(usrScore >= 4 || cpuScore >= 4){
      console.log("GAME OVER!");
      console.log("FINAL SCORE: ");
      console.log("USER: " + usrScore);
      console.log("CPU: " + cpuScore);
        if (usrScore > cpuScore){
        console.log("USER WINS!!!");
        console.log("************************");
        usrScore = 0;
        cpuScore = 0;
        currentRound = 1;
        }
        else if (cpuScore > usrScore){
        console.log("CPU WINS :(");
        console.log("************************");
        usrScore = 0;
        cpuScore = 0;
        currentRound = 1;        
        }
        else{
        
        } 
    };
  }); 
  paperBtn.addEventListener('click', () => {
    playerSelection = "paper";
  
    playGame();

    if(usrScore >= 4 || cpuScore >= 4){
      console.log("GAME OVER!");
      console.log("FINAL SCORE: ");
      console.log("USER: " + usrScore);
      console.log("CPU: " + cpuScore);
        if (usrScore > cpuScore){
        console.log("USER WINS!!!");
        console.log("************************");
        usrScore = 0;
        cpuScore = 0; 
        currentRound = 1;       
        }
        else if (cpuScore > usrScore){
        console.log("CPU WINS :(");
        console.log("************************");
        usrScore = 0;
        cpuScore = 0; 
        currentRound = 1;       
        }
        else{
        
        } 
    };
  }); 
  scissorsBtn.addEventListener('click', () => {
    playerSelection = "scissors";
  
    playGame();

    if(usrScore >= 4 || cpuScore >= 4){
      console.log("GAME OVER!");
      console.log("FINAL SCORE: ");
      console.log("USER: " + usrScore);
      console.log("CPU: " + cpuScore);
        if (usrScore > cpuScore){
        console.log("USER WINS!!!");
        console.log("************************");
        usrScore = 0;
        cpuScore = 0; 
        currentRound = 1;       
        }
        else if (cpuScore > usrScore){
        console.log("CPU WINS :(");
        console.log("************************");
        usrScore = 0;
        cpuScore = 0; 
        currentRound = 1;       
        }
        else{
        
        } 
    };
  });     

}

/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
let userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const r_div = document.getElementById("r");
const p_div = document.getElementById("p");
const s_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

console.log(getComputerChoice());

function convertToWord(letter) {
  if(letter === "r") return "r";
  if(letter === "p") return "p";
  return "s";
}  

function win(user, computer) {
  console.log(" USER WINS");
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innnerHTML = computerScore;
  result_p = user + " beats " + computer + ".You win !"; 
}

function lose() {
  console.log(" USER LOSES");
  computerScore++;
}

function draw() {
  console.log(" DRAW");
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("Computer selects  " + computerChoice);
  console.log("User selects  " + userChoice);
  
  switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
         win();
         break;
    case "rp":
    case "ps":
    case "sr":
         lose();
         break;
    case "rr":
    case "pp":
    case "ss":
         draw();
         break;
  }
} 

game("c");

function main() {
  r_div.addEventListener('click',function() {
    game("r");
  })
  
  p_div.addEventListener('click',function() {
    game("p");
  })
  
  s_div.addEventListener('click',function() {
    game("s");
  })
}
  
main();
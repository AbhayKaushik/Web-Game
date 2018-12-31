/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log('hi');
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const r_div = document.getElementById("fire");
const p_div = document.getElementById("water");
const s_div = document.getElementById("earth");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

console.log(getComputerChoice());

function convertToWord(letter) {
  if(letter === "r") return "fire";
  if(letter === "p") return "water";
  return "earth";
}  

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div =  document.getElementById(userChoice);
  
  console.log(" USER WINS");
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  console.log(" User :" + userChoice + " and Commputer: " + computerChoice);
  result_p.innerHTML = ` ${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}.You win ! `; 
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow') , 300);
}


function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  console.log(" USER LOSES");
  computerScore = computerScore + 1;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  console.log(" User :" + userChoice + " and Commputer: " + computerChoice);
  result_p.innerHTML = ` ${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}.You lose ! `;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow') , 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  console.log(" DRAW");
  result_p.innerHTML = ` ${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord}.A draw ! `;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow') , 100);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("Computer selects  " + computerChoice);
  console.log("User selects  " + userChoice);
  
  switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
         win(userChoice , computerChoice);
         break;
    case "rp":
    case "ps":
    case "sr":
         lose(userChoice, computerChoice);
         break;
    case "rr":
    case "pp":
    case "ss":
         draw(userChoice, computerChoice);
         break;
  }
} 

game("c");

function main() {
  r_div.addEventListener('click',() => game("r"));
  p_div.addEventListener('click',() => game("p"));
  s_div.addEventListener('click',() => game("s"));
}
  
main();
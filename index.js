let timer = 5;


let userScore = 0;
let compScore = 0;
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("comp-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function computerMove() {
  let choice = ["r", "s", "p"];
  let ran = Math.floor(Math.random() * 3);
  return choice[ran];
}

function userWin() {
  userScore++;
  user_score.innerHTML = userScore;
}

function compWin() {
  compScore++;
  comp_score.innerHTML = compScore;
}

function click() {

}

function game(userChoice) {
  let comp = computerMove();
  console.log(userChoice + comp);
  switch (userChoice + comp) {
    case "rr":
      console.log("DRAW!");
      break;
    case "rs":
      console.log("User Win!");
      userWin();
      break;
    case "rp":
      console.log("Computer Win!");
      compWin();
      break;
    case "sr":
      console.log("Computer Win!");
      compWin();
      break;
    case "ss":
      console.log("DRAW!");
      break;
    case "sp":
      console.log("User Win!");
      compWin();
      break;
    case "pr":
      console.log("User Win!");
      userWin();
      break;
    case "pp":
      console.log("DRAW!");
      break;
    case "ps":
      console.log("Computer Win!");
      compWin();
      break;
    default:
      // alert("You dont pick anything!");
      console.log("You dont Pick anythin!");
  }
}

let user_choice = null;
getUser =(userChoice) => userChoice;

function playAgain() {
  timer = 5;
  main();
}

const pa = document.getElementById("btn-play");
function main() {
  timer = 5;
  let chc;
  const Timer = setInterval(function () {
    if (timer <= 0) {
      clearInterval(Timer);
      game(chc);
      document.getElementById("timers").innerHTML = "Time's Up!";
      pa.style.cssText = "display:flex;"
      pa.addEventListener("click", function() {
        pa.style.cssText = "display:none"
        playAgain();
      });
    } else if(timer > 0) {
      rock.addEventListener("click", function () {
        chc = getUser("r");
      });
      paper.addEventListener("click", function () {
        chc =getUser("p");
      });
      scissors.addEventListener("click", function () {
        chc =getUser("s");
      });
      document.getElementById("timers").innerHTML = timer + " second(s)";
    }
    timer -= 1;
  }, 1000);
}

main();

var timer;

let userScore = 0;
let compScore = 0;
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("comp-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const ann = document.getElementById("ann");

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

function change(choice) {
  if (choice == "r") return "Rock";
  else if (choice == "s") return "Scissors";
  else if (choice == "p") return "Paper";
}

function game(userChoice) {
  let comp = computerMove();
  const translate = change(userChoice);
  const translate2 = change(comp);
  console.log(userChoice + comp);
  switch (userChoice + comp) {
    case "rr":
      console.log("DRAW!");
      ann.innerHTML = `${translate} is the same as ${translate2}. DRAW!!`;
      break;
    case "rs":
      console.log("User Win!");
      ann.innerHTML = `${translate} beats ${translate2}!`;
      userWin();
      break;
    case "rp":
      console.log("Computer Win!");
      ann.innerHTML = `${translate} lose to ${translate2}!`;
      compWin();
      break;
    case "sr":
      console.log("Computer Win!");
      ann.innerHTML = `${translate} lose to ${translate2}!`;
      compWin();
      break;
    case "ss":
      console.log("DRAW!");
      ann.innerHTML = `${translate} is the same as ${translate2}. DRAW!!`;
      break;
    case "sp":
      console.log("User Win!");
      ann.innerHTML = `${translate} beats ${translate2}!`;
      compWin();
      break;
    case "pr":
      console.log("User Win!");
      ann.innerHTML = `${translate} beats ${translate2}!`;
      userWin();
      break;
    case "pp":
      console.log("DRAW!");
      ann.innerHTML = `${translate} is the same as ${translate2}. DRAW!!`;
      break;
    case "ps":
      console.log("Computer Win!");
      ann.innerHTML = `${translate} lose to ${translate2}!`;
      compWin();
      break;
    default:
      ann.innerHTML = `Did you not pick anything?`;
      console.log("You dont Pick anythin!");
  }
}

let user_choice = null;
getUser = (userChoice) => userChoice;

function playAgain() {
  ann.innerHTML = "Pick your choice";
  main();
}
var Timer;
var running = true;
function startTimer() {
  timer = 5;
  let chc;
  running = true;
  Timer = setInterval(function () {
    if (timer >= 0) {
      rock.addEventListener("click", function () {
        chc = getUser("r");
      });
      paper.addEventListener("click", function () {
        chc = getUser("p");
      });
      scissors.addEventListener("click", function () {
        chc = getUser("s");
      });
      document.getElementById("timers").innerHTML = timer + " second(s)";
      timer -= 1;
    } else {
      while(running){
        running = false;
        game(chc);
        pa.style.cssText = "display:flex;";
        pa.addEventListener("click", function () {
          clearInterval(Timer);
          pa.style.cssText = "display:none";
          playAgain();
        });
      }
    }
  }, 1000);
}

const pa = document.getElementById("btn-play");
function main() {
  startTimer();
}

main();

// console.log("Timer:" + timer);
// rock.addEventListener("click", function () {
//   chc = getUser("r");
// });
// paper.addEventListener("click", function () {
//   chc =getUser("p");
// });
// scissors.addEventListener("click", function () {
//   chc =getUser("s");
// });
// document.getElementById("timers").innerHTML = timer + " second(s)";

// timer = 5;
//       game(chc);
//       document.getElementById("timers").innerHTML = "Time's Up!";
//       pa.style.cssText = "display:flex;"
//       pa.addEventListener("click", function() {
//         pa.style.cssText = "display:none"
//         playAgain();
//       });

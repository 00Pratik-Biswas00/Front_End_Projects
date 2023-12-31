let random_number;
let computerChoice;
let resMsg;
let score;
let scoreStr = localStorage.getItem("Score");
gen_score(scoreStr);

function gen_score(scoreStr) {
  // ternary syntax
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  // let score;
  // if (scoreStr !== undefined) {
  //   score = JSON.parse(scoreStr);
  // } else {
  //   score = {
  //     win: 0,
  //     lost: 0,
  //     tie: 0,
  //   };
  // }

  score.displayScore = function () {
    return `Your score: Win: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
  };
}

function reset_score() {
  localStorage.clear();
  gen_score();
  show_result();
}

function computer_choice() {
  random_number = Math.random() * 3;
  if (random_number <= 1) {
    computerChoice = "Bat";
  } else if (random_number <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Wicket";
  }
  return computerChoice;
}

function user_choice(userChoice, computerChoice) {
  if (userChoice === "Bat") {
    if (computerChoice === "Bat") {
      score.tie++;
      return "It's a tie";
    } else if (computerChoice === "Ball") {
      score.win++;
      return "You won!";
    } else if (computerChoice === "Wicket") {
      score.lost++;
      return "Computer has won.";
    }
  } else if (userChoice === "Ball") {
    if (computerChoice === "Ball") {
      score.tie++;
      return "It's a tie";
    } else if (computerChoice === "Wicket") {
      score.win++;
      return "You won!";
    } else if (computerChoice === "Bat") {
      score.lost++;
      return "Computer has won.";
    }
  } else {
    if (computerChoice === "Wicket") {
      score.tie++;
      return "It's a tie";
    } else if (computerChoice === "Bat") {
      score.win++;
      return "You won!";
    } else if (computerChoice === "Ball") {
      score.lost++;
      return "Computer has won.";
    }
  }
}

function show_result(userChoice, computerChoice, resMsg) {
  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector("#user-move").innerText = userChoice
    ? `You have chosen ${userChoice}.\n`
    : "";

  document.querySelector("#computer-move").innerText =
    computerChoice !== undefined ? `Computer chooses: ${computerChoice}\n` : "";
  document.querySelector("#result").innerText = resMsg || "";
  document.querySelector("#score").innerText = `${score.displayScore()}`;
}

function click_bat() {
  computerChoice = computer_choice();
  resMsg = user_choice("Bat", computerChoice);
  show_result("Bat", computerChoice, resMsg);
}

function click_ball() {
  computerChoice = computer_choice();
  resMsg = user_choice("Ball", computerChoice);
  show_result("Ball", computerChoice, resMsg);
}

function click_wicket() {
  computerChoice = computer_choice();
  resMsg = user_choice("Wicket", computerChoice);
  show_result("Wicket", computerChoice, resMsg);
}

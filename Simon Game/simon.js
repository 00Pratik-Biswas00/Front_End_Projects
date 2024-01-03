let levelCount = 0;

let buttonColors = ["green", "red", "yellow", "blue"];

let isStarted = false;

let gamePattern = [];

let userClickedPattern = [];

let highScore = 0;
let nn = 0;

function gameStart() {
  levelCount = 0;
  gamePattern = [];
  isStarted = false;
}

function result(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextColor();
      }, 1000);
    }
  } else {
    nn = highScore - 1;
    buttonSound("wrong");
    $("body").addClass("game_over");
    $(".myHeading").text(
      `Game over! Press any key to restart. Highest level: ${nn}`
    );
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    gameStart();
  }
}

$(document).keypress(function () {
  if (!isStarted) {
    $(".myHeading").text(`Level: ${levelCount}, Highest Level:  ${nn}`);
    nextColor();
    isStarted = true;
  }
});

function buttonSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function buttonPressed(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function nextColor() {
  userClickedPattern = [];
  $(".myHeading").text(`Level: ${levelCount}, Highest Level: ${nn}`);
  levelCount++;
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);

  if (highScore < levelCount) highScore = levelCount;
  else
    $(".myHeading").text(
      `Level: ${levelCount}, Highest Level: ${highScore - 1}`
    );
  $("#" + randomColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  buttonSound(randomColor);
}

$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  buttonSound(userChosenColor);
  buttonPressed(userChosenColor);
  result(userClickedPattern.length - 1);
});

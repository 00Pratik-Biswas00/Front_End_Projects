var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// console.log(numberOfDrumButtons);
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "q":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "w":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "e":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "a":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "z":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "x":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "i":
      var tom1 = new Audio("sounds/sa.mp3");
      tom1.play();
      break;

    case "o":
      var tom2 = new Audio("sounds/re.mp3");
      tom2.play();
      break;

    case "p":
      var tom3 = new Audio("sounds/ga.mp3");
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio("sounds/ma.mp3");
      tom4.play();
      break;

    case "k":
      var snare = new Audio("sounds/pa.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/dha.mp3");
      crash.play();
      break;

    case "n":
      var kick = new Audio("sounds/ni.mp3");
      kick.play();
      break;
    case "m":
      var kick = new Audio("sounds/sa2.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

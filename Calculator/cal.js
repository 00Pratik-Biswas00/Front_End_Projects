let currentDisplay = "";
document.querySelector("#display").value = currentDisplay;

function press_button(params) {
  currentDisplay += params;
  document.querySelector("#display").value = currentDisplay;
}

function press_c_button() {
  currentDisplay = "";
  document.querySelector("#display").value = currentDisplay;
}

function press_equal_button() {
  let res = eval(currentDisplay);
  currentDisplay = res;
  document.querySelector("#display").value = currentDisplay;
}

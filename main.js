// colors to choose from, obviously
const colors = [
  "rgb(157, 12, 70)",
  "rgb(73, 71, 134)",
  "rgb(137, 172, 67)",
  "rgb(209, 175, 44)",
  "rgb(27, 147, 137)"
]
// pick random color
const randomColor = Math.floor(Math.random() * colors.length);
// targetting root in order to get its assigned variables
const consoleColor = document.documentElement;
//setting value of --body-color css variable
consoleColor.style.setProperty('--body-color', colors[randomColor]);

// game functions

const action = document.getElementById("left-button");
const option = document.getElementById("right-button");
const titleText = document.getElementById("main-text");


function mainScreen() {
  titleText.innerText = "POKEMON BATTLE";
  action.innerText = "PLAY";

  option.innerText = "ABOUT";
  option.setAttribute("onclick", "about()");
};

function about() {
  titleText.innerText = "This is POKEMON BATTLE. Use the ATTACK button to make your POKEMON use a random attack. With ITEM, you can use a random ITEM to heal them. Your opponent, your POKEMON and their movesets are randomly chosen. See how well you fare against the COMPUTER!";
  option.innerText = "RETURN";
  action.innerText = "";
  option.setAttribute("onclick", "mainScreen()");
};

window.onload = function() {
  mainScreen();
};
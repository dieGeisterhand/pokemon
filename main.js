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
const yourPokemon = document.getElementById("game-space-bottom-left");
const opponentPokemon = document.getElementById("game-space-top-right");






function mainScreen() {
  titleText.innerText = "POKÉMON BATTLE";

  action.innerText = "PLAY";
  action.setAttribute("onclick", "play()");

  option.innerText = "ABOUT";
  option.setAttribute("onclick", "about()");
};

function about() {
  titleText.innerText = "This is POKÉMON BATTLE. Use the ATTACK button to make your POKÉMON use a random attack. With ITEM, you can use a random ITEM to heal them. Your opponent, your POKÉMON and their movesets are randomly chosen. See how well you fare against the COMPUTER!";
  option.innerText = "RETURN";
  action.innerText = "";
  option.setAttribute("onclick", "mainScreen()");
};

function play() {
  titleText.innerText = "";

  action.innerText = "ATTACK";
  action.setAttribute("onclick", "attack()");

  option.innerText = "ITEM";
  option.setAttribute("onclick", "item()");


}

function attack(){};
function item(){};

window.onload = function() {
  mainScreen();
};
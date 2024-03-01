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
const userPokemonImg = document.getElementById("image-container-bottom");
const opponentPokemonImg = document.getElementById("image-container-top");
const userName = document.getElementById("your-name");
const currentEvent = document.getElementById("current-event");
const userHpTitle = document.getElementById("hp-text");
const computerHpTitle = document.getElementById("computer-hp-text");
const computerName = document.getElementById("computer-name");
const currentOpponentHp = document.getElementById("computer-current-hp");
const currentUserHp = document.getElementById("user-current-hp");
const divisionBottom = document.getElementById("health-division-bottom");
const divisionTop = document.getElementById("health-division-top");
const userMaxHp = document.getElementById("user-max-hp");
const computerMaxHp = document.getElementById("computer-max-hp");




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

  currentEvent.classList.add('current-event');

  action.innerText = "ATTACK";
  action.setAttribute("onclick", "attack()");

  option.innerText = "ITEM";
  option.setAttribute("onclick", "item()");

  userPokemonImg.setAttribute("src", "./1.png");
  opponentPokemonImg.setAttribute("src", "./2.gif")

  userName.innerText = "PIDGEY";
  computerName.innerText = "NIDORAN";

  userHpTitle.innerText = "HP:";
  computerHpTitle.innerText = "HP:";

  currentUserHp.innerText = "19";
  currentOpponentHp.innerText = "21";

  divisionTop.innerText = "/";
  divisionBottom.innerText = "/";

  userMaxHp.innerText = "19";
  computerMaxHp.innerText = "21";



}

function attack(){};
function item(){};

window.onload = function() {
  mainScreen();
};
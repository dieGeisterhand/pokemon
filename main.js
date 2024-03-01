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
const aboutText = document.getElementById("about-text");
const userPokemonImg = document.getElementById("image-container-bottom");
const opponentPokemonImg = document.getElementById("image-container-top");
const userName = document.getElementById("your-name");
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
  
  aboutText.innerText = "";
};

function about() {
  titleText.innerText = "";
  aboutText.innerText = "This is POKÉMON BATTLE. Use the ATTACK button to make your POKÉMON use a random attack. With ITEM, you can use a random ITEM to heal them. Your opponent, your POKÉMON and their movesets are randomly chosen. See how well you fare against the COMPUTER!";
  
  action.innerText = "";
  action.removeAttribute("onclick");

  option.innerText = "RETURN";
  option.setAttribute("onclick", "mainScreen()");
};

function play() {
  titleText.innerText = "What would PIDGEY do now?";

  action.innerText = "ATTACK";
  action.setAttribute("onclick", "attack()");

  option.innerText = "ITEM";
  option.setAttribute("onclick", "item()");

  userPokemonImg.setAttribute("src", "./1.png");
  opponentPokemonImg.setAttribute("src", "./2.gif")

  userName.innerText = "PIDGEY";
  computerName.innerText = "NIDORAN♂";

  userHpTitle.innerText = "HP:";
  computerHpTitle.innerText = "HP:";

  // REVISE THE CODE BELOW WHEN YOU ADD POKEMONS FROM AN OBJECT LIST
  currentUserHp.innerText = 19;
  currentOpponentHp.innerText = 21;

  divisionTop.innerText = "/";
  divisionBottom.innerText = "/";

  userMaxHp.innerText = "19";
  computerMaxHp.innerText = "21";

  // YES, THE ONES ABOVE

};

function attack() {
  titleText.innerText = "PIDGEY used GUST!"
  setTimeout(damageCalc, 2000);
  setTimeout(computerMove, 4000);
  setTimeout(userDamageCalc, 6000);
  setTimeout(defaultText, 9000);
  return;
};

function damageCalc() {
  currentOpponentHp.innerText -= 3;
  titleText.innerText = "NIDORAN♂ takes damage!";
  return;
};

function computerMove() {
  titleText.innerText = "NIDORAN♂ used QUICK ATTACK!";
  return;
}

function userDamageCalc() {
  currentUserHp.innerText -= 4;
  titleText.innerText = "PIDGEY takes damage!";
};

function defaultText() {
  titleText.innerText = "What would PIDGEY do now?"
  return;
}

function item(){};

window.onload = function() {
  mainScreen();
};
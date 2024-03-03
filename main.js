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

const mainText = document.getElementById("main-text");

const userPokemonImg = document.getElementById("image-container-bottom");
const opponentPokemonImg = document.getElementById("image-container-top");

const userName = document.getElementById("your-name");
const userHpTitle = document.getElementById("hp-text");
const currentUserHp = document.getElementById("user-current-hp");
const userMaxHp = document.getElementById("user-max-hp");
const divisionBottom = document.getElementById("health-division-bottom");

const computerName = document.getElementById("computer-name");
const computerHpTitle = document.getElementById("computer-hp-text");
const currentOpponentHp = document.getElementById("computer-current-hp");
const computerMaxHp = document.getElementById("computer-max-hp");
const divisionTop = document.getElementById("health-division-top");

const pokemon = [
  {
    name: "PIDGEY",
    sprite: ["./assets/pokemon-sprites/pidgey-back.png", "./assets/pokemon-sprites/pidgey-front.png"],
    base_hp: 9,
    moves: ["GUST", "SAND ATTACK", "QUICK ATTACK", "TACKLE"]
  },
  {
    name: "RATTATA",
    sprite: ["./assets/pokemon-sprites/rattata-back.png", "./assets/pokemon-sprites/rattata-front.png"],
    base_hp: 8,
    moves: ["QUICK ATTACK", "BITE", "TAIL WHIP", "TACKLE"]
  },
  {
    name: "MAGIKARP",
    sprite: ["./assets/pokemon-sprites/magikarp-back.png", "./assets/pokemon-sprites/magikarp-front.png"],
    base_hp: 20,
    moves: ["SPLASH", "SPLASH", "SPLASH", "HYPER BEAM"],
  }
];

const gameScreen = [
  {
    name: "main screen",
    main_text: "POKÉMON BATTLE",
    button_text: ["PLAY", "ABOUT"],
    button_functions: [play, about]
  },
  {
    name: "about",
    main_text: "This is POKÉMON BATTLE. Use the ATTACK button to make your POKÉMON use a random attack. With ITEM, you can use a random ITEM to heal them. Your opponent, your POKÉMON and their movesets are randomly chosen. See how well you fare against the COMPUTER!",
    button_text: ["", "RETURN"],
    button_functions: [null, mainScreen]
  },
  {
    name: "game",
    main_text: [`What would ${pokemon} do?`, `${pokemon} used ${pokemon}!`, `You used ${pokemon}`],
    button_text: ["ATTACK", "ITEM"],
    button_functions: [attack, item]
  }
]


function mainScreen() {
  mainText.innerText = gameScreen[0]["main_text"];

  action.innerText = gameScreen[0]["button_text"][0];
  action.setAttribute("onclick", "play()");

  option.innerText = gameScreen[0]["button_text"][1];
  option.setAttribute("onclick", "about()");
  
};

function about() {
  mainText.innerText = gameScreen[1]["main_text"];
  action.innerText = gameScreen[1]["button_text"][0];
  action.removeAttribute("onclick");

  option.innerText = gameScreen[1]["button_text"][1];
  option.setAttribute("onclick", "mainScreen()");
};

function play() {
  action.innerText = gameScreen[2]["button_text"][0];
  action.setAttribute("onclick", "attack()");

  option.innerText = gameScreen[2]["button_text"][1];
  option.setAttribute("onclick", "");

  const randomNumberUser = Math.floor(Math.random() * pokemon.length);
  const randomNumberOpponent = Math.floor(Math.random() * pokemon.length);

  userPokemonImg.setAttribute("src", pokemon[randomNumberUser]["sprite"][0]);
  opponentPokemonImg.setAttribute("src", pokemon[randomNumberOpponent]["sprite"][1]);

  mainText.innerText = `What would ${pokemon[randomNumberUser]["name"]} do?`
}


function attack() {}
function item() {}

window.onload = function() {
  mainScreen();
};

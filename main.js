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

let turn = 0;

const action = document.getElementById("left-button");
const option = document.getElementById("right-button");

const mainText = document.getElementById("main-text");

const userPokemonImg = document.getElementById("image-container-bottom");
const opponentPokemonImg = document.getElementById("image-container-top");

const userName = document.getElementById("your-name");
const userHpTitle = document.getElementById("hp-text");
const currentUserHp = document.getElementById("user-current-hp");
const userMaxHp = document.getElementById("user-max-hp");

const computerName = document.getElementById("computer-name");
const computerHpTitle = document.getElementById("computer-hp-text");
const currentOpponentHp = document.getElementById("computer-current-hp");
const computerMaxHp = document.getElementById("computer-max-hp");



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

const itemList = [
  {
    name: "POTION",
    points: 10
  },
  {
    name: "BERRY",
    points: 5
  },
  {
    name: "HERBAL MEDICINE",
    points: 2
  }
];


const gameScreen = [
  {
    name: "main screen",
    main_text: "POKÉMON BATTLE",
    button_text: ["PLAY", "ABOUT"],
    button_functions: [game, about]
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
  },
  {
    name: "game over",
    main_text: [`Game over.`],
    button_text: ["RETURN", "RETURN"],
    button_functions: [gameOver, gameOver]
  }
];


const randomNumberUser = Math.floor(Math.random() * pokemon.length);
const randomNumberOpponent = Math.floor(Math.random() * pokemon.length);


function mainScreen() {
  mainText.innerText = gameScreen[0]["main_text"];

  action.innerText = gameScreen[0]["button_text"][0];
  action.setAttribute("onclick", "game()");

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

function game() {


  userPokemonImg.setAttribute("src", pokemon[randomNumberUser]["sprite"][0]);
  opponentPokemonImg.setAttribute("src", pokemon[randomNumberOpponent]["sprite"][1]);

  userHpTitle.style.display = "flex";
  computerHpTitle.style.display = "flex";

  userName.innerText = pokemon[randomNumberUser]["name"];
  currentUserHp.innerText = pokemon[randomNumberUser]["base_hp"];
  userMaxHp.innerText = ` / ${pokemon[randomNumberUser]["base_hp"]}`;

  computerName.innerText = pokemon[randomNumberOpponent]["name"];
  currentOpponentHp.innerText = pokemon[randomNumberOpponent]["base_hp"];
  computerMaxHp.innerText = ` / ${pokemon[randomNumberOpponent]["base_hp"]}`;
  userTurn();
};


function nextTurn() {
  if (turn === 0) {
    turn += 1;
    opponentTurn();
  } else if (turn === 1) {
    turn -= 1;
    userTurn();
  }
};


function userTurn() {
  action.innerText = gameScreen[2]["button_text"][0];
  action.setAttribute("onclick", "attack()");

  option.innerText = gameScreen[2]["button_text"][1];
  option.setAttribute("onclick", "item()");

  mainText.innerText = `What would ${pokemon[randomNumberUser]["name"]} do?`
};

const dmgRandom = Math.floor(Math.random() * 3) + 1

function opponentTurn() {
  action.innerText = "";
  action.removeAttribute("onclick");
  option.innerText = "";
  option.removeAttribute("onclick");

  const move = Math.floor(Math.random() * 4);
  mainText.innerText = `${pokemon[randomNumberOpponent]["name"]} used ${pokemon[randomNumberOpponent]["moves"][move]}!`;

  

  function damageCalc() {

    if (pokemon[randomNumberOpponent]["moves"][move] === "SPLASH") {
      mainText.innerText = `${pokemon[randomNumberOpponent]["name"]} splashed around!`
      setTimeout(nextTurn, 2000);
    } else {
      mainText.innerText = `${pokemon[randomNumberUser]["name"]} takes damage!`;

      let currentHealth = Number(currentUserHp.innerText);
      let newHealth = currentHealth - dmgRandom;
      
      newHealth = Math.max(newHealth, 0);
    
      currentUserHp.innerText = newHealth;
    
      return newHealth;
    }
  }

  setTimeout(() => {
    const resultHealth = damageCalc();

    if (resultHealth === 0) {
      mainText.innerText = `${pokemon[randomNumberUser]["name"]} faints!`;
      userPokemonImg.removeAttribute("src");
      setTimeout(gameOver, 2000);
    } else if (resultHealth > 1) {
      setTimeout(nextTurn, 2000);
    }
  }, 1000);
};

function attack() {
  const move = Math.floor(Math.random() * 4);
  mainText.innerText = `${pokemon[randomNumberUser]["name"]} used ${pokemon[randomNumberUser]["moves"][move]}!`;
  action.innerText = "";
  action.removeAttribute("onclick");
  option.innerText = "";
  option.removeAttribute("onclick");

  function damageCalc() {

    if (pokemon[randomNumberUser]["moves"][move] === "SPLASH") {
      mainText.innerText = `${pokemon[randomNumberUser]["name"]} splashed around!`
      setTimeout(nextTurn, 2000);
    } else {
      mainText.innerText = `${pokemon[randomNumberOpponent]["name"]} takes damage!`;

      let currentHealth = Number(currentOpponentHp.innerText);
      let newHealth = currentHealth - dmgRandom;
      
      newHealth = Math.max(newHealth, 0);
    
      currentOpponentHp.innerText = newHealth;
    
      return newHealth;
    }
  }


  setTimeout(() => {
    const resultHealth = damageCalc();

    if (resultHealth === 0) {
      mainText.innerText = `${pokemon[randomNumberOpponent]["name"]} faints!`;
      opponentPokemonImg.removeAttribute("src");
      setTimeout(gameOver, 2000);
    } else if (resultHealth > 1) {
      setTimeout(nextTurn, 2000);
    }
  }, 1000);
};



function item() {
  const randomNumber = Math.floor(Math.random() * itemList.length);
  mainText.innerText = `You've used ${itemList[randomNumber]["name"]}!`;

  function healthRecovery() {
    const healingItem = itemList[randomNumber]["points"];
    mainText.innerText = `${pokemon[randomNumberUser]["name"]} recovered ${itemList[randomNumber]["points"]} HP!`;

    let currentHealth = Number(currentUserHp.innerText);
    let newHealth = currentHealth + healingItem;
  
    newHealth = Math.min(newHealth, pokemon[randomNumberUser]["base_hp"]);
    currentUserHp.innerText = newHealth;

    return;
  };

  setTimeout(healthRecovery, 2000);
  setTimeout(nextTurn, 4000);
};

function gameOver() {
  mainText.innerText = gameScreen[3]["main_text"];
  action.innerText = gameScreen[3]["button_text"][0];
  option.innerText = gameScreen[3]["button_text"][1];

  action.setAttribute("onclick", "window.location.reload()");
  option.setAttribute("onclick", "window.location.reload()");
}

window.onload = function() {
  mainScreen();
};
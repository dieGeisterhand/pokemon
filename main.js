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
  },
  {
    name: "ABRA",
    sprite: ["./assets/pokemon-sprites/abra-back.png", "./assets/pokemon-sprites/abra-front.png"],
    base_hp: 11,
    moves: ["BODY SLAM", "TOXIC", "PSYWAVE", "TRI ATTACK"]
  },
  {
    name: "CATERPIE",
    sprite: ["./assets/pokemon-sprites/caterpie-back.png", "./assets/pokemon-sprites/caterpie-front.png"],
    base_hp: 7,
    moves: ["TACKLE", "STRING SHOT"]
  },
  {
    name: "CHARMANDER",
    sprite: ["./assets/pokemon-sprites/charmander-back.png", "./assets/pokemon-sprites/charmander-front.png"],
    base_hp: 11,
    moves: ["EMBER", "SCRATCH", "LEER", "SLASH"]
  },
  {
    name: "CLEFAIRY",
    sprite: ["./assets/pokemon-sprites/clefairy-back.png", "./assets/pokemon-sprites/clefairy-front.png"],
    base_hp: 10,
    moves: ["GROWL", "DOUBLESLAP", "POUND"]
  },
  {
    name: "MAGNEMITE",
    sprite: ["./assets/pokemon-sprites/magnemite-back.png", "./assets/pokemon-sprites/magnemite-front.png"],
    base_hp: 12,
    moves: ["THUNDERSHOCK", "TACKLE", "SONIC BOOM"]

  },
  {
    name: "NIDORAN♂",
    sprite: ["./assets/pokemon-sprites/nidoran-back.png", "./assets/pokemon-sprites/nidoran-front.png"],
    base_hp: 13,
    moves: ["HORN ATTACK", "TACKLE"]
  },
  {
    name: "OMANYTE",
    sprite: ["./assets/pokemon-sprites/omanyte-back.png", "./assets/pokemon-sprites/omanyte-front.png"],
    base_hp: 14,
    moves: ["WATER GUN", "LEER", "HYDRO PUMP"]
  },
  {
    name: "PARAS",
    sprite: ["./assets/pokemon-sprites/paras-back.png", "./assets/pokemon-sprites/paras-front.png"],
    base_hp: 10,
    moves: ["SCRATCH", "LEECH LIFE", "SPORE"]
  },
  {
    name: "PSYDUCK",
    sprite: ["./assets/pokemon-sprites/psyduck-back.png", "./assets/pokemon-sprites/psyduck-front.png"],
    base_hp: 11,
    moves: ["SCRATCH", "FURY SWIPES", "CONFUSION"]
  },
  {
    name: "RHYHORN",
    sprite: ["./assets/pokemon-sprites/rhyhorn-back.png", "./assets/pokemon-sprites/rhyhorn-front.png"],
    base_hp: 17,
    moves: ["STOMP", "HORN DRILL", "TAKE DOWN"]
  },
  {
    name: "SANDSHREW",
    sprite: ["./assets/pokemon-sprites/sandshrew-back.png", "./assets/pokemon-sprites/sandshrew-front.png"],
    base_hp: 12,
    moves: ["SCRATCH", "SLASH", "POISON STING"]
  },
  {
    name: "SEEL",
    sprite: ["./assets/pokemon-sprites/seel-back.png", "./assets/pokemon-sprites/seel-front.png"],
    base_hp: 14,
    moves: ["ICE BEAM", "HEADBUTT", "TAKE DOWN"]
  },
  {
    name: "SHELLDER",
    sprite: ["./assets/pokemon-sprites/shellder-back.png", "./assets/pokemon-sprites/shellder-front.png"],
    base_hp: 8,
    moves: ["CLAMP", "ICE BEAM", "TACKLE"]
  },
  {
    name: "VOLTORB",
    sprite: ["./assets/pokemon-sprites/voltorb-back.png", "./assets/pokemon-sprites/voltorb-front.png"],
    base_hp: 13,
    moves: ["SCREECH", "SWIFT", "THUNDERBOLT"]
  },
  {
    name: "VULPIX",
    sprite: ["./assets/pokemon-sprites/vulpix-back.png", "./assets/pokemon-sprites/vulpix-front.png"],
    base_hp: 10,
    moves: ["EMBER", "SCRATCH", "QUICK ATTACK"]
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
  action.removeAttribute("onclick");
  option.removeAttribute("onclick");
  
  mainText.innerText = gameScreen[0]["main_text"];

  action.innerText = gameScreen[0]["button_text"][0];
  action.setAttribute("onclick", "game()");

  option.innerText = gameScreen[0]["button_text"][1];
  option.setAttribute("onclick", "about()");
}

function about() {
  mainText.innerText = gameScreen[1]["main_text"];
  action.innerText = gameScreen[1]["button_text"][0];

  action.removeAttribute("onclick");
  option.removeAttribute("onclick");

  option.innerText = gameScreen[1]["button_text"][1];

  option.setAttribute("onclick", "mainScreen()");
}

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
    console.log("user turn end");
    console.log("opponent turn start");
    opponentTurn();

  } else if (turn === 1) {
    turn -= 1;
    console.log("opponent turn end");
    console.log("user turn start");
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



function opponentTurn() {
  action.innerText = "";
  action.removeAttribute("onclick");
  option.innerText = "";
  option.removeAttribute("onclick");

  const move = Math.floor(Math.random() * pokemon[randomNumberOpponent]["moves"].length);
  mainText.innerText = `${pokemon[randomNumberOpponent]["name"]} used ${pokemon[randomNumberOpponent]["moves"][move]}!`;

  function damageCalc() {
    console.log("opponent-dmg-calc");
    const dmgRandom = Math.floor(Math.random() * 3) + 1;
    console.log(`damage inflicted: ${dmgRandom}`);
    if (pokemon[randomNumberOpponent]["moves"][move] === "SPLASH") {
      mainText.innerText = `${pokemon[randomNumberOpponent]["name"]} splashed around!`
      setTimeout(nextTurn, 1500);
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
      console.log("player fainted");
      setTimeout(gameOver, 1500);
    } else if (resultHealth >= 1) {
      setTimeout(nextTurn, 1500);
    }
  }, 1500);
};

function attack() {
  const move = Math.floor(Math.random() * pokemon[randomNumberUser]["moves"].length);
  mainText.innerText = `${pokemon[randomNumberUser]["name"]} used ${pokemon[randomNumberUser]["moves"][move]}!`;
  action.innerText = "";
  action.removeAttribute("onclick");
  option.innerText = "";
  option.removeAttribute("onclick");

  function damageCalc() {
    console.log("user-dmg-calc");
    const dmgRandom = Math.floor(Math.random() * 3) + 1;
    console.log(`damage inflicted: ${dmgRandom}`);
    if (pokemon[randomNumberUser]["moves"][move] === "SPLASH") {
      mainText.innerText = `${pokemon[randomNumberUser]["name"]} splashed around!`
      setTimeout(nextTurn, 1500);
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
      console.log("opponent fainted");
      setTimeout(gameOver, 1500);
    } else if (resultHealth >= 1) {
      setTimeout(nextTurn, 1500);
    }
  }, 1500);
};

function item() {
  action.innerText = "";
  action.removeAttribute("onclick");
  option.innerText = "";
  option.removeAttribute("onclick");

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

  setTimeout(healthRecovery, 1500);
  setTimeout(nextTurn, 3000);
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
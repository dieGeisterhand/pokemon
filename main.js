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

// determine who moves first
let turn = Math.round(Math.random());

// set of variables to manipulate html elements using js
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

// array of objects containing pokemon name, sprite being displayed, hp value and their moveset / add more by adding another object and following the same key-value pair structure
const pokemon = [
  {
    name: "PIDGEY",
    sprite: ["./assets/pokemon-sprites/pidgey-back.webp", "./assets/pokemon-sprites/pidgey-front.webp"],
    base_hp: 9,
    moves: ["GUST", "SAND ATTACK", "QUICK ATTACK", "TACKLE"]
  },
  {
    name: "RATTATA",
    sprite: ["./assets/pokemon-sprites/rattata-back.webp", "./assets/pokemon-sprites/rattata-front.webp"],
    base_hp: 8,
    moves: ["QUICK ATTACK", "BITE", "TAIL WHIP", "TACKLE"]
  },
  {
    name: "MAGIKARP",
    sprite: ["./assets/pokemon-sprites/magikarp-back.webp", "./assets/pokemon-sprites/magikarp-front.webp"],
    base_hp: 20,
    moves: ["SPLASH", "SPLASH", "SPLASH", "HYPER BEAM"],
  },
  {
    name: "ABRA",
    sprite: ["./assets/pokemon-sprites/abra-back.webp", "./assets/pokemon-sprites/abra-front.webp"],
    base_hp: 11,
    moves: ["BODY SLAM", "TOXIC", "PSYWAVE", "TRI ATTACK"]
  },
  {
    name: "CATERPIE",
    sprite: ["./assets/pokemon-sprites/caterpie-back.webp", "./assets/pokemon-sprites/caterpie-front.webp"],
    base_hp: 7,
    moves: ["TACKLE", "STRING SHOT"]
  },
  {
    name: "CHARMANDER",
    sprite: ["./assets/pokemon-sprites/charmander-back.webp", "./assets/pokemon-sprites/charmander-front.webp"],
    base_hp: 11,
    moves: ["EMBER", "SCRATCH", "LEER", "SLASH"]
  },
  {
    name: "CLEFAIRY",
    sprite: ["./assets/pokemon-sprites/clefairy-back.webp", "./assets/pokemon-sprites/clefairy-front.webp"],
    base_hp: 10,
    moves: ["GROWL", "DOUBLESLAP", "POUND"]
  },
  {
    name: "MAGNEMITE",
    sprite: ["./assets/pokemon-sprites/magnemite-back.webp", "./assets/pokemon-sprites/magnemite-front.webp"],
    base_hp: 12,
    moves: ["THUNDERSHOCK", "TACKLE", "SONIC BOOM"]
  },
  {
    name: "NIDORAN♂",
    sprite: ["./assets/pokemon-sprites/nidoran-back.webp", "./assets/pokemon-sprites/nidoran-front.webp"],
    base_hp: 13,
    moves: ["HORN ATTACK", "TACKLE"]
  },
  {
    name: "OMANYTE",
    sprite: ["./assets/pokemon-sprites/omanyte-back.webp", "./assets/pokemon-sprites/omanyte-front.webp"],
    base_hp: 14,
    moves: ["WATER GUN", "LEER", "HYDRO PUMP"]
  },
  {
    name: "PARAS",
    sprite: ["./assets/pokemon-sprites/paras-back.webp", "./assets/pokemon-sprites/paras-front.webp"],
    base_hp: 10,
    moves: ["SCRATCH", "LEECH LIFE", "SPORE"]
  },
  {
    name: "PSYDUCK",
    sprite: ["./assets/pokemon-sprites/psyduck-back.webp", "./assets/pokemon-sprites/psyduck-front.webp"],
    base_hp: 11,
    moves: ["SCRATCH", "FURY SWIPES", "CONFUSION"]
  },
  {
    name: "RHYHORN",
    sprite: ["./assets/pokemon-sprites/rhyhorn-back.webp", "./assets/pokemon-sprites/rhyhorn-front.webp"],
    base_hp: 17,
    moves: ["STOMP", "HORN DRILL", "TAKE DOWN"]
  },
  {
    name: "SANDSHREW",
    sprite: ["./assets/pokemon-sprites/sandshrew-back.webp", "./assets/pokemon-sprites/sandshrew-front.webp"],
    base_hp: 12,
    moves: ["SCRATCH", "SLASH", "POISON STING"]
  },
  {
    name: "SEEL",
    sprite: ["./assets/pokemon-sprites/seel-back.webp", "./assets/pokemon-sprites/seel-front.webp"],
    base_hp: 14,
    moves: ["ICE BEAM", "HEADBUTT", "TAKE DOWN"]
  },
  {
    name: "SHELLDER",
    sprite: ["./assets/pokemon-sprites/shellder-back.webp", "./assets/pokemon-sprites/shellder-front.webp"],
    base_hp: 8,
    moves: ["CLAMP", "ICE BEAM", "TACKLE"]
  },
  {
    name: "VOLTORB",
    sprite: ["./assets/pokemon-sprites/voltorb-back.webp", "./assets/pokemon-sprites/voltorb-front.webp"],
    base_hp: 13,
    moves: ["SCREECH", "SWIFT", "THUNDERBOLT"]
  },
  {
    name: "VULPIX",
    sprite: ["./assets/pokemon-sprites/vulpix-back.webp", "./assets/pokemon-sprites/vulpix-front.webp"],
    base_hp: 10,
    moves: ["EMBER", "SCRATCH", "QUICK ATTACK"]
  }
];

// array of objects containing the in-game healing items
const itemList = [
  {
    name: "POTION",
    points: 10
  },
  {
    name: "BERRY",
    points: 8
  },
  {
    name: "HERBAL MEDICINE",
    points: 3
  }
];

// different game screens - main, about, game, game over
const gameScreen = [
  {
    name: "main screen",
    main_text: "POKÉMON BATTLE",
    button_text: ["PLAY", "ABOUT"],
  },
  {
    name: "about",
    main_text: "This is POKÉMON BATTLE. Use the ATTACK button to make your POKÉMON use a random attack. With ITEM, you can use a random ITEM to heal them. Your opponent, your POKÉMON and their movesets are randomly chosen. See how well you fare against the COMPUTER!",
    button_text: ["", "RETURN"],
  },

  // FIX THIS UNUSED CODE BELOW
  {
    name: "game",
    main_text: [`What would ${pokemon} do?`, `${pokemon} used ${pokemon}!`, `You used ${pokemon}`],
    button_text: ["ATTACK", "ITEM"],
  },
  {
    name: "game over",
    main_text: [`Game over.`],
    button_text: ["RETURN", "RETURN"],
  }
];

// pick a pokemon for user
const randomNumberUser = Math.floor(Math.random() * pokemon.length);

// pick a pokemon for computer
const randomNumberOpponent = Math.floor(Math.random() * pokemon.length);

// onclick attribute is removed and reassigned multiple times throughout the following screens to avoid any strange behavior

// main screen of the game / what is displayed on refresh
function mainScreen() {
  action.removeAttribute("onclick");
  option.removeAttribute("onclick");
  
  mainText.innerText = gameScreen[0]["main_text"];

  action.innerText = gameScreen[0]["button_text"][0];
  action.setAttribute("onclick", "game()");

  option.innerText = gameScreen[0]["button_text"][1];
  option.setAttribute("onclick", "about()");
}

// about screen / displays game instructions
function about() {
  mainText.innerText = gameScreen[1]["main_text"];
  action.innerText = gameScreen[1]["button_text"][0];

  action.removeAttribute("onclick");
  option.removeAttribute("onclick");

  option.innerText = gameScreen[1]["button_text"][1];

  option.setAttribute("onclick", "mainScreen()");
}

// this is the game itself - where moves are pulled from the pokemon array, damage calculated and turns take place
function game() {
  action.innerText = "";
  action.removeAttribute("onclick");
  option.innerText = "";
  option.removeAttribute("onclick");
  // set the sprite for the appropriate random pokemon (user)
  userPokemonImg.setAttribute("src", pokemon[randomNumberUser]["sprite"][0]);
  // set sprite for appropriate random pokemon (computer)
  opponentPokemonImg.setAttribute("src", pokemon[randomNumberOpponent]["sprite"][1]);
  // display "HP" text on screen (set to display:none on css file)
  userHpTitle.style.display = "flex";
  computerHpTitle.style.display = "flex";
  // populate the user information on screen based on the random number generated for pokemon
  userName.innerText = pokemon[randomNumberUser]["name"];
  currentUserHp.innerText = pokemon[randomNumberUser]["base_hp"];
  userMaxHp.innerText = ` / ${pokemon[randomNumberUser]["base_hp"]}`;
  // populate computer information on screen based on the random number generated for pokemon
  computerName.innerText = pokemon[randomNumberOpponent]["name"];
  currentOpponentHp.innerText = pokemon[randomNumberOpponent]["base_hp"];
  computerMaxHp.innerText = ` / ${pokemon[randomNumberOpponent]["base_hp"]}`;
  // game start message / determine turn order
  mainText.innerText = `A wild ${pokemon[randomNumberOpponent]["name"]} appeared!`
  setTimeout(nextTurn, 1500);
};

// this function is used to alternate between computer and player turns / messages are logged in case something isn't working right
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

// user turn / functions are assigned to each button
function userTurn() {
  action.innerText = gameScreen[2]["button_text"][0];
  action.setAttribute("onclick", "attack()");

  option.innerText = gameScreen[2]["button_text"][1];
  option.setAttribute("onclick", "item()");

  mainText.innerText = `What would ${pokemon[randomNumberUser]["name"]} do?`
};
// computer turn / functions above, text and onclick attribute are removed from the buttons
function opponentTurn() {
  action.innerText = "";
  action.removeAttribute("onclick");
  option.innerText = "";
  option.removeAttribute("onclick");
  // pick a random move from moveset
  const move = Math.floor(Math.random() * pokemon[randomNumberOpponent]["moves"].length);
  // display on screen the move being used
  mainText.innerText = `${pokemon[randomNumberOpponent]["name"]} used ${pokemon[randomNumberOpponent]["moves"][move]}!`;
  // calculate the damage caused by this action
  function damageCalc() {
    console.log("opponent-dmg-calc");
    const dmgRandom = Math.floor(Math.random() * 3) + 2;
    console.log(`damage inflicted: ${dmgRandom}`);
    if (pokemon[randomNumberOpponent]["moves"][move] === "SPLASH") {
      // if pokemon uses move 'splash' (currently only magikarp), splash does nothing
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
  // faint check using value returned above
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
// function for user turn - pulls a random move from moveset and calculates the inflicted damage
function attack() {
  const move = Math.floor(Math.random() * pokemon[randomNumberUser]["moves"].length);
  mainText.innerText = `${pokemon[randomNumberUser]["name"]} used ${pokemon[randomNumberUser]["moves"][move]}!`;
  action.innerText = "";
  action.removeAttribute("onclick");
  option.innerText = "";
  option.removeAttribute("onclick");
  // this needs to be reworked - it functions the same as computer function - should use one function for both instead?
  function damageCalc() {
    console.log("user-dmg-calc");
    const dmgRandom = Math.floor(Math.random() * 3) + 2;
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
// health item function
function item() {
  action.innerText = "";
  action.removeAttribute("onclick");
  option.innerText = "";
  option.removeAttribute("onclick");

  const randomNumber = Math.floor(Math.random() * itemList.length);
  mainText.innerText = `You've used ${itemList[randomNumber]["name"]}!`;

  function healthRecovery() {
    const healingItem = Math.floor(itemList[randomNumber]["points"] * Math.random() + 1);
    mainText.innerText = `${pokemon[randomNumberUser]["name"]} recovered ${healingItem} HP!`;

    let currentHealth = Number(currentUserHp.innerText);
    let newHealth = currentHealth + healingItem;
  
    newHealth = Math.min(newHealth, pokemon[randomNumberUser]["base_hp"]);
    currentUserHp.innerText = newHealth;

    return;
  };

  setTimeout(healthRecovery, 1500);
  setTimeout(nextTurn, 3000);
};
// screen to display on user or computer faint / reloads page / back to main screen
function gameOver() {
  mainText.innerText = gameScreen[3]["main_text"];
  action.innerText = gameScreen[3]["button_text"][0];
  option.innerText = gameScreen[3]["button_text"][1];

  action.setAttribute("onclick", "window.location.reload()");
  option.setAttribute("onclick", "window.location.reload()");
}

// display main screen on load
window.onload = function() {
  mainScreen();
};
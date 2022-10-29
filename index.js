const cardsArray = [
  {
    name: "snorlax",
    img: "images/snorlax.jpg",
  },
  {
    name: "bulbasaur",
    img: "images/bulbasaur.jpg",
  },
  {
    name: "charmander",
    img: "images/charmander.jpg",
  },
  {
    name: "ho-oh",
    img: "images/ho-oh.jpg",
  },
  {
    name: "pikachu",
    img: "images/pikachu.jpg",
  },
  {
    name: "squirtle",
    img: "images/squirtle.jpg",
  },
  {
    name: "snorlax",
    img: "images/snorlax.jpg",
  },
  {
    name: "bulbasaur",
    img: "images/bulbasaur.jpg",
  },
  {
    name: "charmander",
    img: "images/charmander.jpg",
  },
  {
    name: "ho-oh",
    img: "images/ho-oh.jpg",
  },
  {
    name: "pikachu",
    img: "images/pikachu.jpg",
  },
  {
    name: "squirtle",
    img: "images/squirtle.jpg",
  },
];

cardsArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");
let textTries = document.getElementById("tries");
let textScore = document.getElementById("score");
let chosenCards = [];
let chosenCardsIds = [];
let chosenFronts = [];
let chosenFlip = [];
let restart = document.getElementById("btn");

let tries = 0;

let score = 0;

restart.addEventListener("click", () => {
  gridDisplay.innerHTML = "";
  tries = 0;
  score = 0;
  textScore.innerHTML = `Score: ${score}`;
  textTries.innerHTML = `Turns: ${tries}`;
  createBoard();
  restart.classList.toggle("hidden");
});

function createBoard() {
  for (i = 0; i < cardsArray.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", i);

    const frontCard = document.createElement("img");
    frontCard.classList.add("card_front");
    frontCard.setAttribute("src", "images/blank.jpg");
    card.appendChild(frontCard);

    const flipCard = document.createElement("img");
    flipCard.classList.add("card_flip");
    card.appendChild(flipCard);
    gridDisplay.appendChild(card);

    frontCard.addEventListener("click", () => {
      const cardId = card.getAttribute("data-id");
      if (chosenCards.length < 2) {
        chosenCardsIds.push(cardId);
        chosenCards.push(cardsArray[cardId].name);
        chosenFronts.push(frontCard);
        chosenFlip.push(flipCard);

        flipCard.setAttribute("src", cardsArray[cardId].img);

        flipCard.classList.add("card_flip_chosen");
        frontCard.classList.add("card_front_chosen");

        if (chosenCards.length == 2) {
          if (chosenCardsIds[0] == chosenCardsIds[1]) {
            alert("You can't click the same image");
            chosenFlip.forEach((element) =>
              element.classList.remove("card_flip_chosen")
            );
            chosenFronts.forEach((element) =>
              element.classList.remove("card_front_chosen")
            );
            setTimeout(() => {
              chosenCards = [];
              chosenFlip = [];
              chosenFronts = [];
              chosenCardsIds = [];
              return;
            }, 1000);
          } else if (chosenCards[0] == chosenCards[1]) {
            setTimeout(function () {
              chosenCards = [];
              chosenFlip = [];
              chosenFronts = [];
              chosenCardsIds = [];
              tries++;
              score++;
              textScore.innerHTML = `Score: ${score}`;
              textTries.innerHTML = `Turns: ${tries}`;
              if (score == 6) {
                restart.classList.toggle("hidden");
              }
            }, 1000);
          } else if (chosenCards[0] != chosenCards[1]) {
            setTimeout(function () {
              chosenFlip.forEach((element) =>
                element.classList.remove("card_flip_chosen")
              );
              chosenFronts.forEach((element) =>
                element.classList.remove("card_front_chosen")
              );
              chosenCards = [];
              chosenFlip = [];
              chosenFronts = [];
              tries++;
              textTries.innerHTML = `Turns: ${tries}`;
              chosenCardsIds = [];
            }, 1000);
          }
        }
      }
    });
  }
}

createBoard();

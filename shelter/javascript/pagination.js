///////////////////// PETS LIST ///////////////////////////

let petsData = [
  {
    id: "0",
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    id: "1",
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    id: "2",
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },

  {
    id: "3",
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    id: "4",
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    id: "5",
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },

  {
    id: "6",
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },

  {
    id: "7",
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

////////////////////////////// New card template //////////////////////////////

const searchPetData = (ident) => {
  for (let i = 0; i < 8; i++) {
    let currentPet;
    if (petsData[i]["id"] == ident) {
      currentPet = petsData[i];
    } else continue;
    return currentPet;
  }
};

function createCard(elem, itemBlock) {
  let newPet = searchPetData(elem);
  let card = document.createElement("div");
  card.classList.add("our-friends__item");

  let petPhoto = document.createElement("img");
  petPhoto.classList.add("our-friends__image");
  petPhoto.src = newPet.img;

  let petName = document.createElement("p");
  petName.classList.add("pet-name");
  petName.textContent = `${newPet.name}`;

  let cardButton = document.createElement("button");
  cardButton.classList.add("button");
  cardButton.classList.add("button_bordered");
  cardButton.classList.add("learn-more-button");
  cardButton.innerHTML = `<a href="#no_scroll" class="link-button">Learn more</a>`;

  card.append(petPhoto);
  card.append(petName);
  card.append(cardButton);
  itemBlock.append(card);
}

////////////////// Generator for random number (from 0 to 7) //////////////////

function getRandomNumber(length) {
  let arr = [];
  while (arr.length <= length - 1) {
    let number = Math.floor(Math.random() * 8);
    if (!arr.includes(number)) {
      arr.push(number);
    }
  }
  return arr;
}

//////////////////////// Function addCards in block ////////////////////////

function addCards(arrName, itemBlock) {
  arrName.forEach((elem) => {
    createCard(elem, itemBlock);
  });
}

//////////////////// Get number of max cards on page ////////////////////////

function maxCardsOnPage() {
  let cards;
  if (window.innerWidth >= 1030) {
    cards = 8;
  }

  if (window.innerWidth <= 1030 && window.innerWidth >= 351) {
    cards = 6;
  }

  if (window.innerWidth <= 350) {
    cards = 3;
  }
  return cards;
}

////////////////////// Get array of 48 numbers //////////////////////////////

function getRandomArr48() {
  let innerArr = [];
  let resultArr = [];
  for (let i = 0; i < 48 / maxCardsOnPage(); i++) {
    while (resultArr.length < 48 / maxCardsOnPage()) {
      innerArr = getRandomNumber(maxCardsOnPage());
      resultArr.push(innerArr);
    }
  }
  return resultArr;
}

////////////////////// Add cards to first page //////////////////////////////

let pageNumber = 1;
let newArr = getRandomArr48(maxCardsOnPage());
let petCards = document.querySelector(".layout-4-column");

let currentArray;
currentArray = newArr[pageNumber - 1];
addCards(currentArray, petCards);

let backTwoArrows = document.querySelector(".arrow-button-2-left"),
  backArrow = document.querySelector(".arrow-button-left"),
  pagesButton = document.querySelector(".page-number"),
  forthArrow = document.querySelector(".arrow-button-right"),
  forthTwoArrows = document.querySelector(".arrow-button-2-right");

pagesButton.innerHTML = `${pageNumber}`;

////////////////////// Buttons logic //////////////////////////////

document.getElementById("arrow-button-left").disabled = true;
document.getElementById("arrow-button-2-left").disabled = true;

backArrow.addEventListener("click", () => {
  --pageNumber;
  currentArray = newArr[pageNumber - 1];
  petCards.innerHTML = "";
  addCards(currentArray, petCards);
  pagesButton.innerHTML = `${pageNumber}`;

  forthArrow.classList.remove("arrow-disabled-button");
  forthTwoArrows.classList.remove("arrow-disabled-button");

  document.getElementById("arrow-button-right").disabled = false;
  document.getElementById("arrow-button-2-right").disabled = false;

  if (pageNumber != 1) {
    backArrow.classList.remove("arrow-disabled-button");
    backTwoArrows.classList.remove("arrow-disabled-button");
  } else {
    backArrow.classList.add("arrow-disabled-button");
    backTwoArrows.classList.add("arrow-disabled-button");
    document.getElementById("arrow-button-left").disabled = true;
  }
});

forthArrow.addEventListener("click", () => {
  ++pageNumber;
  currentArray = newArr[pageNumber - 1];
  petCards.innerHTML = "";
  addCards(currentArray, petCards);
  pagesButton.innerHTML = `${pageNumber}`;

  document.getElementById("arrow-button-left").disabled = false;
  document.getElementById("arrow-button-2-left").disabled = false;

  if (pageNumber == 48 / maxCardsOnPage()) {
    document.getElementById("arrow-button-right").disabled = true;
    document.getElementById("arrow-button-2-right").disabled = true;
    forthArrow.classList.add("arrow-disabled-button");
    forthTwoArrows.classList.add("arrow-disabled-button");
  }

  if (pageNumber != 1) {
    backArrow.classList.remove("arrow-disabled-button");
    backTwoArrows.classList.remove("arrow-disabled-button");
    backArrow.addEventListener("click", moveLeft);
  }
});

backTwoArrows.addEventListener("click", () => {
  pageNumber = 1;
  currentArray = newArr[pageNumber - 1];
  petCards.innerHTML = "";
  addCards(currentArray, petCards);
  pagesButton.innerHTML = `${pageNumber}`;

  document.getElementById("arrow-button-right").disabled = false;
  document.getElementById("arrow-button-2-right").disabled = false;

  backArrow.classList.add("arrow-disabled-button");
  backTwoArrows.classList.add("arrow-disabled-button");

  forthArrow.classList.remove("arrow-disabled-button");
  forthTwoArrows.classList.remove("arrow-disabled-button");
});

forthTwoArrows.addEventListener("click", () => {
  pageNumber = 48 / maxCardsOnPage();
  currentArray = newArr[pageNumber - 1];
  petCards.innerHTML = "";
  addCards(currentArray, petCards);
  pagesButton.innerHTML = `${pageNumber}`;

  document.getElementById("arrow-button-right").disabled = true;
  document.getElementById("arrow-button-2-right").disabled = true;

  document.getElementById("arrow-button-left").disabled = false;
  document.getElementById("arrow-button-2-left").disabled = false;

  backArrow.classList.remove("arrow-disabled-button");
  backTwoArrows.classList.remove("arrow-disabled-button");

  forthArrow.classList.add("arrow-disabled-button");
  forthTwoArrows.classList.add("arrow-disabled-button");
});

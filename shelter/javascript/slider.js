///////////////////// PETS LIST ///////////////////////////

let petsData = [
  {
    id: "0",
    name: "Jennifer",
    img: "assets/images/jennifer.png",
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
    img: "assets/images/sophia.png",
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
    img: "assets/images/woody.png",
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
    img: "assets/images/scarlett.png",
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
    img: "assets/images/katrine.png",
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
    img: "assets/images/timmy.png",
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
    img: "assets/images/freddie.png",
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
    img: "assets/images/charly.png",
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

//////////////////////////////////// Slider ////////////////////////////////////

const MAIN_ITEM = document.querySelector(".slider-item__main");
const LEFT_ITEM = document.querySelector(".slider-item__left");
const RIGHT_ITEM = document.querySelector(".slider-item__right");

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
  petPhoto.classList.add("carousel-image");
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

////////////////// Generator for 3 random number (from 1 to 8) //////////////////

function getRandomNumber(newLength, arr = []) {
  while (arr.length <= newLength) {
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

//////////////////////// Add random cards to main block ////////////////////////

let mainArr = getRandomNumber(2);
addCards(mainArr, MAIN_ITEM);

//////////////////////// Add random cards to left block ////////////////////////

let leftArr;
const leftSliderCardGenerator = () => {
  if (window.matchMedia("(min-width: 1031px)").matches) {
    leftArr = getRandomNumber(5, mainArr).splice(-3, 3);
    addCards(leftArr, LEFT_ITEM);
  } else if (window.matchMedia("(min-width: 701px)").matches) {
    leftArr = getRandomNumber(3, [...mainArr]).splice(-2, 2);
    addCards(leftArr, LEFT_ITEM);
  } else {
    leftArr = getRandomNumber(1, [...mainArr]).splice(-1, 1);
    addCards(leftArr, LEFT_ITEM);
  }
};
leftSliderCardGenerator();

//////////////////////// Add random cards to right block ////////////////////////
let rightArr;
const rightSliderCardGenerator = () => {
  if (window.matchMedia("(min-width: 1031px)").matches) {
    rightArr = getRandomNumber(5, [...mainArr]).splice(-3, 3);
    addCards(rightArr, RIGHT_ITEM);
  } else if (window.matchMedia("(min-width: 701px)").matches) {
    rightArr = getRandomNumber(3, [...mainArr]).splice(-2, 2);
    addCards(rightArr, RIGHT_ITEM);
  } else {
    rightArr = getRandomNumber(1, [...mainArr]).splice(-1, 1);
    addCards(rightArr, RIGHT_ITEM);
  }
};
rightSliderCardGenerator();

/////////////////////////// Buttons and slider logic ///////////////////////////

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    const leftItems = LEFT_ITEM.innerHTML;
    MAIN_ITEM.innerHTML = leftItems;
    LEFT_ITEM.innerHTML = "";

    if (window.matchMedia("(min-width: 1031px)").matches) {
      newArr = getRandomNumber(5, [mainArr]).splice(-3, 3);
    } else if (window.matchMedia("(min-width: 701px)").matches) {
      newArr = getRandomNumber(3, [...mainArr]).splice(-2, 2);
    } else {
      newArr = getRandomNumber(1, [...mainArr]).splice(-1, 1);
    }

    rightArr = mainArr;
    mainArr = leftArr;
    leftArr = newArr;

    leftSliderCardGenerator();
  } else {
    CAROUSEL.classList.remove("transition-right");
    const rightItems = RIGHT_ITEM.innerHTML;
    MAIN_ITEM.innerHTML = rightItems;
    RIGHT_ITEM.innerHTML = "";

    if (window.matchMedia("(min-width: 1031px)").matches) {
      newArr = getRandomNumber(5, [...mainArr]).splice(-3, 3);
    } else if (window.matchMedia("(min-width: 701px)").matches) {
      newArr = getRandomNumber(3, [...mainArr]).splice(-2, 2);
    } else {
      newArr = getRandomNumber(1, [...mainArr]).splice(-1, 1);
    }

    leftArr = mainArr;
    mainArr = rightArr;
    rightArr = newArr;

    rightSliderCardGenerator();
  }

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});

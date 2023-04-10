// ///////////////////// Find clicked card and Pet namy on card /////////////////////
const MODAL = document.querySelector("#modal");
let allCards = document.querySelector(".layout-4-column");
let clickedCard;

function handler(e) {
  clickedCard = e.target.closest(".our-friends__item");
  return clickedCard;
}

allCards.addEventListener("click", handler);

function getName() {
  return clickedCard.querySelector(".pet-name").innerHTML;
}

// //////////////////// Function search pet info in object by name ////////////////////////

let searchPetByName = () => {
  let currentName = getName();
  for (let i = 0; i < 8; i++) {
    let currentPet;
    if (petsData[i]["name"] == currentName) {
      currentPet = petsData[i];
    } else continue;
    return currentPet;
  }
};

//////////////////// Function Create Modal ////////////////////////

function createModal() {
  let petInfo = searchPetByName();
  let newModal = document.querySelector(".modal__content");

  let petPhoto = document.createElement("img");
  petPhoto.classList.add("modal__image");
  petPhoto.src = petInfo.img;

  let textContainer = document.createElement("div");
  textContainer.classList.add("modal__text");

  let petName = document.createElement("h3");
  petName.classList.add("modal__title");
  petName.textContent = `${petInfo.name}`;

  let petBreed = document.createElement("p");
  petBreed.classList.add("modal__subtitle");
  petBreed.textContent = `${petInfo.type} - ${petInfo.breed}`;

  let petDescription = document.createElement("p");
  petDescription.classList.add("modal__description");
  petDescription.textContent = `${petInfo.description}`;

  let petList = document.createElement("ul");
  petList.classList.add("pet-list");
  petList.innerHTML = `<li class="pet-list__item"><b>Age:</b> ${petInfo.age}</li>
  <li class="pet-list__item"><b>Inoculations:</b> ${petInfo.inoculations}</li>
  <li class="pet-list__item"><b>Diseases:</b> ${petInfo.diseases}</li>
  <li class="pet-list__item"><b>Parasites:</b> ${petInfo.parasites}</li>`;

  textContainer.append(petName, petBreed, petDescription, petList);
  newModal.append(petPhoto, textContainer);
}

//////////////////// Click events ////////////////////////

const modal = document.querySelector(".modal__wrapper");
const modalBlock = document.querySelector(".modal__block");
const modalContent = document.querySelector(".modal__content");
const modalCloseIcon = document.querySelector(".modal_close");

allCards.addEventListener("click", () => {
  createModal();
  modal.classList.add("modal__open");
  if (modal.classList.contains("modal__open")) {
    document.body.classList.add("lock");
  }
});

function deleteModalContent() {
  modalContent.innerHTML = "";
}

modal.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__content")) {
    modal.classList.remove("modal__open");
    document.body.classList.remove("lock");
    window.setTimeout(deleteModalContent, 150);
  }
});

modalCloseIcon.addEventListener("click", () => {
  if (!event.target.closest(".modal__content")) {
    modal.classList.remove("modal__open");
    window.setTimeout(deleteModalContent, 150);
    document.body.classList.remove("lock");
  }
});

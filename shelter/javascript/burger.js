const iconMenu = document.querySelector(".hamburger");
const nav = document.querySelector(".header__navigation");
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("_active");
    nav.classList.toggle("header__navigation_active");
  });
}

if (nav) {
  nav.addEventListener("click", function () {
    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("lock");
      iconMenu.classList.remove("_active");
      nav.classList.remove("header__navigation_active");
    }
  });
}

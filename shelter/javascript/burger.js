const iconMenu = document.querySelector(".hamburger");
const nav = document.querySelector(".header__navigation");
const overlay = document.querySelector(".overlay");

function overlayAdd() {
  overlay.classList.add("overlay_active");
}

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("_active");
    nav.classList.toggle("header__navigation_active");
    if (iconMenu.classList.contains("_active")) {
      window.setTimeout(overlayAdd, 650);
    } else {
      overlay.classList.remove("overlay_active");
    }
  });
}

if (overlay) {
  overlay.addEventListener("click", function (e) {
    if (iconMenu.classList.contains("_active")) {
      if (!e.target.closest(".header__navigation")) {
        overlay.classList.remove("overlay_active");
        document.body.classList.remove("lock");
        iconMenu.classList.remove("_active");
        nav.classList.remove("header__navigation_active");
      } else if (e.target.closest(".navigation")) {
        overlay.classList.remove("overlay_active");
        document.body.classList.remove("lock");
        iconMenu.classList.remove("_active");
        nav.classList.remove("header__navigation_active");
      }
    }
  });
}

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    console.log("Page was restored from bfcache");
  } else {
    console.log("Page loaded normally");
  }
});

const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("toggle__hamburguer"),
  menuClose = document.getElementById("menu__close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (menuClose) {
  menuClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const itemLink = document.querySelectorAll(".item__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav__menu");
  navMenu.classList.remove("show-menu");
};
itemLink.forEach((e) => e.addEventListener("click", linkAction));

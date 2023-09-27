const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector("#menu-icon");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", scrollY > 80);
});

menu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  menu.classList.toggle("bx-x");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("open");
  menu.classList.remove("bx-x");
});

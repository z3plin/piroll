const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".mobile__menu-list");
const links = document.querySelectorAll(".mobile__menu-list li");
const logo = document.querySelector(".header__logo");

hamburger.addEventListener("click", () => {
  logo.classList.toggle("open");
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("hamburger-open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
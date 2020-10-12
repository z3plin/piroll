const body = document.body;
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".mobile__menu-list");
const links = document.querySelectorAll(".mobile__menu-list li");
const logo = document.querySelector(".header__logo");
const triggerMenu = document.querySelector(".trigger");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

hamburger.addEventListener("click", () => {
  logo.classList.toggle("open");
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("hamburger-open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
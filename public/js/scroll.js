const navHeight = document.querySelector(".header-nav").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navHeight + 50 + "px"
);

const primaryNav = document.querySelector(".menu__primary-nav");
const navToggle = document.querySelector(".mobile-toggle");

navToggle.addEventListener("click", () => {
  const state = primaryNav.getAttribute("data-visible");

  state === "false"
    ? primaryNav.setAttribute("data-visible", true)
    : primaryNav.setAttribute("data-visible", false);

  state === "false"
    ? primaryNav.setAttribute("aria-expanded", true)
    : primaryNav.setAttribute("aria-expanded", false);
});

window.addEventListener("scroll", (e) => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 150);
});

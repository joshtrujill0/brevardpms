const navHeight = document.querySelector(".header-nav").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navHeight - 10 + "px"
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

const navHeight = document.querySelector(".header-nav").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navHeight - 10 + "px"
);

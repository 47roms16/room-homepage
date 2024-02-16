const navBtn = document.querySelector("#hamburger-menu");
const navBtnIcon = document.querySelector("#hamburger-icon");
const navBtnIconClose = document.querySelector("#close-icon");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavLinks = document.querySelectorAll(".nav-link");
const html = document.documentElement;

const toggleNav = () => {
  const navIsClosed = mobileNav.classList.toggle("hidden");
  const iconClasses = [navBtnIcon, navBtnIconClose];

  html.style.overflowY = navIsClosed ? "auto" : "hidden";
  iconClasses.forEach((icon) => icon.classList.toggle("hidden"));
};

navBtn.addEventListener("click", toggleNav);

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNav();
  });
});

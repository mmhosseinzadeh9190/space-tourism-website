import "../css/style.css";

const btnNav = document.querySelector(".mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

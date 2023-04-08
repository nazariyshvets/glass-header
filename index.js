const headerNav = document.querySelector("#header-nav");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  menu.classList.toggle("active");
});

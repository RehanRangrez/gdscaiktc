const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  //   mainMenu.style.display = "flex";
  mainMenu.style.pointerEvents = "auto";
  mainMenu.style.opacity = "1";
  mainMenu.style.top = "0";
  console.log("show");
}
function close() {
  //   mainMenu.style.top = "-100%";
  mainMenu.style.pointerEvents = "none";
  mainMenu.style.opacity = "0";

  console.log("close");
}

console.log("clic");

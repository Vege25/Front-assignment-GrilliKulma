"use strict";
const loginButtons = document.querySelectorAll("#loginButton");
const dialog = document.querySelector("#loginDialog");
const modalCloseButton = document.querySelector("#modal-close-button");
const navTitle = document.querySelector(".nav-title");
loginButtons.forEach((loginButton) => {
  loginButton.addEventListener("click", () => {
    dialog.showModal();
  });
});

modalCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
  console.log("closed");
});
// Function to update text content based on screen size
function updateTextContent() {
  if (window.innerWidth <= 900) {
    navTitle.textContent = "GK";
  } else {
    navTitle.textContent = "GrilliKulma";
  }
}
updateTextContent();
window.addEventListener("resize", updateTextContent);

function openNav() {
  var links = document.getElementById("myLinks");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

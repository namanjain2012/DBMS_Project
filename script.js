"use strict";
console.log("Hello world!");
const table = document.querySelector(".table");
const btnsOpen = document.querySelector(".student-btn");
const overlay = document.querySelector(".overlay");
const btnsClose = document.querySelector(".close");
btnsOpen.addEventListener("click", openWindow);
btnsClose.addEventListener("click", closeWindow);
function openWindow() {
  table.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeWindow() {
  table.classList.add("hidden");
  overlay.classList.add("hidden");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !table.classList.contains("hidden")) {
    closeWindow();
  }
});
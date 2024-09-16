document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    document.getElementById("overlay").style.display = "block";
    const menu = document.getElementById("hamburger-menu");
    menu.style.display = "block";
    menu.style.animation = "showUp 0.35s 1";
  });
document.getElementById("close-icon").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("hamburger-menu").style.display = "none";
});

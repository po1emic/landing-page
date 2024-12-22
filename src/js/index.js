import "../styles/index.css";

document.addEventListener("DOMContentLoaded", () => {
  const menuFrame = document.querySelector("#menu-frame");

  document.querySelector("#menu-button").addEventListener("click", () => {
    menuFrame.classList.add("menu-active");
    document.body.classList.add("menu-body");
  });

  document.querySelector("#menu-close").addEventListener("click", () => {
    menuFrame.classList.remove("menu-active");
    document.body.classList.remove("menu-body");
  });

  document.querySelector("#menu-overlay").addEventListener("click", () => {
    menuFrame.classList.remove("menu-active");
    document.body.classList.remove("menu-body");
  });

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuFrame.classList.remove("menu-active");
      document.body.classList.remove("menu-body");
    });
  });
});

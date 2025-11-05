// /public/scripts/header.js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Load header HTML first
    const response = await fetch("partials/header.html");
    const headerHTML = await response.text();
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    const header = document.querySelector("header");
    if (header) {
      header.style.opacity = "0";
      setTimeout(() => (header.style.opacity = "1"), 100);
    }

    // Initialize all header behavior after injection
    initHeaderScripts();
  } catch (err) {
    console.error("Failed to load header:", err);
  }
});

function initHeaderScripts() {
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const header = document.querySelector("header");
  let lastScrollY = 0;

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll("#nav-menu a").forEach(link => {
      link.addEventListener("click", () => {
        toggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // close on scroll
    window.addEventListener("scroll", () => {
      toggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  }

  // header shadow
  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    if (currentY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
    lastScrollY = currentY;
  });
}
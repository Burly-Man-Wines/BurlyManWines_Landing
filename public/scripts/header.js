// /public/scripts/header.js

// Inject the header HTML dynamically
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("partials/header.html");
    const headerHTML = await response.text();
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Once injected, initialize header behavior
    document.querySelector("header").style.opacity = "0";
    setTimeout(() => (document.querySelector("header").style.opacity = "1"), 100);
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

    window.addEventListener("scroll", () => {
      toggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  }

  // Scroll shrink/darken behavior
  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    if (currentY > 20 && currentY > lastScrollY) {
      header.classList.add("scrolled");
    } else if (currentY < 20 || currentY < lastScrollY) {
      header.classList.remove("scrolled");
    }
    lastScrollY = currentY;
  });
}
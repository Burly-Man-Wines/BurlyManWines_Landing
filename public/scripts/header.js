// Inject the header HTML dynamically
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("partials/header.html");
    const headerHTML = await response.text();
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Once injected, initialize header behavior
    const header = document.querySelector("header");
    if (header) {
      header.style.opacity = "0";
      setTimeout(() => (header.style.opacity = "1"), 100);
    }
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

  // ===== Mobile menu toggle =====
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

    // Close menu on scroll
    window.addEventListener("scroll", () => {
      toggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  }

  // ===== Scroll shadow / darken effect =====
  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;

    // Add/remove shadow and subtle background darkening when scrolled down
    if (currentY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Optional future: hide-on-scroll-down logic
    lastScrollY = currentY;
  });
}
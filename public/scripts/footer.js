document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("partials/footer.html");
    const footerHTML = await response.text();
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  } catch (err) {
    console.error("Failed to load footer:", err);
  }
});
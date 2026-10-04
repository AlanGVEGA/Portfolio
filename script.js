const menuButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");
const copyrightYear = document.getElementById("year");

// Update the visual menu and its screen-reader state together.
function setMenuOpen(isOpen) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
  navigation.classList.toggle("open", isOpen);
}

// The mobile Menu button opens or closes the section links.
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

// Close the menu after choosing a section so it does not cover the content.
navigation.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    setMenuOpen(false);
  }),
);

// Escape closes the menu and returns keyboard focus to its button.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});

copyrightYear.textContent = new Date().getFullYear();

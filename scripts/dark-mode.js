/*document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.createElement("button");
    toggle.textContent = "Toggle Dark Mode";
    document.body.appendChild(toggle);

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
*/
const lightToggle = document.getElementById('lightModeToggle');
const darkToggle = document.getElementById('darkModeToggle');

function updateTheme(mode) {
  document.body.classList.remove('light-mode', 'dark-mode');
  document.body.classList.add(mode);
}

lightToggle.addEventListener('change', () => {
  if (lightToggle.checked) {
    darkToggle.checked = false;
    updateTheme('light-mode');
  }
});

darkToggle.addEventListener('change', () => {
  if (darkToggle.checked) {
    lightToggle.checked = false;
    updateTheme('dark-mode');
  }
});

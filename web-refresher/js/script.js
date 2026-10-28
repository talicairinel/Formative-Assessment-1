// script.js - the interactive parts of my Web Refresher page.
// There are three features: a theme switcher, show/hide goals and form feedback.

// ---------- 1. Theme switcher ----------
const themeButton = document.getElementById("theme-toggle");
const root = document.documentElement; // the <html> element

function setTheme(theme) {
  // CSS uses this attribute to swap the colour variables
  root.setAttribute("data-theme", theme);

  const isDark = theme === "dark";
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.textContent = isDark ? "Switch to light mode" : "Switch to dark mode";

  // Remember the choice. This is in a try/catch because storage can be blocked.
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    console.warn("Could not save the theme choice:", error);
  }
}

function getStartingTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch (error) {
    // ignore it and use the device setting below
  }
  // Otherwise follow the device's light/dark setting
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

setTheme(getStartingTheme());

themeButton.addEventListener("click", function () {
  const current = root.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// ---------- 2. Show / hide the goals ----------
const goalButtons = document.querySelectorAll(".goal-toggle");

goalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const isOpen = button.getAttribute("aria-expanded") === "true";

    // Flip the state: if it was open, close it, and the other way round
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
});

// ---------- 3. Contact form feedback ----------
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = "form-feedback is-" + type;
}

form.addEventListener("submit", function (event) {
  // Stop the page reloading, because this form is just for practice
  event.preventDefault();

  const nameInput = form.elements["name"];
  const emailInput = form.elements["email"];
  const messageInput = form.elements["message"];

  // Clear any red borders from last time
  [nameInput, emailInput, messageInput].forEach(function (input) {
    input.classList.remove("field-error");
  });

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "") {
    nameInput.classList.add("field-error");
    showFeedback("Please enter your name.", "error");
    nameInput.focus();
    return;
  }

  // A simple check: something, an @, something, a dot, something
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailInput.classList.add("field-error");
    showFeedback("Please enter a valid email address, like name@example.com.", "error");
    emailInput.focus();
    return;
  }

  if (message === "") {
    messageInput.classList.add("field-error");
    showFeedback("Please write a message.", "error");
    messageInput.focus();
    return;
  }

  // textContent (not innerHTML) keeps whatever was typed from being run as code
  showFeedback("Thanks, " + name + ". This is a practice form, so nothing was sent.", "success");
  form.reset();
});

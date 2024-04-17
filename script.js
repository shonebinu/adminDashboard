const html = document.querySelector("html");
const themeToggler = document.querySelector(".theme-toggle");

function toggleTheme() {
  let theme = localStorage.getItem("data-theme");  
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("data-theme", theme);
  html.setAttribute("data-theme", theme)
}

if (!localStorage.getItem("data-theme")) {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  localStorage.setItem("data-theme", theme);
}

themeToggler.addEventListener("click", toggleTheme);

html.setAttribute("data-theme", localStorage.getItem("data-theme"));

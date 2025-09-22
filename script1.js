/* ===============================
   TYPING EFFECT
=============================== */
const texts = ["Data Analyst", "Python Programmer", "Frontend Developer", "Power BI Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0; // restart loop
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500); // wait before next word
    } else {
        setTimeout(type, 100); // typing speed
    }
})();

/* ===============================
   MOBILE NAVBAR TOGGLE
=============================== */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");  // Hamburger changes to X
    navbar.classList.toggle("active");   // Show/hide menu
});

/* Close navbar when a link is clicked (mobile-friendly) */
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        if(navbar.classList.contains("active")) {
            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
        }
    });
});

/* ===============================
   STICKY HEADER ON SCROLL
=============================== */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

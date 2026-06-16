// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

// Change Vibe Button
const colorBtn = document.getElementById("colorBtn");

const vibes = [
    "linear-gradient(135deg,#667eea,#764ba2)",
    "linear-gradient(135deg,#ff9966,#ff5e62)",
    "linear-gradient(135deg,#11998e,#38ef7d)",
    "linear-gradient(135deg,#fc466b,#3f5efb)"
];

let currentVibe = 0;

colorBtn.addEventListener("click", () => {
    currentVibe++;
    if (currentVibe >= vibes.length) {
        currentVibe = 0;
    }

    document.querySelector("header").style.background =
        vibes[currentVibe];
});

// Contact Form
const form = document.querySelector("form");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;

    formMsg.textContent =
        "Thank you, " + name + "! Your message has been received.";

    form.reset();
});
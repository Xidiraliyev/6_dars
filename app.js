const body = document.querySelector("body");
const display = document.querySelector(".frame");
const text = document.querySelector(".text");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const range = document.querySelector(".range");

function getColor() {
    text.textContent = `linear-gradient: ${range.value}deg, ${color1.value}, ${color2.value}`;
    display.style.background = `linear-gradient(${range.value}deg, ${color1.value}, ${color2.value})`;
    body.style.background = `linear-gradient(${range.value}deg, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", getColor);
color2.addEventListener("input", getColor);
range.addEventListener("input", getColor);

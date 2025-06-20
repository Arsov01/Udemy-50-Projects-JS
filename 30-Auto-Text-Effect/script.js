const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");

const text = "Front-End Developer";
let idx = 1; // Changed from const to let since we need to modify it
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

// Add event listener to update speed when user changes the input
speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});

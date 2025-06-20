const screens = document.querySelectorAll(".screen");
const chooseInsectBtn = document.querySelectorAll(".choose-insect-btn");
const startBtn = document.querySelector("#start-btn");
const gameContainer = document.querySelector("#game-container");
const timeEl = document.querySelector("#time");
const scoreEl = document.querySelector("#score");
const messageEl = document.querySelector("#message");

let seconds = 0;
let score = 0;
let selected_insect = {};
let gameInterval;

startBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

chooseInsectBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");

    selected_insect = { src, alt };
    screens[1].classList.add("up");

    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  // Clear any existing interval to prevent multiple timers
  if (gameInterval) {
    clearInterval(gameInterval);
  }
  gameInterval = setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function createInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");

  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;

  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform:rotate(${Math.random() * 360}deg)"/>`;

  insect.addEventListener("click", catchInsect);
  gameContainer.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 2500);
}

function increaseScore() {
  score++;
  if (score > 19) {
    messageEl.classList.add("visible"); // Fixed variable name (was 'message')

    // Only create button if it doesn't exist
    if (!document.querySelector(".reload-btn")) {
      const reloadBtn = document.createElement("button"); // Fixed element type
      reloadBtn.classList.add("reload-btn");
      reloadBtn.innerText = "Play Again";

      reloadBtn.addEventListener("click", () => {
        window.location.reload();
      });

      // Position the button
      reloadBtn.classList.add("reloadBtn");

      gameContainer.appendChild(reloadBtn);
    }
  }
  scoreEl.innerHTML = `Score: ${score}`;
}

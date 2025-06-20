const container = document.querySelector("#container");
const colors = ["#991f1f"];

// Calculate how many squares we need to fill the viewport
function calculateSquares() {
  const squareSize = 20; // Should match your CSS grid size
  const width = Math.ceil(window.innerWidth / squareSize);
  const height = Math.ceil(window.innerHeight / squareSize);
  return width * height;
}

function createSquares() {
  container.innerHTML = ""; // Clear existing squares
  const squaresNeeded = calculateSquares();

  for (let i = 0; i < squaresNeeded; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
  }
}

// Initialize and handle window resize
createSquares();
window.addEventListener("resize", createSquares);

// Rest of your existing functions...
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = `#1d1d1d`;
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const container = document.querySelector(".container");
const unsplashURL = "https://picsum.photos/300/300?random";
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

console.log(getRandomNumber());
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

console.log(getRandomSize);
function getRandomSize() {
  return `${getRandomNumber()}x ${getRandomNumber()}`;
}

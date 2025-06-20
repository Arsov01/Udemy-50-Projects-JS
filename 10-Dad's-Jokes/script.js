const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => (jokeEl.innerHTML = data.joke));
}

jokeBtn.addEventListener("click", generateJoke);

//7m

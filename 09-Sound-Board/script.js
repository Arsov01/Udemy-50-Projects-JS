const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsContainer = document.querySelector("#buttons");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    let song = document.getElementById(sound);
    song.play();
  });

  buttonsContainer.appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    let song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

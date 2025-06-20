const password = document.querySelector("#password");
const background = document.querySelector("#background");

password.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  const inputLenght = inputValue.length;

  const blurValue = 20 - inputLenght * 2;

  background.style.filter = `blur(${blurValue}px)`;
});

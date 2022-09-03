console.log("Welcome");

const colors = ["red", "green", "yellow", "#979797"];

const color = document.querySelector("#color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// Get random number
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let h1 = document.querySelector("h1");
  let div = document.querySelector("div");

  let randomColor = getRandomColor();
  h1.innerText = randomColor;
  div.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

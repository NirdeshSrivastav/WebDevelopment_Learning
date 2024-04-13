// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load

// let box = document.querySelector("div");
// box.addEventListener("mouseout", function () {
//   console.log("mouse out");
// });

// window.addEventListener("scroll", function () {
//   console.log("scroll event");
// });

// window.addEventListener("load", function () {
//   console.log("load event");
// });

// let input = document.querySelector("input");
// input.addEventListener("keypress", function () {
//   console.log("keypressed");
// });

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   this.style.color = "green";
// });

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let inp = document.querySelector("input");
let h2 = document.querySelector("h2");
inp.addEventListener("keydown", function (e) {
  if ((e.keyCode >= 65 && e.keyCode <= 90) || e.code == 32) {
    h2.innerText = inp.value;
  } else {
    console.log("Invalide key :", e.key);
  }
  console.log(e.key); //a: 65,z:  90 ,A: 65,Z: 90, :32
});

// inp.addEventListener("keypress", function () {
//   h2.innerText = inp.value;
// });

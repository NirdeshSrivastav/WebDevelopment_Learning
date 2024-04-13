console.log("Hello G Kaise hai aap log");

// let btn = document.querySelector("button");
// console.dir(btn);

// // onclick
// // btn.onclick = function () {
// //   console.log("button clicked");
// // };

// function sayHello() {
//   console.log("hello");
// }
// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// for (button of btns) {
//   button.onclick = sayHello;
//   button.onclick = sayName;
// }

// onmouseenter

// function targetHover() {
//   console.log("you entered mouse");
// }
// for (button of btns) {
//   button.onmouseenter = targetHover;
// }

// // event listerer
// function sayHello() {
//   alert("Hello");
// }

// function sayName() {
//   alert("APNA COLLEGE");
// }

// for (button of btns) {
//   // button.addEventListener("click", sayHello);
//   // button.addEventListener("click", sayName);
//   button.addEventListener("dblclick", function () {
//     alert("you double clicked");
//   });
// }

// let div = document.querySelector("div");
// div.addEventListener("mouseenter", () => {
//   console.log("Mouse Entered in box");
// });

// div.addEventListener("", () => {
//   console.log("Mouse inside box");
// });

// this in eventlistener
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log(this);
//   console.log(this.innerText);
//   this.style.backgroundColor = "red";
// });

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// h1.addEventListener("click", colorBlue);
// h3.addEventListener("click", colorBlue);
// p.addEventListener("click", colorBlue);
// btn.addEventListener("click", colorBlue);

// function colorBlue() {
//   this.style.backgroundColor = "blue";
//   console.log(this.innerText);
// }

// keyboard events
// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("button clicked");
// });

// btn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("double button clicked");
// });

// let input = document.querySelector("input");
// input.addEventListener("keydown", function (event) {
//   // console.log(E);
//   if (event.code == "ArrowUp") {
//     console.log("Character Moves Forward");
//   } else if (event.code == "ArrowDown") {
//     console.log("Character Moves Backwards");
//   } else if (event.code == "ArrowLeft") {
//     console.log("Character Moves Left");
//   } else if (event.code == "ArrowRight") {
//     console.log("Character Moves Right");
//   }
// });
// input.addEventListener("keyup", function () {
//   console.log("key was released");
// });

// form event:
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   console.log("form submitted");
// alert("abc");
// event.preventDefault();
// extracting form data
// let id = document.getElementById("user");
// let pass = document.getElementById("pass");
// console.log("userId :", user.value);
// console.log("pass :", pass.value);
// alert(`Hi ${user.value}, your password is set to ${pass.value}`);

// another way to access form data
// console.dir(form);
// let user = this.elements[0];
// let pass = this.elements[1];
// alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// console.dir(form.elements[0]);
// console.dir(form.elements[1]);
// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function () {
//   console.log("input changed");
//   console.log("changed value is: ", user.value);
// });

// user.addEventListener("input", function () {
//   console.log("input event");
//   console.log("final value is: ", user.value);
// });

let input = document.querySelector("#text");
let para = document.querySelector("p");

input.addEventListener("input", function () {
  console.log(input.value);
  para.innerText = input.value;
});

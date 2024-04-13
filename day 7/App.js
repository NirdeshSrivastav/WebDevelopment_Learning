// console.log("Hello g kaise hai aap log");
// // this key
// // let student = {
// //   name: "nirdesh",
// //   age: 17,
// //   eng: 95,
// //   math: 93,
// //   physics: 97,

// //   getAvg() {
// //     console.log(this);
// //     let avg = (this.eng + this.math + this.physics) / 3;
// //     console.log("avg marks: ", avg);
// //   },
// // };

// // console.log(student.name);
// // student.getAvg();

// // function func() {
// //   console.log(this);
// // }

// // func();
// // alert("ok to close");
// // close(1);

// // try and catch
// // try {
// //   console.log(a);
// // } catch (e) {
// //   console.log("a is not defined: ", e);
// // }

// // // Miscellenious
// // // arrow function
// // const sum = (a, b) => {
// //   console.log(a + b);
// // };

// // let cube = (n) => {
// //   console.log(n ** 3);
// // };

// // let name = () => {
// //   console.log("name: Nirdesh");
// // };
// // cube(3);
// // sum(5, 6);

// // name();
// let mul = (a, b) => a * b;

// let m = mul(4, 5);
// console.log(m);

// // Settiimeout in js just like seep in js
// console.log("Hi there");
// setTimeout(() => {
//   console.log("Apna College");
// }, 4000);
// console.log("Welcome to");

// // Set Interval
// let id1 = setInterval(() => {
//   console.log("Apna College");
// }, 2000);

// let id2 = setInterval(() => {
//   console.log("Code With Harry");
// }, 3000);

// console.log(id1);
// console.log(id2);

// clearInterval(id2);

// const student = {
//   name: "Nirdesh",
//   marks: 95,
//   prop: this, //global scope
//   getName: function () {
//     //object scope
//     console.log(this);
//     return this.name; //object scope
//   },
//   getMarks: () => {
//     //parent scope: window scope
//     console.log(this);
//     return this.marks; //global scope
//   },

//   getInfo1: function () {
//     setTimeout(() => {
//       console.log(this); //student
//     }, 2000);
//   },
//   getInfo2: function () {
//     setTimeout(function () {
//       console.log(this); //window
//     }, 2000);
//   },
// };
// console.log(student.getInfo1());
// console.log(student.getInfo2());

// // console.log(student.getName());
// // console.log(student.getMarks());
// let a = 5; //global scope

// Practice: Write an arrow function that return the square of a number n
let sq = (n) => n * n;

let res = sq(5);
console.log(res);

// Practice: Write a function that prints "Hello World" 5 times at Interval Of 2s Each
// --My AProach--
// let count = 0;
// let id = setInterval(() => {
//   console.log("Hello World!");
//   count++;
//   if (count == 5) {
//     clearInterval(id);
//   }
// }, 2000);

// --Ma'am's AProach--
let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setInterval(() => {
  clearInterval(id);
  console.log("CLearInterval ran");
}, 10000);

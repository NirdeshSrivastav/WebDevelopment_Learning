// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);

// arr = ["grapes", "Banana"];

// console.log(arr);
// arr[0] = "Mango";
// console.log(arr);
// arr[10] = "Pomigranut";
// console.log(arr);

// arr.push("Grapes");

// console.log(arr);
// arr.pop();
// console.log(arr);

// let unsf = arr.unshift("Litchi");
// console.log("unshift is = ", arr);
// unsf = arr.shift();
// console.log("shiuft is = ", unsf);

// practice
// let arr = ["January", "July", "March", "August"];

// arr.shift();
// arr.shift();
// arr.unshift("June");
// arr.unshift("July");
// console.log("Practice");
// console.log(arr);

// console.log(arr.indexOf("March"));

// console.log(arr.includes("March"));

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 4, 6, 8];

// let res = arr1.concat(arr2);
// console.log(res);

// console.log(res.reverse());

// let partOfRes = res.slice(2, 8);

// console.log(partOfRes);

// res.splice(0, 2, "safal", "Saksham");

// console.log(res);

// console.log(res.sort());

// const ar = [1, 2, 3, 4, 5];
// console.log(ar);
// ar[0] = 9;
// console.log(ar);
// ar = [2, 4, 6, 8];
// console.log(ar);

// let arr = [
//   [1, 2],
//   [2, 4],
//   [4, 8],
//   [8, 16],
// ];
// console.log(arr);
// console.log(arr[0][1]);

// practice: TIK TAK TOE
// let ttt = [
//   ["x", null, 0],
//   [null, "x", null],
//   [0, null, "x"],
// ];
// console.log(ttt);

// // -------------------------------- Loops --------------------------------------------
// // -------------------------------- ForLoops --------------------------------------------
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // Odd Nummber
// for (let i = 1; i < 50; i = i + 2) {
//   console.log(i);
// }

// // Even Nummber
// for (let i = 0; i < 50; i = i + 2) {
//   console.log(i);
// }

// // Table Of 5
// for (let i = 5; i <= 50; i = i + 5) {
//   console.log(i);
// }

// // Nested For Loop
// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(i);
//   }
// }

// // -------------------------------- WhileLoops --------------------------------------------
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// // practice: fevorite Movie
// // let movie = "Avataar";
// // let guess = prompt("Guess The Fevorite Movie: ");

// // while (guess != movie && guess != "Quiet") {
// //   console.log("Wronge");
// //   guess = prompt("Guess The Fevorite Movie: ");
// // }

// // break keyword
// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }

// // Loop with Array
// console.log("loops with array");
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < 5; i++) {
//   console.log(arr[i]);
// }

// // Loop with Nested Array
// // console.log("loops with array");
// // arr = [
// //   [1, 2],
// //   [3, 4],
// //   [5, 6],
// // ];
// // for (let i = 0; i < 3; i++) {
// //   for (let j = 0; j < 2; j++) {
// //     console.log(arr[i]);
// //   }
// // }

// // // for-of loop
// // let fruits = ["mango", "Grapes", "Guava", "Banana"];
// // for (fruit of fruits) {
// //   console.log(fruit);
// // }

// practice todo app
let todo = [];
let choice = "";
choice = prompt("Please Enter your request");

while (true) {
  if (choice == "quit") {
    break;
  } else if (choice == "list") {
    console.log("All ToDo's are: ");
    for (let i = 0; i < todo.length; i++) {
      console.log("index: ", i, "task: ", todo[i]);
    }
    console.log("-----------------------------------------");
  } else if (choice == "add") {
    let task = prompt("Enter the task to add");
    todo.push(task);
    console.log("Task Added");
    console.log("-----------------------------------------");
  } else if (choice == "delete") {
    let idx = parseInt(prompt("Enter the task index to delete"));
    todo.splice(idx, 1);
    console.log("Task Deleted");
    console.log("-----------------------------------------");
  } else {
    console.log("wronge request");
  }
  choice = prompt("Please Enter your request");
}

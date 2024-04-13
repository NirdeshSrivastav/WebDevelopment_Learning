// Q. 1

let num = prompt("Enter the number: ");

if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

// Q. 2
let name = prompt("Please enter your name: ");
let age = prompt("Please enter your age: ");
alert(`${name} is ${age} years old.`);

// Q. 3
let qrtr = 3;

switch (qrtr) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
  default:
    console.log("Invalide");
}

// Q. 4
let str = "akjdvkjhbc";

if ((str[0] === "a" || str[0] === "A") && str.length > 5) {
  console.log("Golden String");
} else {
  console.log("Not A Golden String");
}

// Q. 5
let x = 9;
let y = 5;
let z = 3;
if (x > y && x > z) {
  console.log("a is greater");
} else if (x < y && y > z) {
  console.log("y is greater");
} else {
  console.log("z is greater");
}

// Q. 6
let num1 = 56450;
let num2 = 59327950;

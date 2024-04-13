console.log("Function in js");

function hello() {
  console.log("hello");
}

function printName() {
  console.log("nirdesh");
}

function onetofive() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

// practice
function printPoem() {
  console.log("twincle twincle little star...");
}

// practice: function roll a dice

function rollDice() {
  value = Math.floor(Math.random() * 6) + 1;
  console.log(value);
}

// functioon with args
function printCustomName(name, age) {
  console.log(name, "'s age is: ", age);
}

function sum(a, b) {
  console.log("sum is", a + b);
}

// practice: average of 3 numbers
function avgOfThree(a, b, c) {
  console.log("average is", (a + b + c) / 3);
}

// practice: table
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}

// function with return
function sumWithReturn(a, b) {
  return a + b;
}

// practice: return sum of numbers from 1 to n
function getSum(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += i;
  }
  return count;
}

// practice: return the concatenation of all string in an array.
function concatStrings(arr) {
  let res = "";
  for (str of arr) {
    res += str;
  }
  return res;
}

console.log(
  "some of all strings are: ",
  concatStrings(["Nirdesh", " kumar", " shrivastav"])
);

// console.log("SOme with return:  (2,y) ", sumWithReturn(12, 18));
// console.log(
//   "SOme with return: ((x,y),z) ",
//   sumWithReturn(sumWithReturn(22, 10), 18)
// );

// console.log("Some from 1 to n is: ", getSum(10));
// console.log("Some from 1 to n is: ", getSum(100));
// console.log("Some from 1 to n is: ", getSum(1000));

// printTable(73);

// avgOfThree(2, 4, 6);

// sum(12, 56);

// printCustomName("safal", 18);
// printCustomName("Nirdesh");

// rollDice();
// printPoem();
// onetofive();
// printName();
// hello();

// -----------------------scopes--------------------------------
// let val = 56; // global scope
// function calSUm(a, b) {
//   let sumval = a + b; // function scope
// }

// {
//   let x = 6; //block scope
//   const y = 6; //block scope
// }

// console.log(x);
// console.log(y);

// function outer() {
//   let x = 5; //lexical scope
//   let y = 6; //lexical scope

//   function inner() {
//     //function with function scope
//     console.log(y);
//     let a = 10; //function scope only in inner
//   }
//   inner();

//   console.log(a);
// }

// outer();

// function expression
// let a = function sum(a, b) {
//   return a + b;
// };

// console.log(a(1, 2));

// let greet = function hello() {
//   console.log("Hello");
// };

// greet();

// greet = function namste() {
//   console.log("nmaste");
// };
// greet();

// function multipleGreet(func, n) {
//   for (let i = 0; i < n; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("Hello");
// };

// multipleGreet(greet, 5);
// multipleGreet(function () {
//   console.log("Namaste");
// }, 5);

// Higher order function :RETURNs a function

// function oddEvenFactory(req) {
//   if (req == "odd") {
//     return function (n) {
//       console.log(!n % 2 == 0);
//     };
//   } else if (req == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("wronge request");
//   }
// }

// let funct = oddEvenFactory("even");

// funct(3);

// Method: function in object
const calculator = {
  num: 55,
  sum: function (a, b) {
    return a + b;
  },

  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

console.log(calculator.num);
console.log(calculator.sum(4, 6));
console.log(calculator.sub(6, 4));
console.log(calculator.mul(4, 6));

const calculator2 = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};

console.log(calculator2.add(4, 8));
console.log(calculator2.sub(4, 8));

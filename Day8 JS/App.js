console.log("Hello G Kaise hai app log");
// // Array method s
// // for Each
// let arr = [1, 2, 3, 4, 5];
// function print(el) {
//   console.log(el);
// }

// arr.forEach(print);
// // or
// arr.forEach(function print(el) {
//   console.log(el);
// });

// arr.forEach((el) => {
//   console.log(el);
// });

// students = [
//   {
//     name: "safal",
//     marks: 23,
//   },
//   {
//     name: "Hritik",
//     marks: 98,
//   },
//   {
//     name: "anshuman",
//     marks: 96,
//   },
// ];

// gpa = students.map((el) => {
//   return el.marks / 10;
// });
// console.log(gpa);

// arr.forEach((obj) => {
//   console.log(obj);
// });

// //map
// let num = [1, 2, 3, 4];
// let newArr = num.map((el) => {
//   return el * 2;
// });

// console.log(newArr);

// //filter
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// even = nums.filter((el) => el % 2 == 0);
// console.log(even);

// //every
// arr = [1, 3, 3, 4];
// newArr = arr.every((el) => {
//   return !el % 2 == 0;
// });

// console.log(newArr);

// // sum of all array values
// arr = [1, 2, 3, 4];
// let result = arr.reduce((res, el) => res + el);
// console.log(result);

// // practice maximum  number from an array using reduce method
// arr = [1200, 1454, 15, 12, 135467, 16, 346, 23, 264, 7, 458, 2, 3];

// let maxNum = arr.reduce((res, el) => {
//   console.log(res);
//   if (res < el) {
//     return el;
//   } else {
//     return res;
//   }
// });

// console.log("Maximum number is: ", maxNum);

// // practice : check all numbers in our array are multiple of 10 or not
// arr = [100, 1000, 10000, 10];

// let multipleOf10 = arr.every((el) => el % 10 == 0);
// console.log("does all the numbwer are multiple of 10", multipleOf10);

// // practice: function to find the min number in an array
// arr = [100, 200, 23, 30, 44];

// let minNum = arr.reduce((min, el) => {
//   if (min > el) {
//     return el;
//   } else {
//     return min;
//   }
// });
// console.log("min numnber is : ", minNum);

// // default parameter
// function sum(a, b = 2) {
//   console.log(a + b);
// }

// sum(12); //here value of b will bw default 2
// sum(12, 18); //here value of b is 18

// // spread
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 983];
// console.log(Math.max(...arr));
// console.log(...arr);
// console.log(..."Apna College");
// // spread with array literals
// arr = [1, 2, 3, 43, 4, 5];
// let newArr = [...arr];
// newArr.push(97356);
// console.log(newArr);
// let chars = [..."Apna College"];
// console.log(chars);
// let even = [2, 4, 6, 8];
// let odd = [1, 3, 5, 7];

// let nums = [...even, ...odd];
// console.log(nums);

// // spread with object literals
// let data = {
//   email: "abc@123.com",
//   password: "abcd",
// };

// let dataCopy = { ...data, id: 123 };
// console.log(data);
// console.log(dataCopy);

// arr = [1, 2, 3, 4, 5];
// let arrayToObject = { ...arr };
// console.log(arrayToObject);

// Rest Opposite of spread
function sum(...args) {
  return args.reduce((add, el) => add + el);
}

console.log("SUm : ", sum(1, 2, 3, 4, 5, 6, 7));

// /recreate min function
function min(...args) {
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

console.log(min(23, 235, 233, 52, 5, 6, 4, 7, 2, 235));

//  destructuring
let names = ["ram", "shyam", "hritik", "sohel", "bharat", "kaushal"];
let [winner, runnerup, ...others] = names;
console.log(winner, runnerup);
console.log(winner, runnerup, others);
console.log(winner, runnerup, ...others);

// destructuring in objects
const student = {
  name: "karan",
  age: 12,
  class: 9,
  subject: ["hindi", "english", "math"],
  username: "karan@123",
  password: "1212",
};

const { username: user, password: pass } = student;
console.log(user);
console.log(pass);

const { username, password } = student;
console.log(username);
console.log(password);

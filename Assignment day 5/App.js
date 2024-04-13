console.log("Assignment JS day 4");

//  Q. 1
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//   }
// }

// console.log("new array is: ");
// for (i of arr) {
//   console.log(i);
// }

//  Q. 2
// let num = 282;

// let digits = 0;
// while (num != 0) {
//   num = num / 10;
//   digits++;
// }

// console.log("Total number of digits is ", digits);

// Q. 3

// Q. 4
// num = 4;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(fact);

// Q. 5
let arr = [100, 800, 300, 400];
let temp = arr[0];
for (i of arr) {
  if (temp < i) {
    temp = i;
  }
}
console.log("largest number is: ", temp);

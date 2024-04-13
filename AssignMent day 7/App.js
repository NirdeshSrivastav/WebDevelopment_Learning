console.log("Hello G KAise Hai app log");
//Q.1 : Arrow function that takes  an number array and returns the average of all numbers
let avg = (numbers) => {
  let avrg = 0;
  for (number of numbers) {
    avrg += number;
  }
  avrg = avrg / numbers.length;
  return avrg;
};

let arr = [5, 5, 5, 5, 5];
console.log(`Average of all elements is: ${avg(arr)}`);

//Q. 2: arrow function to check only if a number is even or not
let isEven = (n) => {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "not even";
  }
};

console.log(isEven(4));

// Q. 3: Guess Output
const object = {
  message: "Hello, World!",
  logMessage() {
    console.log("Message is: ", this.message);
  },
};

setTimeout(object.logMessage, 1000);

// Q. 4: Guess the Output
let length = 4;

function callback() {
  console.log("Into callback func");
  console.log(this.length);
}

const object2 = {
  length: 5,
  method(callback) {
    callback();
  },
};

object2.method(callback, 1, 2);

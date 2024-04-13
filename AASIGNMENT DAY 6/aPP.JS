console.log("Hello g kaise hai aap log");

// Q. 1 :Write a function that returns the arrayy elemts larger than a number
function retElement(arr, num) {
  resArr = [];
  for (numbers of arr) {
    if (numbers > num) {
      resArr.push(numbers);
    }
  }
  return resArr;
}

let num = 450;
console.log(
  `the element larger than ${num}: ${retElement(
    [100, 45, 36, 800, 356, 8934, 835],
    num
  )}`
);

// Q. 2: Function to extract unique characters from a string.
function uniqueChars(str) {
  resStr = "";
  chars = [];
  for (let i = 0; i < str.length; i++) {
    if (!chars.includes(str[i])) {
      chars.push(str[i]);
    }
  }
  for (char of chars) {
    resStr += char;
  }
  return resStr;
}

let str = "abcdabcdefgggh";
console.log(`Unique characters in ${str} is : ${uniqueChars(str)}`);

//Q. 3: function that takes a list of country name and returns the longest country name
function longestCountry(countries) {
  count = "";
  for (country of countries) {
    if (count.length < country.length) {
      count = country;
    }
  }
  return count;
}

console.log(
  ` the largest country name is: ${longestCountry([
    "Australia",
    "Germany",
    "United States of America",
  ])}`
);

// Q. 4: function to count number of vowel in a string
function countVowel(str) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return count;
}

str = "apple";
console.log(`Total number of vowel in ${str} is: ${countVowel(str)}`);

//Q. 5: function to create a random number within a range(strat, end)

function randomWithinRange(start, end) {
  let diff = end - start;
  randNum = Math.floor(Math.random() * diff) + start;
  return randNum;
}
let start = 10;
let end = 40;
console.log(`Random (${start} , ${end}) is: ${randomWithinRange(start, end)}`);

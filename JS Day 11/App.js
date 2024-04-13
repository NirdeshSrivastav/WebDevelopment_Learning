// // // call stack
// // function hello() {
// //   console.log("inside hello function");
// //   console.log("hello");
// // }

// // function demo() {
// //   console.log("calling hello function");
// //   hello();
// // }
// // console.log("calling demo function");
// // demo();

// // // visualizing the call stack/ stack frame
// // function one() {
// //   return 1;
// // }

// // function two() {
// //   return one() + one();
// // }

// // function three() {
// //   let ans = two() + one();
// //   console.log(ans);
// // }

// // three();

// // Breakpoints

// // synchronous
// // signle threded
// // let a = 25;
// // console.log(a);
// // let b = 35;
// // console.log(b);
// // console.log("sum: ", a + b);

// // asynchronous
// setTimeout(() => {
//   console.log("apna college");
// }, 2000);

// setTimeout(() => {
//   console.log("Hello World!");
// }, 2000);

// console.log("after settimeout");

// Callback Hell

// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) {
//       nextColorChange();
//     }
//   }, delay);
// }
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000);
//   });
// });

// // callback chaining -> callback hell

//---------- promises --------------
// function saveToDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveToDB(
//   "Apna College",
//   () => {
//     console.log("success: your data was saved");
//     saveToDB(
//       "Hello World",
//       () => {
//         console.log("success2: your data2 was saved");
//         saveToDB(
//           "Nirdesh",
//           () => {
//             console.log("success3: your data3 was saved");
//           },
//           () => {
//             console.log("failure3: your data3 was not saved");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: your data2 was not saved");
//       }
//     );
//   },
//   () => {
//     console.log("failure: your data was not saved");
//   }
// );

// function saveToDB(data, success, failure) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success: data was saved");
//     } else {
//       reject("failure: weak connection");
//     }
//   });
// }

// let req = saveToDB("Nirdesh kumar shrivastav");
// req
//   .then(() => {
//     console.log("promise was resolved", req);
//   })
//   .catch(() => {
//     console.log("promise was rejected", req);
//   });
// ----or----
// saveToDB("Nirdesh kumar shrivastav")
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// or promise chaining
// saveToDB("Nirdesh kumar shrivastav")
//   .then(() => {
//     console.log("promise was resolved");
//     return saveToDB("safal");
//   })
//   .then(() => {
//     console.log("promise 2 was resolved");
//     return saveToDB("saksham");
//   })
//   .then(() => {
//     console.log("data3 was saved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
// });

// saveToDB("Nirdesh kumar shrivastav")
// .then(() => {
//   console.log("promise was resolved");
//   return saveToDB("safal");
// })
// .then(() => {
//   console.log("promise 2 was resolved");
//   return saveToDB("saksham");
// })
// .then(() => {
//   console.log("data3 was saved");
// })
// .catch(() => {
//   console.log("promise was rejected");
// });

// saveToDB("Nirdesh kumar shrivastav")
//   .then((result) => {
//     console.log("promise was resolved");
//     console.log("result of promise", result);
//     return saveToDB("safal");
//   })
//   .then((result) => {
//     console.log("promise 2 was resolved");
//     console.log("result of promise", result);
//     return saveToDB("saksham");
//   })
//   .then((result) => {
//     console.log("promise 3 was resolved");
//     console.log("result of promise", result);
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// -----------------------------------
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("color changed, red");
    return changeColor("blue", 5000);
  })
  .then(() => {
    console.log("color changed blue");
  })
  .catch(() => {
    console.log("some thing went wrong");
  });

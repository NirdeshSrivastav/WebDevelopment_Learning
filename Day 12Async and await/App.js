// // console.log("hello world!");

// // async function greet() {
// //   throw "404 page not found";
// //   return "hello";
// // }

// // greet()
// //   .then((res) => {
// //     console.log("promise was successful", res);
// //   })
// //   .catch((err) => {
// //     console.log("promise was rejected with error: " + err);
// //   });

// // let demo = async () => {
// //   return 5;
// // };
// // demo();

// function getNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNumber();
//   await getNumber();
//   await getNumber();
// }

h1 = document.querySelector("h1");
function changeColor(color, delay) {
  //   console.log("hello");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num == 5) {
        reject("promise rejected");
      }
      h1.style.color = color;
      console.log("color is: ", color);
      resolve("success");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("hotpink", 1000);
    await changeColor("tomato", 1000);
    await changeColor("green", 1000);
    await changeColor("brown", 1000);
  } catch (e) {
    console.log("something went wrong: ", e);
  }
  let a = 5;
  console.log(a);
  console.log("new number is: ", a + 3);
}

demo();

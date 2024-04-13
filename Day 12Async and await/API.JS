// console.log("hello g kaise hai aap log");

// let jsonData = `{"fact":"Cats have 32 muscles that control the outer ear (humans have only 6). A cat can independently rotate its ears 180 degrees.","length":122}`;

// console.log(jsonData);

// // JSON to javascript objects
// let validResponse = JSON.parse(jsonData);
// console.log(validResponse);
// console.log(validResponse.fact);
// console.log(validResponse.length);

// // javascript objects to JSON
// let validJSONResponse = JSON.stringify(validResponse);
// console.log(validJSONResponse);

// // Testing API
// // hoppscotch.io
// // Postman

// // AJAX: Asynchrounus Javascript XML
// // when used webpage not reloads

// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//       console.log(data);
//       console.log("---------------------------------------");
//       console.log(data.fact);
//     });
//   })
//   .catch((e) => {
//     console.log("ERROR: ", e);
//   });

// OR
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .then((data2) => {
//     return data2.json();
//   })
//   .then((dta) => {
//     console.log(dta.fact);
//   })

//   .catch((e) => {
//     console.log("ERROR: ", e);
//   });

// async and await in API calling
let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data.fact);
// }

url = "https://icanhazdadjoke.com/";
async function getJokes() {
  try {
    const config = {
      headers: { accept: "application/json" },
    };
    let jokes = await axios.get(url, config);
    console.log(jokes.data);
  } catch (e) {
    console.log(e);
  }
}

let URL = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let colArr = await getCollege(country);
  // let res = getCollege();
  console.log(colArr);
  show(colArr);
});

function show(colArr) {
  let list = document.querySelector("#list");
  list.innerText = "";

  for (college of colArr) {
    console.log(college.name);
    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
}

async function getCollege(country) {
  try {
    let info = await axios.get(URL + country);
    // console.log(info);
    return info.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

console.log("Hello G Kaise hai aap log");

// Q. 1: Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;

let body = document.querySelector("body");

let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click Me";

body.appendChild(input);
body.appendChild(btn);

//Q 2:. Add following attributes to the element :
//- Change placeholder value of input to “username”
//- Change the id of button to “btn”

input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

//Q. 3: Access the btn using the querySelector and button id. Change the button
//background color to blue and text color to white.
let btnID = document.querySelector("#btn");
btnID.style.backgroundColor = "blue";
btnID.style.color = "white";

//Q. 4: Create an h1 element on the page and set its text to “DOM Practice” underlined.
//Change its color to purple.
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.style.textDecoration = "underline";
body.insertAdjacentElement("afterbegin", h1);

// Q. 5: . Create a p tag on the page and set its text to “Apna College Delta Practice”,
//where Delta is bold.
let p2 = document.createElement("p");
p2.innerHTML = "Apna College <b>Delta</b> Practice";
body.appendChild(p2);

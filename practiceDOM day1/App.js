console.log("helo");
// practice 1: a p with red text that says "hay i'm red"

let body = document.querySelector("body");
let p1 = document.createElement("p");
p1.innerText = "Hay I'm Red";
p1.style.color = "red";
body.appendChild(p1);

// practice 1: a h3 with blue text that says "Im' blue h3!"
let h3 = document.createElement("h3");
h3.innerText = "I'm blue h3!";
h3.style.color = "blue";
body.appendChild(h3);

// practice 1:  a div in which a h1 and p
let div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";

body.appendChild(div);

let h1 = document.createElement("h1");
h1.innerText = "I'm In a DIV";

let p2 = document.createElement("p");
p2.innerText = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);

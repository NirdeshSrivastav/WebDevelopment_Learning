// console.log("hello");

// let img_obj = document.getElementById("mainImg");
// console.dir(img_obj);

// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImages.length; i++) {
//   console.log(smallImages[i]);
// }
// console.log("-------------------------------------");
// let targetTag = document.getElementsByTagName("p");
// for (let i = 0; i < targetTag.length; i++) {
//   console.log(targetTag[i]);
// }

// // Query Selector

// document.querySelector("p").style = "color: BLUE;";
// document.querySelectorAll("p").style = "color: red;";
// document.querySelector("div a").style = "color: red;";

let para = document.querySelector("p");
para.innerText = "Hi i'm <b>peter parker</b>"; //takes as text so this will not bold
para.innerHTML = "Hi i'm <b>peter parker</b>"; //takes html so this will be bold
para.textContent;

let heading = document.querySelector("h1");
// heading.innerHTML = "<u>spider man</u>";
// or
heading.innerHTML = `<u>${heading.innerText}</u>`;

// attribute manipulation
let img = document.querySelector("#mainImg");
img.getAttribute("id");
img.setAttribute("id", "spidermanImg");
img.setAttribute("src", "assets/creation_3.jpeg");
img.getAttribute("class");

// manipulatio        n styles
heading.style = "color: red";
heading.style.backgroundColor = "yellow";

let link = document.querySelectorAll(".box a");
for (let i = 0; i < link.length; i++) {
  link[i].style.color = "yellow";
}

img.classList;
img.classList.add("safal");
img.classList;
img.classList.remove("safal");
img.classList.contains("safal");

img.classList;

img.classList.toggle("safal");
img.classList.toggle("safal");

// navigation
let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.childElementCount);
img.previousElementSibling.style.color = "blue";

// Adding Element
// TO create the new P
let newP = document.createElement("p");
newP.innerText = "Hii I'm a new P";
console.dir(newP);
// TO create the new button
let btn = document.createElement("button");
btn.innerText = "Click ME!";
console.dir(btn);

// to insert the newP into HTML PAGE
let body = document.querySelector("body");
body.appendChild(newP);
body.append(newP);

// to insert the newP into HTML PAGE
let box = document.querySelector(".box");
box.appendChild(btn);
box.append(btn);

// append(element)
newP.append(" This is new text");
newP.append(btn, "do not click this");
newP.prepend("new Paragraph...");

// insertAdjecent

let btn2 = document.createElement("button");
btn2.innerText = "new button!";

let p = document.querySelector("p");
p.insertAdjacentElement("beforebegin", btn2);
p.insertAdjacentElement("afterbegin", btn2);
p.insertAdjacentElement("beforeend", btn2);
p.insertAdjacentElement("afterend", btn2);

// removing element from page
body.removeChild(btn2);
// p.remove();
// body.remove();

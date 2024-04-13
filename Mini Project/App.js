// event bubbling
// let div = document.querySelector("div");
// div.addEventListener("click", function () {
//   console.log("div clicked");
// });

// let ul = document.querySelector("ul");
// ul.addEventListener("click", function (evt) {
//   evt.stopPropagation();
//   console.log("ul clicked");
// });

// let li = document.getElementsByClassName("li");
// for (list of li) {
//   list.addEventListener("click", function (evt) {
//     evt.stopPropagation();
//     console.log("list clicked");
//   });
// }

let btn = document.querySelector("#btn2");
let ul = document.querySelector("ul");
let inp = document.querySelector("#todo");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (evt) {
  // console.log(evt.target.nodeName);
  if (evt.target.nodeName == "BUTTON") {
    let item = evt.target.parentElement;
    item.remove();

    console.log("Element Deleted: ", item);
  }
});

// will not work for new elements

// let btn2 = document.querySelectorAll(".delete");
// for (btns of btn2) {
//   btns.addEventListener("click", function () {
//     console.log("ELEMENT DELETED");
//     let para = this.parentElement;
//     para.remove();
//     // console.log(para);
//     // btns.style.backgroundColor = "red";
//   });
// }

// ul.addEventListener("click", function (event) {
//   if (event.target.classList.contains("delete")) {
//     console.log("ELEMENT DELETED");
//     let item = event.target.parentElement;
//     item.style.backgroundColor = "red";
//     // Remove the item from the list
//     item.remove();
//   }
// });

console.log("Hello World!");
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");
// step 1
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

// step 2
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];

  level++;
  h2.innerText = `level ${level}`;
  //   random button choose
  let randomIndex = Math.floor(Math.random() * 3);
  let randomColor = btns[randomIndex];
  let randomButtons = document.querySelector(`.${randomColor}`);
  //   console.log(randomColor);
  //   console.log(randomIndex);
  //   console.log(randomButtons);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randomButtons);
}

// step 3
function btnPress() {
  let btn = this;
  userFlash(btn);
  console.log(this);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  setTimeout(checkAns(userSeq.length - 1), 2000);
}
let all = document.querySelectorAll(".btn");
for (btn of all) {
  btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
  // console.log(`current level: ${level}`);
  idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `game over! your score was: <b>${level}</b><br/> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

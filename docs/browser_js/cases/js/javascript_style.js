// Remove
let queryRemove = document.querySelector("#removeBtn");
queryRemove.addEventListener("click", (event) => {
  removeEvent(event);
});

function removeEvent(event) {
  let queryBox1 = document.querySelector(".box1");
  queryBox1.style.display = "none";
}

// Hidden
let queryHidden = document.querySelector("#hiddenBtn");
queryHidden.addEventListener("click", (event) => {
  hiddenEvent(event);
});

function hiddenEvent(event) {
  let queryBox2 = document.querySelector(".box2");
  queryBox2.style.visibility = "hidden";
}

// Reset
let queryReset = document.querySelector("#resetBtn");
queryReset.addEventListener("click", (event) => {
  resetEvent(event);
});

function resetEvent(event) {
  let queryBox1 = document.querySelector(".box1");
  let queryBox2 = document.querySelector(".box2");
  queryBox1.style.display = "block";
  queryBox2.style.visibility = "visible";
}

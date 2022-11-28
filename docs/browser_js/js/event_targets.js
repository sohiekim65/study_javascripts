// 입력받은 value 엔터치면 화면상에 남겨지게
let querySingle = document.querySelector("#single");
// querySingle.addEventListener("click", singleEvent);
querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});
// querySingle.addEventListener("double-click", ?);

function singleEvent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}

// let queryKeydown = document.querySelector("#keydown");
// queryKeydown.addEventListener("keydown", (event) => {
//   console.log(event);
//   if (event.code == "Enter") {
//     keydownDesc(event);
//   }
//   console.log(event.target);
// });

// function keydownDesc(event) {
//   let desc = queryKeydown.value;
//   let queryKeydownDesc = document.querySelector("#keydownDesc");
//   queryKeydownDesc.innerHTML = desc;
// }
// function 간단하게
let queryKeydown = document.querySelector("#keydown");
queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(queryKeydown.value);
  }
  console.log(event.target);
});

function keydownDesc(desc) {
  let queryKeydownDesc = document.querySelector("#keydownDesc");
  queryKeydownDesc.innerHTML = desc;
}

// onload
let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad());

function queryLoad() {
  queryload.innerHTML = "Done On Load!";
}

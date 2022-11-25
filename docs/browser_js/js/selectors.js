let queryTitle = document.querySelector("#title");
queryTitle.innerHTML = "query Title!";

// ------------ 반복문으로 값 뽑아내기 ------------------------
let queryItems = document.querySelectorAll(".item");
// queryItems.forEach((item, index) => {
//   console.log(item);
// });

// --------- 하나는 selectorall, 하나는 selector -------------
// selectorall- 해당되는 selector의 모든 것을 다 가져옴
// selector - 첫번째 만나는 조건이 맞는 element만 단수로 가져옴, 안에 있는 list를
// 가져오고 싶으면 queryList.querySelectorAll(".item") 이걸 한번 더 날려줘야 함
let queryLists = document.querySelectorAll(".list");
let queryList = document.querySelector(".list");

let pByTagName = document.getElementsByTagName("p");
// console.log(`${pByTagName}`);
// buttonByTagName.innerHTML = "클릭하세요!";

let listByClassName = document.getElementsByClassName("list");
// console.log(`${listByClassName}`);

let titleById = document.getElementById("title");
// titleById.innerHTML = "Title By ID";

let elementById = document.getElementById("selector");
// console.log(`elementById : ${elementById}`);
// elementById.innerHTML = "<b>Change selector</b>";

// change properties from querySelector
queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255,0,0,0.5)";

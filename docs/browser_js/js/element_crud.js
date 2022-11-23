// div.inner 태그 내부에 <div>hello</div>를 추가
// 프로그래밍 방식 적용
let queryInner = document.querySelector("#container > .inner");

// create Element
let element = document.createElement("div");
let helloText = document.createTextNode("hello");
element.appendChild(helloText);
queryInner.appendChild(element);

// innerHtml
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");

let item = "<div class='item'>" + animal["name"] + animal["age"] + "</div>";
item = `<div class="item">${animal["name"]} : ${animal["age"]}</div>`;
queryApp.innerHTML = item;

// 실습 snack
const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];

let queryList = document.querySelector("#list");
let products = "";
productsData.forEach((productsData, index) => {
  products += `<div id="list">${productsData["title"]} : ${productsData["weight"]}</div>`;
});
queryList.innerHTML = products;

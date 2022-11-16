// Array = ArrayList
let fruits = ["apple", "banana", "orange", "mellon"];
let numbers = [1, 2, 3, 4, 5];
// --- array에 넣을 값이 명확하지 않아 빈공간으로 시작한다면 사용 --
let fruits_init = new Array();
fruits_init = [];

// object = HashMap
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "mellon"];
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
let mixins_third = [1, 2, 3, "banana", objects];
let mixins_fourth = [fruits, numbers];

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

let first = ["apple", "banana"];
let second = ["orange", "mellon"];
let third = ["berry", "strawberry"];

// Q. "mellon"의 index 값은?
let mixins_list = [first, second, third];
mixins_list[1][1];

console.log();

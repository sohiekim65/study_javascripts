// 문제
// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let num_first = inputs[0];
let num_second = inputs[1].split(" ").map(Number);
let num_third = Number(inputs[2]);
let count = 0;

for (let i = 0; i < num_first; i++) {
  if (num_third === num_second[i]) {
    count++;
  }
}
console.log(count);

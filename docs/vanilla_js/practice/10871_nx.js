// 문제
// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let inputs_first = inputs[0].split(" ");
let inputs_second = inputs_first[1];
let num = inputs[1].split(" ").map(Number);

let result_num = { num: num[0] };

for (let i = 0; i < num.length; i++) {
  if (inputs_second > num[i]) {
    result_num["num"] = num[i];
    console.log(result_num["num"]);
  }
}

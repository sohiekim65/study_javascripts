// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
// N(1 ≤ N ≤ 100)

const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let count = Number(inputs[0]);
let star = "";
let space = "";

for (let i = 0; i < count; i++) {
  star = "";
  for (let j = 0; j < count - 1 - i; j++) {
    star += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    star += "*";
  }
  console.log(star);
}

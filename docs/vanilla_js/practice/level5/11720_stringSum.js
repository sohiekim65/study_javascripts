// 문제
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력

// 입력
// 첫째 줄에 count 횟수, 둘째 줄에 N개의 숫자가 주어지고
// N개의 숫자들의 합을 구하기

// 주요 단어 영문 이름 선정
//  입력 - input
//  숫자들의 합 - sum

// 테스트 케이스
// 5
// 54321  ->  15
//
// 25
// 7000000000000000000000000 -> 7

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let count = parseInt(inputs[0]);
let num = inputs[1].split("");
let sum = 0;

for (let i = 0; i < count; i++) {
  sum += parseInt(num[i]);
}
console.log(sum);

// 문제
// 1번부터 30번까지 출석번호가 붙어 있다. 교수님이 내준 특별과제를
// 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 출력

// 입력
// 30번을 반복문으로 돌려 inputs과 비교하였을 때 빠진 숫자 2개 출력

// 주요 단어 영문 이름 선정
//  입력 - input
//  출석번호 -num
//  출력 - output

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// let compare_num = [];
// let num = [];

// // 입력받은 값과 비교할 1 ~ 30번까지의 값을 변수에 담기
// for (let i = 0; i < 30; i++) {
//   compare_num[i] = +(i + 1);
// }

// // inputs으로 입력받아 정렬 처리, 숫자로 변환하여 변수에 담기
// for (let i = 0; i < 28; i++) {
//   inputs.sort((first, second) => first - second); // 정렬
//   num[i] = +parseInt(inputs[i]);
// }

// // 입력받은 값과 비교하는 값의 차집합을 변수에 담기
// let compare = compare_num.filter((x) => !num.includes(x)); // 차집합

// // 차집합 갯수만큼 빠진 값 출력
// for (let i = 0; i < compare.length; i++) {
//   console.log(compare[i]);
// }

// --------------- for문 최소화 ---------------
let compare_num = [];
let num = inputs.sort((first, second) => first - second); // 정렬

for (let i = 0; i < 30; i++) {
  compare_num[i] = +(i + 1);
}

let compare = compare_num.filter((x) => !num.includes(x)); // 차집합

for (let i = 0; i < compare.length; i++) {
  console.log(`${compare[i]}`);
}

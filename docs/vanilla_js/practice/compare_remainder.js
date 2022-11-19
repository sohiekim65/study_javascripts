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
// const fs = require("fs");
// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let inputs = fs
//   .readFileSync(filepath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

const array1 = ["a", "b", "c"];
// array1.forEach((A) => console.log(A));

// forEach문을 여러 function으로 변환
// forEach문 Arrow Function화
let arrowFunction = (A, index) => {
  console.log(`${A}, index ${index}`);
};
array1.forEach(arrowFunction);

// forEach문 Noraml Function화
function normalFunction(element) {
  console.log(element);
}
array1.forEach(normalFunction);

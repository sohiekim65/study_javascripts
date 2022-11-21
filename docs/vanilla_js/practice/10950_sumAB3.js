// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성
// (0 < A, B < 10)

// 입력
// 첫째 줄에 입력한 count만큼 두 정수를 N번 입력받아
// 각 줄에 A+B의 결과값을 출력

// 주요 단어 영문 이름 선정
//  입력 - input
//  반복 - count
//  출력 - output

// 테스트 케이스
// 5
// 1 1  --> 2
// 2 3      5
// 3 4      7
// 9 8      17
// 5 2      7

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let count = parseInt(inputs[0]);

// 출력
for (let i = 0; i < count; i++) {
  let A = inputs[i + 1].split(" ")[0];
  let B = inputs[i + 1].split(" ")[1];
  console.log(parseInt(A) + parseInt(B));
}

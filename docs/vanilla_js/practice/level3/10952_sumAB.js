// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성
// (0 < A, B < 10)

// 입력
// 두 정수를 입력받아 마지막줄 0을 제외한 각 줄의 합을 구하기

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 1 1 -> 2
// 2 3 -> 5
// 3 4 -> 7
// 9 8 -> 17
// 5 2 -> 7
// 0 0 -> 출력 없음

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

// 처리 및 출력
for (let i = 0; i < inputs.length - 1; i++) {
  let first = inputs[i].split(" ")[0];
  let second = inputs[i].split(" ")[1];
  console.log(Number(first) + Number(second));
}

// 문제
// 첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다.
// A와 B는 1 이상, 1,000 이하
// 시간초과 주의하기

// 입력
// 카운트를 먼저 입력받고 그 카운트 횟수 만큼 두 정수를 입력받아
// 각 줄의 두 정수의 합을 구하기

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 5            --> 2
// 1 1              46
// 12 34            505
// 5 500            100
// 40 60            2000
// 1000 1000

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let count = parseInt(inputs[0]);
let result = "";

for (let i = 0; i < count; i++) {
  let A = parseInt(inputs[i + 1].split(" ")[0]);
  let B = parseInt(inputs[i + 1].split(" ")[1]);
  result += A + B + "\n";
}
console.log(result);

// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성
// (1 ≤ n ≤ 10,000)

// 입력
// 숫자 n을 입력받아 1부터 n까지의 누적 합을 출력

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 3 --> 6

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let count = parseInt(inputs[0]);
let grade = inputs[1].split(" ");
// let max = Math.max(...grade);
let result = 0;

let max = parseInt(grade[0]);

for (let i = 1; i < count; i++) {
  if (max < parseInt(grade[i])) {
    max = parseInt(grade[i]);
  }
}

for (let i = 0; i < count; i++) {
  result += (grade[i] / max) * 100;
}
console.log(result / count);

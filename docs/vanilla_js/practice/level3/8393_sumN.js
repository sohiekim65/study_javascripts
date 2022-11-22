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

let sum = 0;

for (let i = 1; i <= parseInt(inputs); i++) {
  sum += i;
}
console.log(sum);

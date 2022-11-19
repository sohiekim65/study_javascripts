// 문제
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다.
// 그 다음 서로 다른 나머지 값이 몇 개 있는지 출력

// 입력
// 입력받은 10개의 수를 42로 나눈 나머지가 서로 다른 갯수 출력

// 주요 단어 영문 이름 선정
//  입력 - input
//  나머지 - remainder
//  출력 - output

// 테스트 케이스
// 39  --> 각 수를 42로 나눈 나머지 39, 40, 41, 0, 1, 2, 40, 41, 0, 1 이라서 결과값 6
// 40
// 41
// 42
// 43
// 44
// 82
// 83
// 84
// 85

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

let num = [];
let count = 0;

for (let i = 0; i < 10; i++) {
  num[i] = inputs[i] % 42;
}

let compare = num.filter((A, index) => num.indexOf(A) === index);
console.log(compare.length);

// 문제
// 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성

// 입력
// 입력받은 연도가 4의 배수이고 100의 배수가 아니거나
// 4의 배수이고 400의 배수이면 윤년, 이외는 윤년이 아니어서 0을 출력

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 2000 --> 1
// 2012 --> 1
// 1900 --> 0
// 2000 --> 1

const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

if (inputs % 4 == 0 && inputs % 100 !== 0) {
  console.log(`1`);
} else if (inputs % 4 == 0 && inputs % 400 == 0) {
  console.log(`1`);
} else {
  console.log(`0`);
}

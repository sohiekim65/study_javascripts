// 문제
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B,
// 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력

// 입력
// 점수에 맞는 등급을 출력

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 100 --> A
// 85 --> B
// 59 --> F

const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

if (inputs >= 90) {
  console.log(`A`);
} else if (inputs >= 80 && inputs < 90) {
  console.log(`B`);
} else if (inputs >= 70 && inputs < 80) {
  console.log(`C`);
} else if (inputs >= 60 && inputs < 70) {
  console.log(`D`);
} else {
  console.log(`F`);
}

// 문제
// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력

// 입력
// 알파벳 소문자, 대문자, 숫자 중 하나를 입력받아
// 그에 맞는 아스키코드를 출력하기

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// A --> 65
// C --> 67
// 0 --> 48
// 9 --> 57
// a --> 97
// z --> 122

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let string = inputs[0];

console.log(string.charCodeAt(0));

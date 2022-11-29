// 문제
// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후
// 출력하는 프로그램을 작성. 첫 번째 문자를 R번 반복, 두 번째 문자를
// R번 반복하는 식으로 P를 만들면 된다.
// T(1 ≤ T ≤ 1,000), R(1 ≤ R ≤ 8)

// 입력
// 첫번째 줄에 테스트 케이스 횟수를 입력받아 그 횟수 만큼의
// 각 줄에 알파벳 반복 출력할 count, 알파벳을 입력받아
// count에 맞게 알파벳을 반복 출력

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 2
// 3 ABC
// 5 /HTP
// --> AAABBBCCC
//     /////HHHHHTTTTTPPPPP

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let inputs_count = parseInt(inputs[0]);
let str;
let contents = [];
let contents_count = [];
for (let i = 1; i <= inputs_count; i++) {
  contents = inputs[i].split(" ")[i];
  contents_count = inputs[i].split(" ")[i - 1];
  for (let j = 0; j < contents_count; j++) {
    str = contents[j];
    console.log(str);
  }
}

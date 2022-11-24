// 문제
// 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서,
// 단어에 포함되어 있는 경우에는 처음 등장하는 위치를,
// 포함되어 있지 않은 경우에는 -1을 출력
// 단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치다

// 입력
// 입력받지 않은 알파벳은 -1, 입력받은 알파벳들은  기존 알파벳 순서대로
// 번호 0,1,2,3,... 출력 (예시에서 ba가 10인 이유)

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// baekjoon
// -> 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim();

let alphabet = [];
for (let i = 97; i < 123; i++) {
  alphabet += inputs.indexOf(String.fromCharCode(i)) + " ";
}
console.log(alphabet);

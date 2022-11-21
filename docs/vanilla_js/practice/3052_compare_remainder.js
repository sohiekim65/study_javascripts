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

// 입력받은 숫자들을 42로 나눈 나머지값 변수에 담음
for (let i = 0; i < 10; i++) {
  num[i] = inputs[i] % 42;
}

// 중복 숫자 제거 -> 중복되는 숫자의 인덱스를 더 작은 인덱스로 리턴
// 나머지 값인 39, 40, 41, 0, 1, 2, 40, 41, 0, 1에서 중복되는 1의 인덱스값은
// 마지막 인덱스 값인 9가 아닌 중복되는 인덱스의 가장 작은 값인 4가 리턴
let compare = num.filter((A, index) => num.indexOf(A) === index);

// 출력
console.log(compare.length);

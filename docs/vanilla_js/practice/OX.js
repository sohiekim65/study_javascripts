// 문제
// O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우
// 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성

// 입력
// 첫째 줄에 테스트 케이스 갯수를 입력받고 각 줄에 테스트 케이스를
// X는 0, O는 1인데 연속될 경우 1씩 증가하여 각 O의 결과값을 더함

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 5
// OOXXOXXOOO          -->  10
// OOXXOOXXOO          -->  9
// OXOXOXOXOXOXOX      -->  7
// OOOOOOOOOO          -->  55
// OOOOXOOOOXOOOOX     -->  30

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

// 테스크 케이스 횟수
let count = parseInt(inputs[0]);

// s
for (let i = 1; i <= count; i++) {
  // "O"가 연속되지 않을 경우 다시 1부터 더해지도록 0으로 세팅
  let sum_count = 0;
  // 각 줄의 "O"인 값들 누적 덧셈하기 위해 줄바뀔 때 0으로 세팅
  let result = 0;
  // inputs의 각 줄의 OX길이 만큼 반복하여
  for (let j = 0; j < inputs[i].length; j++) {
    // inptus[i][j]가 "O"면 1씩 증가, "X"면 0으로 만들기
    if (inputs[i][j] == "O") {
      sum_count++;
    } else {
      // "O"가 연속되지 않을 경우 다시 1부터 더해지도록 0으로 세팅
      sum_count = 0;
    }
    // "O"인 값들 누적 덧셈
    result += sum_count;
  }
  console.log(result);
}

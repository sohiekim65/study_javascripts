// 문제
// 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고,
// 각 자리의 숫자를 더한다 그 다음, 주어진 수의 가장 오른쪽 자리 수와
// 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙여 사이클을 이어간다

// 입력
// 정수를 입력받아 input < 10 --> input을 두 자리로 만들고
// input[0] + inpu[1] = result, input[1] + result = result2, ...을 반복하여
// 처음 입력받은 정수값이 나온 사이클 길이를 출력한다.

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 26 -> 4
// 55 -> 3
// 1 -> 60
// 0 -> 1
// 71 -> 12

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let i = 0;
let first_sum = Number(inputs[0].charAt(1));
first_sum = Number(inputs[0].charAt(0)) + first_sum;
let sum = [];

while (true) {
  sum.pu;
  //   if(sum[i])
}

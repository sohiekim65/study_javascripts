// 문제
// 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이
// 첫 수로 주어지고, 이어서 N명의 점수가 주어진다
// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력

// 입력
// 카운트를 먼저 입력받고 그 카운트 횟수 만큼 두 정수를 입력받아
// 각 줄의 두 정수의 합을 구하기

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 5
// 5 50 50 70 80 100               --> 40.000%
// 7 100 95 90 80 70 60 50         --> 57.143%
// 3 70 90 80                      --> 33.333%
// 3 70 90 81                      --> 66.667%
// 9 100 99 98 97 96 95 94 93 91   --> 55.556%

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let count = parseInt(inputs[0]);

let sum = [];
let first_count = [];
for (let i = 1; i <= count; i++) {
  first_count = inputs[i].split(" ");
  for (let j = 1; j <= first_count[i].length; j++) {
    sum = +first_count[j];
  }
}

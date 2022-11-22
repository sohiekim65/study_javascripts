// 문제
// 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이
// 첫 수로 주어지고, 이어서 N명의 점수가 주어진다
// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력

// 입력
// 테스트 케이스 횟수를 먼저 입력받고 각 줄의 카운트로 반복문을 돌려
// 평균을 구한 뒤 평균과 점수를 비교하여 평균을 넘는 학생들의
// 비율을 계산하여 출력

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

// 테스트 케이스 횟수
let count = parseInt(inputs[0]);

// inputs의 인덱스 1부터 계산하기 위해 테스트 케이스와 나눌 변수
let first_count = [];

for (let i = 1; i <= count; i++) {
  let sum = 0;
  let avg = 0;
  // inputs의 인덱스 1부터 계산
  first_count = inputs[i].split(" ");

  // 각 줄의 합계 구하기
  for (let j = 1; j < first_count.length; j++) {
    sum += parseInt(first_count[j]);
  }

  // 평균보다 높은 학생의 수를 구하기 위한 변수
  let highStudent = 0;

  // 각 줄의 평균 계산
  avg = sum / (first_count.length - 1);

  // 평균과 점수를 비교하여 평균보다 높은 학생의 수 ++
  for (let j = 1; j < first_count.length; j++) {
    if (parseInt(first_count[j]) > avg) {
      highStudent++;
    }
  }

  // 평균보다 높은 학생의 비율 구하기(toFixed는 소수점 뒤에 나타날 자릿수)
  let result = ((highStudent / (first_count.length - 1)) * 100).toFixed(3);
  console.log(`${result}%`);
}

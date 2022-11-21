// 문제
// 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이
// 첫 수로 주어지고, 이어서 N명의 점수가 주어진다

// 입력
// 카운트를 먼저 입력받고 그 카운트 횟수 만큼 두 정수를 입력받아
// 각 줄의 두 정수의 합을 구하기

// 주요 단어 영문 이름 선정
//  입력 - input
//  출력 - output

// 테스트 케이스
// 5            --> 2
// 1 1              46
// 12 34            505
// 5 500            100
// 40 60            2000
// 1000 1000

// 입력
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

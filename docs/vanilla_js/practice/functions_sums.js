// 문제
// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성

function sum(inputs) {
  let sum = 0;
  for (let input of inputs) {
    sum += input;
  }
  return sum;
}

let num = [1, 2, 3, 4, 5];
console.log(sum(num));

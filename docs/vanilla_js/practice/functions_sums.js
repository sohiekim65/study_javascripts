// 문제
// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성

let nums = [1, 2, 3, 4, 5];
let sum_function = sum(nums);

function sum(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sum_function);

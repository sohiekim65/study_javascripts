// function name(parameter1, parameter2, parameter3){
//     code to be execute
//     return
// }

// param : 2(1,3), return 1(1 + 3)
function sum(item_first, item_second) {
  return item_first + item_second;
}

{
  let sum_number = 1 + 3;
  sum_number = 3 + 5;
  sum_number = 6 + 9;
  let sum_function = sum(1, 2); // item_first=1, item_second=2
  console.log();
}

// anonymouse Function : 익명 function
let calculateSum = function (item_first, item_second) {
  return item_first + item_second;
};
{
  console.log(`${calculateSum(5, 7)}`);
}

// Arrow Function : 화살표 사용 (제일 많이 사용)
let calculateSumSecond = (item_first, item_second) => {
  return item_first + item_second;
};
{
  let result = calculateSumSecond(7, 8);
  console.log(`${result}`);
  // 위, 아래 코드 동일(코드의 단순화)
  console.log(`${calculateSumSecond(7, 8)}`);
}

// rest parameters
function printRestParams(...args) {
  let restParam = (arg) => {
    if (typeof arg == "object") {
      // 배열만 뽑는다거나 배열이 아닌것만 뽑는다거나 처리
    }
    console.log(`arg : ${arg}`);
  };
  args.forEach(restParam);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, [4, 3, 2], 5, 6, 7);
}

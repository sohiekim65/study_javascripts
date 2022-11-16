const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// // 백준 9498번 -----------------
// if (inputs >= 90) {
//   console.log(`A`);
// } else if (inputs >= 80 && inputs < 90) {
//   console.log(`B`);
// } else if (inputs >= 70 && inputs < 80) {
//   console.log(`C`);
// } else if (inputs >= 60 && inputs < 70) {
//   console.log(`D`);
// } else {
//   console.log(`F`);
// }

// 백준 2753번 ----------------------
// if (inputs % 4 == 0 && inputs % 100 !== 0) {
//   console.log(`1`);
// } else if (inputs % 4 == 0 && inputs % 400 == 0) {
//   console.log(`1`);
// } else {
//   console.log(`0`);
// }

// 백준 2525번 ------------------------
let A = inputs[0];
let B = inputs[1];
let C = inputs[2];
let B_C = B + C;
console.log(inputs);

if (B_C < 60) {
  console.log(A + " " + B_C);
} else if (B_C > 60) {
  B_C = B_C - 60;
  A = (B_C % 60) + A;
  console.log(A + " " + B_C);
} else {
  B_C = 0;
  if (A >= 23) {
    A = 0;
    A = (B_C % 60) + A;
  } else {
    A = (B_C % 60) + A;
  }
}

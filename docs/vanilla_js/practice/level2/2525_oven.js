const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

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

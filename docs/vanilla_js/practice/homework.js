const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;

for (let i = 1; i <= 30; i++) {
    sum += inputs[]
  sum -= inputs[i];
}
console.log(sum);

const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let max = inputs[0];
let index = 0;

for (let i = 1; i < 9; i++) {
  if (max < inputs[i]) {
    max = inputs[i];
    index = i;
  }
}
console.log(`${max}`);
console.log(`${index + 1}`);

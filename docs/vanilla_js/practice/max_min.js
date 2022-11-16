const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let count = inputs[0];
let number = inputs[1].split(" ").map(Number);

let statistics_obj = { min: number[0], max: number[0] };

for (let i = 1; i < count; i++) {
  if (statistics_obj.max < number[i]) {
    statistics_obj.max = number[i];
  }
  if (statistics_obj.min > number[i]) {
    statistics_obj.min = number[i];
  }
}
console.log(`${statistics_obj.min} ${statistics_obj.max}`);

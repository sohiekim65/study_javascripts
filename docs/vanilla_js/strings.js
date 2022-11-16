// operate number type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);
// recommanded this way
let concate_string = `${number_first}${string_second}`;

string_second = "A";
console.log(number_first + string_second);

// Strings
let animal = "tiger";
console.log(`${animal}`);

let sentance = "  5 2 6  ";
let trims = sentance.trim(); // 공백 제거
let splits = trims.split(" "); // 공백으로 배열 만듦
let maps = splits.map(Number); // 각 배열을 String에서 Number로
console.log(maps[0] + maps[1] + maps[2]); // 합산함.

let inputs = sentance.trim().split(" ").map(Number); // chain function
console.log(inputs[0] + inputs[1] + inputs[2]); // 합산함.

/*
animal.substring(0, 3)
'tig'
animal.toUpperCase()
'TIGER'
animal.replace('ti', 'TI')
'TIger'
animal = animal.replace('ti', 'TI')
'TIger'
animal.charAt(0)
'T'
animal.split('g')
(2) ['TI', 'er']
*/

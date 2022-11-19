const animals = ["dog", "cat", "bird", "fish", "lizard"];

// Normal 방식
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for iterable 방식
// for(variable of iterable){
//     code block to be executed
// }
for (let animal of animals) {
  console.log(`${animal}`);
}
// dog
// cat
// bird
// fish
// lizard ==> 이렇게 하나씩 출력됨
//
// typeof animal
// 'string'
// animal.split("a")
// (2) ['c', 't']

const animals_obj = [
  //   animal,
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];
for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}

const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
  cars[0]; // {} 외부 변수라사용가능
}
// car // {}외부라 사용 불가능
cars.forEach((car) => {
  console.log(`${car}`);
  console.log();
});

//
// forEach
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));

// forEach문을 여러 function으로 변환
// forEach문 Arrow Function화
let arrowFunction = (element, index) => {
  console.log(`${element}, index ${index}`);
};
array1.forEach(arrowFunction);

// forEach문 Noraml Function화
function normalFunction(element) {
  console.log(element);
}
array1.forEach(normalFunction);

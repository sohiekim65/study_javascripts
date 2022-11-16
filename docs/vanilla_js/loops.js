const animals = ["dog", "cat", "bird", "fish", "lizard"];

// Normal 방식
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for iterable 방식
for (let animal of animals) {
  console.log(`${animal}`);
}
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

// for(variable of iterable){
//     code block to be executed
// }
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
  cars[0]; // {} 외부 변수라사용가능
}
// car // {}외부라 사용 불가능

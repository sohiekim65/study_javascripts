// let animal = {key:value, key:value, key:value}
let animal = { name: "juju", species: "cat" };

console.log(animal.name);

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
  console.log(`${key} : ${animal[key]}`); // animal['name'], animal['species']
}
console.log();

// animal["species"]
// 'cat'

const animals_obj = [
  animal,
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];
// Object.keys(animal)
// (2) ['name', 'species']
// Object.values(animal)
// (2) ['juju', 'cat']

const numbers = [1, 2, 3, 4, 5];
const testScorePercentages = [95, 77, 40, 63, 85, 90, 70];
const persons = [
  { name: 'Rick', age: 70 },
  { name: 'Morty', age: 14 },
  { name: 'Summer', age: 17 },
  { name: 'Beth', age: 34 },
];

const personNames = persons.map((person) => {
  person.name;
});

console.log(personNames);

const personsHtml = persons.map((person) => {
  return `<div><h2>${person.name} is ${person.age} years old</h2></div>
  `;
});

console.log(personsHtml);

const personNames2 = [];

for (let i = 0; i < persons.length; i++) {
  const person = persons[i];
  personNames2.push(person.name);
}

console.log(personNames2);

Array.prototype.morph = function (callbackFunction) {
  const newItems = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const newItem = callbackFunction(item, i);
    newItems.push(newItem);
  }

  return newItems;
};

const students = ['Tuan', 'Chase', 'Simon'];

const temp = students.morph((name, idx) => {
  return `${idx + 1}. ${name}`;
});

console.log(temp);

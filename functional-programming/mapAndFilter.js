const testNumbers = [1, 2, 3, 4, 5];

const testScorePercentages = [95, 77, 40, 63, 85, 90, 70];

const persons = [
  { name: 'Rick', age: 70, favoriteLetters: ['c', 'd'] },
  { name: 'Morty', age: 14, favoriteLetters: ['a', 'd'] },
  { name: 'Summer', age: 17, favoriteLetters: ['b', 'c'] },
  { name: 'Beth', age: 34, favoriteLetters: ['c'] },
];

const isEven = (n) => n % 2 === 0;

// Without using .map
const doubleNumbers = (numbers) => {
  const doubledNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    doubledNumbers.push(currentNumber);
  }

  return doubledNumbers;
};

console.log('doubledNumbers:', doubleNumbers(testNumbers));

const doubledNumbers = testNumbers.map((currentNumber) => currentNumber * 2);
console.log('doubledNumbers:', doubledNumbers);

const personNames = persons.map((person) => person.name);
console.log('personNames:', personNames);

const personNameLengths = persons.map((person) => person.name.length);
console.log('personNameLengths:', personNameLengths);

const personHtmlStrings = persons.map((person) => `<p>Name: ${person.name}, Age: ${person.age}</p>`);
console.log('personHtmlStrings:', personHtmlStrings);

const letterGrades = testScorePercentages.map((pct) => {
  if (pct < 65) {
    return 'F';
  }

  if (pct < 70) {
    return 'D';
  }

  if (pct < 80) {
    return 'C';
  }

  if (pct < 90) {
    return 'B';
  }

  return 'A';
});

const map2 = (arrToMap, mappingFunction) => {
  const newArr = [];

  for (let i = 0; i < arrToMap.length; i++) {
    const currentItem = arrToMap[i];
    const newItem = mappingFunction(currentItem);
    newArr.push(newItem);
  }

  return newArr;
};

const test = map2(persons, (person) => `${person.name} is ${person.age} years old`);
console.log(test);

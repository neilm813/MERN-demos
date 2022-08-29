const numbers = [1, 2, 3, 4, 5];
const testScorePercentages = [95, 77, 40, 63, 85, 90, 70];
const persons = [
  { name: 'Rick', age: 70 },
  { name: 'Morty', age: 14 },
  { name: 'Summer', age: 17 },
  { name: 'Beth', age: 34 },
];

const doubleNums = (nums) => {
  const doubledNums = [];

  for (let i = 0; i < nums.length; i++) {
    doubledNums.push(nums[i] * 2);
  }

  return doubledNums;
};

const tripleNums = (nums) => {
  const tripledNums = [];

  for (let i = 0; i < nums.length; i++) {
    tripledNums.push(nums[i] * 3);
  }

  return tripledNums;
};

const doubledNums = numbers.map((n) => n * 2);
const tripledNums = numbers.map((n) => n * 3);
// console.log(doubledNums);
// console.log(tripledNums);

const personNames = persons.map((person) => {
  if (person.name === 'Rick') {
    return `GENIUS - ${person.age}`;
  } else {
    return `${person.name} - ${person.age}`;
  }
});

// To be displayed
const personHtmlStrings = persons.map(
  (person) => `<p>Name: ${person.name}</p>`
);

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

// This shows how `.map` works behind the scenes.
Array.prototype.map2 = function (callback) {
  const newItems = [];

  for (let i = 0; i < this.length; i++) {
    const currentItem = this[i];
    const newItem = callback(currentItem, i);
    newItems.push(newItem);
  }

  return newItems;
};

const newNums = numbers.map2((n) => {
  const newNumber = n * 2;
  return newNumber;
});

// Passing an anonymous arrow function that is created as it is being passed in
// as the first and only argument given to .filter
const evensOnly = numbers.filter((n) => n % 2 === 0);

const isEven = (n) => n % 2 === 0;

// Pass in an already defined and named function that .filter will callback.
const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

const personsWithShortNames = persons
  .filter((person) => person.name.length < 5)
  .map((person) => `<p>Name: ${person.name}</p>`);

console.log(personsWithShortNames);

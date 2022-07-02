# Map and Filter Methods

- These methods and other methods that are passed callbacks (`.forEach`, `.reduce`, `.find`, etc.) are extremely powerful and useful once you learn them.
- `.map` and `.filter` are used frequently in react.

## Prerequisites

- [js-functional-programming-outline](./js-functional-programming-outline.md)
- [js-function-vs-arrow-outline](./js-function-vs-arrow-outline.md)

## Arrow Functions

- These methods do not require using arrow functions but often arrow functions are used as callbacks because they are more succinct so we will use them here to get used to the syntax.

---

## Why would you want to pass a function to another function

- if you have a function and you want to allow the caller of the function to give you more complex instructions that you can't anticipate, all you need to do is have your function say: just give me the instructions you want and I will follow them (pass me a function that has the code you want to be executed and I will execute it for you at the right time).

## `.map` explanation [[docs]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

- `.map` is a built in method available to be called on any array
- `.map` returns a new array based on the array it was called on, where each item in the new array is replaced (transformed) based on the instructions you provided.
- `.map` will create a new array, loops over the array it was called on, then call the callback you gave to `.map` for each iteration and passes the current item to your callback and whatever your callback returns will be pushed into the new array, then that new array will be returned.

---

### `.map` Examples

```js
const numbers = [1, 2, 3, 4, 5];
const testScorePercentages = [95, 77, 40, 63, 85, 90, 70];
const persons = [
  { name: 'Rick', age: 70 },
  { name: 'Morty', age: 14 },
  { name: 'Summer', age: 17 },
  { name: 'Beth', age: 34 }
];
```

```js
// Create a new array of doubled numbers without .map
const doubleNums = (nums) => {
  const doubledNums = [];

  for (let i = 0; i < nums.length; ++i) {
    doubledNums.push(nums[i] * 2);
  }

  return doubledNums;
};

console.log(doubleNums(numbers));
```

- `.map` does all of this for us, all it needs to know, is what do we want the new item to be on each iteration:

```js
// Pass in a newly created anonymous arrow function as the first and only
// argument given to .map
const doubledNums = numbers.map((num) => {
  return num * 2;
});
console.log(doubledNums);
```

```js
const double = (n) => n * 2;

// Pass an already defined function in, notice we do not call it,
// we only provide it so .map can call it.
const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);
```

```js
// Transform the person objects into an array of just the names.
const personNames = persons.map((person) => person.name);
```

```js
const personNameLengths = persons.map((person) => person.name.length);
```

```js
// Often you want to transform objects.
const personHtmlStrings = persons.map((person) => `<p>Name: ${person.name}, Age: ${person.age}</p>`);
```

```js
const personsWithBirthYear = persons.map((person) => {
  const birthYear = new Date().getFullYear() - person.age;

  // Often you don't want to mutate the given person object by reference,
  // so you create a new object and spread the key value pairs to copy them.
  return {
    ...person,
    birthYear: birthYear
  };
});
```

```js
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
```

### Recreate `.map`

```js
// This shows how .map works behind the scenes.
Array.prototype.map2 = function (callBack) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    // this is whatever array .map was called on.
    const newItem = callBack(this[i], i, this);
    newArr.push(newItem);
  }
  return newArr;
};
```

---

## `.filter` explanation [[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)]

- `.filter` is a built in method available to be called on any array
- `.filter` returns a new array based on the array it was called that can have anywhere from 0 to all items removed.
- `.filter` will create a new array, loops over the array it was called on, then call the callback you gave to `.filter` for each iteration and passes the current item to your callback, if your callback returns true, the item is added to the new array, otherwise it isn't.

### `.filter` examples

```js
// Without using .filter
function getEvens(nums) {
  const evens = [];

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    }
  }

  return evens;
}
console.log(getEvens(numbers));
```

```js
// Passing an anonymous arrow function that is created as it is being passed in
// as the first and only argument given to .filter
const evensOnly = numbers.filter((n) => n % 2 === 0);

const isEven = (n) => n % 2 === 0;

// Pass in an already defined and named function that .filter will callback.
const evenNumbers = numbers.filter(isEven);
```

```js
// Keep only the numbers at odd indexes. The index is always passed to our
// callback at as the 2nd argument given to our callback so we can can add the
// second param and name it what we want and it will be the current index.
const everyOtherNumber = numbers.filter((n, i) => i % 2 !== 0);
```

```js
const drinkingAgedPersons = persons.filter((person) => person.age >= 21);
```

### Recreate `.filter`

```js

// This shows how filter works.
Array.prototype.where = function (callback) {
  const filteredArr = [];

  for (let i = 0; i < this.length; ++i) {
    const currItem = this[i];
    const shouldKeepItem = callback(currItem, i, this);

    if (shouldKeepItem === true) {
      filteredArr.push(currItem);
    }
  }
  return filteredArr;
};
  ```

---

## Combining `.filter` and `.map`

```js
const drinkingAgePersonNames = persons
  .filter((p) => p.age >= 21)
  .map((p) => p.name);
```

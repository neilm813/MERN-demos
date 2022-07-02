# Function vs Arrow Function

## Differences

- There are syntax difference illustrated below, arrow functions have multiple shorthand variations so they can be more succinct.
- Functions ARE hoisted, which means they are read first and hoisted to the top of the file so your code can always call them, even if it looks like you are calling the function before it is created.
- Arrow functions are NOT hoisted, they cannot be called until the line they are defined on has been read.

### `this` differences

- The rules that determine the value of `this` are different in a function vs an arrow function. You can look this up, it will not be exhaustively explained now because this is a basic intro.
- The easiest advice for this difference is: if `this` is not the value you want it to be, try changing from a function to an arrow function or the other way around and you will gradually pick up on when to use which kind of function when you are needing to use the `this` keyword.

## Syntax Comparisons

```js
// Function expression.
function isEven(num) {
  return num % 2 === 0;
}
```

```js
// Function declaration.
const isEven = function (num) {
  return num % 2 === 0;
};
  ```

```js
// Arrow function.
const isEven = (num) => {
  return num % 2 === 0;
};
```

## Arrow Function - All shorthand variations

```js
/* 
Parenthesis around params**:
  - only needed if there are no params, more than 1, or you are destructuring.
  - one exception is if there are no params you can use an `_` instead of `()`

Function body curly braces
  - When the curly braces are omitted
    - after the `=>` must be written as one line
    - if an object is being returned, since objects have curly braces,
      you have to put it in parens so the curly braces aren't confused for the
      function body's curly braces.
*/

const isEven = num => num % 2 === 0;
const isEven = (num) => num % 2 === 0;

const isEven = (num) => {
  return num % 2 === 0;
};

// Long-form returning object.
const personFactory1 = (firstName, lastName) => {
  return { 
    firstName: firstName, 
    lastName: lastName,
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  };
};

// Shorthand returning object.
const personFactory2 = (firstName, lastName) => ({
  firstName: firstName, 
  lastName: lastName,
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
});


```

## Arrow function syntax advice

- To start, ALWAYS use the full long-form so you don't run into issues of forgetting to add in parenthesis or curly braces when they are needed, the long-form is the only form that works in all cases
- Use shorthand once you become comfortable.

## Anonymous functions

- When a function or arrow function is passed in to another function, the function being passed in can be passed in via the name of an existing function, or a new function can be defined at that moment without giving it a name (anonymous).
  - The reason it doesn't need to be given a name in this case is because you will be able to refer to it by the parameter name that it was passed into.
  - The reason you may want an anonymous function is if it is a function that you don't need to call again, so naming it would be an extra unnecessary step.

```js
// Anonymous function defined and passed in at the same time
// as the first and only argument to .map
numbers.map(function (n) { return n % 2 === 0; });

// Anonymous arrow function defined and passed in at the same time
// as the first and only argument to .map
numbers.map((n) => n % 2 === 0);

// Passing in a function that was already named because it's already been
// defined and has a name since it's being reused elsewhere.
numbers.map(isEven);
```

# Functional Programming (`.forEach`, `.map`, `.filter`)

- Just like Object Oriented Programming (OOP) is a programming paradigm focused around grouping data and methods in objects, functional programming (FP) is a programming paradigm centered around functions and some other guidelines.

## Object Oriented Programming (OOP) Paradigm

- In OOP, functions are often grouped / encapsulated with data inside an object  (we call them methods in this case). These methods then have access to the data directly, via the `this` keyword instead of needing the object's data to be passed in. The methods can then access (get) and mutate / update (set) the data of the object that the method belongs to.

## Functional Programming (FP) Paradigm

- We will not be following these rules strictly most of the time, but these concepts will be encountered here and there, such as when using `.map` and `.filter` methods.
- FP focuses on a few rules when followed strictly
  - **Pure functions**
    - all the data the function uses is passed in and the function causes no side effects (does not mutate given data by reference).
  - Avoid **side effects**
    - A side effect is when a function effects something to the side (outside of the function), aka a function mutates an object by reference, so the object that is outside of the function is effected (changed).
    - If a function's has params with complex data (objects / arrays, etc.) that need to be updated, a clone is made to break the reference and then the clone is updated and returned so nothing is mutated by reference (no side effects).
  - Decouple / un-group functions and data instead of grouping them in the same object. This means any data a function needs will be passed in and also means the `this` keyword will not be needed as often.
  - Functions are often passed in to other functions (callbacks), and functions may return another function. Better understanding `.map` and `.filter` will help you see why callbacks are so useful.
- Most often, code will be a mix of some functional programming and OOP, and the functional programming part won't follow the FP rules 100% of the time.

## Strict Functional Programming Performance

- In JavaScript, always following strict FP rules can have a significant performance decrease for large operations because there will be many more function calls (every call has some overhead) and much more copying / cloning of data to avoid mutations and side effects. So more time and space is used for copied data and the call stack.
- Some other languages don't have as much of a performance decrease when following FP strictly because they were designed from the beginning to be heavily FP focused.

## Simple OOP vs FP example

### OOP fullName example

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // This method can only get the full name of a person.
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
```

### Functional Programming fullName example

```js
// This function can format the full name of any given object. It doesn't care
// if the object is a dog or a person, etc., all it cares about is that it has
// a first and last name.
const formatFullName = (objectWithNames) => {
  return `${objectWithNames.firstName} ${objectWithNames.lastName}`;
}
```

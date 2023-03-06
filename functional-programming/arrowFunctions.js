// Function declaration
function greet1() {
  console.log('greet1');
}

// Function expression
const greet2 = function () {
  console.log('greet2');
};

const greet3 = () => {
  console.log('greet3');
};

const isEven1 = (num) => num % 2 === 0;

const isEven2 = (num) => num % 2 === 0;

const isEven3 = (num) => {
  console.log('lkdfs');
  return num % 2 === 0;
};

// Long-form returning object.
const personFactory1 = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
};

// Shorthand returning object.
const personFactory2 = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
});

const person1 = personFactory1('Matthew', 'Moldovan');
const person2 = personFactory2('Matthew', 'Moldovan');

console.log(person2.fullName());

// full name function in functional programming paradigm would be separate from the data:
const fullName = (objectWithName) => {
  return `${objectWithName.firstName} ${objectWithName.lastName}`;
};

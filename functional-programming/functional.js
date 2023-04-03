const oopPerson = {
  firstName: 'Gray',
  lastName: 'Boulware',
  age: 32,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  birthday() {
    this.age += 1;
  },
};

console.log(oopPerson.fullName());

const person2 = {
  firstName: 'Gray',
  lastName: 'Boulware',
};

const dog = {
  firstName: 'Jaylin',
  lastName: 'Boulware',
};

const fullName = (objectWithName) => {
  // DON'T MUTATE the param
  // DON'T reference any data that was not passed in
  return `${objectWithName.firstName} ${objectWithName.lastName}`;
};

console.log(fullName(person2));
console.log(fullName(dog));

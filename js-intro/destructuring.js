const person1 = {
  firstName: 'Tim',
  lastName: 'Heidecker',
  age: 46,
  birthYear: 1976,
  productionCompany: 'Abso Lutely Productions',
  height: `6'0"`,
  address: {
    street: '1500 FLower St',
    city: 'Glendale',
    state: 'CA',
    zip: 91201,
  },
};

function formatPersonDetails(person) {
  return `${person.firstName} ${person.lastName} is ${person.age} years old and he lives in ${person.address.city} ${person.address.state}.`;
}

console.log(formatPersonDetails(person1));

function formatPersonDetailsWithDestructuring(person) {
  // The line below is shorthand for:
  // const firstName = person.firstName;
  // const lastName = person.lastName;
  // const age = person.age;
  const { firstName, lastName, age, address } = person;
  // Destructure the nested address object.
  const { city, state } = address;

  return `${firstName} ${lastName} is ${age} years old and he lives in ${city} ${state}.`;
}

const theSpeedOfLight = 299_792_458;
console.log(theSpeedOfLight);

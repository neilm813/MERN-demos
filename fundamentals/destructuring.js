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

const formattedPerson1 = formatPersonDetails(person1);
console.log(formattedPerson1);

function formatPersonDetails2(person) {
  // const firstName = person.firstName;
  // const lastName = person.lastName;
  // const age = person.age;

  // This destructuring is a shorthand for the above.
  const { firstName, lastName, age, address } = person;
  // Destructure the nested address object.
  const { city, state } = address;

  // const {
  //   firstName,
  //   lastName,
  //   age,
  //   address: { city, state },
  // } = person;

  return `${firstName} ${lastName} is ${age} years old and he lives in ${city} ${state}.`;
}

function formatGPS(coordinates) {
  return `${coordinates[0]}, ${coordinates[1]}`;
}

const absolutelyProductionsGPS = [34.1629336, -118.2918496];
console.log(formatGPS(absolutelyProductionsGPS));

function formatGPS(coordinates) {
  // const latitude = coordinates[0];
  // const longitude = coordinates[1];

  // This is equivalent to the above.
  const [latitude, longitude] = coordinates;
  return `${latitude} ${longitude}`;
}

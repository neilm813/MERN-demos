class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.wallet = 0;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  sendMoney(amount, targetPerson) {
    this.wallet -= amount;
    targetPerson.receiveMoney(amount);
  }

  receiveMoney(amount, sender) {
    this.wallet += amount;
  }
}

// Teacher IS A Person - Inheritance
class Teacher extends Person {
  constructor(firstName, lastName, yearsTeachingExperience) {
    // super refers to the parent constructor, in this case that is Person
    // we send all the Person-specific properties to the Person class.
    super(firstName, lastName);

    // Teacher-specific properties.
    this.yearsTeachingExperience = yearsTeachingExperience;
  }
}

class Student extends Person {
  constructor(firstName, lastName, hobbies = []) {
    super(firstName, lastName);

    this.hobbies = hobbies;
  }
}

// Lecture HAS A Instructor - Composition
class Lecture {
  constructor(topic, zoomLink, teacher, students = []) {
    this.topic = topic;
    this.zoomLink = zoomLink;
    this.teacher = teacher;
    this.students = students;
  }

  createAttendanceList() {
    const fullNames = [];

    for (const student of this.students) {
      fullNames.push(student.fullName());
    }

    return fullNames;
  }
}

const neil = new Teacher('Neil', 'M', 3);
console.log(neil.fullName());

const joshua = new Student('Joshua', 'Diaz');
console.log(joshua.fullName());

const oopLecture = new Lecture(
  'OOP Intro',
  'https://codingdojo.zoom.us/j/83907514763?pwd=Y0VYZFJIRFl1dmREeUxlRUdQTVNHdz09',
  neil,
  [joshua, new Student('Yelena', 'Dovgal')]
);

const jimsLecture = new Lecture(
  'Cool stuff',
  'foo',
  new Teacher('Jim', 'R', 2),
  [joshua]
);

console.log(oopLecture);
console.log(oopLecture.createAttendanceList());

joshua.sendMoney(10, neil);
neil.sendMoney(5, joshua);

console.log(neil);
console.log(joshua);

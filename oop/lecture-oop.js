class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);

    this.grade = grade;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, yearsTeachingExperience) {
    super(firstName, lastName);

    this.yearsTeachingExperience = yearsTeachingExperience;
  }

  fullName() {
    return `Instructor ${super.fullName()}`;
  }
}

class Lecture {
  constructor(topic, zoomLink, teacher, students = []) {
    this.topic = topic;
    this.zoomLink = zoomLink;
    this.teacher = teacher;
    this.students = students;
  }

  createAttendanceList() {
    return this.students
      .sort((studentA, studentB) => studentA.fullName().localeCompare(studentB.fullName()))
      .map((student, i) => `${i + 1}. ${student.fullName()}`)
      .join('\n');
  }
}

const neil = new Teacher('Neil', 'M', 4);
const hector = new Student('Hector', 'R', 'A+');

const introToOop = new Lecture(
  'Intro to OOP',
  'https://codingdojo.zoom.us/j/87875238176?pwd=dG5QK21WbHpHdFVRZncvNFIyT0ErUT09',
  neil,
  [hector, new Student('Danielle', 'T', 'A+')]
);

const introToOop2 = new Lecture(
  'Intro to OOP',
  'https://codingdojo.zoom.us/j/87875238176?pwd=dG5QK21WbHpHdFVRZncvNFIyT0ErUT08',
  new Teacher('Narcisso', 'L', 3),
  [new Student('John', 'Doe', 'B+'), new Student('Jane', 'Doe', 'A+')]
);

console.log(introToOop.createAttendanceList());

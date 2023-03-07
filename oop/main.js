class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, yearsTeachingExperience) {
    /* 
    Calls the parent constructor (Person in this case) to pass the shared
    properties to Person so they can be saved there and this is how our
    Teacher inherits the methods from Person.
    */
    super(firstName, lastName);

    // Only the teacher specific properties are added here.
    this.yearsTeachingExperience = yearsTeachingExperience;
  }
  // Methods specific to the teacher class (not Person) go below here:

  /* Override inherited method and add call it to add to it. */
  // fullName() {
  //   return 'Instructor ' + super.fullName();
  // }
}

class Student extends Person {
  constructor(firstName, lastName, hobbies = []) {
    super(firstName, lastName);
    this.hobbies = hobbies;
  }
}

const neil = new Teacher('Neil', 'M', 3);
const shawn = new Teacher('Shawn', 'C', 2);

const student1 = new Student('Diya', 'Amour');
const student2 = new Student('Brandon', 'Odom');
const student3 = new Student('Brian', 'Rodriguez');

class Lecture {
  constructor(topic, zoomLink, teacher, students = []) {
    this.topic = topic;
    this.zoomLink = zoomLink;

    // Composition: lecture is composed of other objects
    this.teacher = teacher;
    this.students = students;
  }

  createAttendanceList() {
    const studentNames = [];

    for (let i = 0; i < this.students.length; i++) {
      const student = this.students[i];
      studentNames.push(student.fullName());
    }

    return studentNames;
  }

  createAttendanceList2() {
    return this.students.map((student) => student.fullName());
  }
}

const oopLecture = new Lecture(
  'The joys of OOP',
  'https://www.google.com/url?q=https://codingdojo.zoom.us/j/84687647373?pwd%3DTEdZTXBvczYvZFhYTjlqOVhBRmJCZz09&sa=D&source=calendar&ust=1678290992893675&usg=AOvVaw3EPdQB-k04kXyidqZU-U7e',
  neil,
  [student1, student2, student3]
);

console.log(oopLecture.createAttendanceList());

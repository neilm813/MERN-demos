/* 
Model a lecture with an instructor and students who are attending the lecture.
Allow for there to be multiple lectures going on at the same time.

Give students a collection hobbies.

Create a way to find students who are attending a lecture who have shared
hobbies.

Find the student in a lecture whom has the largest number of hobbies.

Get a list of alphabetized full names of students attending a lecture.
*/

class Person {
  constructor(firstName, lastName, hobbies = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hobbies = hobbies;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Lecture {
  constructor(instructor, topic, students = []) {
    this.instructor = instructor;
    this.topic = topic;
    this.students = students;
  }

  findStudentsWithSharedHobby(hobby) {
    const students = [];

    for (let i = 0; i < this.students.length; i++) {
      const student = this.students[i];

      for (let j = 0; j < student.hobbies.length; j++) {
        if (student.hobbies[j] === hobby) {
          students.push(student);
        }
      }
    }
    return students;
  }

  findAllSharedHobbies() {
    /**
     * @typedef {Object<string, Array<Person>} SharedHobbies
     */

    /**
     * @type {SharedHobbies}
     */
    const hobbiesTable = {};

    for (const student of this.students) {
      for (const hobby of student.hobbies) {
        if (hobby in hobbiesTable) {
          hobbiesTable[hobby].push(student);
        } else {
          // First time finding a student with this particular hobby.
          // initialize an array with only this student in it so we can push
          // other students to it later.
          hobbiesTable[hobby] = [student];
        }
      }
    }
    return hobbiesTable;
  }

  findStudentsWithSharedHobby2 = (hobby) =>
    this.students.filter((student) => student.hobbies.includes(hobby));

  attendanceList() {
    const students = [];

    for (let i = 0; i < this.students.length; i++) {
      students.push(this.students[i].fullName());
    }

    return students.sort();
  }

  attendanceList2 = () =>
    this.students.map((student) => student.fullName()).sort();
}

const javan = new Person("Javan", "Ogden", [
  "Video Games",
  "Cryptocurrency",
  "Coding",
]);

const sean = new Person("Sean", "Caylor", [
  "Movies",
  "Video Games",
  "Renaissance",
]);

const gary = new Person("Gary", "McKinnon", ["Mountain Biking", "Coding"]);

const neil = new Person("Neil", "Mos", [
  "Mountain Biking",
  "Cryptocurrency",
  "Rock Climbing",
]);

const john = new Person("John", "Misrilakis");
const lawrence = new Person("Lawrence", "C");

const oopLecture = new Lecture(neil, "OOP", [javan, sean, gary]);
const otherLecture = new Lecture(john, "JS Intro", [lawrence]);

// console.log(oopLecture.findStudentsWithSharedHobby("Video Games"));
// console.log(oopLecture.attendanceList());
console.log(oopLecture.findAllSharedHobbies());

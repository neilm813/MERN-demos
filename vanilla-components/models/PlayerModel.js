class PlayerModel {
  constructor(firstName, lastName, score) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

export default PlayerModel;
class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }

  print() {
    // console.table(this);
    console.log(this);
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }

  /**
   * Reduces target's resilience by this Unit's power.
   * @param {Unit} target
   * @returns {?number} The targets resilience value after having been reduced.
   */
  attack(target) {
    if (target instanceof Unit) {
      target.resilience -= this.power;
      console.log(
        `${this.name} attacked ${target.name} for ${this.power} damage. ${target.name}'s resilience is now ${target.resilience}.`
      );
      return target.resilience;
    }

    throw new TypeError("Target must be a Unit!");
  }
}

class Effect extends Card {
  constructor(name, cost, stat, magnitude) {
    super(name, cost);
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) {
    if (target instanceof Unit) {
      const effectType = this.magnitude >= 0 ? "increased" : "decreased";
      target[this.stat] += this.magnitude;

      console.log(
        `${effectType} ${target.name}'s ${this.stat} by ${this.magnitude}. ${target.name}'s ${this.stat} is now ${target[this.stat]}.`
      );
    } else {
      throw new TypeError("Target must be a Unit!");
    }
  }
}

const plainCard = new Card("Plain Card", 1);
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2, "resilience", 3);
const unhandledPromiseRejection = new Effect(
  "Unhandled Promise Rejection",
  1,
  "resilience",
  -2
);
const pairProgramming = new Effect("Pair Programming", 3, "power", 2);

plainCard.print();
redBeltNinja.print();
blackBeltNinja.print();

hardAlgo.print();
unhandledPromiseRejection.print();
pairProgramming.print();

hardAlgo.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);

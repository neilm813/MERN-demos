class Card {
  constructor(name, cost) {
    if (cost <= 0) {
      throw new Error('Cost must be greater than 0.');
    }

    this.name = name;
    this.cost = cost;
  }
  cardDetails() {
    const s = `
name: ${this.name}
cost: ${this.cost}`;

    return s;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    // Execute parent constructor for any shared properties / logic.
    super(name, cost);
    this.power = power;
    this.res = res;
  }

  attack(target) {
    target.res -= this.power;
  }

  unitDetails() {
    const cardDetails = this.cardDetails();
    const unitDetails = `
power: ${this.power}
res: ${this.res}
    `;
    return cardDetails + unitDetails;
  }
}

class Effect extends Card {
  constructor(name, cost, stat, magnitude) {
    // Execute parent constructor for any shared properties / logic.
    super(name, cost);
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) {
    if (target instanceof Unit) {
      // implement card text here
      const effectDirection = this.magnitude < 0 ? 'reduce' : 'increase';
      console.log(
        `${this.name} has been played on Card ${target.name}: ${effectDirection} target's ${this.stat} by ${this.magnitude}`
      );

      target[this.stat] += this.magnitude;
    } else {
      throw new TypeError('Target must be a unit!');
    }
  }
}

const card1 = new Unit('Card 1', 3, 2, 5);
const card2 = new Unit('Card 2', 2, 1, 10);
const getBuff = new Effect('Get Buff!', 3, 'power', 100);

getBuff.play(card1);
console.log(card1.unitDetails());
card1.attack(card2);
card2.attack(card1);

console.log(card2.unitDetails());

import { getRandomNumInInterval } from "../utils/numberUtils";

export class Participant {
  constructor(health, attackRange) {
    if (new.target === Participant) {
      throw new Error("participant is abstract")
    }
    this.attackRange = attackRange;
    this.health = health;
  }

  /**
   * @param {Participant} participant 
   * @returns 
   */
  attackOn(participant) {
    const damage = getRandomNumInInterval(this.attackRange[0], this.attackRange[1]);
    participant.health = Math.max(0, participant.health - damage);
  }
}

export class Monster extends Participant {
  constructor({ health, attackRange }) {
    super(health, attackRange)
  }
}

export class Player extends Participant {
  constructor({ attackRange, specialAttackRange, heal }) {
    super(attackRange);
    this.specialAttackRange = specialAttackRange;
    this.heal = heal;
  }

  heal() {
    this.health = Math.min(100, this.health + this.heal);
  }

  /**
   * @param {Participant} monster 
   * @returns 
   */
  specialAttackOn(monster) {
    const damage = getRandomNumInInterval(this.specialAttackRange[0], this.specialAttackRange[1]);
    monster.health = Math.max(0, monster.health - damage);
  }
}
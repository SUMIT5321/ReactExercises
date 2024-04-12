import { getRandomNumInInterval } from "../utils/numberUtils";

export class Participant {
  constructor(health, attackRange) {
    if (new.target === Participant) {
      throw new Error("participant is abstract")
    }
    this.attackRange = attackRange;
    this.health = health;
    this.moves = [];
  }

  /**
   * @param {Participant} participant
   * @returns 
   */
  attackOn(participant) {
    const damage = getRandomNumInInterval(this.attackRange[0], this.attackRange[1]);
    participant.health = Math.max(0, participant.health - damage);
    this.moves.push(`${participant.label} Attack`)
  }

  reset(health) {
    this.health = health;
    this.moves = [];
  }
}

export class Monster extends Participant {
  constructor({ health, attackRange }) {
    super(health, attackRange)
    this.label = "Monster"
  }
}

export class Player extends Participant {
  constructor({ health, attackRange, specialAttackRange, heal, canSpecialAttack }) {
    super(health, attackRange);
    this.label = "Player"
    this.specialAttackRange = specialAttackRange;
    this.healAmount = heal;
    this.canSpecialAttack = canSpecialAttack;
  }

  heal() {
    this.health = Math.min(100, this.health + this.healAmount);
    this.moves.push(`${this.label} Heal`)
  }

  /**
   * @param {Participant} monster 
   * @returns 
   */
  specialAttackOn(monster) {
    if (this.canSpecialAttack(this.health)) {
      const damage = getRandomNumInInterval(this.specialAttackRange[0], this.specialAttackRange[1]);
      monster.health = Math.max(0, monster.health - damage);
      this.moves.push(`${this.label} Special Attack`)
    }
  }
}
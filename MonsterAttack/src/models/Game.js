import { Monster, Player } from "./Participants";

export const gameStates = {
  notStarted: -1,
  inProgress: 0,
  gameOver: 1
}

class Game {
  constructor({maxHealth, monsterAttackRange, playerAttackRange, playerSpecialAttackRange, playerHeal}) {
    this.gameState = gameStates.notStarted;
    this.maxHealth = maxHealth;
    this.monster = Monster({ health: maxHealth, attackRange: monsterAttackRange });
    this.player = Player({
      health: maxHealth,
      attackRange: playerAttackRange, 
      specialAttackRange: playerSpecialAttackRange, 
      heal: playerHeal
    })
  }

  startGame() {
    if (this.gameState === gameStates.notStarted || this.gameState === gameStates.gameOver) {
      this.gameState = gameStates.inProgress;
      this.monster.health = this.maxHealth;
      this.player.health = this.maxHealth;
    }
  }

  monsterAttack() {
    this.monster.attckOn(this.player);
    this.updateCurrentState();
  }

  playerAttack() {
    this.player.attackOn(this.monster);
    this.updateCurrentState();
  }

  playerSpecialAttack() {
    this.player.specialAttackOn(this.monster);
    this.updateCurrentState;
  }

  heal() {
    this.player.heal();
  }

  giveUp() {
    this.gameState = gameStates.startGame;
  }

  isGameOver() {
    return this.player.health === 0 || this.monster.health === 0
  }

  updateCurrentState() {
    if (this.isGameOver) {
      this.gameState = gameStates.gameOver;
    }
  }

  winner() {
    if (this.isGameOver) {
      return this.player.health === 0 ? this.monster : this.player;
    } else {
      return null
    }
  }
}




import { gameConfig } from "../gameConfig/gameConfiguration";
import { Monster, Player } from "./Participants";

export class GameModel {
  constructor(gameConfig) {
    this.gameState = gameConfig.gameStates.notStarted;
    this.maxHealth = gameConfig.maxHealth;
    this.monster = new Monster({ health: this.maxHealth, attackRange: gameConfig.participants.monster.attackDamageRange });
    this.player = new Player({
      health: this.maxHealth,
      attackRange: gameConfig.participants.player.attackDamageRange, 
      specialAttackRange: gameConfig.participants.player.specialAttackDamageRange, 
      heal: gameConfig.participants.player.heal,
      canSpecialAttack: gameConfig.participants.player.canSpecialAttack
    })
  }

  startGame() {
    if (this.gameState === gameConfig.gameStates.notStarted || this.gameState === gameConfig.gameStates.gameOver) {
      this.gameState = gameConfig.gameStates.inProgress;
      this.monster.reset(this.maxHealth);
      this.player.reset(this.maxHealth);
      this.winner = null;
    }
  }

  monsterAttack() {
    this.monster.attackOn(this.player);
    this.updateCurrentState();
  }

  playerAttack() {
    this.player.attackOn(this.monster);
    this.updateCurrentState();
  }

  playerSpecialAttack() {
    this.player.specialAttackOn(this.monster);
    this.updateCurrentState();
  }

  heal() {
    this.player.heal();
  }

  giveUp() {
    this.gameState = gameConfig.gameStates.notStarted;
  }

  isGameOver() {
    return this.player.health === 0 || this.monster.health === 0
  }

  updateCurrentState() {
    if (this.isGameOver()) {
      this.winner = this.player.health ? this.player.label : this.monster.label;
      this.gameState = gameConfig.gameStates.gameOver;
    }
  }
}




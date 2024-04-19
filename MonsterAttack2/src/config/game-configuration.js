export const gameConfig = {
  gameStates: {
    notStarted: -1,
    inProgress: 0,
    gameOver: 1
  },
  maxHealth: 100,
  participants: {
    monster: {
      id: "monster",
      attackDamageRange: [0, 20] 
    },
    player: {
      id: "player",
      attackDamageRange: [0, 10],
      canSpecialAttack: (currentHealth) => currentHealth >= 90,
      specialAttackDamageRange: [10, 20],
      heal: 10
    }
  }
}

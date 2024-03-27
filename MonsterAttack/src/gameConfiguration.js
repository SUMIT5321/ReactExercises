export const participants = {
  monster: {
    id: "monster",
    maxHealth: 100,
    attackDamageRange: [0, 20] 
  },
  player: {
    id: "player",
    maxHealth: 100,
    attackDamageRange: [0, 10],
    canSpecialAttack: (currentHealth) => currentHealth >= 90,
    specialAttackDamageRange: [10, 20],
    heal: 10
  }
}

export const gameActions = {
  playerAttack: "playerAttack",
  playerSpecialAttack: "playerSpecialAttack",
  playerHeal: "playerHeal",
  monsterAttack: "monsterAttack"
}

export const gameState = {
  notStarted: -1,
  inProgress: 0,
  gameOver: 1
}

export const gameInitialState = {
  gameState: gameState.notStarted,
  runningState: null,
  winner: null
}

export const initialRunningState = {
  playerHealth: participants.player.maxHealth,
  monsterHealth: participants.monster.maxHealth,
  playerMoves: []
}
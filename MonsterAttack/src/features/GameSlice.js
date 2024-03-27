import { createSlice } from "@reduxjs/toolkit"
import { getRandomNumInInterval } from "../utils/numberUtils";
import { gameActions, gameInitialState, gameState, initialRunningState, participants } from "../gameConfiguration";


const gameSlice = createSlice({
  name: "game",
  initialState: gameInitialState,
  reducers: {
    startGame: (state, action) => {
      state.gameState = gameState.inProgress;
      state.runningState = initialRunningState;
      state.winner = null
    },
    attack: (state, action) => {
      function applyDamage(damageRange, participantHealth) {
        const damage = getRandomNumInInterval(damageRange[0], damageRange[1]);
        const currentHealth = state.runningState[participantHealth];
        state.runningState[participantHealth] = Math.max(0, currentHealth - damage);
        checkAndFinishGame(participantHealth);
      }

      function checkAndFinishGame(participantHealth) {
        if (state.runningState[participantHealth] === 0) {
          state.gameState = gameState.gameOver;
          state.winner = action.payload.attackerId;
        }
      }

      const attackType = action.payload.attack;
      switch (attackType) {
        case gameActions.playerAttack: {
          state.runningState.playerMoves.push(attackType);
          const damageRange = participants.player.attackDamageRange;
          applyDamage(damageRange, "monsterHealth");
          break;
        }
        case gameActions.playerSpecialAttack: {
          if (!participants.player.canSpecialAttack(state.runningState.playerHealth)) return;
          state.runningState.playerMoves.push(attackType);
          const damageRange = participants.player.specialAttackDamageRange;
          applyDamage(damageRange, "monsterHealth");
          break;
        }
        case gameActions.monsterAttack: {
          const damageRange = participants.monster.attackDamageRange;
          applyDamage(damageRange, "playerHealth")
          break;
        }
        default:
          break;
      }
    },
    heal: (state, action) => {
      state.runningState.playerMoves.push(action.payload.move);
      const heal = participants.player.heal;
      const playerCurrenthealth = state.runningState.playerHealth
      state.runningState.playerHealth = Math.min(100, playerCurrenthealth + heal);
    },
    giveup: (state, action) => {
      state.gameState = gameState.notStarted;
      state.runningState = null;
    }
  }
});

export default gameSlice.reducer
export const { startGame, attack, heal, giveup } = gameSlice.actions
import PropTypes from "prop-types"
import { useCallback, useState } from "react"
import { ParticipantHealth } from "./ParticipantHealth";
import { ActionPanel } from "./ActionPanel";
import { MovesPanel } from "./MovesPanel";
import { GameEndScreen } from "./GameEndScreen";
import { StartGameScreen } from "./StartGameScreen";
import { GameModel } from "../models/GameModel";
import { gameConfig } from "../gameConfig/gameConfiguration";

export const Game = () => {
  const [gameModel] = useState(new GameModel(gameConfig));
  const [gameStatus, setGameStatus] = useState({
    currentState: gameModel.gameState,
    playerHealth: gameModel.player.health,
    monsterHealth: gameModel.monster.health
  });

  const updateGameStatus = useCallback(() => {
    setGameStatus(status => ({
      ...status, 
      currentState: gameModel.gameState,
      playerHealth: gameModel.player.health,
      monsterHealth: gameModel.monster.health
    }))
  }, [])

  const monsterAttack = useCallback(() => {
    gameModel.monsterAttack();
    updateGameStatus();
  }, [])

  const playerAttack = useCallback(() => {
    gameModel.playerAttack();
    updateGameStatus();
  }, [])

  const playerSpecialAttack = useCallback(() => {
    gameModel.playerSpecialAttack();
    updateGameStatus();
  }, [])

  const heal = useCallback(() => {
    gameModel.heal();
    updateGameStatus();
  }, []);

  const giveup = useCallback(() => {
    gameModel.giveUp();
    updateGameStatus();
  }, []);

  const startGame = useCallback(() => {
    gameModel.startGame();
    updateGameStatus()
  }, [gameModel, updateGameStatus]);
  
  switch (gameStatus.currentState) {
    case gameConfig.gameStates.inProgress:
      return <>
        <div className='healthPanel'>
          <ParticipantHealth label={gameModel.monster.label} health={gameStatus.monsterHealth} />
          <ParticipantHealth label={gameModel.player.label} health={gameStatus.playerHealth} />
        </div>
        <ActionPanel 
          monsterAttack={monsterAttack} 
          playerAttack={playerAttack} 
          playerSpecialAttack={playerSpecialAttack} 
          heal={heal} 
          giveup={giveup} />
        <MovesPanel moves={gameModel.player.moves}/>
      </>
    case gameConfig.gameStates.gameOver:
      return <GameEndScreen winner={gameModel.winner} startGame={startGame} />
    default:
      return <StartGameScreen startGame={startGame} />
  }
}

Game.propTypes = {
  maxHealth: PropTypes.number, 
  monsterAttackRange: PropTypes.array, 
  playerAttackRange: PropTypes.array, 
  playerSpecialAttackRange: PropTypes.array, 
  playerHeal: PropTypes.number
}
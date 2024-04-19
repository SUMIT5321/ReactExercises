import { useCallback, useState } from "react";
import { gameConfig } from "../../config/game-configuration";
import { getRandomNumInInterval } from "../../utils/numbers";
import ParticipantHealth from "../game-components/participant-health";
import ActionPanel from "../game-components/action-panel";
import MovesPanel from "../game-components/moves-panel";
import PropTypes from "prop-types"

const { player, monster } = gameConfig.participants;

const Game = () => {
  const [gameStatus, setGameStatus] = useState({
    currentState: gameConfig.gameStates.notStarted,
    playerHealth: gameConfig.maxHealth,
    monsterHealth: gameConfig.maxHealth,
    playerMoves: [],
    winner: null
  });

  const attack = (range, attackerId) => {
    const isAttackerPlayer = attackerId === player.id;
    const isSpecialAttack = isAttackerPlayer
      && range[0] === player.specialAttackDamageRange[0]
      && range[1] === player.specialAttackDamageRange[1];

    const healthId = isAttackerPlayer ? "monsterHealth" : "playerHealth";
    const damage = getRandomNumInInterval(range[0], range[1]);

    setGameStatus(status => {
      if (isSpecialAttack && !player.canSpecialAttack(status.playerHealth)) return status;

      const newHealth = Math.max(0, status[healthId] - damage);
      const moves = isAttackerPlayer ? [...status.playerMoves, (isSpecialAttack ? "Player Special Attack" : "Player Attack")] : status.playerMoves;
      return newHealth > 0 ? {
        ...status,
        [healthId]: newHealth,
        playerMoves: moves
      } : {
        ...status,
        currentState: gameConfig.gameStates.gameOver,
        [healthId]: newHealth,
        winner: isAttackerPlayer ? "Player" : "Monster",
        playerMoves: moves,
      };
    });
  };

  const onMonsterAttack = useCallback(() => attack(monster.attackDamageRange, monster.id), []);
  const onPlayerAttack = () => attack(player.attackDamageRange, player.id);
  const onPlayerSpecialAttack = () => attack(player.specialAttackDamageRange, player.id);
  const onHeal = () => setGameStatus({
    ...gameStatus,
    playerHealth: Math.min(gameConfig.maxHealth, gameStatus.playerHealth + player.heal)
  });
  const onGiveup = () => setGameStatus({
    ...gameStatus,
    currentState: gameConfig.gameStates.notStarted
  });

  const onStartGame = () => setGameStatus({
    ...gameStatus,
    currentState: gameConfig.gameStates.inProgress,
    playerHealth: gameConfig.maxHealth,
    monsterHealth: gameConfig.maxHealth,
    playerMoves: [],
    winner: null
  });

  switch (gameStatus.currentState) {
    case gameConfig.gameStates.inProgress:
      return (
        <>
          <div className='health-panel'>
            <ParticipantHealth label={"Monster"} health={gameStatus.monsterHealth} />
            <ParticipantHealth label={"Player"} health={gameStatus.playerHealth} />
          </div>
          <ActionPanel
            onMonsterAttack={onMonsterAttack}
            onPlayerAttack={onPlayerAttack}
            onPlayerSpecialAttack={onPlayerSpecialAttack}
            onHeal={onHeal}
            onGiveup={onGiveup} />
          <MovesPanel moves={gameStatus.playerMoves} />
        </>
      )
    case gameConfig.gameStates.gameOver:
      return <GameEndScreen winner={gameStatus.winner} startGame={onStartGame} />
    default:
      return <StartGameScreen startGame={onStartGame} />
  }
};

//// END GAME COMPONENT ////
const StartGameScreen = ({ startGame }) => {
  return (
    <div className="center-content">
      <h1>Monster Attack</h1>
      <button className="action-button" onClick={() => startGame()}>Start Game</button>
    </div>
  );
};
StartGameScreen.propTypes = {
  startGame: PropTypes.func.isRequired
};

//// START GAME COMPONENT ////
const GameEndScreen = ({ winner, startGame }) => {
  return (
    <div className="center-content">
      <h1>Monster Attack</h1>
      <h2>Game Over</h2>
      <h3>Winner: {winner}</h3>
      <button className="action-button" onClick={() => startGame()}>Start Again</button>
    </div>
  )
};

GameEndScreen.propTypes = {
  winner: PropTypes.string.isRequired,
  startGame: PropTypes.func.isRequired
};

export default Game;

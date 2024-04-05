import PropTypes from "prop-types"

export const GameEndScreen = ({winner, startGame}) => {
  return <div className="centerContent">
    <h1>Monster Attack</h1>
    <h2>Game Over</h2>
    <h3>Winner: {winner}</h3>
    <button className="actionButton" onClick={() => startGame()}>Start Again</button>
  </div>
}

GameEndScreen.propTypes = {
  winner: PropTypes.string,
  startGame: PropTypes.func
}
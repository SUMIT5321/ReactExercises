import PropTypes from "prop-types"


export const StartGameScreen = ({ startGame }) => {
  return <div className="centerContent">
    <h1>Monster Attack</h1>
    <button className="actionButton" onClick={() => startGame()}>Start Game</button>
  </div>
}

StartGameScreen.propTypes = {
  startGame: PropTypes.func
}

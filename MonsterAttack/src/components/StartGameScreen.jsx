import { useDispatch } from "react-redux"
import { startGame } from "../features/GameSlice";


export const StartGameScreen = () => {
  const dispatch = useDispatch();
  return <div className="centerContent">
    <h1>Monster Attack</h1>
    <button className="actionButton" onClick={() => dispatch(startGame({}))}>Start Game</button>
  </div>
}
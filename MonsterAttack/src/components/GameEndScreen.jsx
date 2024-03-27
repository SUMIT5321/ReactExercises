import { useDispatch, useSelector } from "react-redux"
import { startGame } from "../features/GameSlice";

export const GameEndScreen = () => {
  const dispatch = useDispatch();
  const winner = useSelector(state => state.winner);
  return <div className="centerContent">
    <h1>Monster Attack</h1>
    <h2>Game Over</h2>
    <h3>Winner: {winner}</h3>
    <button className="actionButton" onClick={() => dispatch(startGame({}))}>Start Again</button>
  </div>
}
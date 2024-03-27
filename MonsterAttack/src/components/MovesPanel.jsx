import { useSelector } from "react-redux"


export const MovesPanel = () => {
  const movesDone = useSelector(state => state.runningState.playerMoves);

  const content = movesDone.length === 0 ? (<h2>No moves yet</h2>) : movesDone.join(" => ")

  return <>
    <div className="movesPanel">
      {content}
    </div>
  </>
}
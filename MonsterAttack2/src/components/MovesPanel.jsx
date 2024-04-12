import PropTypes from "prop-types"

export const MovesPanel = ({ moves }) => {
  const content = moves.length === 0 ? (<h2>No moves yet</h2>) : moves.join("=>")

  return <>
    <div className="movesPanel">
      {content}
    </div>
  </>
}

MovesPanel.propTypes = {
  moves: PropTypes.array
}
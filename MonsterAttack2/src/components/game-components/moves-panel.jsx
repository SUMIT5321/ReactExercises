import PropTypes from "prop-types";

const MovesPanel = ({ moves }) => {
  const content = moves.length === 0 ? (<h2>No moves yet</h2>) : moves.join("=>");

  return (
    <div className="movesPanel">
      {content}
    </div>
  );
}

MovesPanel.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MovesPanel;
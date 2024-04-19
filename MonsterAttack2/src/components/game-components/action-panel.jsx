import PropTypes from "prop-types";
import { useEffect } from "react";


const ActionPanel = ({ onMonsterAttack, onPlayerAttack, onPlayerSpecialAttack, onHeal, onGiveup }) => {

  useEffect(() => {
    const intervalId = setInterval(() => {
      onMonsterAttack()
    }, 500);

    return () => {
      clearInterval(intervalId);
    }
  }, [onMonsterAttack]);

  return (
    <div className="action-panel">
      <button className="action-button" onClick={() => onPlayerAttack()}>Attack</button>
      <button className="action-button background-special-attack" onClick={() => onPlayerSpecialAttack()}>Special Attack</button>
      <button className="action-button background-heal" onClick={() => onHeal()}>Heal</button>
      <button className="action-button background-giveup" onClick={() => onGiveup()}>Give up</button>
    </div>
  );
}

ActionPanel.propTypes = {
  onMonsterAttack: PropTypes.func.isRequired,
  onPlayerAttack: PropTypes.func.isRequired,
  onPlayerSpecialAttack: PropTypes.func.isRequired,
  onHeal: PropTypes.func.isRequired,
  onGiveup: PropTypes.func.isRequired
};

export default ActionPanel;
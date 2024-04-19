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
    <div className="actionPanel">
      <button className="actionButton" onClick={() => onPlayerAttack()}>Attack</button>
      <button className="actionButton backgroundSAttack" onClick={() => onPlayerSpecialAttack()}>Special Attack</button>
      <button className="actionButton backgroundHeal" onClick={() => onHeal()}>Heal</button>
      <button className="actionButton backgroundGiveup" onClick={() => onGiveup()}>Give up</button>
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
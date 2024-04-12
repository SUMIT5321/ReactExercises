import React, { useEffect } from "react";
import PropTypes from "prop-types"


export const ActionPanel = React.memo(function ActionPanel({ monsterAttack, playerAttack, playerSpecialAttack, heal, giveup }) {
  console.log("from action panel");
  useEffect(() => {
    const intervalId = setInterval(() => {
      monsterAttack()
    }, 500);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return <div className="actionPanel">
    <button className="actionButton" onClick={() => playerAttack()}>Attack</button>
    <button className="actionButton backgroundSAttack" onClick={() => playerSpecialAttack()}>Special Attack</button>
    <button className="actionButton backgroundHeal" onClick={() => heal()}>Heal</button>
    <button className="actionButton backgroundGiveup" onClick={() => giveup()}>Give up</button>
  </div>
})

ActionPanel.propTypes = {
  monsterAttack: PropTypes.func,
  playerAttack: PropTypes.func,
  playerSpecialAttack: PropTypes.func,
  heal: PropTypes.func,
  giveup: PropTypes.func
}
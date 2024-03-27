import { useDispatch } from "react-redux";
import { attack, giveup, heal } from "../features/GameSlice"
import { gameActions, participants } from "../gameConfiguration"
import { useEffect } from "react";


export const ActionPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(attack({attack: gameActions.monsterAttack, attackerId: participants.monster.id}))
    }, 500);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const attackerId = participants.player.id;

  return <>
    <div className="actionPanel">
      <button className="actionButton" onClick={() => dispatch(attack({attack: gameActions.playerAttack, attackerId: attackerId}))}>Attack</button>
      <button className="actionButton backgroundSAttack" onClick={() => dispatch(attack({attack: gameActions.playerSpecialAttack, attackerId: attackerId}))}>Special Attack</button>
      <button className="actionButton backgroundHeal" onClick={() => dispatch(heal({move: gameActions.playerHeal}))}>Heal</button>
      <button className="actionButton backgroundGiveup" onClick={() => dispatch(giveup({}))}>Give up</button>
    </div>
  </>
}
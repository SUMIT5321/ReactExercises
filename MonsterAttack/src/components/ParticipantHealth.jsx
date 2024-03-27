import PropTypes from "prop-types"
import { participants } from "../gameConfiguration"
import { useSelector } from "react-redux"

export const ParticipantHealth = ({participantId}) => {

  const health = useSelector(state => 
    participantId === participants.player.id ? state.runningState.playerHealth : state.runningState.monsterHealth
  )
  return <div className="healthWrapper">
    <h4>{participantId}</h4>
    <div className="healthBar">
      <div className="healthLevel" style={{width: `${health}%`}} />
      <div className="centered">{health}</div>
    </div>
  </div>
}

ParticipantHealth.propTypes = {
  participantId: PropTypes.string
}
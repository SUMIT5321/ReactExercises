import PropTypes from "prop-types"
import React from "react"

export const ParticipantHealth = React.memo(function ParticipantHealth({label, health}) {
  return <div className="healthWrapper">
    <h4>{label}</h4>
    <div className="healthBar">
      <div className="healthLevel" style={{width: `${health}%`}} />
      <div className="centered">{health}</div>
    </div>
  </div>
})

ParticipantHealth.propTypes = {
  label: PropTypes.string,
  health: PropTypes.number
}
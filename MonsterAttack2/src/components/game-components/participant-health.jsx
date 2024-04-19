import PropTypes from "prop-types";
import React from "react";

const ParticipantHealth = React.memo(function ParticipantHealth({ label, health }) {
  return (
    <div className="health-wrapper">
      <h4>{label}</h4>
      <div className="health-bar">
        <div className="health-level" style={{ width: `${health}%` }} />
        <div className="centered">{health}</div>
      </div>
    </div>
  );
})

ParticipantHealth.propTypes = {
  label: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired
};

export default ParticipantHealth;

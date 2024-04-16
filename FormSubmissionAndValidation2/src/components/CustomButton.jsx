import PropTypes from "prop-types";
import React from "react";

const CustomButton = React.memo(function CustomButton(props) {
  const buttonText = props.text;
  const buttonAction = props.action;
  return <div className="centerContent">
    <button id="buttonGo" className="button" onClick={buttonAction}>{buttonText}</button>
  </div>
})

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

export default CustomButton;
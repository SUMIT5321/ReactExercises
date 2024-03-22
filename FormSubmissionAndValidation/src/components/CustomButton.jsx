import PropTypes from "prop-types";

export const CustomButton = (props) => {
  const buttonText = props.text;
  const buttonAction = props.action;
  return <>
    <div className="centerContent">
      <button id="buttonGo" className="button" onClick={buttonAction}>{buttonText}</button>
    </div>
  </>
}

CustomButton.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func
}
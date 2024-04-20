import PropTypes from "prop-types";

const CustomButton = ({ text, action }) => {
  return (
    <div className="center-content">
      <button id="buttonGo" className="button" onClick={action}>{text}</button>
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default CustomButton;

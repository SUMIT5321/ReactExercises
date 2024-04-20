import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return message ? <div className="error">{message}</div> : <></>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string
};

export default ErrorMessage;

import PropTypes from "prop-types"

export const ErrorMessage = (props) => {
  const message = props.message;
  return message != null ? <div className="error">{message}</div> : <div className="dummyHeight" />
}

ErrorMessage.propTypes = {
  message: PropTypes.string
}
import PropTypes from "prop-types"

export const ErrorMessage = (props) => {
  const message = props.message;
  return <div className="error">{message || ""}</div>
}

ErrorMessage.propTypes = {
  message: PropTypes.string
}
import PropTypes from "prop-types"


export const questionPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  getStringExpression: PropTypes.func.isRequired,
  response: PropTypes.string,
  getAnswer: PropTypes.func.isRequired,
})
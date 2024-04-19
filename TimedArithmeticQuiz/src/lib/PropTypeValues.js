import PropTypes from "prop-types"


export const questionPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  firstNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  expectedAnswer: PropTypes.number.isRequired,
  isTimedOut: PropTypes.bool,
  receivedAnswer: PropTypes.string,
  isCorrect: PropTypes.bool
})
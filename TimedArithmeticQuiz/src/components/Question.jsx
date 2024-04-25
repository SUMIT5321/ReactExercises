import PropTypes from "prop-types";

const Question = ({ questionExpression, enteredAnswer = "", setEnteredAnswer, onNextClick }) => {
  return (
    <div className="question margin-top-12">
      <div className="question-expression">{questionExpression} =</div>&nbsp;
      <input type="number" value={enteredAnswer} onChange={e => setEnteredAnswer(e.target.value)} />&nbsp;
      <button disabled={!enteredAnswer} onClick={() => onNextClick()}>Next</button>
    </div>
  );
};

Question.propTypes = {
  questionExpression: PropTypes.string.isRequired,
  enteredAnswer: PropTypes.string,
  setEnteredAnswer: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired
};

export default Question;

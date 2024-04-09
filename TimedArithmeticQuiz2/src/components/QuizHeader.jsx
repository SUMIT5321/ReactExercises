import React from "react";
import PropTypes from "prop-types"

export const QuizHeader = React.memo(function QuizHeader({numberRange, perQuestionTimeInSecs, totalQuestionCount, score}) {
  
  return <div>
    <h1>Arithmetic Quiz</h1>
    Number Range: {`${numberRange[0]}-${numberRange[1]}`} |
    Question Count: {totalQuestionCount} |
    Time per question: {perQuestionTimeInSecs} secs
    <h3 className="margin-top-12">Score: {score}</h3>
  </div>
});

QuizHeader.propTypes = {
  numberRange: PropTypes.array, 
  perQuestionTimeInSecs: PropTypes.number, 
  totalQuestionCount: PropTypes.number,
  score: PropTypes.number
}
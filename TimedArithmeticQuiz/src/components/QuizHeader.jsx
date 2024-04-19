import React from "react";
import { quizConfig } from "../data/quizConfig";
import PropTypes from "prop-types"

export const QuizHeader = React.memo(function QuizHeader({ score }) {
  const numberRange = quizConfig.numberRange
  const perQuestionTimeInSecs = quizConfig.perQuestionTimeInSecs
  const totalQuestionCount = quizConfig.totalQuestionCount

  return <div>
    <h1>Arithmetic Quiz</h1>
    Number Range: {`${numberRange[0]}-${numberRange[1]}`} |
    Question Count: {totalQuestionCount} |
    Time per question: {perQuestionTimeInSecs} secs
    <h3 className="margin-top-12">Score: {score}</h3>
  </div>
});

QuizHeader.propTypes = {
  score: PropTypes.number.isRequired
}
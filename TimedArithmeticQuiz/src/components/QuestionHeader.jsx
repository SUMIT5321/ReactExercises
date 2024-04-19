import React, { useEffect, useState } from "react";
import { quizConfig } from "../data/quizConfig";
import PropTypes from "prop-types";

export const QuestionHeader = React.memo(function QuestionHeader({ questionNumber, onCountDownEnd }) {
  const [secondsLeft, setSecondsLeft] = useState(quizConfig.perQuestionTimeInSecs);
  const [countDownCompleted, setCountDownCompleted] = useState(false);

  useEffect(() => {
    if (countDownCompleted) {
      setSecondsLeft(quizConfig.perQuestionTimeInSecs);
      onCountDownEnd();
      setCountDownCompleted(false);
    }
  }, [countDownCompleted, onCountDownEnd]);

  useEffect(() => {
    setSecondsLeft(quizConfig.perQuestionTimeInSecs);
    const intervalId = setInterval(() => {
      setSecondsLeft(left => {
        if (left === 1) setCountDownCompleted(true)
        return left - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [questionNumber]);


  return <div className="questionHeader margin-top-12">
    <h4>Question number: {questionNumber}</h4>
    &nbsp;|&nbsp;
    <h4>Time left: {secondsLeft}</h4>
  </div>
})

QuestionHeader.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  onCountDownEnd: PropTypes.func.isRequired
}

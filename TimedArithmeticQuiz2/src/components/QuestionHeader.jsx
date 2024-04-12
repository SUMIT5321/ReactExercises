import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const QuestionHeader = React.memo(function QuestionHeader({ perQuestionTimeInSecs, questionNumber, onCountDownEnd }) {
  const [secondsLeft, setSecondsLeft] = useState(perQuestionTimeInSecs);
  const [countDownCompleted, setCountDownCompleted] = useState(false);

  useEffect(() => {
    if (countDownCompleted) {
      setSecondsLeft(perQuestionTimeInSecs);
      onCountDownEnd();
      setCountDownCompleted(false);
    }
  },[perQuestionTimeInSecs, countDownCompleted, onCountDownEnd]);

  useEffect(() => {
    setSecondsLeft(perQuestionTimeInSecs);
    const intervalId = setInterval(() => {
      setSecondsLeft(left => {
        if(left === 1) setCountDownCompleted(true)
        return left - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [perQuestionTimeInSecs, questionNumber]);


  return <div className="questionHeader margin-top-12">
    <h4>Question number: {questionNumber}</h4>
    &nbsp;|&nbsp;
    <h4>Time left: {secondsLeft}</h4>
  </div>
})

QuestionHeader.propTypes = {
  perQuestionTimeInSecs: PropTypes.number,
  questionNumber: PropTypes.number,
  onCountDownEnd: PropTypes.func
}

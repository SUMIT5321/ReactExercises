import { useEffect, useState } from "react";
import { quizConfig } from "../data/quiz-config";
import PropTypes from "prop-types";

const { perQuestionTimeInSecs } = quizConfig; // defined outside as this constant
const QuestionHeader = ({ questionNumber, onCountDownEnd }) => {
  const [secondsLeft, setSecondsLeft] = useState(perQuestionTimeInSecs);
  const [countDownCompleted, setCountDownCompleted] = useState(false);

  useEffect(() => {
    if (countDownCompleted) {
      setSecondsLeft(perQuestionTimeInSecs);
      onCountDownEnd(true);
      setCountDownCompleted(false);
    }
  }, [countDownCompleted, onCountDownEnd]);

  useEffect(() => {
    setSecondsLeft(perQuestionTimeInSecs);
    const intervalId = setInterval(() => {
      setSecondsLeft(left => {
        if (left === 1) setCountDownCompleted(true);
        return left - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [questionNumber]);


  return (
    <div className="question-header margin-top-12">
      <h4>Question number: {questionNumber}</h4>
      &nbsp;|&nbsp;
      <h4>Time left: {secondsLeft}</h4>
    </div>
  );
};

QuestionHeader.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  onCountDownEnd: PropTypes.func.isRequired
};

export default QuestionHeader;

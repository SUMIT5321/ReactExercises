import PropTypes from "prop-types";
import ResponseList from "./response-list";
import QuizHeader from "./quiz-header";
import { questionPropType } from "../lib/prop-type-values";

const QuizComplete = ({ correctAnswerQuestions, wrongAnswerQuestions, score }) => {
  return (
    <div>
      <QuizHeader score={score} />
      <ResponseList correctAnswers list={correctAnswerQuestions} />
      <ResponseList list={wrongAnswerQuestions} />
    </div>
  );
};

QuizComplete.propTypes = {
  correctAnswerQuestions: PropTypes.arrayOf(questionPropType).isRequired,
  wrongAnswerQuestions: PropTypes.arrayOf(questionPropType).isRequired,
  score: PropTypes.number.isRequired
};

export default QuizComplete;

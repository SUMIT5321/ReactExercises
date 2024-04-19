import PropTypes from "prop-types"
import { ResponseList } from "./ResponseList"
import { QuizHeader } from "./QuizHeader"
import { questionPropType } from "../lib/PropTypeValues"

export const QuizComplete = ({correctAnswerQuestions, wrongAnswerQuestions, score}) => {
  return <div>
    <QuizHeader score={score} />
    <ResponseList correctAnswers list={correctAnswerQuestions} />
    <ResponseList list={wrongAnswerQuestions} />
  </div>
}

QuizComplete.propTypes = {
  correctAnswerQuestions: PropTypes.arrayOf(questionPropType).isRequired,
  wrongAnswerQuestions: PropTypes.arrayOf(questionPropType).isRequired,
  score: PropTypes.number.isRequired
}
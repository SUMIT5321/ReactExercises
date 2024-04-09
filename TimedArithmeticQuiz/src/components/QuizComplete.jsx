import PropTypes from "prop-types"
import { ResponseList } from "./ResponseList"
import { QuizHeader } from "./QuizHeader"

export const QuizComplete = ({correctAnswerQuestions, wrongAnswerQuestions, score}) => {
  return <div>
    <QuizHeader score={score} />
    <ResponseList correctAnswers={true} list={correctAnswerQuestions} />
    <ResponseList correctAnswers={false} list={wrongAnswerQuestions} />
  </div>
}

QuizComplete.propTypes = {
  correctAnswerQuestions: PropTypes.array,
  wrongAnswerQuestions: PropTypes.array,
  score: PropTypes.number
}
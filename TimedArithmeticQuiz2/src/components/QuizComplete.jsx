import PropTypes from "prop-types"
import { ResponseList } from "./ResponseList"
import { QuizHeader } from "./QuizHeader"

export const QuizComplete = ({numberRange, timeForEachQuestion, totalQuestionCount, correctAnswerQuestions, wrongAnswerQuestions, score}) => {
  return <div>
    <QuizHeader numberRange={numberRange} perQuestionTimeInSecs={timeForEachQuestion} totalQuestionCount={totalQuestionCount} score={score} />
    <ResponseList correctAnswers={true} list={correctAnswerQuestions} />
    <ResponseList correctAnswers={false} list={wrongAnswerQuestions} />
  </div>
}

QuizComplete.propTypes = {
  numberRange: PropTypes.array, 
  timeForEachQuestion: PropTypes.number, 
  totalQuestionCount: PropTypes.number,
  correctAnswerQuestions: PropTypes.array,
  wrongAnswerQuestions: PropTypes.array,
  score: PropTypes.number
}
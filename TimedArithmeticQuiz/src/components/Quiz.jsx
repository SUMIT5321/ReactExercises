import { useState } from "react"
import QuizComplete from "./QuizComplete";
import Question from "./Question";
import QuizHeader from "./QuizHeader";
import QuestionHeader from "./QuestionHeader";
import { quizConfig, quizState } from "../data/quizConfig"
import { QuestionHelper } from "../helpers/QuestionHelper";


const Quiz = () => {
  //// states ////
  const [quiz, setQuiz] = useState({
    state: quizState.running,
    currentQuestionIndex: 0,
    score: 0
  });
  const [questions, setQuestions] = useState([QuestionHelper.createQuestion(0)]);
  const [enteredAnswer, setEnteredAnswer] = useState("");

  //// handler ////
  const onNextClick = (timedOut = false) => {
    const currentQuestion = {
      ...questions[quiz.currentQuestionIndex],
      isTimedOut: timedOut,
      receivedAnswer: enteredAnswer
    }
    const isCorrectResponse = QuestionHelper.isResponseCorrect(currentQuestion)
    const isLastQuestion = quizConfig.totalQuestionCount === quiz.currentQuestionIndex + 1

    setEnteredAnswer("");
    setQuiz({
      ...quiz,
      state: isLastQuestion ? quizState.complete : quiz.state,
      currentQuestionIndex: isLastQuestion ? quiz.currentQuestionIndex : quiz.currentQuestionIndex + 1,
      score: quiz.score + isCorrectResponse ? 1 : 0
    })
    setQuestions(
      [
        ...questions.slice(0, quiz.currentQuestionIndex),
        { ...currentQuestion, isCorrect: isCorrectResponse },
        ...isLastQuestion ? [] : [QuestionHelper.createQuestion(quiz.currentQuestionIndex + 1)]
      ]
    )
  };

  if (quiz.state === quizState.complete) {
    const correctList = questions.filter(question => question.isCorrect);
    const wrongList = questions.filter(question => !question.isCorrect);
    return (
      <QuizComplete
        correctAnswerQuestions={correctList}
        wrongAnswerQuestions={wrongList}
        score={quiz.score}
      />
    )
  }

  const questionComponent = questions.length ? <Question
    questionExpression={QuestionHelper.getStringExpression(questions[questions.length - 1])}
    enteredAnswer={enteredAnswer}
    setEnteredAnswer={setEnteredAnswer}
    onNextClick={onNextClick}
  /> : null

  return <div>
    <QuizHeader score={quiz.score} />
    <QuestionHeader
      questionNumber={quiz.currentQuestionIndex + 1}
      onCountDownEnd={onNextClick}
    />
    {questionComponent}
  </div>
}

export default Quiz;
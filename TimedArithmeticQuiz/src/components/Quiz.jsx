import { useState } from "react";
import QuizComplete from "./quiz-complete";
import Question from "./question";
import QuizHeader from "./quiz-header";
import QuestionHeader from "./question-header";
import { quizState } from "../data/quiz-config";
import useQuiz from "../custom-hooks/use-quiz";


const Quiz = () => {
  //// states ////
  const { quiz, questions, checkCurrentQuestionAndGoToNext } = useQuiz();
  const [enteredAnswer, setEnteredAnswer] = useState("");

  //// handler ////
  const onNextClick = (timedOut = false) => {
    checkCurrentQuestionAndGoToNext({ enteredAnswer, timedOut });
    setEnteredAnswer("");
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
    );
  }

  const questionComponent = questions.length ? <Question
    questionExpression={questions[questions.length - 1].stringExpression}
    enteredAnswer={enteredAnswer}
    setEnteredAnswer={setEnteredAnswer}
    onNextClick={onNextClick}
  /> : null;

  return <div>
    <QuizHeader score={quiz.score} />
    <QuestionHeader
      questionNumber={quiz.currentQuestionIndex + 1}
      onCountDownEnd={onNextClick}
    />
    {questionComponent}
  </div>;
};

export default Quiz;

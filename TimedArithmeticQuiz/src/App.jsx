import { useCallback, useEffect, useState } from "react"
import { QuizHeader } from "./components/QuizHeader"
import { quizConfig } from "./data/quizConfig"
import { Question } from "./components/Question";
import { Quiz } from "./models/QuizModel";
import { QuestionHeader } from "./components/QuestionHeader";
import { QuizComplete } from "./components/QuizComplete";


function App() {
  const [score, setScore] = useState(0);
  const [quiz,] = useState(new Quiz(quizConfig.numberRange, quizConfig.operatrs ,quizConfig.totalQuestionCount));
  const [currentQuestionIndex, setCurrrentQuestionIndex] = useState(0);
  const [enteredAnswer, setEnteredAnswer] = useState("");

  useEffect(() => {
    quiz.startQuiz();
    setCurrrentQuestionIndex(quiz.getCurrentIndex());

    return () => {
      quiz.endQuiz()
      setCurrrentQuestionIndex(0);
    }
  }, [quiz]);
  

  const onNextClick = useCallback(function onNextClick(timedOut = false) {
    setEnteredAnswer(answer => {
      if (quiz.isResponseForCurrentQuestionCorrect(answer, timedOut)) {
        setScore(s => s+1);
      }
      return "";
    });
    quiz.nextQuestion();
    setCurrrentQuestionIndex(quiz.getCurrentIndex());
  }, [quiz]);
  
  if (quiz.isQuizComplete()) {
    const correctList = quiz.questions.filter(question => question.isCorrect);
    const wrongList = quiz.questions.filter(question => !question.isCorrect);
    return <QuizComplete correctAnswerQuestions={correctList} wrongAnswerQuestions={wrongList} score={score} />
  }

  const questionComponent = quiz.getCurrentQuestion() ? <Question 
    questionExpression={quiz.getCurrentQuestion().getStringExpression()} 
    enteredAnswer={enteredAnswer}
    setEnteredAnswer={setEnteredAnswer}
    onNextClick={onNextClick}
    /> : null
  
  return <div>
    <QuizHeader score={score} />
    <QuestionHeader
      questionNumber={currentQuestionIndex}
      onCountDownEnd={onNextClick}
      />
    { questionComponent }
  </div>
}

export default App

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { quizConfig, quizState } from "../data/quiz-config";
import { areNumbersClose, getRandomNumInInterval } from "../utility/number-utils";

const useQuiz = () => {
  //// states ////
  const [quiz, setQuiz] = useState(defaultQuizValue);
  const [questions, setQuestions] = useState([createQuestion(0)]);

  function getStringExpression({ firstNumber, secondNumber, operator }) {
    return `${firstNumber} ${operator} ${secondNumber}`;
  }

  function getAnswer({ firstNumber, secondNumber, operator }) {
    switch (operator) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        return firstNumber - secondNumber;
      case "*":
        return firstNumber * secondNumber;
      case "/":
        return firstNumber / secondNumber;
      default:
        throw Error("Unknown Operator");
    }
  }

  function createQuestion(index) {
    const [min, max] = quizConfig.numberRange;
    const firstNumber = getRandomNumInInterval(min, max);
    const secondNumber = getRandomNumInInterval(min, max);
    const numberOfOperators = quizConfig.operatrs.length;
    const randomOperatorIndex = getRandomNumInInterval(0, numberOfOperators - 1);
    const operator = quizConfig.operatrs[randomOperatorIndex];
    const stringExpression = getStringExpression({ firstNumber, secondNumber, operator });

    return {
      id: uuidv4(),
      index,
      firstNumber,
      secondNumber,
      operator,
      stringExpression,
      expectedAnswer: getAnswer({ firstNumber, secondNumber, operator })
    };
  }

  const isResponseCorrect = ({ receivedAnswer, isTimedOut, expectedAnswer }) => {
    return isTimedOut ? false : areNumbersClose(parseFloat(receivedAnswer), expectedAnswer);
  };

  const checkCurrentQuestionAndGoToNext = ({ enteredAnswer, timedOut }) => {
    const currentQuestion = {
      ...questions[quiz.currentQuestionIndex],
      isTimedOut: timedOut,
      receivedAnswer: enteredAnswer
    };

    const isCorrectResponse = isResponseCorrect(currentQuestion);
    const isLastQuestion = quizConfig.totalQuestionCount === quiz.currentQuestionIndex + 1;

    setQuiz({
      ...quiz,
      state: isLastQuestion ? quizState.complete : quiz.state,
      currentQuestionIndex: isLastQuestion ? quiz.currentQuestionIndex : quiz.currentQuestionIndex + 1,
      score: quiz.score + (isCorrectResponse ? 1 : 0)
    });
    setQuestions(
      [
        ...questions.slice(0, quiz.currentQuestionIndex),
        { ...currentQuestion, isCorrect: isCorrectResponse },
        ...isLastQuestion ? [] : [createQuestion(quiz.currentQuestionIndex + 1)]
      ]
    );
  };


  return {
    quiz, questions, checkCurrentQuestionAndGoToNext
  };
};

export default useQuiz;

const defaultQuizValue = {
  state: quizState.running,
  currentQuestionIndex: 0,
  score: 0
};

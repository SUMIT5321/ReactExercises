import { v4 as uuidv4 } from "uuid"
import { areNumbersClose, getRandomNumInInterval } from "../utility/numberUtils";
import { quizConfig } from "../data/quizConfig";


export class QuestionHelper {

  static createQuestion(index) {
    const [min, max] = quizConfig.numberRange;
    const firstNumber = getRandomNumInInterval(min, max);
    const secondNumber = getRandomNumInInterval(min, max);
    const numberOfOperators = quizConfig.operatrs.length;
    const randomOperatorIndex = getRandomNumInInterval(0, numberOfOperators - 1);
    const operator = quizConfig.operatrs[randomOperatorIndex];

    return {
      id: uuidv4(),
      index,
      firstNumber,
      secondNumber,
      operator,
      expectedAnswer: QuestionHelper.getAnswer({ firstNumber, secondNumber, operator })
    }
  }

  static getStringExpression({ firstNumber, secondNumber, operator }) {
    return `${firstNumber} ${operator} ${secondNumber}`
  }

  static getAnswer({ firstNumber, secondNumber, operator }) {
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

  static isResponseCorrect({ firstNumber, secondNumber, operator, receivedAnswer, isTimedOut }) {
    this.isCorrect = isTimedOut ? false :
      areNumbersClose(parseFloat(receivedAnswer), QuestionHelper.getAnswer({ firstNumber, secondNumber, operator }));
    return this.isCorrect;
  }
}
import { areNumbersClose } from "../utility/numberUtils";
import {v4 as uuidv4} from "uuid";

export class QuestionModel {
  constructor(index, firstNumnber, secondNumber, operator) {
    this.index = index;
    this.id = uuidv4();
    this.firstNumnber = firstNumnber;
    this.secondNumber = secondNumber;
    this.operator = operator;
  }

  getStringExpression() {
    return `${this.firstNumnber} ${this.operator} ${this.secondNumber}`
  }

  getAnswer() {
    switch (this.operator) {
      case "+":
        return this.firstNumnber + this.secondNumber;
      case "-":
        return this.firstNumnber - this.secondNumber;
      case "*":
        return this.firstNumnber * this.secondNumber;
      case "/":
        return this.firstNumnber / this.secondNumber;
      default:
        throw Error("Unknown Operator");
    }
  }

  isResponseCorrect(response, isTimedOut) {
    this.response = response;
    this.timedOut = isTimedOut;
    this.isCorrect = isTimedOut ? false : areNumbersClose(parseFloat(this.response), this.getAnswer());
    return this.isCorrect;
  }
}
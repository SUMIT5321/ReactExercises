import { QuestionModel } from "./QuestionModel";
import { getRandomNumInInterval } from "../utility/numberUtils";

export class QuizModel {
  constructor(numberRange, operatrs, totalQuestionCount) {
    this.numberRange = numberRange;
    this.operatrs = operatrs;
    this.totalQuestionCount = totalQuestionCount
    this.questions = [];
    this.quizState = quizState.notStarted;
  }

  startQuiz() {
    this.createQuestion()
    this.quizState = quizState.running;
  }

  createQuestion() {
    const [min, max] = this.numberRange
    const firstNumber = getRandomNumInInterval(min, max);
    const secondNumber = getRandomNumInInterval(min, max);

    const numberOfOperators = this.operatrs.length;
    const randomOperatorIndex = getRandomNumInInterval(0, numberOfOperators-1);
    const operator = this.operatrs[randomOperatorIndex]

    const index = this.questions.length + 1
    const question = new QuestionModel(index, firstNumber, secondNumber, operator);
    this.questions.push(question);
    return question;
  }

  nextQuestion() {
    return this.questions.length === this.totalQuestionCount ? null : this.createQuestion()
  }

  isQuizComplete() {
    return this.quizState === quizState.complete;
  }

  getCurrentIndex() {
    return this.isQuizComplete() ? -1 : this.questions.length
  }

  getCurrentQuestion() {
    return this.questions[this.questions.length - 1]
  }

  isResponseForCurrentQuestionCorrect(response) {
    if (this.getCurrentIndex() === this.totalQuestionCount) this.quizState = quizState.complete;
    return this.getCurrentQuestion().isResponseCorrect(response)
  }
}

const quizState = {
  notStarted: -1,
  running: 0,
  complete: 1
}
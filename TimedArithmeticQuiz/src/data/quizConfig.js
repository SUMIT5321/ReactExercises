export const quizConfig = {
  numberRange: [1, 20],
  perQuestionTimeInSecs: 20,
  totalQuestionCount: 20,
  operatrs: ["+", "-", "*", "/"],
  pointPerCorrectAnswer: 1,
  pointPerWrongAnswer: 0,
}

export const quizState = {
  running: 0,
  complete: 1
}
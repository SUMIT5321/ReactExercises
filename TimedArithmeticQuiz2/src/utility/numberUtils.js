export function getRandomNumInInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function areNumbersClose(a, b, tolerance = 0.005) {
  return Math.abs(a-b) < tolerance
}

export function formatNumber(num) {
  return Number.isInteger(num) ? num : num.toFixed(2);
}
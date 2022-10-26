const promptMsg1 = 'Digite o primeiro número:'
const promptMsg2 = 'Digite o segundo número:'

const numberA = Number(prompt(promptMsg1))
const numberB = Number(prompt(promptMsg2))

const sum = (x, y) => {
  return x + y
}

const subtract = (x, y) => {
  return x - y
}

const multiply = (x, y) => {
  return x * y
}

const divide = (x, y) => {
  return x / y
}

const sumResult = sum(numberA, numberB)
const subtractionResult = subtract(numberA, numberB)
const multiplicationResult = multiply(numberA, numberB)
const divisionResult = divide(numberA, numberB)

console.log(sumResult)
console.log(subtractionResult)
console.log(multiplicationResult)
console.log(divisionResult)

const PROMPT_MSG_1 = 'Digite o primeiro número:'
const PROMPT_MSG_2 = 'Digite o segundo número:'

let numberA = Number(prompt(PROMPT_MSG_1))
let numberB = Number(prompt(PROMPT_MSG_2))

function sum(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

let sumResult = sum(numberA, numberB)
let subtractionResult = subtract(numberA, numberB)
let multiplicationResult = multiply(numberA, numberB)
let divisionResult = divide(numberA, numberB)

console.log(sumResult)
console.log(subtractionResult)
console.log(multiplicationResult)
console.log(divisionResult)

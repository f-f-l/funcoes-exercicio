const sum = (x, y) => {
  return x + y
}
console.log(sum(10, 10))

const isGreaterOrEqual = (x, y) => {
  if (x > y) {
    return true
  } else {
    return false
  }
}
console.log(isGreaterOrEqual(20, 10))

const isEvenOrNot = (num) => {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(isEvenOrNot(10))

const stringLength = (string) => {
  return console.log(
    `A string "${string.toUpperCase()}" possui ${string.length} letras.`
  )
}
stringLength(`Oloco!`)

/*
  Exercício atualizado:
  
  c) 
  Uma função que receba um número e 
  imprima no console um boleano informando se 
  o número é par ou não.

  d)  
  Uma função que receba um valor de
  salário e retorne o valor com o 
  desconto 10% referente ao INSS. 
*/

const fun = (num) => {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(fun(5))

const funn = (salario) => {
  const inss = salario * 0.1
  return salario - inss
}
console.log(funn(1000))

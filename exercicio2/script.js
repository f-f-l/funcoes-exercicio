function sum(x, y) {
  return x + y
}
console.log(sum(10, 10))

function isGreaterOrEqual(x, y) {
  if (x > y) {
    return true
  } else {
    return false
  }
}
console.log(isGreaterOrEqual(20, 10))

function isEvenOrNot(x) {
  if (x % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(isEvenOrNot(10))

function stringLength(string) {
  return console.log(
    `A string "${string.toUpperCase()}" possui ${string.length} letras.`
  )
}
stringLength(`Oloco!`)

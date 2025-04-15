const numbers = [76, 55.7, 89, 37.5, 61]

numbers.push(19)
numbers.unshift(61)
numbers[1] = 12
numbers.splice(83, 1, 99)

// console.log(numbers)
// console.log(numbers[1])

// for (let index = 0; index !== numbers.length; index++) {
//  console.log(numbers[index])
// }

numbers.forEach(function (element) {
  console.log(element)
})

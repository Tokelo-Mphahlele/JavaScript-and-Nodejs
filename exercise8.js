// const array = [2, 4, 6, 8, 10, 12]

// const map = function (functionToApply, array) {

// }

const map = function (functionToApply, array) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(functionToApply(array[i]))
  }
  return result
}

// Function to square a number
const square = (num) => num * num

// Test array
const numbers = [1, 2, 3, 4, 5]

// Using custom map function
const customMapResult = map(square, numbers)
console.log('Custom map result:', customMapResult)

// Using JavaScript's built-in map method
const builtInMapResult = numbers.map(square)
console.log('Built-in map result:', builtInMapResult)

// Checking if results match
console.log('Results match:', JSON.stringify(customMapResult) === JSON.stringify(builtInMapResult))

/*
const sleep = function (sleepDuration) { // A function that blocks
  const now = new Date().getTime()
  while (new Date().getTime() < now + sleepDuration) { /* do nothing  }
} */
/* console.log('Starting')
sleep(10000)
console.log('Done, doing other things')
for (let i = 0; i < 10; i++) {
  console.log(i)
}
console.log('Done with other things') */

/* console.log('Starting')
// setTimeout(callback, duration) is an asynchronous version of sleep
setTimeout(() => {
  console.log('Done Waiting')
}, 10000)
console.log('Done, doing other things')
for (let i = 0; i < 10; i++) {
  console.log(i)
}
console.log('Done with other things') */

/* console.log('Loading a module')
const mod = require('./mod_exercise11')
console.log('Mod: ', mod)
console.log('Done') */

const fs = require('fs')
fs.readFile('./ELEN4010.txt', 'utf8', (err, data) => {
// utf8 is the encoding of the file
  if (err) throw err // callbacks usually get errors in this format
  // err will either contain the error or null
  console.log(data) // if there weren't errors, send the data to the console
})

// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice

//Store the value of the first die in the memory
let die1 = getRandomInt(6)
  console.log(`The first die is ${die1}`)

//Store the value of the first die in the memory
let die2 = getRandomInt(6)
  console.log(`The second dies is ${die2}`)

//Store the total value in the memory
let Total = die1 + die 2
  console.log(`The total is ${Total}`)

let Output

// - Implement the (basic) rules of craps:

if (Total == 7 || Total == 11) {
//   - If the total of the two dice is 7 or 11, the player wins
  Output = `YOU WIN!`)
}
//   - If the total of the two dice is 2, 3, or 12, the player loses
else if (Total == 2 || Total ==3 || Total == 12) {
  Output = `YOU LOSE!`)
} else {
  Output = `The point total is ${Total}`
}
//   - If the total is anything else, the "point" is set, e.g. "the point is 6"

// Write the recipe (algorithm) in the comments. Write the code.

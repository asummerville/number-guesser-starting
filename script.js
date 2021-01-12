let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10)

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1-num2)
}

const compareGuesses = (user, comp, target) => {
  if (getAbsoluteDistance(target, user) > getAbsoluteDistance(target, comp)) {
    return false
  } else if (getAbsoluteDistance(target, user) < getAbsoluteDistance(target, comp)) {
    return true
  } else {
    return true
  }
} 

const updateScore = str => {
  if (str === 'human') {
    humanScore++
  } else if (str === 'computer') {
    computerScore++
  }
}

const advanceRound = () => currentRoundNumber++
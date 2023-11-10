// TODO: Declare some variables to use in our game
let minNum = 0;
let maxNum = 27;
let randomNumber = Math.floor(Math.random()*(maxNum - minNum)+1)+ minNum;
console.log(randomNumber);

let attempts = 0;
const guessInput = document.getElementById("Guess");
console.log(guessInput);
const startVersion = document.getElementById("game-box");
const submitButton = document.getElementById("submitGuess");
const restartButton = document.getElementById("restart");
const hintsOutput = document.getElementById("hints");
const attemptsOutput = document.getElementById("attempts");

// TODO: Create function to check guessInput
function checkGuess() {
  const guessValue = Number(guessInput.value);
  attempts++;
  console.log(attempts);
}
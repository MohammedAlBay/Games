// TODO: Declare some variables to use in our game
let minNum = 0;
let maxNum = 26;
let randomNumber = Math.floor(Math.random()*(maxNum - minNum)+1)+ minNum;
console.log(randomNumber);

let attempts = 0;
const guessInput = document.getElementById("Guess");
console.log(guessInput);
const submitButton = document.getElementById("submitGuess");
const hintsOutput = document.getElementById("hint");
const attemptsOutput = document.getElementById("attempts");

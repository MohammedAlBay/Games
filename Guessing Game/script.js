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
  // Define conditionals
  if (guessValue <= minNum || guessValue >= maxNum){
    hintsOutput.textContent = `Enter a number between ${minNum} and ${maxNum} pls!`
    hintsOutput.classList.add("error");
  } else if (guessValue === randomNumber){
    hintsOutput.textContent = `Awesome! Your number ${guessValue} was correct. You can be named many things, hungry not being one of them.`;
    hintsOutput.classList.remove("error");
    hintsOutput.classList.add("success");
    submitButton.style.display = "none";
    restartButton.style.display = "block";
  } else if ((guessValue+1) === randomNumber || (guessValue-1) === randomNumber){
    hintsOutput.textContent = `So close, but you just missed it! Are you in a class that started on the thirteenth or what?"`;
    hintsOutput.classList.add("error");
  } else {
    hintsOutput.textContent = `Bummer...You guessed ${guessValue} and the secret number was ${randomNumber}.`
    hintsOutput.classList.add("error");
  }
  // Add attempts to attemptsOutput
  attemptsOutput.textContent = `Number of attempts: ${attempts}`
}
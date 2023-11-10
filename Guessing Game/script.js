// TODO: Declare some variables to use in our game
let minNum = 0;
let maxNum = 27;
let randomNumber = Math.floor(Math.random()*(maxNum - minNum)+1)+ minNum;
console.log(randomNumber);

let attempts = 0;
const inputLabel= document.getElementById("label");
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
    guessInput.style.display = "none";
    inputLabel.style.display = "none";
    restartButton.style.display = "block";
  } else if ((guessValue+1) === randomNumber || (guessValue-1) === randomNumber){
    hintsOutput.textContent = `So close, but you just missed it! Are you in a class that started on the thirteenth or what?"`;
    hintsOutput.classList.add("error");
  } else {
    hintsOutput.textContent = `Bummer...You guessed ${guessValue} but that is not the secret number.`
    hintsOutput.classList.add("error");
  }
  // Add attempts to attemptsOutput
  attemptsOutput.textContent = `Number of attempts: ${attempts}`
}
// TODO: Create function to restart the game when the guess is correct
function initGame(){
  console.log("Game started!");
  randomNumber = Math.floor(Math.random()*(maxNum - minNum)+1)+ minNum;
  console.log(randomNumber);
  attempts = 0;
  attemptsOutput.textContent = "";
  hintsOutput.textContent = "";
  guessInput.value = "";
  hintsOutput.classList.remove("success", "error");
  restartButton.style.display = "none";
  submitButton.style.display = "initial";
  inputLabel.style.display = "initial";
  guessInput.style.display = "initial";
}

// TODO: Create (1)Event Listener for a 'click' on submit button
submitButton.addEventListener("click", checkGuess);
  
// TODO: Create (2)Event Listener for pressing 'enter' on submit button
guessInput.addEventListener("keypress",(e)=>{
if (e.key === "Enter"){
  // Cancel default action
  e.preventDefault();
  // Run checkGuess function
  checkGuess();
}
});

// TODO: Create Event Listener to prevent non-numeric input
guessInput.addEventListener("keypress", function (e) {
  if (isNaN(e.key)){
    e.preventDefault();
  }
});

// TODO: Create Event Listener for a 'click' on restart button
restartButton.addEventListener("click", initGame);

// TODO: Create Event Listener for reloading page/window
window.addEventListener("load", initGame);
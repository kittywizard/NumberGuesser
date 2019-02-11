// need to generate two numbers - min and max
// can't be the same number

// number of guesses - probably a static variable

// need to generate correct guess number

// variables
let min = 1,
    max = 10;

let numGuesses = 3;

//UI elements
const minNum = document.querySelector('.min'),
      maxNum = document.querySelector('.max'),
      submitBtn = document.querySelector('#submit-btn'),
      guessInput = document.querySelector('#guess'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

//generate the correct answer
let correct = Math.floor(Math.random() * 10) + 1; 

//event listener for the button
submitBtn.addEventListener('click', startTheGame);


function startTheGame() {
  let guess = parseInt(guessInput.value);

  //validate your input!
  /* check for: 
      if entry is blank
      if entry is above or below the min/max values
  */

  if(isNaN(guess) || guess > max || guess < min ) {
    setMessage(`Please enter a number between ${min} and ${max}!`, 'red');
  } 

  //check to see if guess is correct

  if(guess === correct) {
      console.log("You win!");
      //reset all the guesses/numbers etc
      resetGame();
  } else {
    console.log("Loser! " + correct + " is the correct guess!");
    //reset
    //lower the numguesses variable
    //display new amounts of remaining guesses
    numGuesses -= 1;
    console.log(numGuesses);

  }

  //
}

function resetGame() {

  numGuesses = 3;
  let correct = Math.floor(Math.random() * 10) + 1; 
  

}

function setMessage(msg, color){
  console.log(msg);
  // set the message from the parameters into the html
  message.style.color = color;
  message.textContent = msg;

}
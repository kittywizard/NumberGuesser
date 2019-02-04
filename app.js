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
      submitBtn = document.querySelector('#submit-btn');

minNum.textContent = min;
maxNum.textContent = max;

//generate the correct answer
let correct = Math.floor(Math.random() * 10) + 1; 

//event listener for the button
submitBtn.addEventListener('click', startTheGame);


function startTheGame() {
    //grab the value from the submit form
    const guess = document.getElementById('guess').value;


}

// need to generate two numbers - min and max
// can't be the same number

// number of guesses - probably a static variable

// need to generate correct guess number

// variables

let min, max, correct;

const numGuesses = 3;

//event listener for the button
const submit = document.getElementById('submit-btn').addEventListener('click', generateGuesses);

//function to generate numbers
function generateGuesses() {
    const guess = document.getElementById('guess').value;
    console.log(guess);

    min = Math.floor(Math.random() * 10) + 1;
    console.log(min);
}


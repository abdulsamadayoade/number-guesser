// GAME VALUE
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


// UI VARIABLES
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// ASSIGN MIN AND MAX VALUES
minNum.textContent = min;
maxNum.textContent = max;

// LISTEN FOR GUESS
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // VALIDATE
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // WINING
    if (guess === winningNum) {
        guessInput.disabled = true;

        // CHANGE BORDER COLOR
        guessInput.style.borderColor = 'green';

        // NOFITY THE PLAYER
        setMessage(`You won! ${winningNum} is the correct answer`, 'green');
    } else {

    }
});

// SET MESSAGE
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
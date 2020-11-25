// GAME VALUE
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
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

// PLAY AGAIN
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// LISTEN FOR GUESS
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // VALIDATE
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // WINING
    if (guess === winningNum) {
        gameOver(true, `You won! ${winningNum} is the correct answer`);

    } else {
        // GUESSES LEFT
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            gameOver(false, `Game over, you lost. The correct answer was ${winningNum}`);

        } else {
            // GAME CONTINUES - WRONG ANSWER
            // CHANGE BORDER COLOR
            guessInput.style.borderColor = 'red';

            // CLEAR THE INPUT
            guessInput.value = '';

            // NOFITY THE PLAYER
            setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left`, 'red');
        }
    }
});

// GAME OVER 
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // DISABLE THE INPUT
    guessInput.disabled = true;

    // CHANGE BORDER COLOR
    guessInput.style.borderColor = color;

    // CHANGE TEXT COLOR
    message.style.color = color;

    // SET MESSAGE
    setMessage(msg);

    // PLAY AGAIN
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// GET WINNING NUMBER
function getRandomNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

// SET MESSAGE
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
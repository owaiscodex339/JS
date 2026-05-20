let Guess = parseInt((Math.random() * 100 + 1))
const userInput = document.querySelector('#GuessField')
const submit = document.querySelector('#subt')
const GuessSlot = document.querySelector('.Guesses')
const remaining = document.querySelector('.lastResult')
const LowOrHigh = document.querySelector('.LowOrHigh')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    } else if( guess < 1){
        alert('Please Enter a number more than 1')
    } else if( guess > 100){
        alert('Please Enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${Guess}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === Guess){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < Guess){
        displayMessage(`Number is too low`)
    } else if(guess > Guess){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    GuessSlot.innerHTML += `${guess}   `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    LowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        Guess = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        GuessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
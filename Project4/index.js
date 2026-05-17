const Guess = parseInt((Math.random() * 100 + 1))
const userInput = document.querySelector('#GuessField')
const submit = document.querySelector('.subt')
const GuessSlot = document.querySelector('.Guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []
let NumGuess = 1

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
    GuessSlot.innerHTML += `${guess}`
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    
}

function newGame(){

}
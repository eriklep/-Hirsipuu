const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizeWord = ''
let maskedWord = ''
let guessCount = 0

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizeWord = words[random]
    maskedWord = "*".repeat(randomizeWord.length)
    guessCount = 0
    span.textContent = guessCount
    output.innerHTML = maskedWord
}

const win = () => {
    alert(`You have guessed right, the word is ${randomizeWord}. Number of guesses: ${guessCount}.`)
    newGame()
}

const replaceFoundChars = (guess) =>{
    guessCount++
    for (let i = 0; i < randomizeWord.length; i++){
        const char = randomizeWord.charAt(i);
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i, 1, guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
    span.textContent = guessCount
}

newGame()

input.addEventListener('keypress', (e) =>{
    if (e.key === 'Enter'){
        e.preventDefault()

        const guess = input.value
        if (guess.toLowerCase() === randomizeWord.toLocaleLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizeWord.toLocaleLowerCase()){
                win()
            }
        } else {
            alert("You guessed wrong!")
        }
        input.value=''
    }
})

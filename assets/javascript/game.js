var wordArray = ["pumpkin", "horse", "engineering"];
var wordField = document.getElementById("word");
var guessField = document.getElementById("guesses");
var guessTrack = document.getElementById("guess-track");
var startButton = document.getElementById("start-button");
var playScreen = document.getElementById("play-screen");
var startScreen = document.getElementById("start-screen");
var sign2 = document.getElementsByClassName("sign-2");
var gameArea = document.getElementsByClassName("game-area");
var gameResults = document.getElementsByClassName("game-results");

var currentWord, answerArray, guessArray, guessLeft;
var wins, losses = 0;
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function newGame() {
    currentWord = [];
    answerArray = [];
    guessArray = [];
    guessLeft = 11;
    guessTrack.textContent = "Guesses remaining: " + guessLeft;
    guessField.textContent = "";
    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    for (let i = 0; i < currentWord.length; i++) {
        answerArray.push("_");
    }
    for (let i = 0; i < answerArray.length; i++) {
        wordField.textContent += answerArray[i] + " ";
    }
}

function arrayPrint(array, id) {
    id.textContent = "";
    for (let i = 0; i < array.length; i++) {
        id.textContent += array[i] + " ";
    }
}

function checkEndOfGame() {
    if (answerArray.join("") == currentWord){
        alert("You Win!");
    } else if (guessLeft === 0){
        alert('You Lose!')
    }
}

startButton.addEventListener("click", function(){
    startScreen.style.visibility = "hidden";
    playScreen.style.visibility = "visible";
    sign2[0].style.visibility = "visible";
    playScreen.style.animationName = "slide";
    playScreen.style.animationDuration = "0.75s";
    playScreen.style.animationDelay = "0.25s";
    playScreen.style.animationFillMode = "both";
    gameArea[0].style.animationName = "slide";
    gameArea[0].style.animationDuration = "0.75s";
    gameArea[0].style.animationDelay = "1s";
    gameArea[0].style.animationFillMode = "both";
    gameResults[0].style.animationName = "slide";
    gameResults[0].style.animationDuration = "0.75s";
    gameResults[0].style.animationDelay = "1.75s";
    gameResults[0].style.animationFillMode = "both";
    
    newGame();
});

document.onkeyup = function(event) {

    var keyPress = event.key.toLowerCase();
    if (alphabet.indexOf(keyPress) === -1){}
    else if (guessArray.indexOf(keyPress) === -1 && currentWord.indexOf(keyPress) >= 0) {
        guessArray.push(keyPress);
    } else if (guessArray.indexOf(keyPress) === -1 && currentWord.indexOf(keyPress) === -1){
        guessLeft -= 1;
        guessArray.push(keyPress);
        console.log(guessLeft);
    } 

    console.log(guessArray);

    for (let i = 0; i < currentWord.length; i++) {
        if (keyPress === currentWord[i]) {
            answerArray[i] = keyPress;
            console.log(answerArray);
        }
    }

    arrayPrint(answerArray, wordField);
    arrayPrint(guessArray, guessField);
    guessTrack.textContent = "Guesses remaining: " + guessLeft;
    checkEndOfGame();
};

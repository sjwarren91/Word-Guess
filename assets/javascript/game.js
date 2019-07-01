var wordArray = ["pumpkin", "horse", "engineering"];
var wordField = document.getElementById("word");
var guessField = document.getElementById("guesses");
var newGameButton = document.getElementById("new-game-button");
var currentWord = [];
var answerArray = [];
var guessArray = [];
var score = 0;
var guessLeft = 14;

// console.log(currentWord);
// console.log(currentWord.length);


function newGame() {
    answerArray = [];
    guessArray = [];
    guessLeft = 14;
    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    for (let i = 0; i < currentWord.length; i++) {
        answerArray.push("_");
    }
    for (let i = 0; i < answerArray.length; i++) {
        wordField.innerHTML += answerArray[i] + " ";
    }
}

function arrayPrint(array, id) {
    id.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        id.innerHTML += array[i] + " ";
    }
}

newGameButton.addEventListener("click", function() {
    wordField.innerHTML = "";
    newGame();
});


document.onkeyup = function(event) {

    var keyPress = event.key;

    if (guessArray.indexOf(keyPress) === -1 && currentWord.indexOf(keyPress) >= 0) {
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

};

var wordArray = ["pumpkin", "horse", "engineering"];
var guessField = document.getElementById("guesses");

var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var currentGuess = [];
console.log(currentWord);
console.log(currentWord.length)

for (let i = 0; i < currentWord.length; i++){
    currentGuess.push("_ ");
}

guessField.innerHTML = currentGuess;


document.onkeyup = function(event) {
    var keyPress = event.key;

}
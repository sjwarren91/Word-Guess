var wordArray = ["pumpkin", "horse", "engineering"];
var guessField = document.getElementById("guesses");
var newGameButton = document.getElementById("new-game-button");
var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var guessArray = [];

console.log(currentWord);
console.log(currentWord.length);

function newGame() {
  for (let i = 0; i < currentWord.length; i++) {
    guessArray.push("_");
  }
  for (let i = 0; i < guessArray.length; i++) {
    guessField.innerHTML += guessArray[i] + " ";
  }
}

function arrayPrint(array) {
  guessField.innerHTML = "";
  for (let i = 0; i < guessArray.length; i++) {
    guessField.innerHTML += guessArray[i] + " ";
  }
}

newGameButton.addEventListener("click", function(){
    guessField.innerHTML = "";
    newGame();
})

document.onkeyup = function(event) {
  var keyPress = event.key;

  for (let i = 0; i < currentWord.length; i++) {
    if (keyPress === currentWord[i]) {
      guessArray[i] = keyPress;
      console.log(guessArray);
    }
  }

  arrayPrint(guessArray);
};

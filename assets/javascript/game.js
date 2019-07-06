var wordArray = ['cable','quiet','slant','wave','technique','play','gown','training','prescription','flawed','cruelty','pass','density','sandwich','context','petty','combination','ring','laundry','cast','origin','jurisdiction','horse','confrontation','society','golf','unrest','reform','rugby','dragon','snarl','strikebreaker','destruction','rule','conglomerate','adoption','verdict','pack','sphere','exchange','trustee','development','beat','priority','deport','finished','presentation','restoration','justice','resource','earthwax','dictionary','fur','license','railcar','royalty','slogan','progressive','raise','advertising','prey','pan','sensation','arrest','impulse','kitchen','bottom','egg white','automatic','cell','piece','dance','rotten','rung','frog','memory','address','lung','orbit','wire','healthy','pudding','honor','turn','privacy','threshold','work out','eye','maid','wild','assertive','minister','trouble','district','blonde','hold','cook','white','painter','grain'];
var wordField = document.getElementById("word");
var guessField = document.getElementById("guesses");
var guessTrack = document.getElementById("guess-track");
var startButton = document.getElementById("start-button");
var playScreen = document.getElementById("play-screen");
var startScreen = document.getElementById("start-screen");
var winLoss = document.getElementById("win-loss");
var sign2 = document.getElementsByClassName("sign-2");
var gameArea = document.getElementsByClassName("game-area");
var gameResults = document.getElementsByClassName("game-results");
var easel = document.getElementsByClassName("canvas");
var context = easel[0].getContext("2d");
var audioElement2 = document.createElement("audio");
audioElement2.setAttribute(
    "src",
    "assets/images/Cheering-Sound.mp3"
);

var currentWord, answerArray, guessArray, guessLeft, drawArray, audioElement;
var wins = 0;
var losses = 0;
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var context;

function newGame() {
    currentWord = [];
    answerArray = [];
    guessArray = [];
    guessLeft = 11;
    guessTrack.textContent = "Guesses remaining: " + guessLeft;
    guessField.textContent = "";
    wordField.textContent = "";
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

function updateScore() {
    winLoss.textContent = "W - " + wins + "/ L - " + losses;
}

function checkEndOfGame() {
    if (answerArray.join("") == currentWord) {
        wins += 1;
        updateScore();
        newGame();
        clearCanvas();
        playWinSound();
    } else if (guessLeft === 0) {
        losses += 1;
        updateScore();
        newGame();
        clearCanvas();
    }
}

function animate(target, delay) {
    target.style.animationName = "slide";
    target.style.animationDuration = "0.75s";
    target.style.animationDelay = delay;
    target.style.animationFillMode = "both";
}

function clearCanvas(){
    context.clearRect(0,0,250,180);
}

function canvasDraw(num) {
    drawArray[num]();
};

function draw(w, x, y, z) {
    context.beginPath();
    context.lineWidth = "2";
    context.strokeStyle = "#E032E6";
    context.moveTo(w, x);
    context.lineTo(y, z);
    context.stroke();
};

function first() {
    draw(5, 150, 150, 150);
};

function second() {
    draw(10, 5, 10, 150);
};

function third() {
    draw(5, 5, 70, 5);
};

function fourth() {
    draw(60, 5, 60, 15);
};

function brace() {
    draw(10, 25, 30, 5);
};

function head() {
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
};

function body() {
    draw(60, 36, 60, 70);
};

function rArm() {
    draw(60, 46, 80, 70);
};

function lArm() {
    draw(60, 46, 40, 70);
};

function rLeg() {
    draw(60, 70, 70, 110);
};

function lLeg() {
    draw(60, 70, 50, 110);
};

drawArray = [
    lLeg,
    rLeg,
    lArm,
    rArm,
    body,
    head,
    fourth,
    brace,
    third,
    second,
    first
];

function playWinSound(){
    audioElement.volume = "0.1";
    audioElement2.volume = "0.5";
    audioElement2.play();
    audioElement.volume = "0.2";
    
}

startButton.addEventListener("click", function() {
    audioElement = document.createElement("audio");
    audioElement.setAttribute(
        "src",
        "assets/images/LIFELIKE - Miami Nice (Part I).mp3"
    );
    audioElement.volume = "0.2";
    audioElement.play();
    audioElement.loop = true;
    startScreen.style.visibility = "hidden";
    playScreen.style.visibility = "visible";
    sign2[0].style.visibility = "visible";
    animate(playScreen, "0.25s");
    animate(gameArea[0], "1s");
    animate(gameResults[0], "1.75s");
    newGame();
});

document.onkeyup = function(event) {
    var keyPress = event.key.toLowerCase();
    if (alphabet.indexOf(keyPress) === -1) {
    } else if (
        guessArray.indexOf(keyPress) === -1 &&
        currentWord.indexOf(keyPress) >= 0
    ) {
        guessArray.push(keyPress);
    } else if (
        guessArray.indexOf(keyPress) === -1 &&
        currentWord.indexOf(keyPress) === -1
    ) {
        guessLeft -= 1;
        canvasDraw(guessLeft);
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

"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const guessInput = document.querySelector('.guess');
const messageText = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');


function printMassege(string) {
    messageText.textContent = string;
}


function gameWin() {
    guessInput.value = '';
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    scoreText.textContent = 20;
    document.querySelector('body').style.backgroundColor = 'green';
    let sound = new Audio();
    sound.src = "fc31ca320b0edd3.mp3";
    sound.play();
}

function loose() {
    printMassege('You loose the GAme😜');
    document.querySelector('.check').classList.toggle('disable'); //?
    let sound = new Audio();
    sound.src = 'b1314089d5efb25.mp3';
    sound.play();
}

function gameLogic() {
    const guess = Number(guessInput.value);
    if (!guess) {
        printMassege('No number!!!');
        return;
    }
    if (guess === number) {
        printMassege('Correct 👌');
        highScore = Math.max(Number(scoreText.textContent), highScore);
        highScoreText.textContent = highScore;
        gameWin();
        return;

    }
    if (guess > number) {
        printMassege('To high!');
        scoreText.textContent = --score;
        if (score === 0) {
            loose();
        }
        return;

    }
    if (guess < number) {
        printMassege('To low!');
        scoreText.textContent = --score;
        if (score === 0) {

            loose();
        }
        return;
    }
}



document.querySelector('.check').addEventListener('click', function () {
    gameLogic();
});

document.querySelector(".again").addEventListener('click', function () {
    scoreText.value = 20;
    score = 20;
    highScoreText.textContent = 0;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = 'black';
});
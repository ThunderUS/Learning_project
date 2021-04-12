'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const section0El = document.querySelector('.player--0');
const section1El = document.querySelector('.player--1');


// Global variable
const score = [0, 0];
let currentScore = 0;
let plaing = true;


// Zeroing of text content and preparing for the game.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Game functions:

//Genereting dice.
function generetingDice() {
    return Math.trunc(Math.random() * 6) + 1;
}

// Display images of rolling dice.
function displayImages(number) {
    //Repeat switch-case:
    switch (number) {
        case 1:
            diceEl.src = 'dice-1.png';
            break;
        case 2:
            diceEl.src = 'dice-2.png';
            break;
        case 3:
            diceEl.src = 'dice-3.png';
            break;
        case 4:
            diceEl.src = 'dice-4.png';
            break;
        case 5:
            diceEl.src = 'dice-5.png';
            break;
        case 6:
            diceEl.src = 'dice-6.png';
            break;
        default:
            console.error('Wrong number of generating');
    }
    //or shorter: 
    // ddiceEl.src = 'dice-${number}.png';
}

// Cheking dice 
function chekingDiceSwitch(number) {
    if (number !== 1) {
        // Add dise to current score
        currentScore += number;
        if (section0El.classList.contains('player--active')) {
            current0El.textContent = currentScore;
        } else {
            current1El.textContent = currentScore;
        }

    } else {
        switcher();
    }
}
// Switcher funcrion
function switcher() {
    currentScore = 0;
    if (section0El.classList.contains('player--active')) {
        current0El.textContent = 0;
    } else {
        current1El.textContent = 0;
    }
    section0El.classList.toggle('player--active');
    section1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
    if (plaing) {
        // 1. Generetig a random dice roll
        const dice = generetingDice();

        // 2. Display dice
        diceEl.classList.remove('hidden');
        displayImages(dice);

        // 3 Check for rolled 1: if true, switch to next player 
        chekingDiceSwitch(dice);
    }
});

// Holding dice score functionality
btnHold.addEventListener('click', () => {
    if (plaing) {
        if (section0El.classList.contains('player--active')) {
            score[0] += currentScore;
            score0El.textContent = score[0];
            if (score[0] >= 100) {
                plaing = false;
                currentScore = 0;
                section0El.classList.add('player--winner');

                return;
            }
        } else {
            score[1] += currentScore;
            score1El.textContent = score[1];
            if (score[1] >= 100) {
                plaing = false;
                currentScore = 0;
                section1El.classList.add('player--winner');

                return;
            }
        }

        switcher();
    }

});
btnNew.addEventListener('click', () => {
    plaing = true;
    score[0] = 0;
    score[1] = 0;
    currentScore = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    section0El.classList.add('player--active');
    section1El.classList.remove('player--active');
    section1El.classList.remove('player--winner');
    section0El.classList.remove('player--winner');
});
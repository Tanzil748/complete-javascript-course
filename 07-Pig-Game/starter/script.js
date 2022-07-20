'use strict';

//Selecting elements
const backgroundFirst = document.querySelector('.player--0');
const backgroundSecond = document.querySelector('.player--1');
const scoreFirst = document.querySelector('#score--0');
const scoreSecond = document.querySelector('#score--1');
const initialDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentFirst = document.querySelector('.current--0');
const currentSecond = document.querySelector('.current--1');

//starting conditions
scoreFirst.textContent = 0;
scoreSecond.textContent = 0;
initialDice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //switch at the end
  backgroundFirst.classList.toggle('player--active');
  backgroundSecond.classList.toggle('player--active');
};

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    initialDice.classList.remove('hidden');
    initialDice.src = `dice-${diceValue}.png`;

    if (diceValue !== 1) {
      //add dice to current score
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //move to next player
      switchPlayer();
    }
  }
});

//hold score functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      //current player wins!
      playing = false;
      initialDice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//resetting
btnNew.addEventListener('click', function () {
  // set all scores to 0
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreFirst.textContent = 0;
  scoreSecond.textContent = 0;
  currentFirst.textContent = 0;
  currentSecond.textContent = 0;
  backgroundFirst.classList.remove('player--winner');
  backgroundSecond.classList.remove('player--winner');
  backgroundFirst.classList.add('player--active'); //should be starting
  backgroundSecond.classList.remove('player--active');
});

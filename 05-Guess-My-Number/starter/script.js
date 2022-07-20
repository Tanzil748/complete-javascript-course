'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🥳';
// console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess && score > 0) {
    document.querySelector('.message').textContent = 'Not a valid number 🚨';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Correct number 👍';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Guess is too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Guess is too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Game Over! 🥵';
    document.querySelector('body').style.backgroundColor = '#ff0000';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20; //need this to reset score properly
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

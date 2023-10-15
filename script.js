'use strint';
let secretNumber = Math.round(Math.random() * 100);
let guessNumber;
let score = 10;
let bestResult = 0;

const displayMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.btn-again').addEventListener('click', function () {
  secretNumber = Math.round(Math.random() * 100);
  score = 10;
  displayMessage('Начни угадывать');
  document.querySelector('.score').textContent = score;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.input-num').value = '';
  document.querySelector('h1').style.color = 'rgba(250, 189, 23, 0.836)';
  document.querySelector('.ran-num').style.background = '#f16819';
  document.querySelector('.ran-num').style.width = '15%';
  document.querySelector('.ran-num').style.height = '7vh';
  document.querySelector('.right').style.color = 'yellow';
  document.querySelector('.ran-num').style.transform = 'translate(41vw, -4vh)';
});

document.querySelector('.btn-check').addEventListener('click', function () {
  guessNumber = Number(document.querySelector('.input-num').value);
  if (score != 0) {
    if (guessNumber === secretNumber) {
      displayMessage('Правильно!!!');
      document.querySelector('.question').textContent = guessNumber;
      document.querySelector('h1').style.color = 'green';
      document.querySelector('.right').style.color = 'green';
      document.querySelector('.ran-num').style.background = 'green';
      document.querySelector('.ran-num').style.width = '30%';
      document.querySelector('.ran-num').style.height = '10vh';
      document.querySelector('.ran-num').style.transform =
        'translate(34vw, -5vh)';

      if (bestResult < score) {
        bestResult = score;
        document.querySelector('.result').textContent = bestResult;
      }
    } else {
      displayMessage(secretNumber > guessNumber ? 'Больше' : 'Меньше');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('Game Over');
  }
});

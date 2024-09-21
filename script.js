'use strict';
// document.querySelector('.message').textContent ='correct'
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10
// document.querySelector('.guess').value = 23
const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0

function displayMessage(message){
    document.querySelector('.message').textContent = message
}

/////////////////////// guess btn ///////////////
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //////////////// no  num send /////////////////
  if (!guess) {
     displayMessage('No Number !!!!');
    
  } 
  /////////////correct guess /////////////
  else if (guess === secretNum) {
    displayMessage( 'WoW Correct Number :)');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    if (score > highScore){
    document.querySelector('.highscore').textContent = score
    highScore = score
    }
    ////////////////// wrong guess ///////////////////
  } else if (guess !== secretNum) {
    let message
    secretNum > guess ? message = 'Too Low Number!' : message = 'Too High Number!'
    displayMessage( message);
    score > 0 ? score-- : displayMessage(' You Lost The Game ');
    document.querySelector('.score').textContent = score;
  } 
});



////////////// again btn//////////////////////
document.querySelector('.again').addEventListener('click', function (){
    score = 20 
    document.querySelector('.score').textContent = score
    displayMessage(' Start guessing... ')
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = 
    document.querySelector('.number').style.width = '15rem';
})
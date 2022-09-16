import './style.css';
import addScore from './modules/addScore.js';
import fetchScore from './modules/fetchScore.js';

fetchScore();

const form = document.querySelector('#form');
const inputName = document.querySelector('#user-name');
const inputScore = document.querySelector('#user-score');
const refreshBtn = document.querySelector('.refresh-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addScore(inputName.value, inputScore.value);
  form.reset();
});

refreshBtn.addEventListener('click', () => {
  fetchScore();
});

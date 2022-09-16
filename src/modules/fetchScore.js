import { addScoreURL } from './url.js';

function scoreTable(scores) {
  let output = '';
  scores.forEach((user) => {
    output += `<li>${user.user}: ${user.score}</li>`;
  });
  document.querySelector('.score-table').innerHTML = output;
}

// to fetch added score from the API
const fetchScore = async () => {
  await fetch(addScoreURL)
    .then((response) => response.json())
    .then((json) => scoreTable(json.result));
};

export default fetchScore;
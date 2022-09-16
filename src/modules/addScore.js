import { addScoreURL } from './url.js';
import fetchScore from './fetchScore.js';

// To add score to the API
const addScore = async (user, score) => {
  await fetch(addScoreURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      fetchScore();
    })
    .catch((error) => error);
};

export default addScore;

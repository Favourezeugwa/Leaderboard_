const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameID = 'jRy2HePk1Q0kgeR3yKfj';
const addScoreURL = `${baseURL + gameID}/scores/`;

// To create the game ID
const createGame = async () => {
  await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Favour game',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => (json));
};

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

// To add score to the API
const addScore = async (user, score) => {
  await fetch(addScoreURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user, score,
    }),
  }).then((response) => response.json()).then((json) => {
    fetchScore();
  }).catch((error) => (error));
};

export { addScore, fetchScore };

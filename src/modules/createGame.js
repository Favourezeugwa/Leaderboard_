import baseURL from './url.js';

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
    .then((json) => json);
};

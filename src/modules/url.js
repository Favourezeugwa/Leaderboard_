const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameID = 'jRy2HePk1Q0kgeR3yKfj';
const addScoreURL = `${baseURL + gameID}/scores/`;

export { addScoreURL, baseURL, gameID };
const scores = [
  { name: 'Favour', score: 100 },
  { name: 'Laurel', score: 80 },
  { name: 'Hillary', score: 90 },
  { name: 'Caris', score: 40 },
  { name: 'Jason', score: 70 },
  { name: 'Ryan', score: 98 },
];

function scoreTable() {
  let output = '';
  scores.forEach((user) => {
    output += `<li>${user.name}: ${user.score}</li>`;
  });
  document.querySelector('.score-table').innerHTML = output;
};


export default scoreTable;

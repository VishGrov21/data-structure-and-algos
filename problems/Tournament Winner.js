function tournamentWinner(competitions, results) {
  // Write your code here.
  let bestTeam = "";
  const winnersObj = {};
  competitions.forEach((teamsArr, index) => {
    const [home, away] = teamsArr;
    if (results[index]) {
      winnersObj[home] = winnersObj[home] ? winnersObj[home] + 3 : 3;
      bestTeam = winnersObj[bestTeam] > winnersObj[home] ? bestTeam : home;
    } else {
      winnersObj[away] = winnersObj[away] ? winnersObj[away] + 3 : 3;
      bestTeam = winnersObj[bestTeam] > winnersObj[away] ? bestTeam : away;
    }
  });
  return bestTeam;
}

// O(N) Time and O(K) Space
// N -> Number of competitions and K is number of different teams in competition

function tournamentWinner2(competitions, results) {
  // Write your code here.
  let bestTeam = "";
  let scoresObj = { [bestTeam]: 0 };
  for (let compArrIdx in competitions) {
    const result = results[compArrIdx];
    const [home, away] = competitions[compArrIdx];
    const winningTeam = result ? home : away;
    if (!(winningTeam in scoresObj)) {
      scoresObj[winningTeam] = 0;
    }
    scoresObj[winningTeam] += 3;
    bestTeam = scoresObj[winningTeam] > scoresObj[bestTeam] ? winningTeam : bestTeam;
  }
  return bestTeam;
}

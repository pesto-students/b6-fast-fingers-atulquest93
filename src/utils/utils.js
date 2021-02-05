const getDifficultyFactor = (level) => {
  switch (level) {
    case "Easy":
      return 1;
    case "Medium":
      return 1.5;
    case "Hard":
      return 2;
    default:
      return NaN;
  }
};

const getLevel = (difficultyFactor) => {
  if (difficultyFactor < 1.5) {
    return "Easy";
  } else if (difficultyFactor >= 1.5 && difficultyFactor < 2) {
    return "Medium";
  } else {
    return "Hard";
  }
};

const getTimerValue = (wordLength, difficultyFactor) => {
  return Math.ceil(wordLength / difficultyFactor);
};

const getGameCount = () => {
  const val = localStorage.getItem("gamesObj");
  return val ? JSON.parse(val).length : 0;
};

const saveGameObj = (gameCount, score) => {
  let games = JSON.parse(localStorage.getItem("gamesObj"));
  if (games) {
    games.push({
      gameCount,
      score,
    });
  } else {
    games = [
      {
        gameCount,
        score,
      },
    ];
  }

  localStorage.setItem("gamesObj", JSON.stringify(games));
};

const getListOfScores = () => {
  const val = localStorage.getItem("gamesObj");
  return val ? JSON.parse(val) : [];
};

const getHighestScoreObj = () => {
  const scores = getListOfScores();
  return scores;
};

export {
  getDifficultyFactor,
  getTimerValue,
  getLevel,
  getGameCount,
  saveGameObj,
  getListOfScores,
};

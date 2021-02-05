import React from "react";
import "./css/ScoreBoard.css";
import { getListOfScores } from "./../../../utils/utils";

const ScoreBoard = () => {
  const gamesObj = getListOfScores();
  const scoresHTML = gamesObj.map(({ gameCount, score }) => {
    return (
      <div className="scores" key={gameCount}>{`Game ${gameCount} : ${
        score / 1000
      }`}</div>
    );
  });

  return (
    <div className="scoreboard-container">
      <h1 className="scoreboard-heading">SCORE BOARD</h1>
      {scoresHTML}
    </div>
  );
};

export default ScoreBoard;

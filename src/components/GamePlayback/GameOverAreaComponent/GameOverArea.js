import React from "react";
import { getGameCount } from "../../../utils/utils";
import "./css/GameOverArea.css";

const GameOverArea = ({ score, setGameStatus }) => {
  return (
    <div className="container">
      <span className="heading">Score : Game {getGameCount()}</span>
      <span className="score">Score : {score / 1000}</span>
      <span className="try-again" onClick={() => setGameStatus("PLAYING")}>
        Play Again
      </span>
    </div>
  );
};

export default GameOverArea;

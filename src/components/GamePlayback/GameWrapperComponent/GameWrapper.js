import React from "react";
import Header from "../HeaderComponent/Header";
import Menu from "../MenuComponent/Menu";
import GameContainer from "../GameContainerComponent/GameContainer";
import GameOverArea from "../GameOverAreaComponent/GameOverArea";
import "./css/GameContainer.css";
import { getGameCount, saveGameObj } from "../../../utils/utils";

const GameWrapper = ({
  userName,
  level,
  setLevel,
  gameStatus,
  setGameStatus,
  score,
  setScore,
  gameCount,
  setGameCount,
}) => {
  let middleSection;

  if (gameStatus === "STOPPED") {
    saveGameObj(getGameCount() + 1, score);
    middleSection = (
      <GameOverArea score={score} setGameStatus={setGameStatus} />
    );
  } else {
    middleSection = (
      <GameContainer
        level={level}
        setLevel={setLevel}
        setGameStatus={setGameStatus}
        score={score}
        setScore={setScore}
        gameCount={gameCount}
        setGameCount={setGameCount}
      />
    );
  }

  return (
    <div className="game-container">
      <Header userName={userName} level={level} />
      {middleSection}
      <Menu gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </div>
  );
};

export default GameWrapper;

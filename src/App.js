import React, { useState } from "react";
import Home from "./components/Homepage/HomeComponent/Home";
import "./css/App.css";
import GameWrapper from "./components/GamePlayback/GameWrapperComponent/GameWrapper";
import { getGameCount } from "./utils/utils";

function App() {
  const [gameStatus, setGameStatus] = useState("STARTING");
  const [userName, setUserName] = useState("");
  const [level, setLevel] = useState("Easy");
  const [score, setScore] = useState(0);
  const [gameCount, setGameCount] = useState(getGameCount());

  let componentToRender;

  if (gameStatus === "STARTING") {
    componentToRender = (
      <Home
        userName={userName}
        setUserName={setUserName}
        level={level}
        setLevel={setLevel}
        setGameStatus={setGameStatus}
        gameCount={gameCount}
        setGameCount={setGameCount}
      />
    );
  } else {
    componentToRender = (
      <GameWrapper
        userName={userName}
        level={level}
        setLevel={setLevel}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        score={score}
        setScore={setScore}
        gameCount={gameCount}
        setGameCount={setGameCount}
      />
    );
  }

  return <div className="App">{componentToRender}</div>;
}

export default App;

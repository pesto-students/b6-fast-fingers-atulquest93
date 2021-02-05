import React, { useState, useEffect } from "react";
import Timer from "../TimerComponent/Timer";
import { fetchRandomWordForLevel } from "../../../utils/dictionary";
import { getDifficultyFactor, getLevel } from "../../../utils/utils";
import ScoreBoard from "../ScoreboardComponent/ScoreBoard";
import "./css/GameArea.css";

const GameContainer = ({
  level,
  setLevel,
  setGameStatus,
  score,
  setScore,
  gameCount,
  setGameCount,
}) => {
  const [randomWord, setRandomWord] = useState(fetchRandomWordForLevel(level));
  const [typedWord, setTypedWord] = useState("");
  const [difficultyFactor, setDifficultyFactor] = useState(
    getDifficultyFactor(level)
  );

  useEffect(() => {
    
    typedWord.length <= randomWord.length && typedWord.split("").forEach((letter, index) => {
      const randomLetter = randomWord[index];
      const span = document.getElementById(index.toString());

      if (randomLetter === letter) {
        span.classList.add("green");
      } else {
        span.classList.add("blue");
      }
    });

    if (typedWord === randomWord) {
      removeClasses();
      setTypedWord("");
      setRandomWord(fetchRandomWordForLevel(level));
      setDifficultyFactor(difficultyFactor + 0.01);
      setLevel(getLevel(difficultyFactor));
    }

  }, [typedWord]);

  const removeClasses = () => {
    randomWord.split("").forEach((letter, index) => {
      const span = document.getElementById(index.toString());
      span.classList.remove("green");
      span.classList.remove("blue");
    });
  };

  const getRandomWord = () => {
    return randomWord
      .toUpperCase()
      .split("")
      .map((letter, index) => (
        <span key={index} id={index}>
          {letter}
        </span>
      ));
  };

  return (
    <div className="game-area-container">
      <ScoreBoard />
      <div>
        <Timer
          difficultyFactor={difficultyFactor}
          randomWord={randomWord}
          setGameStatus={setGameStatus}
          score={score}
          setScore={setScore}
          gameCount={gameCount}
          setGameCount={setGameCount}
        />
        <section className="play-area">
          <div className="random-word">{getRandomWord()}</div>
          <input
            type="text"
            value={typedWord}
            onChange={(e) => setTypedWord(e.target.value.toUpperCase())}
            id="input-box"
          />
        </section>
      </div>
      <div />
    </div>
  );
};

export default GameContainer;

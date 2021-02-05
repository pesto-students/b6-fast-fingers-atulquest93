import React, { useEffect, useRef, useState } from "react";
import { getTimerValue, saveGameCount } from "../../../utils/utils";
import "./css/Timer.css";

const Timer = ({
  difficultyFactor,
  randomWord,
  setGameStatus,
  score,
  setScore,
  setGameCount,
  gameCount,
}) => {
  const [timerValue, setTimerValue] = useState(
    getTimerValue(randomWord.length, difficultyFactor) * 1000
  );

  const totalDuration =
    getTimerValue(randomWord.length, difficultyFactor) * 1000;

  const timerId = useRef();
  const timer = () => {
    if (timerValue > 0) {
      setTimerValue(timerValue - 100);
    } else if (timerValue === 0) {
      setGameStatus("STOPPED");
    }
  };

  useEffect(() => {
    timerId.current = setTimeout(() => timer(), 100);
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [timerValue]);

  useEffect(() => {
    setScore(score + (totalDuration - timerValue));
    setTimerValue(getTimerValue(randomWord.length, difficultyFactor) * 1000);
  }, [difficultyFactor, randomWord]);

  const formatTime = (timerValue) => {
    const seconds = Math.floor(timerValue / 1000);
    const milliSeconds = timerValue % 1000;

    return {
      seconds,
      milliSeconds,
    };
  };

  const { seconds, milliSeconds } = formatTime(timerValue);

  return <div className="timer">{`${seconds}:${milliSeconds}`}</div>;
};

export default Timer;

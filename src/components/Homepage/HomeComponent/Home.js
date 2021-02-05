import React from "react";
import DropDown from "../DropdownComponent/DropDown";
import keyboardIcon from "../../../assets/images/keyboard-icon.svg";
import playIcon from "../../../assets/images/icon-awesome-play.svg";
import "./css/Home.css";
import {
  areDictionariesAddedToLocalStorage,
  loadDictionariesToLocalStorage,
} from "../../../utils/dictionary";
import { saveGameCount } from "../../../utils/utils";

const Home = ({
  userName,
  setUserName,
  level,
  setLevel,
  setGameStatus,
  gameCount,
  setGameCount,
}) => {
  const startGame = () => {
    if (userName.length !== 0) {
      if (!areDictionariesAddedToLocalStorage()) {
        loadDictionariesToLocalStorage();
      }
      setGameStatus("PLAYING");
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="home-container">
      <section className="top-area">
        <img src={keyboardIcon} alt="Keyboard" className="keyboard-icon" />
        <section className="title-section">
          <h1 className="heading">fast fingers</h1>
          <h3 className="tagline">the ultimate typing game</h3>
        </section>
      </section>
      <section className="home-user-input-area">
        
        <input
          type="text"
          placeholder={"TYPE YOUR NAME"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <DropDown
          className="dropdown"
          options={["Easy", "Medium", "Hard"]}
          level={level}
          setLevel={setLevel}
        />
      </section>
      <section className="home-start-game-area">
        <img className="play-icon" src={playIcon} alt="Play Button" />
        <div className="start-game" onClick={() => startGame()}>
          START GAME
        </div>
      </section>
    </div>
  );
};

export default Home;

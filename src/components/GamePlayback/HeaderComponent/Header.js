import React from "react";
import Person from "../../../assets/images/icon-material-person.svg";
import GamePad from "../../../assets/images/icon-awesome-gamepad.svg";
import "./css/Header.css";

const Header = ({ userName, level }) => {
  return (
    <div className="header-container">
      <section className="game-details">
        <div className="player-name-section">
          <img src={Person} alt="" />
          <p>PLAYER : {userName}</p>
        </div>
        <div className="player-level-section">
          <img src={GamePad} alt="" />
          <p>LEVEL : {level}</p>
        </div>
      </section>

      <h1 className="heading">fast fingers</h1>
    </div>
  );
};

export default Header;

import React from "react";
import "./css/Menu.css";
import HomeIcon from "../../../assets/images/icon-awesome-home.svg";
import StopIcon from "../../../assets/images/icon-metro-cross.svg";

const Menu = ({ gameStatus, setGameStatus }) => {
  const quit = (
    <div className="quit-section" onClick={() => setGameStatus("STARTING")}>
      <img src={StopIcon} alt="" />
      <p>QUIT</p>
    </div>
  );

  const stop = (
    <div className="quit-section" onClick={() => setGameStatus("STOPPED")}>
      <img src={StopIcon} alt="" />
      <p>STOP GAME</p>
    </div>
  );

  return (
    <div className="menu-area">
      <section className="action-area">
        {gameStatus === "STOPPED" ? quit : stop}
      </section>

      <section className="go-home-area">
        <img src={HomeIcon} alt="" onClick={() => setGameStatus("STARTING")} />
      </section>
    </div>
  );
};

export default Menu;

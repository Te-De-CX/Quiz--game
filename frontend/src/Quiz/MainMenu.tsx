import React from "react";
import { Link } from "react-router-dom";

const MainMenu: React.FC = () => {
  return (
    <div className="main-menu">
      <h2>Quiz Game</h2>
      <p>Pick a game:</p>
      <ul>
        <li>
          <Link to="/html">HTML Quiz</Link>
        </li>
        <li>
          <Link to="/css">CSS Quiz</Link>
        </li>
        <li>
          <Link to="/javascript">JavaScript Quiz</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
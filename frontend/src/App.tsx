import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./Quiz/MainMenu";
import HtmlQuiz from "./Quiz/HtmlQuiz";
import CssQuiz from "./Quiz/CssQuiz";
import JsQuiz from "./Quiz/JsQuiz";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/html" element={<HtmlQuiz />} />
        <Route path="/css" element={<CssQuiz />} />
        <Route path="/javascript" element={<JsQuiz />} />
      </Routes>
    </Router>
  );
};

export default App;
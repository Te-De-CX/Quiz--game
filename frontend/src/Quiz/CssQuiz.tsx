import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { css } from "../libs/Questions"; // Replace with your questions data

const CssQuiz: React.FC = () => {
  const [scores, setScores] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const handleOptionSelect = (index: number, optionIndex: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const checkAnswer = () => {
    let score = 0;
    css.forEach((quiz, index) => {
      if (selectedOptions[index] === quiz.correct) {
        score++;
      }
    });
    setScores(score);
  };

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left" && currentQuestion < css.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (direction === "right" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  return (
    <div className="quiz-container">
      <div className="quiz-card-container" {...swipeHandlers}>
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="quiz-card"
        >
          <div className="glass-background">
            <h3>{css[currentQuestion].question}</h3>
            {css[currentQuestion].options.map((option, i) => (
              <div
                key={i}
                className="option"
                onClick={() => handleOptionSelect(currentQuestion, i)}
              >
                <div className="custom-checkbox">
                  {selectedOptions[currentQuestion] === i && (
                    <FaCheckCircle className="checkbox-icon" />
                  )}
                </div>
                <label>{option}</label>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={() => handleSwipe("right")}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          onClick={() => handleSwipe("left")}
          disabled={currentQuestion === css.length - 1}
        >
          Next
        </button>
      </div>

      <button onClick={checkAnswer} className="submit-button">
        Submit
      </button>
      <h1 className="score">Scores: {scores}</h1>
    </div>
  );
};

export default CssQuiz;
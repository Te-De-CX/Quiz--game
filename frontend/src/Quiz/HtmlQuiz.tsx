import React from "react";

const HtmlQuiz : React.FC = () => {

    const [scores, setScores] = React.useState(0);

    interface Quiz {
        question: string;
        options: string[];
        correct: number;
    }

    const quizes : Quiz[] = [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
            correct: 0
        },
        {
            question: "Who is making the Web standards?",
            options: ["Mozilla", "Microsoft", "The World Wide Web Consortium"],
            correct: 2
        },
        {
            question: "Choose the correct HTML element for the largest heading:",
            options: ["<h1>", "<h6>", "<heading>"],
            correct: 0
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: ["<break>", "<lb>", "<br>"],
            correct: 2
        },
        {
            question: "What is the correct HTML for adding a background color?",
            options: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bg='yellow'>"],
            correct: 0
        }
    ];

    const checkAnswer = () => {
        let score = 0;
        quizes.forEach((quiz, index) => {
            const selectedOption = (document.querySelector(`input[name=quiz${index}]:checked`) as HTMLInputElement);
            if(selectedOption !== null && parseInt(selectedOption.value) === quiz.correct) {
                score++;
            }
        });
        setScores(score);
    }

    return (
        <div>
            {
                quizes.map((quiz, index) => (
                    <div key={index}>
                        <h3>{quiz.question}</h3>
                        {
                            quiz.options.map((option, i) => (
                                <div key={i}>
                                    <input type="radio" name={`quiz${index}`} value={i} />
                                    <label>{option}</label>
                                </div>
                            ))
                        }
                        
                    </div>
                ))
            }
            <button onClick={()=> checkAnswer()}>Submit</button>
            <h1>Scores {scores}</h1>
        </div>
    );
};
export default HtmlQuiz;
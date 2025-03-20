import { Quiz } from "../types/types";

export const html: Quiz[] = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
      correct: 0,
    },
    {
      question: "Who is making the Web standards?",
      options: ["Mozilla", "Microsoft", "The World Wide Web Consortium"],
      correct: 2,
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      options: ["<h1>", "<h6>", "<heading>"],
      correct: 0,
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<lb>", "<br>"],
      correct: 2,
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bg='yellow'>"],
      correct: 0,
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "font"],
      correct: 1,
    },
    {
      question: "Which HTML element is used to define a table row?",
      options: ["<tr>", "<td>", "<th>"],
      correct: 0,
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        "<a href='http://example.com'>Example</a>",
        "<a url='http://example.com'>Example</a>",
        "<a>http://example.com</a>",
      ],
      correct: 0,
    },
    {
      question: "Which HTML element is used to define the structure of an HTML document?",
      options: ["<head>", "<body>", "<html>"],
      correct: 2,
    },
    {
      question: "Which HTML element is used to define a list item?",
      options: ["<li>", "<ul>", "<ol>"],
      correct: 0,
    },
    {
      question: "Which HTML element is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>"],
      correct: 0,
    },
    {
      question: "Which HTML element is used to define a paragraph?",
      options: ["<p>", "<para>", "<paragraph>"],
      correct: 0,
    },
    {
      question: "Which HTML element is used to define a footer for a document or section?",
      options: ["<footer>", "<section>", "<div>"],
      correct: 0,
    },
    {
      question: "Which HTML element is used to define a navigation menu?",
      options: ["<nav>", "<menu>", "<ul>"],
      correct: 0,
    },
    {
      question: "Which HTML element is used to define a header for a document or section?",
      options: ["<header>", "<head>", "<h1>"],
      correct: 0,
    },
  ];

  export const css: Quiz[] = [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["color", "text-color", "font-color"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to change the background color of an element?",
      options: ["background-color", "bgcolor", "color"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to control the space between elements?",
      options: ["margin", "padding", "spacing"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to control the size of the text?",
      options: ["font-size", "text-size", "size"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to make text bold?",
      options: ["font-weight", "bold", "text-bold"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to add shadows to elements?",
      options: ["box-shadow", "shadow", "element-shadow"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to control the layout of elements?",
      options: ["display", "layout", "position"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to create rounded corners?",
      options: ["border-radius", "corner-radius", "rounded"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to control the transparency of an element?",
      options: ["opacity", "transparency", "visibility"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to align text horizontally?",
      options: ["text-align", "align", "horizontal-align"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to add space inside an element?",
      options: ["padding", "margin", "spacing"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to control the order of elements in a flex container?",
      options: ["order", "flex-order", "z-index"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to create a grid layout?",
      options: ["display: grid", "grid", "layout: grid"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to create animations?",
      options: ["animation", "transition", "keyframes"],
      correct: 0,
    },
  ];

export const js: Quiz[] = [
  {
    question: "What is JavaScript?",
    options: ["A programming language", "A markup language", "A styling language"],
    correct: 0,
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "Both var and let"],
    correct: 2,
  },
  {
    question: "What is the result of `typeof null` in JavaScript?",
    options: ["object", "null", "undefined"],
    correct: 0,
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()"],
    correct: 0,
  },
  {
    question: "What is the output of `console.log(2 + '2')`?",
    options: ["4", "22", "NaN"],
    correct: 1,
  },
  {
    question: "Which function is used to parse a string to an integer?",
    options: ["parseInt()", "parseFloat()", "Number()"],
    correct: 0,
  },
  {
    question: "What is the purpose of the `this` keyword in JavaScript?",
    options: ["Refers to the current object", "Refers to the parent object", "Refers to the global object"],
    correct: 0,
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "shift()", "splice()"],
    correct: 0,
  },
  {
    question: "What is the output of `console.log(typeof [])`?",
    options: ["object", "array", "undefined"],
    correct: 0,
  },
  {
    question: "Which operator is used to compare both value and type in JavaScript?",
    options: ["===", "==", "="],
    correct: 0,
  },
  {
    question: "What is the purpose of the `addEventListener` method?",
    options: ["To attach an event handler", "To create a new event", "To remove an event"],
    correct: 0,
  },
  {
    question: "What is the output of `console.log(0 == false)`?",
    options: ["true", "false", "undefined"],
    correct: 0,
  },
  {
    question: "Which method is used to convert an object to a JSON string?",
    options: ["JSON.stringify()", "JSON.parse()", "toString()"],
    correct: 0,
  },
  {
    question: "What is the purpose of the `map()` method in JavaScript?",
    options: ["To create a new array by applying a function to each element", "To filter elements in an array", "To sort elements in an array"],
    correct: 0,
  },
  {
    question: "What is the output of `console.log(typeof NaN)`?",
    options: ["number", "NaN", "undefined"],
    correct: 0,
  },
];


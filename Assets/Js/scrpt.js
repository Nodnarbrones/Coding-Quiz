const startButton = document.getElementById('startButton');
const timer = document.getElementbById('timer');

startButton.addEventListener('click', startQuiz);


function startQuiz() {
    console.log('Yep its working');
    // startButton.classList.add('hide');
}




var quizQuestions = [
    {q: "What is the syntax for a strict equality?",
    choices: ["x!=y", "x===y", "x=y"],
    answer: "x===y",
},
    {q: "Inside which HTML element do you put the JavaScript?",
    choices: ["<Js>", "<JavaScript>", "<script>"],
    answer: "<script>"
},  
    {q: "How do you add a comment in JavaScript?",
    choices: ["<!--This is a comment-->", "#This is a comment#","//This is a comment"],
    answer: "//This is a comment",
},
    {q: "The data type '25' is considered a number",
    choices: ["True", "False"],
    answer: "False",
},
    {q: "Which of the Following is a boolean?",
    choices: ["true", "25","'true'"],
    answer: "true",
},
];


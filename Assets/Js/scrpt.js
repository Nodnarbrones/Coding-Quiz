

const startButton = document.getElementById('startButton');
const timer = document.querySelector('.timer');
const timerDispaly = document.querySelector('#timerDisplay');
const startPage = document.querySelector('.startPage');
const questionsDiv = document.querySelector('#quizQuestions');
const questionTitle = document.querySelector('#questionTitle');
const answerChoices = document.querySelector('#answerChoices');
const endPage = document.querySelector('#endPage');
const finalScore = document.querySelector('#finalScore');
const submit = document.querySelector('#submit')
const userName = document.querySelector('#userName');
let questionIndex = 0
let timeLeft = 60
let timerState;




function startQuiz() {
    console.log('Yep its working');

    startPage.setAttribute('class','hide');
    timerDispaly.textContent=timeLeft;
    timerState=setInterval(function(){
        timeLeft --;
        timerDispaly.textContent=timeLeft;
        if(timeLeft <= 0){console.log("Game Over");
        clearInterval(timerState);
    };
    },1000);

    questionsDiv.removeAttribute('class')
// call cycle questions function
    cycleQuestions();
}


function cycleQuestions() {
    let currentQ = quizQuestions[questionIndex];
    questionTitle.textContent = currentQ.q;

    currentQ.choices.forEach(function(item){
        let choiceBtn = document.createElement('button');
        choiceBtn.textContent = item;
        choiceBtn.setAttribute('value',item);
        choiceBtn.onclick = validateAnswer
        // add click even here to evaluate if right or wrong
        answerChoices.appendChild(choiceBtn);
    })

}

function validateAnswer(){
    if (this.value === quizQuestions[questionIndex].answer) {
        console.log("correct")

    } else {
        console.log("wrong");
        timeLeft = timeLeft -10;
        timerDispaly.textContent = timeLeft
    }
    questionIndex ++;
    answerChoices.innerHTML = "";
    if (questionIndex === quizQuestions.length){
        //insert end quiz function here
    } else {cycleQuestions()};
    
};

//end quiz function  calls clear interval on timer state that hides question div and unhides end screen


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

startButton.addEventListener('click',startQuiz);
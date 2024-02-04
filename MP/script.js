const questions = [
    {
        question:"What is full-form of HTML ?",
        answer:[
            {text:"Hypertrail Markup Language", correct:false},
            {text:"Hypertext Markup Language", correct:true},
            {text:"Hypertrend Makeup Language", correct:false},
            {text:"Hypertext Mail Language", correct:false},
        ]
    },
    {
        question:"Which one is the suitable storage device ?",
        answer:[
            {text:"Keyboard", correct:false},
            {text:"Mouse", correct:false},
            {text:"PenDrive", correct:true},
            {text:"Monitor", correct:false},
        ]
    },
    {
        question:"What is the CPU's section that interprets, selects, and also sees to a program instructions execution?",
        answer:[
            {text:"Register Unit", correct:false},
            {text:"Control Unit", correct:true},
            {text:"ALU", correct:false},
            {text:"Memory", correct:false},
        
        ]
    },
    {
        question:" A list of various coded instructions is known as: ?",
        answer:[
            {text:"Flowchart", correct:false},
            {text:"Utility programs", correct:false},
            {text:" Algorithm", correct:false},
            {text:"Computer program", correct:true},
        ]
    },
    {
        question:"The Two kinds of main memory are : ?",
        answer:[
            {text:"CD & DVD", correct:false},
            {text:"RAM & ROM", correct:true},
            {text:"Primary and Secondary", correct:false},
            {text:"None Of These", correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="NEXT";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1 ;
    questionElement.innerHTML =questionNo +". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }

}
function selectAnswer(e){
    const selectedBtn = e.target ;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
        
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    }); 
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";s

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();
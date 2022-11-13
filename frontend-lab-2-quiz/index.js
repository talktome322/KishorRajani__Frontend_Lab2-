//Defining questions, options and correct answer
let question_bank=[
    {
        q_question : "Where is Amsterdam located?",
        answers : {
            choice_0 : "Asia",
            choice_1 : "Africa",
            choice_2 : "Europe",
            choice_3 : "South America"
        },
        correct_answer : "Europe"
    },
    {
        q_question : "Where was pizza invented?",
        answers :{
            choice_0 : "Paris",
            choice_1 : "Brussels",
            choice_2 : "Rome",
            choice_3 : "Naples"
        },
       correct_answer : "Naples"
    },
    {
        q_question : "Where is the headquarter of the European Union located?",
        answers : {
            choice_0 : "Geneva",
            choice_1 : "Budapest",
            choice_2 : "Venice",
            choice_3 : "Brussels"
        },
        correct_answer : "Brussels"     
    }
]

//Extracting html tags from document
let quiz_question=document.querySelector("#question");
let button0=document.querySelector("#btn0");
let button1=document.querySelector("#btn1");
let button2=document.querySelector("#btn2");
let button3=document.querySelector("#btn3");
let option_0=document.querySelector("#choice0");
let option_1=document.querySelector("#choice1");
let option_2=document.querySelector("#choice2");
let option_3=document.querySelector("#choice3");
let quiz_progress=document.querySelector("#progress");
let quiz=document.querySelector("#quiz");

let question_bank_index=0;
let score=0;

//Function to display questions and choices from question bank
function showQuestion(){
    showProgress();
    if (question_bank_index<question_bank.length){
        const curr_question=question_bank[question_bank_index];
        quiz_question.innerText=curr_question.q_question;
        option_0.innerText=curr_question.answers.choice_0;
        option_1.innerText=curr_question.answers.choice_1;
        option_2.innerText=curr_question.answers.choice_2;
        option_3.innerText=curr_question.answers.choice_3;
    }
    else{
        showFinalScore();
    }
}

//FUnction to show quiz progress
function showProgress(){
    var question_number=question_bank_index+1;
    quiz_progress.innerHTML="Question "+question_number+" of "+question_bank.length;
}

//Function to calculate score against each question
function calculateScore(clickedOption){
    if (clickedOption.innerText==question_bank[question_bank_index].correct_answer){
        score++;
        question_bank_index+=1;
        showQuestion();
    }
    else{
        question_bank_index+=1;
        showQuestion();
    }
}

//Function to display final score and percentage
function showFinalScore(){
    var percentage=Math.ceil((score/question_bank.length)*100);

    quiz.innerHTML="Score is "+score+ " out of "+question_bank.length+"<br/>" +"Percentage is "+ percentage + "%";
    quiz.style.fontSize = '2em';
    quiz.style.fontStyle = 'bold';
    quiz.style.height = '100%';
    quiz.style.justifyContent= 'center';
    quiz.style.alignItems='center';
    quiz.style.display='grid';   
}

//Start of program
showQuestion();

button0.addEventListener( 'click', function (){
    calculateScore(option_0)
} );
button1.addEventListener( 'click', function (){
    calculateScore(option_1)
} );
button2.addEventListener( 'click', function (){
    calculateScore(option_2)
} );
button3.addEventListener( 'click', function (){
    calculateScore(option_3)
} );

//Program end
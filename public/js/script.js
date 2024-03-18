const questions = 
[
    {
      question: "What does 'DOM' stand for in JavaScript?",
      options: [
        { text : "Document Object Model", "correct": true },
        { text : "Data Object Model", "correct": false },
        { text : "Dynamic Output Mechanism", "correct": false },
        { text : "Document Order Manager", "correct": false },
      ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            { text: "let", "correct": false },
            { text: "const", "correct": false },
            { text: "var", "correct": true },
            { text: "variable", "correct": false }
        ]
    },

    {
        question: "What is the result of the following expression: 3 + '3'?",
        options: [
          { text: "33", "correct": true },
          { text: "6", "correct": false },
          { text: "9", "correct": false },
          { text: "Error", "correct": false }
        ]
      },
      {
        question: "What is the purpose of the 'let' keyword in JavaScript?",
        options: [
          { text: "To declare a block-scoped variable", "correct": true },
          { text: "To declare a constant variable", "correct": false },
          { text: "To declare a global variable", "correct": false },
          { text: "To declare a function", "correct": false }
        ]
      },
      {
        question: "How do you check the type of a variable in JavaScript?",
        options: [
          { text: "typeof", "correct": true },
          { text: "type", "correct": false },
          { text: "varType", "correct": false },
          { text: "typeOf", "correct": false }
        ]
      },
      {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
          { text: "Refers to the current object", "correct": true },
          { text: "Refers to the previous object", "correct": false },
          { text: "Refers to the parent object", "correct": false },
          { text: "Refers to a global object", "correct": false }
        ]
      },
      {
        question: "How do you add a comment in JavaScript?",
        options: [
          { text: "// This is a comment", "correct": true },
          { text: "/* This is a comment */", "correct": false },
          { text: "# This is a comment", "correct": false },
          { text: "-- This is a comment", "correct": false }
        ]
      },
      {
        question: "What is the result of the following expression: '5' == 5?",
        options: [
          { text: "true", "correct": true },
          { text: "false", "correct": false },
          { text: "undefined", "correct": false },
          { text: "Error", "correct": false }
        ]
      },
      {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: [
          { text: "pop()", "correct": true },
          { text: "remove()", "correct": false },
          { text: "delete()", "correct": false },
          { text: "shift()", "correct": false }
        ]
      },
      {
        question: "What is the purpose of the 'async' keyword in JavaScript?",
        options: [
          { text: "To indicate that a function returns a promise", "correct": true },
          { text: "To make a function asynchronous", "correct": false },
          { text: "To handle exceptions in a function", "correct": false },
          { text: "To declare an asynchronous variable", "correct": false }
        ]
      },
      {
        question: "How do you round a number to the nearest integer in JavaScript?",
        options: [
          { text: "Math.round()", "correct": true },
          { text: "Math.floor()", "correct": false },
          { text: "Math.ceil()", "correct": false },
          { text: "round()", "correct": false }
        ]
      },
      {
        question: "What is the purpose of the 'localStorage' object in JavaScript?",
        options: [
          { text: "To store key-value pairs locally in the browser", "correct": true },
          { text: "To store data on a server", "correct": false },
          { text: "To store session data", "correct": false },
          { text: "To store cookies", "correct": false }
        ]
      },
      {
        question: "What is the result of the following expression: Boolean('false')?",
        options: [
          { text: "true", "correct": true },
          { text: "false", "correct": false },
          { text: "TypeError", "correct": false },
          { text: "undefined", "correct": false }
        ]
      },
      {
        question: "Which method is used to concatenate two arrays in JavaScript?",
        options: [
          { text: "concat()", "correct": true },
          { text: "merge()", "correct": false },
          { text: "combine()", "correct": false },
          { text: "join()", "correct": false }
        ]
      },
      {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        options: [
          { text: "To attach an event handler to an element", "correct": true },
          { text: "To create a new event", "correct": false },
          { text: "To remove an event handler from an element", "correct": false },
          { text: "To trigger an event", "correct": false }
        ]
      },
      {
        question: "What is the result of the following expression: 'Hello'.length?",
        options: [
          { text: "5", "correct": true },
          { text: "6", "correct": false },
          { text: "Error", "correct": false },
          { text: "undefined", "correct": false }
        ]
      },
  ]


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Shuffle the questions array
  shuffleArray(questions);
  
  // Slice the array to get the first 10 questions
  const selectedQuestions = questions.slice(0, 10);
  
  // The rest of your existing code
  
  const questionElement = document.getElementById("question");
  const answerButton = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let questionno = currentQuestionIndex + 1;
    questionElement.innerHTML = questionno + ". " + currentQuestion.question;
  
    currentQuestion.options.forEach((el) => {
      const button = document.createElement("button");
      button.innerHTML = el.text;
      button.classList.add("btn-n");
      answerButton.appendChild(button);
      if (el.correct) {
        button.dataset.correct = el.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }

function resetState()  {
nextButton.style.display = 'none';
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
}
}

function selectAnswer(e) {
const selectedBtn = e.target;
const iscorrect = selectedBtn.dataset.correct === "true";
if(iscorrect){
    selectedBtn.classList.add("correct");
    score++;
}else {
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct === 'true'){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = 'block'
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${selectedQuestions.length}!`;
    nextButton.innerHTML = "Go To Home";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", goToHome);
}

function goToHome() {
    // Redirect to the home page
    window.location.href = "/praexam"; // Replace "/home" with the actual URL of your home page
}

function handleNextButton() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < selectedQuestions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
nextButton.addEventListener("click",()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();
}else {
    startQuiz();
}
})
startQuiz();
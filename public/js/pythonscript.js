const questions = 
[
    {
      "question": "What is the purpose of the 'len()' function in Python?",
      "options": [
        { "text": "Calculating logarithms", "correct": false },
        { "text": "Finding the length of an iterable", "correct": true },
        { "text": "Generating random numbers", "correct": false },
        { "text": "Converting to lowercase", "correct": false }
      ]
    },
    {
      "question": "How do you comment a single-line in Python?",
      "options": [
        { "text": "// This is a comment", "correct": false },
        { "text": "# This is a comment", "correct": true },
        { "text": "/* This is a comment */", "correct": false },
        { "text": "-- This is a comment", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'print()' function in Python?",
      "options": [
        { "text": "Printing documents", "correct": false },
        { "text": "Displaying output on the console", "correct": true },
        { "text": "Calculating mathematical expressions", "correct": false },
        { "text": "Reading user input", "correct": false }
      ]
    },
    {
      "question": "Which keyword is used to define a function in Python?",
      "options": [
        { "text": "func", "correct": false },
        { "text": "define", "correct": false },
        { "text": "function", "correct": false },
        { "text": "def", "correct": true }
      ]
    },
    {
      "question": "What is the purpose of the 'range()' function in Python?",
      "options": [
        { "text": "Generating a list of numbers", "correct": true },
        { "text": "Checking the length of a string", "correct": false },
        { "text": "Creating a random range of values", "correct": false },
        { "text": "Filtering elements in a list", "correct": false }
      ]
    },
    {
      "question": "How do you open a file in Python?",
      "options": [
        { "text": "openFile()", "correct": false },
        { "text": "file.open()", "correct": false },
        { "text": "open()", "correct": true },
        { "text": "readFile()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'strip()' method for strings in Python?",
      "options": [
        { "text": "Removing leading and trailing whitespace", "correct": true },
        { "text": "Concatenating two strings", "correct": false },
        { "text": "Splitting a string into a list", "correct": false },
        { "text": "Reversing the characters in a string", "correct": false }
      ]
    },
    {
      "question": "Which data type is used to store a sequence of characters in Python?",
      "options": [
        { "text": "int", "correct": false },
        { "text": "list", "correct": false },
        { "text": "str", "correct": true },
        { "text": "float", "correct": false }
      ]
    },
    {
      "question": "What does the 'if' statement do in Python?",
      "options": [
        { "text": "Declares a function", "correct": false },
        { "text": "Loops through a sequence", "correct": false },
        { "text": "Performs conditional execution of code", "correct": true },
        { "text": "Defines a class", "correct": false }
      ]
    },
    {
      "question": "Which operator is used for exponentiation in Python?",
      "options": [
        { "text": "^", "correct": false },
        { "text": "*", "correct": false },
        { "text": "**", "correct": true },
        { "text": "//", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'list()' function in Python?",
      "options": [
        { "text": "Creating a list of numbers", "correct": false },
        { "text": "Converting a tuple to a list", "correct": true },
        { "text": "Checking if an item is in a list", "correct": false },
        { "text": "Sorting elements in a list", "correct": false }
      ]
    },
    {
      "question": "Which loop is used for iterating over a sequence of items in Python?",
      "options": [
        { "text": "for", "correct": true },
        { "text": "while", "correct": false },
        { "text": "do-while", "correct": false },
        { "text": "foreach", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'try' and 'except' blocks in Python?",
      "options": [
        { "text": "Defining a function", "correct": false },
        { "text": "Handling exceptions and errors", "correct": true },
        { "text": "Executing a loop", "correct": false },
        { "text": "Importing modules", "correct": false }
      ]
    },
    {
      "question": "Which method is used to find the index of a specific element in a list?",
      "options": [
        { "text": "search()", "correct": false },
        { "text": "find()", "correct": false },
        { "text": "index()", "correct": true },
        { "text": "locate()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'global' keyword in Python?",
      "options": [
        { "text": "Declaring a variable inside a function", "correct": false },
        { "text": "Defining a constant", "correct": false },
        { "text": "Indicating a variable is global in scope", "correct": true },
        { "text": "Importing a module", "correct": false }
      ]
    },
    {
      "question": "Which module is used for handling dates and times in Python?",
      "options": [
        { "text": "time", "correct": false },
        { "text": "datetime", "correct": true },
        { "text": "date", "correct": false },
        { "text": "calendar", "correct": false }
      ]
    },
    {
      "question": "How do you create a tuple in Python?",
      "options": [
        { "text": "tuple = [1, 2, 3]", "correct": false },
        { "text": "tuple(1, 2, 3)", "correct": false },
        { "text": "tuple = (1, 2, 3)", "correct": true },
        { "text": "tuple(1)(2)(3)", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'min()' function in Python?",
      "options": [
        { "text": "Finding the minimum value in an iterable", "correct": true },
        { "text": "Checking the length of a string", "correct": false },
        { "text": "Generating a random number", "correct": false },
        { "text": "Converting to lowercase", "correct": false }
      ]
    },
    {
      "question": "Which statement is used for raising exceptions in Python?",
      "options": [
        { "text": "throw", "correct": false },
        { "text": "raise", "correct": true },
        { "text": "exception", "correct": false },
        { "text": "try-catch", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'set()' data type in Python?",
      "options": [
        { "text": "Sorting elements in a list", "correct": false },
        { "text": "Storing key-value pairs", "correct": false },
        { "text": "Removing duplicates from a sequence", "correct": true },
        { "text": "Creating a stack", "correct": false }
      ]
    },
    {
      "question": "Which operator is used for floor division in Python?",
      "options": [
        { "text": "//", "correct": true },
        { "text": "/", "correct": false },
        { "text": "%", "correct": false },
        { "text": "**", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'import' statement in Python?",
      "options": [
        { "text": "Exporting variables", "correct": false },
        { "text": "Importing modules", "correct": true },
        { "text": "Including HTML files", "correct": false },
        { "text": "Defining constants", "correct": false }
      ]
    },
    {
      "question": "How do you check if a key exists in a dictionary in Python?",
      "options": [
        { "text": "containsKey()", "correct": false },
        { "text": "keyExists()", "correct": false },
        { "text": "hasKey()", "correct": false },
        { "text": "in", "correct": true }
      ]
    },
    {
      "question": "What is the purpose of the 'ord()' function in Python?",
      "options": [
        { "text": "Converting a number to its hexadecimal representation", "correct": false },
        { "text": "Finding the Unicode code point of a character", "correct": true },
        { "text": "Calculating the absolute value of a number", "correct": false },
        { "text": "Rounding a floating-point number", "correct": false }
      ]
    },
    {
      "question": "Which method is used to append elements to a list in Python?",
      "options": [
        { "text": "append()", "correct": true },
        { "text": "add()", "correct": false },
        { "text": "insert()", "correct": false },
        { "text": "extend()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'sorted()' function in Python?",
      "options": [
        { "text": "Sorting elements in a list in-place", "correct": false },
        { "text": "Creating a new sorted list", "correct": true },
        { "text": "Reversing the order of elements in a list", "correct": false },
        { "text": "Shuffling elements in a list", "correct": false }
      ]
    },
    {
      "question": "How do you remove an item from a list in Python?",
      "options": [
        { "text": "remove()", "correct": false },
        { "text": "erase()", "correct": false },
        { "text": "discard()", "correct": false },
        { "text": "pop()", "correct": true }
      ]
    }
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
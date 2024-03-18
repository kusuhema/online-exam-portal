const questions = 
[
    {
      "question": "What is the purpose of the 'int main()' function in C?",
      "options": [
        { "text": "Defining a class", "correct": false },
        { "text": "Declaring variables", "correct": false },
        { "text": "Entry point for a C program", "correct": true },
        { "text": "Handling exceptions", "correct": false }
      ]
    },
    {
      "question": "Which symbol is used for comments in C?",
      "options": [
        { "text": "//", "correct": true },
        { "text": "/* */", "correct": false },
        { "text": "--", "correct": false },
        { "text": "#", "correct": false }
      ]
    },
    {
      "question": "What is the default return type of a function in C?",
      "options": [
        { "text": "int", "correct": true },
        { "text": "void", "correct": false },
        { "text": "char", "correct": false },
        { "text": "float", "correct": false }
      ]
    },
    {
      "question": "Which data type is used for handling single characters in C?",
      "options": [
        { "text": "char", "correct": true },
        { "text": "string", "correct": false },
        { "text": "int", "correct": false },
        { "text": "float", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'scanf()' function in C?",
      "options": [
        { "text": "Printing output to the console", "correct": false },
        { "text": "Reading input from the console", "correct": true },
        { "text": "Allocating memory", "correct": false },
        { "text": "Opening a file", "correct": false }
      ]
    },
    {
      "question": "Which operator is used for pointer dereferencing in C?",
      "options": [
        { "text": "->", "correct": false },
        { "text": "*", "correct": true },
        { "text": ".", "correct": false },
        { "text": "::", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'const' keyword in C?",
      "options": [
        { "text": "Defining a constant variable", "correct": true },
        { "text": "Declaring a static variable", "correct": false },
        { "text": "Creating an instance of a class", "correct": false },
        { "text": "Initializing a variable", "correct": false }
      ]
    },
    {
      "question": "Which statement is used to exit a loop prematurely in C?",
      "options": [
        { "text": "return", "correct": false },
        { "text": "break", "correct": true },
        { "text": "exit", "correct": false },
        { "text": "continue", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'struct' keyword in C?",
      "options": [
        { "text": "Defining a function", "correct": false },
        { "text": "Declaring a constant", "correct": false },
        { "text": "Defining a structure", "correct": true },
        { "text": "Creating an instance of a class", "correct": false }
      ]
    },
    {
      "question": "Which method is used to compare two strings in C?",
      "options": [
        { "text": "compare()", "correct": false },
        { "text": "equals()", "correct": false },
        { "text": "compareTo()", "correct": false },
        { "text": "strcmp()", "correct": true }
      ]
    },
    {
      "question": "What is the purpose of the 'static' keyword in C?",
      "options": [
        { "text": "Creating an instance of a class", "correct": false },
        { "text": "Referring to the current object", "correct": false },
        { "text": "Declaring a variable or method as class-level", "correct": true },
        { "text": "Accessing a non-static method", "correct": false }
      ]
    },
    {
      "question": "Which statement is used to handle exceptions in C?",
      "options": [
        { "text": "try-throw", "correct": false },
        { "text": "catch", "correct": false },
        { "text": "throw", "correct": false },
        { "text": "No built-in exception handling in C", "correct": true }
      ]
    },
    {
      "question": "What is the purpose of the 'malloc()' function in C?",
      "options": [
        { "text": "Copying memory", "correct": false },
        { "text": "Allocating memory dynamically", "correct": true },
        { "text": "Freeing allocated memory", "correct": false },
        { "text": "Calculating memory size", "correct": false }
      ]
    },
    {
      "question": "Which method is used to obtain the length of a string in C?",
      "options": [
        { "text": "length()", "correct": false },
        { "text": "size()", "correct": false },
        { "text": "strlen()", "correct": true },
        { "text": "lengthOf()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'printf()' function in C?",
      "options": [
        { "text": "Reading input from the console", "correct": false },
        { "text": "Printing output to the console", "correct": true },
        { "text": "Allocating memory", "correct": false },
        { "text": "Opening a file", "correct": false }
      ]
    },
    {
      "question": "Which method is used to concatenate two strings in C?",
      "options": [
        { "text": "concat()", "correct": false },
        { "text": "append()", "correct": false },
        { "text": "strcat()", "correct": true },
        { "text": "join()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'time()' function in C?",
      "options": [
        { "text": "Calculating the execution time of a program", "correct": false },
        { "text": "Obtaining the current time", "correct": true },
        { "text": "Pausing the program execution", "correct": false },
        { "text": "Creating a timer", "correct": false }
      ]
    },
    {
      "question": "Which method is used to convert a string to an integer in C?",
      "options": [
        { "text": "parseInteger()", "correct": false },
        { "text": "toInt()", "correct": false },
        { "text": "atoi()", "correct": true },
        { "text": "convertToInt()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'fclose()' function in C?",
      "options": [
        { "text": "Copying a file", "correct": false },
        { "text": "Closing a file", "correct": true },
        { "text": "Opening a file", "correct": false },
        { "text": "Reading from a file", "correct": false }
      ]
    },
    {
      "question": "Which method is used to obtain the square root of a number in C?",
      "options": [
        { "text": "sqrt()", "correct": true },
        { "text": "squareRoot()", "correct": false },
        { "text": "getSqrt()", "correct": false },
        { "text": "calculateRoot()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'rand()' function in C?",
      "options": [
        { "text": "Generating random numbers", "correct": true },
        { "text": "Calculating logarithms", "correct": false },
        { "text": "Finding the remainder of a division", "correct": false },
        { "text": "Rounding a floating-point number", "correct": false }
      ]
    },
    {
      "question": "Which method is used to convert a primitive data type to a string in C?",
      "options": [
        { "text": "toString()", "correct": false },
        { "text": "stringify()", "correct": false },
        { "text": "sprintf()", "correct": true },
        { "text": "convertToString()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'getchar()' function in C?",
      "options": [
        { "text": "Printing output to the console", "correct": false },
        { "text": "Reading a character from the console", "correct": true },
        { "text": "Opening a file", "correct": false },
        { "text": "Closing a file", "correct": false }
      ]
    },
    {
      "question": "Which method is used to compare two arrays in C?",
      "options": [
        { "text": "compareArrays()", "correct": false },
        { "text": "equals()", "correct": false },
        { "text": "memcmp()", "correct": true },
        { "text": "arrayEquals()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'strcpy()' function in C?",
      "options": [
        { "text": "Copying a file", "correct": false },
        { "text": "Copying a string", "correct": true },
        { "text": "Converting a string to uppercase", "correct": false },
        { "text": "Comparing two strings", "correct": false }
      ]
    },
    {
      "question": "Which method is used to convert a string to lowercase in C?",
      "options": [
        { "text": "toLower()", "correct": false },
        { "text": "toLowerCase()", "correct": false },
        { "text": "strlwr()", "correct": true },
        { "text": "convertToLower()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'memcpy()' function in C?",
      "options": [
        { "text": "Copying the contents of one memory block to another", "correct": true },
        { "text": "Concatenating two strings", "correct": false },
        { "text": "Finding the length of a string", "correct": false },
        { "text": "Reversing the order of elements in an array", "correct": false }
      ]
    },
    {
      "question": "Which method is used to obtain the absolute value of a number in C?",
      "options": [
        { "text": "abs()", "correct": true },
        { "text": "absolute()", "correct": false },
        { "text": "getAbsolute()", "correct": false },
        { "text": "calculateAbsolute()", "correct": false }
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
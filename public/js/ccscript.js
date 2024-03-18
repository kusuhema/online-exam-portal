const questions = 
[
    {
      "question": "What is the purpose of the 'int main()' function in C++?",
      "options": [
        { "text": "Defining a class", "correct": false },
        { "text": "Declaring variables", "correct": false },
        { "text": "Entry point for a C++ program", "correct": true },
        { "text": "Handling exceptions", "correct": false }
      ]
    },
    {
      "question": "Which keyword is used for inheritance in C++?",
      "options": [
        { "text": "inherits", "correct": false },
        { "text": "extends", "correct": false },
        { "text": "inherit", "correct": false },
        { "text": "class", "correct": true }
      ]
    },
    {
      "question": "What is the default access specifier for members of a class in C++?",
      "options": [
        { "text": "private", "correct": true },
        { "text": "public", "correct": false },
        { "text": "protected", "correct": false },
        { "text": "default", "correct": false }
      ]
    },
    {
      "question": "Which data type is used for handling single characters in C++?",
      "options": [
        { "text": "char", "correct": true },
        { "text": "string", "correct": false },
        { "text": "int", "correct": false },
        { "text": "float", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'new' keyword in C++?",
      "options": [
        { "text": "Creating a new class", "correct": false },
        { "text": "Allocating memory for an object", "correct": true },
        { "text": "Instantiating a variable", "correct": false },
        { "text": "Defining a new function", "correct": false }
      ]
    },
    {
      "question": "Which operator is used for pointer dereferencing in C++?",
      "options": [
        { "text": "->", "correct": false },
        { "text": "*", "correct": true },
        { "text": ".", "correct": false },
        { "text": "::", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'const' keyword in C++?",
      "options": [
        { "text": "Defining a constant variable", "correct": true },
        { "text": "Declaring a static variable", "correct": false },
        { "text": "Creating an instance of a class", "correct": false },
        { "text": "Initializing a variable", "correct": false }
      ]
    },
    {
      "question": "Which statement is used to exit a loop prematurely in C++?",
      "options": [
        { "text": "return", "correct": false },
        { "text": "break", "correct": true },
        { "text": "exit", "correct": false },
        { "text": "continue", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'virtual' keyword in C++?",
      "options": [
        { "text": "Declaring a variable", "correct": false },
        { "text": "Implementing a pure virtual function", "correct": true },
        { "text": "Creating a virtual instance of a class", "correct": false },
        { "text": "Overriding a static method", "correct": false }
      ]
    },
    {
      "question": "Which method is used to compare two strings in C++?",
      "options": [
        { "text": "compare()", "correct": true },
        { "text": "equals()", "correct": false },
        { "text": "compareTo()", "correct": false },
        { "text": "equal()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'static' keyword in C++?",
      "options": [
        { "text": "Creating an instance of a class", "correct": false },
        { "text": "Referring to the current object", "correct": false },
        { "text": "Declaring a variable or method as class-level", "correct": true },
        { "text": "Accessing a non-static method", "correct": false }
      ]
    },
    {
      "question": "Which statement is used to handle exceptions in C++?",
      "options": [
        { "text": "try-throw", "correct": false },
        { "text": "catch", "correct": true },
        { "text": "throw", "correct": false },
        { "text": "finally", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'vector' class in C++?",
      "options": [
        { "text": "Sorting elements in a list", "correct": false },
        { "text": "Implementing a dynamic array", "correct": true },
        { "text": "Creating a linked list", "correct": false },
        { "text": "Storing key-value pairs", "correct": false }
      ]
    },
    {
      "question": "Which method is used to obtain the size of a vector in C++?",
      "options": [
        { "text": "length()", "correct": false },
        { "text": "size()", "correct": true },
        { "text": "lengthOf()", "correct": false },
        { "text": "getSize()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'typeid' operator in C++?",
      "options": [
        { "text": "Checking the type of an object", "correct": true },
        { "text": "Casting variables", "correct": false },
        { "text": "Calculating the size of a variable", "correct": false },
        { "text": "Accessing the address of a variable", "correct": false }
      ]
    },
    {
      "question": "Which method is used to convert a string to an integer in C++?",
      "options": [
        { "text": "parseInteger()", "correct": false },
        { "text": "toInt()", "correct": false },
        { "text": "atoi()", "correct": true },
        { "text": "convertToInt()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'fstream' class in C++?",
      "options": [
        { "text": "Implementing file compression", "correct": false },
        { "text": "Handling binary files", "correct": false },
        { "text": "File input/output operations", "correct": true },
        { "text": "Creating a stream of random access files", "correct": false }
      ]
    },
    {
      "question": "Which method is used to obtain the current time in C++?",
      "options": [
        { "text": "getCurrentTime()", "correct": false },
        { "text": "timeNow()", "correct": false },
        { "text": "chrono::system_clock::now()", "correct": true },
        { "text": "getSystemTime()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'abs()' function in C++?",
      "options": [
        { "text": "Calculating the square root of a number", "correct": false },
        { "text": "Finding the absolute value of a number", "correct": true },
        { "text": "Rounding a floating-point number", "correct": false },
        { "text": "Calculating the logarithm of a number", "correct": false }
      ]
    },
    {
      "question": "Which keyword is used to prevent a method from being overridden in C++?",
      "options": [
        { "text": "override", "correct": false },
        { "text": "final", "correct": true },
        { "text": "abstract", "correct": false },
        { "text": "static", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'rand()' function in C++?",
      "options": [
        { "text": "Generating random numbers", "correct": true },
        { "text": "Calculating logarithms", "correct": false },
        { "text": "Finding the remainder of a division", "correct": false },
        { "text": "Rounding a floating-point number", "correct": false }
      ]
    },
    {
      "question": "Which method is used to convert a primitive data type to a string in C++?",
      "options": [
        { "text": "toString()", "correct": false },
        { "text": "stringify()", "correct": false },
        { "text": "to_string()", "correct": true },
        { "text": "convertToString()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'unordered_map' class in C++?",
      "options": [
        { "text": "Sorting elements in a map", "correct": false },
        { "text": "Storing key-value pairs with a hashed index", "correct": true },
        { "text": "Implementing a dynamic map", "correct": false },
        { "text": "Creating a linked list of elements", "correct": false }
      ]
    },
    {
      "question": "Which method is used to convert a string to uppercase in C++?",
      "options": [
        { "text": "toUpper()", "correct": false },
        { "text": "toUpperCase()", "correct": false },
        { "text": "convertCase()", "correct": false },
        { "text": "toupper()", "correct": true }
      ]
    },
    {
      "question": "What is the purpose of the 'memcpy()' function in C++?",
      "options": [
        { "text": "Copying the contents of one memory block to another", "correct": true },
        { "text": "Concatenating two strings", "correct": false },
        { "text": "Finding the length of a string", "correct": false },
        { "text": "Reversing the order of elements in an array", "correct": false }
      ]
    },
    {
      "question": "Which method is used to obtain the square root of a number in C++?",
      "options": [
        { "text": "sqrt()", "correct": true },
        { "text": "squareRoot()", "correct": false },
        { "text": "getSqrt()", "correct": false },
        { "text": "calculateRoot()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'try_lock()' method in C++?",
      "options": [
        { "text": "Attempting to acquire a lock without blocking", "correct": true },
        { "text": "Locking a thread for a specified duration", "correct": false },
        { "text": "Unlocking a locked resource", "correct": false },
        { "text": "Handling exceptions in a multithreaded environment", "correct": false }
      ]
    },
    {
      "question": "Which method is used to concatenate two strings in C++?",
      "options": [
        { "text": "concat()", "correct": false },
        { "text": "append()", "correct": true },
        { "text": "concatenate()", "correct": false },
        { "text": "join()", "correct": false }
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
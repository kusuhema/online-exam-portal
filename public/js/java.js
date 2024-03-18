const questions = 
[
    {
      "question": "What is the main purpose of the 'public static void main(String[] args)' method in Java?",
      "options": [
        { "text": "Defining a class", "correct": false },
        { "text": "Declaring variables", "correct": false },
        { "text": "Entry point for a Java application", "correct": true },
        { "text": "Handling exceptions", "correct": false }
      ]
    },
    {
      "question": "Which keyword is used for inheritance in Java?",
      "options": [
        { "text": "inherits", "correct": false },
        { "text": "extends", "correct": true },
        { "text": "inherit", "correct": false },
        { "text": "implements", "correct": false }
      ]
    },
    {
      "question": "What is the default value of an instance variable in Java?",
      "options": [
        { "text": "0", "correct": false },
        { "text": "null", "correct": false },
        { "text": "Depends on the variable type", "correct": true },
        { "text": "1", "correct": false }
      ]
    },
    {
      "question": "Which data type is used for handling single characters in Java?",
      "options": [
        { "text": "char", "correct": true },
        { "text": "String", "correct": false },
        { "text": "int", "correct": false },
        { "text": "float", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'super' keyword in Java?",
      "options": [
        { "text": "Referring to the immediate subclass", "correct": false },
        { "text": "Calling the superclass method", "correct": true },
        { "text": "Creating an instance of a class", "correct": false },
        { "text": "Accessing a static variable", "correct": false }
      ]
    },
    {
      "question": "Which keyword is used to declare a constant variable in Java?",
      "options": [
        { "text": "final", "correct": true },
        { "text": "const", "correct": false },
        { "text": "static", "correct": false },
        { "text": "constant", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'this' keyword in Java?",
      "options": [
        { "text": "Referring to the current class", "correct": false },
        { "text": "Referring to the current object", "correct": true },
        { "text": "Accessing a static method", "correct": false },
        { "text": "Creating an instance of a class", "correct": false }
      ]
    },
    {
      "question": "Which statement is used to exit a loop prematurely in Java?",
      "options": [
        { "text": "return", "correct": false },
        { "text": "break", "correct": true },
        { "text": "exit", "correct": false },
        { "text": "continue", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'interface' keyword in Java?",
      "options": [
        { "text": "Defining a class", "correct": false },
        { "text": "Declaring an abstract class", "correct": false },
        { "text": "Defining a contract for classes to implement", "correct": true },
        { "text": "Creating an instance of a class", "correct": false }
      ]
    },
    {
      "question": "Which method is used to compare two strings in Java?",
      "options": [
        { "text": "compare()", "correct": false },
        { "text": "equals()", "correct": true },
        { "text": "compareTo()", "correct": false },
        { "text": "equal()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'static' keyword in Java?",
      "options": [
        { "text": "Creating an instance of a class", "correct": false },
        { "text": "Referring to the current object", "correct": false },
        { "text": "Declaring a variable or method as class-level", "correct": true },
        { "text": "Accessing a non-static method", "correct": false }
      ]
    },
    {
      "question": "Which statement is used to handle exceptions in Java?",
      "options": [
        { "text": "try-throw", "correct": false },
        { "text": "catch", "correct": true },
        { "text": "throw", "correct": false },
        { "text": "finally", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'ArrayList' class in Java?",
      "options": [
        { "text": "Storing key-value pairs", "correct": false },
        { "text": "Implementing a dynamic array", "correct": true },
        { "text": "Creating a linked list", "correct": false },
        { "text": "Sorting elements in a list", "correct": false }
      ]
    },
    {
      "question": "Which method is used to obtain the length of an array in Java?",
      "options": [
        { "text": "lengthOf()", "correct": false },
        { "text": "size()", "correct": false },
        { "text": "length()", "correct": true },
        { "text": "getSize()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'instanceof' operator in Java?",
      "options": [
        { "text": "Checking if an object is an instance of a class", "correct": true },
        { "text": "Comparing two instances of a class", "correct": false },
        { "text": "Creating a new instance of a class", "correct": false },
        { "text": "Accessing a static method", "correct": false }
      ]
    },
    {
      "question": "Which method is used to convert a string to an integer in Java?",
      "options": [
        { "text": "parseInteger()", "correct": false },
        { "text": "toInt()", "correct": false },
        { "text": "parseInt()", "correct": true },
        { "text": "convertToInt()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'StringBuilder' class in Java?",
      "options": [
        { "text": "Building graphical user interfaces", "correct": false },
        { "text": "Creating dynamic arrays", "correct": false },
        { "text": "Building and manipulating strings efficiently", "correct": true },
        { "text": "Implementing a linked list", "correct": false }
      ]
    },
    {
      "question": "Which method is used to obtain the absolute value of a number in Java?",
      "options": [
        { "text": "abs()", "correct": true },
        { "text": "absolute()", "correct": false },
        { "text": "getAbsolute()", "correct": false },
        { "text": "calculateAbsolute()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'break' statement in Java?",
      "options": [
        { "text": "Ending the program execution", "correct": false },
        { "text": "Exiting a loop prematurely", "correct": true },
        { "text": "Returning a value from a method", "correct": false },
        { "text": "Skipping the current iteration of a loop", "correct": false }
      ]
    },
    {
      "question": "Which class is used for reading input from the console in Java?",
      "options": [
        { "text": "ConsoleReader", "correct": false },
        { "text": "System.in", "correct": false },
        { "text": "Scanner", "correct": true },
        { "text": "InputReader", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'Math.pow()' method in Java?",
      "options": [
        { "text": "Calculating the square root of a number", "correct": false },
        { "text": "Raising a number to the power of another", "correct": true },
        { "text": "Finding the maximum of two numbers", "correct": false },
        { "text": "Calculating the logarithm of a number", "correct": false }
      ]
    },
    {
      "question": "Which keyword is used to prevent a method from being overridden in Java?",
      "options": [
        { "text": "override", "correct": false },
        { "text": "final", "correct": true },
        { "text": "abstract", "correct": false },
        { "text": "static", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'Thread.sleep()' method in Java?",
      "options": [
        { "text": "Pausing the program execution", "correct": true },
        { "text": "Terminating a thread", "correct": false },
        { "text": "Putting a thread to sleep permanently", "correct": false },
        { "text": "Starting a new thread", "correct": false }
      ]
    },
    {
      "question": "Which method is used to convert a primitive data type to a string in Java?",
      "options": [
        { "text": "toString()", "correct": true },
        { "text": "stringify()", "correct": false },
        { "text": "parseString()", "correct": false },
        { "text": "convertToString()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'HashSet' class in Java?",
      "options": [
        { "text": "Sorting elements in a set", "correct": false },
        { "text": "Storing key-value pairs", "correct": false },
        { "text": "Implementing a dynamic set", "correct": false },
        { "text": "Storing unique elements in a set", "correct": true }
      ]
    },
    {
      "question": "Which method is used to convert a string to uppercase in Java?",
      "options": [
        { "text": "toUpper()", "correct": false },
        { "text": "toUpperCase()", "correct": true },
        { "text": "convertCase()", "correct": false },
        { "text": "upperCase()", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'interface' keyword in Java?",
      "options": [
        { "text": "Defining a class", "correct": false },
        { "text": "Declaring an abstract class", "correct": false },
        { "text": "Defining a contract for classes to implement", "correct": true },
        { "text": "Creating an instance of a class", "correct": false }
      ]
    },
    {
      "question": "Which method is used to compare two objects for equality in Java?",
      "options": [
        { "text": "compare()", "correct": false },
        { "text": "isEqual()", "correct": false },
        { "text": "equals()", "correct": true },
        { "text": "compareObjects()", "correct": false }
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
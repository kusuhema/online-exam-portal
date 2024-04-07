const questions = 
[
  {
    "question": "What does 'DOM' stand for in JavaScript?",
    "options": [
      {"text": "Document Object Model", "correct": true},
      {"text": "Data Object Model", "correct": false},
      {"text": "Dynamic Output Mechanism", "correct": false},
      {"text": "Document Order Manager", "correct": false}
    ]
  },
  {
    "question": "Which keyword is used to declare variables in JavaScript?",
    "options": [
      {"text": "var", "correct": true},
      {"text": "int", "correct": false},
      {"text": "string", "correct": false},
      {"text": "variable", "correct": false}
    ]
  },
  {
    "question": "What symbol is used for comments in JavaScript?",
    "options": [
      {"text": "//", "correct": true},
      {"text": "#", "correct": false},
      {"text": "/* */", "correct": false},
      {"text": "--", "correct": false}
    ]
  },
  {
    "question": "What is the result of 10 + '10' in JavaScript?",
    "options": [
      {"text": "20", "correct": false},
      {"text": "1010", "correct": true},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "Which built-in method returns the length of a string?",
    "options": [
      {"text": "length()", "correct": false},
      {"text": "size()", "correct": false},
      {"text": "len()", "correct": false},
      {"text": "length", "correct": true}
    ]
  },
  {
    "question": "What is the output of 5 == '5' in JavaScript?",
    "options": [
      {"text": "true", "correct": true},
      {"text": "false", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What does 'NaN' stand for in JavaScript?",
    "options": [
      {"text": "Not a Null", "correct": false},
      {"text": "Not a Number", "correct": true},
      {"text": "Null and None", "correct": false},
      {"text": "Number and Null", "correct": false}
    ]
  },
  {
    "question": "Which of the following is a correct way to declare a JavaScript array?",
    "options": [
      {"text": "var colors = ['red', 'green', 'blue'];", "correct": true},
      {"text": "var colors = 'red, green, blue';", "correct": false},
      {"text": "var colors = (1:'red', 2:'green', 3:'blue');", "correct": false},
      {"text": "var colors = {'red', 'green', 'blue'};", "correct": false}
    ]
  },
  {
    "question": "What does the 'typeof' operator return in JavaScript?",
    "options": [
      {"text": "The type of a variable", "correct": true},
      {"text": "The size of a variable", "correct": false},
      {"text": "The value of a variable", "correct": false},
      {"text": "The length of a variable", "correct": false}
    ]
  },
  {
    "question": "Which built-in method removes the last element from an array and returns that element?",
    "options": [
      {"text": "pop()", "correct": true},
      {"text": "remove()", "correct": false},
      {"text": "last()", "correct": false},
      {"text": "delete()", "correct": false}
    ]
  },
  {
    "question": "What will the following code output? console.log(typeof [1, 2, 3]);",
    "options": [
      {"text": "array", "correct": false},
      {"text": "object", "correct": true},
      {"text": "number", "correct": false},
      {"text": "list", "correct": false}
    ]
  },
  {
    "question": "What is the output of 3 * 'abc' in JavaScript?",
    "options": [
      {"text": "Error", "correct": true},
      {"text": "NaN", "correct": false},
      {"text": "'abcabcabc'", "correct": false},
      {"text": "'abc'", "correct": false}
    ]
  },
  {
    "question": "Which function is used to convert a string to uppercase in JavaScript?",
    "options": [
      {"text": "toUpperCase()", "correct": true},
      {"text": "toUpper()", "correct": false},
      {"text": "upperCase()", "correct": false},
      {"text": "caseUpper()", "correct": false}
    ]
  },
  {
    "question": "What is the output of 'Hello'.length in JavaScript?",
    "options": [
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false},
      {"text": "5", "correct": true},
      {"text": "'Hello'", "correct": false}
    ]
  },
  {
    "question": "What does the 'push' method do in JavaScript?",
    "options": [
      {"text": "Adds one or more elements to the end of an array", "correct": true},
      {"text": "Removes the first element of an array", "correct": false},
      {"text": "Reverses the order of the elements in an array", "correct": false},
      {"text": "Sorts the elements of an array", "correct": false}
    ]
  },
  {
    "question": "What is the result of '5' + 3 in JavaScript?",
    "options": [
      {"text": "'53'", "correct": true},
      {"text": "8", "correct": false},
      {"text": "'8'", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What does '+= 'operator do in JavaScript?",
    "options": [
      {"text": "Concatenates and assigns the value to a variable", "correct": true},
      {"text": "Increments the value of a variable by 1", "correct": false},
      {"text": "Decrements the value of a variable by 1", "correct": false},
      {"text": "Subtracts and assigns the value to a variable", "correct": false}
    ]
  },
  {
    "question": "What is the result of 10 == '10' in JavaScript?",
    "options": [
      {"text": "true", "correct": true},
      {"text": "false", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'split' method in JavaScript?",
    "options": [
      {"text": "Splits a string into an array of substrings", "correct": true},
      {"text": "Concatenates two strings", "correct": false},
      {"text": "Returns the substring of a string", "correct": false},
      {"text": "Replaces a specified substring with another substring", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(0.1 + 0.2 === 0.3) in JavaScript?",
    "options": [
      {"text": "true", "correct": false},
      {"text": "false", "correct": true},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(2 + '2' - 2) in JavaScript?",
    "options": [
      {"text": "'22'", "correct": false},
      {"text": "20", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": true}
    ]
  },
  {
    "question": "What does 'parseFloat()' function do in JavaScript?",
    "options": [
      {"text": "Parses a string and returns an integer", "correct": false},
      {"text": "Parses a string and returns a floating point number", "correct": true},
      {"text": "Converts a floating point number to an integer", "correct": false},
      {"text": "Converts an integer to a floating point number", "correct": false}
    ]
  },
  {
    "question": "What is the result of 10 === '10' in JavaScript?",
    "options": [
      {"text": "true", "correct": false},
      {"text": "false", "correct": true},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "Which operator is used for exponentiation in JavaScript?",
    "options": [
      {"text": "^", "correct": false},
      {"text": "**", "correct": true},
      {"text": "*", "correct": false},
      {"text": "//", "correct": false}
    ]
  },
  {
    "question": "What is the result of console.log('5' - 3) in JavaScript?",
    "options": [
      {"text": "'53'", "correct": false},
      {"text": "2", "correct": true},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(0.1 + 0.2) in JavaScript?",
    "options": [
      {"text": "0.30000000000000004", "correct": true},
      {"text": "0.3", "correct": false},
      {"text": "0.31", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(typeof NaN) in JavaScript?",
    "options": [
      {"text": "'number'", "correct": true},
      {"text": "'NaN'", "correct": false},
      {"text": "'string'", "correct": false},
      {"text": "'undefined'", "correct": false}
    ]
  },
  {
    "question": "What does the 'unshift' method do in JavaScript?",
    "options": [
      {"text": "Adds one or more elements to the beginning of an array", "correct": true},
      {"text": "Removes the last element of an array", "correct": false},
      {"text": "Reverses the order of the elements in an array", "correct": false},
      {"text": "Sorts the elements of an array", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(Math.max()) in JavaScript?",
    "options": [
      {"text": "Error", "correct": false},
      {"text": "-Infinity", "correct": true},
      {"text": "0", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What is the result of console.log(typeof undefined) in JavaScript?",
    "options": [
      {"text": "'undefined'", "correct": true},
      {"text": "'null'", "correct": false},
      {"text": "'number'", "correct": false},
      {"text": "'object'", "correct": false}
    ]
  },
  {
    "question": "Which method is used to convert a string to an integer in JavaScript?",
    "options": [
      {"text": "parseInt()", "correct": true},
      {"text": "toString()", "correct": false},
      {"text": "parseFloat()", "correct": false},
      {"text": "toFixed()", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(3 * '2') in JavaScript?",
    "options": [
      {"text": "6", "correct": true},
      {"text": "'32'", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(+'10') in JavaScript?",
    "options": [
      {"text": "Error", "correct": false},
      {"text": "10", "correct": true},
      {"text": "'10'", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "Which function is used to convert a number to a string in JavaScript?",
    "options": [
      {"text": "toString()", "correct": true},
      {"text": "parseInt()", "correct": false},
      {"text": "parseFloat()", "correct": false},
      {"text": "toFixed()", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(typeof []) in JavaScript?",
    "options": [
      {"text": "'object'", "correct": true},
      {"text": "'array'", "correct": false},
      {"text": "'list'", "correct": false},
      {"text": "'undefined'", "correct": false}
    ]
  },
  {
    "question": "What does the 'concat' method do in JavaScript?",
    "options": [
      {"text": "Joins two or more arrays", "correct": true},
      {"text": "Removes the last element of an array", "correct": false},
      {"text": "Reverses the order of the elements in an array", "correct": false},
      {"text": "Sorts the elements of an array", "correct": false}
    ]
  },
  {
    "question": "What does the following JavaScript code output? console.log(0.1 + 0.2 === 0.3);",
    "options": [
      {"text": "true", "correct": false},
      {"text": "false", "correct": true},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What will be the output of the following code? console.log('2' + 2 - '2');",
    "options": [
      {"text": "20", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": true},
      {"text": "'22'", "correct": false}
    ]
  },
  {
    "question": "What is the result of 10 === '10' in JavaScript?",
    "options": [
      {"text": "true", "correct": false},
      {"text": "false", "correct": true},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code? console.log(Math.max());",
    "options": [
      {"text": "Error", "correct": false},
      {"text": "-Infinity", "correct": true},
      {"text": "0", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(3 * '2') in JavaScript?",
    "options": [
      {"text": "6", "correct": true},
      {"text": "'32'", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(typeof []) in JavaScript?",
    "options": [
      {"text": "'object'", "correct": true},
      {"text": "'array'", "correct": false},
      {"text": "'list'", "correct": false},
      {"text": "'undefined'", "correct": false}
    ]
  },
  {
    "question": "What will be the output of the following code? console.log(+'10');",
    "options": [
      {"text": "Error", "correct": false},
      {"text": "10", "correct": true},
      {"text": "'10'", "correct": false},
      {"text": "NaN", "correct": false}
    ]
  },
  {
    "question": "Which function is used to convert a number to a string in JavaScript?",
    "options": [
      {"text": "toString()", "correct": true},
      {"text": "parseInt()", "correct": false},
      {"text": "parseFloat()", "correct": false},
      {"text": "toFixed()", "correct": false}
    ]
  },
  {
    "question": "What is the output of console.log(typeof NaN) in JavaScript?",
    "options": [
      {"text": "'number'", "correct": true},
      {"text": "'NaN'", "correct": false},
      {"text": "'string'", "correct": false},
      {"text": "'undefined'", "correct": false}
    ]
  },
  {
    "question": "What does the 'unshift' method do in JavaScript?",
    "options": [
      {"text": "Adds one or more elements to the beginning of an array", "correct": true},
      {"text": "Removes the last element of an array", "correct": false},
      {"text": "Reverses the order of the elements in an array", "correct": false},
      {"text": "Sorts the elements of an array", "correct": false}
    ]
  },
  {
    "question": "What will be the output of the following code?\nconsole.log(typeof typeof 1);",
    "options": [
      {"text": "'string'", "correct": true},
      {"text": "'number'", "correct": false},
      {"text": "'object'", "correct": false},
      {"text": "'undefined'", "correct": false}
    ]
  },
  {
    "question": "Consider the following code:\nvar x = 10;\nvar y = (x++, x);\nWhat is the value of y?",
    "options": [
      {"text": "10", "correct": true},
      {"text": "11", "correct": false},
      {"text": "9", "correct": false},
      {"text": "undefined", "correct": false}
    ]
  },
  {
    "question": "What will be the output of the following code?\nvar x = 1;\nvar output = (function(){\n\tdelete x;\n\treturn x;\n})();\nconsole.log(output);",
    "options": [
      {"text": "1", "correct": true},
      {"text": "undefined", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "null", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\nvar arr = [1, 2, 3];\narr[10] = 10;\nconsole.log(arr.length);",
    "options": [
      {"text": "4", "correct": false},
      {"text": "10", "correct": false},
      {"text": "11", "correct": true},
      {"text": "undefined", "correct": false}
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
  const selectedQuestions = questions.slice(0, 20);
  
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
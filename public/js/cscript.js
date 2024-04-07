const questions = 
[
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 5;\n\tint *p = &x;\n\tprintf(\"%d\", *p);\n\treturn 0;\n}",
    "options": [
      {"text": "5", "correct": true},
      {"text": "Garbage value", "correct": false},
      {"text": "0", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint arr[5] = {1, 2, 3, 4, 5};\n\tprintf(\"%d\", *(arr + 2));\n\treturn 0;\n}",
    "options": [
      {"text": "3", "correct": true},
      {"text": "2", "correct": false},
      {"text": "1", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What does the 'sizeof' operator return?",
    "options": [
      {"text": "Size of a variable", "correct": false},
      {"text": "Size of a datatype", "correct": true},
      {"text": "Address of a variable", "correct": false},
      {"text": "Value of a variable", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'malloc' function in C?",
    "options": [
      {"text": "To deallocate memory", "correct": false},
      {"text": "To allocate memory dynamically", "correct": true},
      {"text": "To compare two strings", "correct": false},
      {"text": "To free allocated memory", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 10;\n\tint y = (x++) + (++x);\n\tprintf(\"%d\", y);\n\treturn 0;\n}",
    "options": [
      {"text": "22", "correct": true},
      {"text": "21", "correct": false},
      {"text": "20", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What does the 'strcmp' function do in C?",
    "options": [
      {"text": "Compares two strings", "correct": true},
      {"text": "Concatenates two strings", "correct": false},
      {"text": "Copies one string to another", "correct": false},
      {"text": "Finds the length of a string", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tchar str[] = \"Hello\";\n\tprintf(\"%d\", sizeof(str));\n\treturn 0;\n}",
    "options": [
      {"text": "6", "correct": false},
      {"text": "5", "correct": true},
      {"text": "10", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tchar str1[] = \"Hello\";\n\tchar str2[] = \"World\";\n\tprintf(\"%s\", strcat(str1, str2));\n\treturn 0;\n}",
    "options": [
      {"text": "HelloWorld", "correct": false},
      {"text": "WorldHello", "correct": false},
      {"text": "Hello", "correct": false},
      {"text": "Undefined behavior", "correct": true}
    ]
  },
  {
    "question": "What is the purpose of the 'typedef' keyword in C?",
    "options": [
      {"text": "To define new datatypes", "correct": true},
      {"text": "To declare variables", "correct": false},
      {"text": "To include header files", "correct": false},
      {"text": "To create functions", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 5;\n\tprintf(\"%d\", x++);\n\treturn 0;\n}",
    "options": [
      {"text": "5", "correct": true},
      {"text": "6", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'break' statement in C?",
    "options": [
      {"text": "To exit the loop", "correct": true},
      {"text": "To skip the current iteration", "correct": false},
      {"text": "To continue to the next iteration", "correct": false},
      {"text": "To end the program", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 5;\n\tint *p = &x;\n\tprintf(\"%p\", p);\n\treturn 0;\n}",
    "options": [
      {"text": "Memory address of x", "correct": true},
      {"text": "Value of x", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'continue' statement in C?",
    "options": [
      {"text": "To exit the loop", "correct": false},
      {"text": "To skip the current iteration", "correct": true},
      {"text": "To continue to the next iteration", "correct": false},
      {"text": "To end the program", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 10;\n\tprintf(\"%d\", x--);\n\treturn 0;\n}",
    "options": [
      {"text": "10", "correct": true},
      {"text": "9", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'static' keyword in C?",
    "options": [
      {"text": "To declare global variables", "correct": false},
      {"text": "To define constants", "correct": false},
      {"text": "To specify the storage class", "correct": true},
      {"text": "To include header files", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 5;\n\tint y = x << 2;\n\tprintf(\"%d\", y);\n\treturn 0;\n}",
    "options": [
      {"text": "20", "correct": true},
      {"text": "10", "correct": false},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What does the 'exit()' function do in C?",
    "options": [
      {"text": "Terminates the program", "correct": true},
      {"text": "Exits the loop", "correct": false},
      {"text": "Returns a value", "correct": false},
      {"text": "Pauses the program", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tchar *ptr;\n\tprintf(\"%d\", sizeof(ptr));\n\treturn 0;\n}",
    "options": [
      {"text": "4", "correct": true},
      {"text": "8", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'union' keyword in C?",
    "options": [
      {"text": "To define a structure", "correct": false},
      {"text": "To declare an array", "correct": false},
      {"text": "To define multiple variables at once", "correct": false},
      {"text": "To create a variable that can hold different data types", "correct": true}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint arr[] = {1, 2, 3, 4, 5};\n\tprintf(\"%d\", arr[5]);\n\treturn 0;\n}",
    "options": [
      {"text": "1", "correct": false},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": true}
    ]
  },
  {
    "question": "What is the purpose of the 'volatile' keyword in C?",
    "options": [
      {"text": "To declare a constant", "correct": false},
      {"text": "To declare a variable", "correct": false},
      {"text": "To specify that the variable may be changed unexpectedly", "correct": true},
      {"text": "To declare a function", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tchar str[] = \"Hello World\";\n\tprintf(\"%c\", str[10]);\n\treturn 0;\n}",
    "options": [
      {"text": "o", "correct": false},
      {"text": " ", "correct": false},
      {"text": "\\0", "correct": false},
      {"text": "Undefined behavior", "correct": true}
    ]
  },
  {
    "question": "What is the purpose of the 'const' keyword in C?",
    "options": [
      {"text": "To declare a constant", "correct": true},
      {"text": "To declare a variable", "correct": false},
      {"text": "To specify the storage class", "correct": false},
      {"text": "To include header files", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 10;\n\tint *p = &x;\n\tprintf(\"%d\", *p++);\n\treturn 0;\n}",
    "options": [
      {"text": "10", "correct": true},
      {"text": "11", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What does the 'feof()' function do in C?",
    "options": [
      {"text": "Checks if end of file is reached", "correct": true},
      {"text": "Flushes the buffer", "correct": false},
      {"text": "Opens a file", "correct": false},
      {"text": "Closes a file", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'do-while' loop in C?",
    "options": [
      {"text": "To execute a block of code while a condition is true", "correct": true},
      {"text": "To execute a block of code a certain number of times", "correct": false},
      {"text": "To execute a block of code at least once before checking the condition", "correct": false},
      {"text": "To exit the loop", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 5;\n\tint *p = &x;\n\tprintf(\"%d\", ++*p);\n\treturn 0;\n}",
    "options": [
      {"text": "6", "correct": true},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'sizeof' operator in C?",
    "options": [
      {"text": "To find the size of a file", "correct": false},
      {"text": "To find the size of a datatype or variable", "correct": true},
      {"text": "To find the size of a function", "correct": false},
      {"text": "To find the size of a loop", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 5;\n\tprintf(\"%d\", x >> 1);\n\treturn 0;\n}",
    "options": [
      {"text": "2", "correct": true},
      {"text": "4", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What does the 'fgets()' function do in C?",
    "options": [
      {"text": "Reads a line from a file", "correct": true},
      {"text": "Writes a line to a file", "correct": false},
      {"text": "Opens a file", "correct": false},
      {"text": "Closes a file", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'goto' statement in C?",
    "options": [
      {"text": "To exit the loop", "correct": false},
      {"text": "To skip the current iteration", "correct": false},
      {"text": "To transfer control to a specified label", "correct": true},
      {"text": "To continue to the next iteration", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 5;\n\tint y = x + 1;\n\tprintf(\"%d\", y);\n\treturn 0;\n}",
    "options": [
      {"text": "5", "correct": false},
      {"text": "6", "correct": true},
      {"text": "4", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What does the 'fprintf()' function do in C?",
    "options": [
      {"text": "Reads a line from a file", "correct": false},
      {"text": "Writes a line to a file", "correct": true},
      {"text": "Opens a file", "correct": false},
      {"text": "Closes a file", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'extern' keyword in C?",
    "options": [
      {"text": "To specify the storage class", "correct": false},
      {"text": "To declare a global variable", "correct": true},
      {"text": "To declare a constant", "correct": false},
      {"text": "To include header files", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tprintf(\"%d\", sizeof(int));\n\treturn 0;\n}",
    "options": [
      {"text": "2", "correct": false},
      {"text": "4", "correct": true},
      {"text": "8", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What does the 'isdigit()' function do in C?",
    "options": [
      {"text": "Checks if a character is a digit", "correct": true},
      {"text": "Converts a character to uppercase", "correct": false},
      {"text": "Converts a character to lowercase", "correct": false},
      {"text": "Checks if a character is alphanumeric", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'putc()' function in C?",
    "options": [
      {"text": "Reads a character from a file", "correct": false},
      {"text": "Writes a character to a file", "correct": true},
      {"text": "Opens a file", "correct": false},
      {"text": "Closes a file", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'volatile' keyword in C?",
    "options": [
      {"text": "To declare a constant", "correct": false},
      {"text": "To declare a variable", "correct": false},
      {"text": "To specify that the variable may be changed unexpectedly", "correct": true},
      {"text": "To declare a function", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tchar c = 'A';\n\tprintf(\"%c\", c + 1);\n\treturn 0;\n}",
    "options": [
      {"text": "A", "correct": false},
      {"text": "B", "correct": true},
      {"text": "C", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What does the 'ftell()' function do in C?",
    "options": [
      {"text": "Checks if end of file is reached", "correct": false},
      {"text": "Flushes the buffer", "correct": false},
      {"text": "Returns the current position in a file", "correct": true},
      {"text": "Moves the file pointer to a specified position", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'register' keyword in C?",
    "options": [
      {"text": "To specify the storage class", "correct": false},
      {"text": "To declare a variable", "correct": false},
      {"text": "To declare a global variable", "correct": false},
      {"text": "To store variables in CPU registers for faster access", "correct": true}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tchar str[] = \"Hello\";\n\tprintf(\"%d\", strlen(str));\n\treturn 0;\n}",
    "options": [
      {"text": "5", "correct": false},
      {"text": "6", "correct": false},
      {"text": "Compiler error", "correct": true},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What does the 'fflush()' function do in C?",
    "options": [
      {"text": "Checks if end of file is reached", "correct": false},
      {"text": "Flushes the buffer", "correct": true},
      {"text": "Returns the current position in a file", "correct": false},
      {"text": "Moves the file pointer to a specified position", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'auto' keyword in C?",
    "options": [
      {"text": "To specify the storage class", "correct": false},
      {"text": "To declare a variable", "correct": true},
      {"text": "To declare a global variable", "correct": false},
      {"text": "To store variables in CPU registers for faster access", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tchar str[] = \"Hello\";\n\tprintf(\"%c\", str[5]);\n\treturn 0;\n}",
    "options": [
      {"text": "o", "correct": false},
      {"text": " ", "correct": false},
      {"text": "\\0", "correct": false},
      {"text": "Undefined behavior", "correct": true}
    ]
  },
  {
    "question": "What does the 'tolower()' function do in C?",
    "options": [
      {"text": "Converts a character to uppercase", "correct": false},
      {"text": "Converts a character to lowercase", "correct": true},
      {"text": "Checks if a character is a digit", "correct": false},
      {"text": "Checks if a character is alphanumeric", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of the 'typedef' keyword in C?",
    "options": [
      {"text": "To define new datatypes", "correct": true},
      {"text": "To declare variables", "correct": false},
      {"text": "To include header files", "correct": false},
      {"text": "To create functions", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following C code?\n\n#include <stdio.h>\nint main() {\n\tint x = 5;\n\tint *p = &x;\n\tprintf(\"%d\", *p--);\n\treturn 0;\n}",
    "options": [
      {"text": "5", "correct": true},
      {"text": "4", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
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
const questions = 
[
  {
    "question": "What does the 'sizeof' operator return in C++?",
    "options": [
      {"text": "Size of the variable in bytes", "correct": true},
      {"text": "Address of the variable", "correct": false},
      {"text": "Value of the variable", "correct": false},
      {"text": "Type of the variable", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 5;\nint *ptr = &x;\nstd::cout << *ptr;",
    "options": [
      {"text": "5", "correct": true},
      {"text": "Memory address of x", "correct": false},
      {"text": "Garbage value", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What is the correct syntax to dynamically allocate memory in C++?",
    "options": [
      {"text": "ptr = new int;", "correct": true},
      {"text": "int *ptr = malloc(sizeof(int));", "correct": false},
      {"text": "int *ptr = new int();", "correct": false},
      {"text": "int ptr = new int;", "correct": false}
    ]
  },
  {
    "question": "Which of the following is not a valid C++ keyword?",
    "options": [
      {"text": "private", "correct": false},
      {"text": "package", "correct": true},
      {"text": "public", "correct": false},
      {"text": "protected", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 5;\nint &ref = x;\nref = 10;\nstd::cout << x;",
    "options": [
      {"text": "10", "correct": true},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'using namespace std;' in C++?",
    "options": [
      {"text": "To include standard input/output library", "correct": false},
      {"text": "To define a namespace for standard library", "correct": false},
      {"text": "To import all symbols in std namespace", "correct": true},
      {"text": "To create a new namespace named std", "correct": false}
    ]
  },
  {
    "question": "What is the correct way to declare a pure virtual function in C++?",
    "options": [
      {"text": "virtual void func() = 0;", "correct": true},
      {"text": "void virtual func() = 0;", "correct": false},
      {"text": "void virtual func() { }", "correct": false},
      {"text": "void func() = 0;", "correct": false}
    ]
  },
  {
    "question": "What does the 'const' keyword indicate in a C++ function parameter?",
    "options": [
      {"text": "The parameter value cannot be changed within the function", "correct": true},
      {"text": "The parameter is constant", "correct": false},
      {"text": "The parameter is passed by reference", "correct": false},
      {"text": "The parameter value cannot be changed outside the function", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint arr[] = {1, 2, 3, 4, 5};\nstd::cout << arr[5];",
    "options": [
      {"text": "Garbage value", "correct": true},
      {"text": "0", "correct": false},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What is the correct syntax to create an object of class 'Example' in C++?",
    "options": [
      {"text": "Example obj;", "correct": true},
      {"text": "obj = new Example();", "correct": false},
      {"text": "Example *obj = new Example();", "correct": false},
      {"text": "Example obj = new Example();", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 10;\nint y = x++;\nstd::cout << x << y;",
    "options": [
      {"text": "110", "correct": true},
      {"text": "101", "correct": false},
      {"text": "11", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "Which of the following is not a valid data type in C++?",
    "options": [
      {"text": "bool", "correct": false},
      {"text": "string", "correct": false},
      {"text": "char[]", "correct": false},
      {"text": "double[]", "correct": true}
    ]
  },
  {
    "question": "What is the correct way to declare a structure named 'Person' in C++?",
    "options": [
      {"text": "struct Person { };", "correct": true},
      {"text": "Person { };", "correct": false},
      {"text": "class Person { };", "correct": false},
      {"text": "Person : struct { };", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 5;\nint *ptr = &x;\nstd::cout << ptr;",
    "options": [
      {"text": "Memory address of x", "correct": true},
      {"text": "5", "correct": false},
      {"text": "Garbage value", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'volatile' keyword in C++?",
    "options": [
      {"text": "To declare a variable as constant", "correct": false},
      {"text": "To optimize code for faster execution", "correct": false},
      {"text": "To indicate that the variable may change unexpectedly", "correct": true},
      {"text": "To declare a variable as non-modifiable", "correct": false}
    ]
  },
  {
    "question": "What does the 'new' operator do in C++?",
    "options": [
      {"text": "Allocate memory on the heap", "correct": true},
      {"text": "Create a new variable", "correct": false},
      {"text": "Allocate memory on the stack", "correct": false},
      {"text": "Call constructor of a class", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 10;\nstd::cout << x/3;",
    "options": [
      {"text": "3", "correct": true},
      {"text": "3.33", "correct": false},
      {"text": "3.0", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'break' statement in C++?",
    "options": [
      {"text": "To terminate the program", "correct": false},
      {"text": "To exit the current loop", "correct": true},
      {"text": "To skip the rest of the code in a loop", "correct": false},
      {"text": "To skip the current iteration of the loop", "correct": false}
    ]
  },
  {
    "question": "What is the correct way to declare a constant in C++?",
    "options": [
      {"text": "const int x = 10;", "correct": true},
      {"text": "int const x = 10;", "correct": false},
      {"text": "int x const = 10;", "correct": false},
      {"text": "int x = const 10;", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 5;\nint y = ++x;\nstd::cout << x << y;",
    "options": [
      {"text": "66", "correct": true},
      {"text": "55", "correct": false},
      {"text": "56", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'this' pointer in C++?",
    "options": [
      {"text": "To access the address of current object", "correct": true},
      {"text": "To access the address of current function", "correct": false},
      {"text": "To access the address of current class", "correct": false},
      {"text": "To access the address of current instance", "correct": false}
    ]
  },
  {
    "question": "Which of the following is not a valid access specifier in C++?",
    "options": [
      {"text": "private", "correct": false},
      {"text": "public", "correct": false},
      {"text": "protected", "correct": false},
      {"text": "global", "correct": true}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nchar str[] = \"Hello\";\nstd::cout << sizeof(str);",
    "options": [
      {"text": "6", "correct": true},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'delete' operator in C++?",
    "options": [
      {"text": "To deallocate memory allocated by 'new'", "correct": true},
      {"text": "To remove a file", "correct": false},
      {"text": "To delete a function", "correct": false},
      {"text": "To delete a variable", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 10;\nint *ptr = &x;\nstd::cout << *ptr++;",
    "options": [
      {"text": "10", "correct": true},
      {"text": "Memory address of x", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the correct way to initialize a constant variable in C++?",
    "options": [
      {"text": "const int x = 10;", "correct": true},
      {"text": "int const x = 10;", "correct": false},
      {"text": "int x = const 10;", "correct": false},
      {"text": "int x const = 10;", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'continue' statement in C++?",
    "options": [
      {"text": "To terminate the loop", "correct": false},
      {"text": "To exit the loop", "correct": false},
      {"text": "To skip the rest of the code in a loop and continue with the next iteration", "correct": true},
      {"text": "To restart the loop from the beginning", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 10;\nint *ptr = &x;\nstd::cout << *++ptr;",
    "options": [
      {"text": "Memory address of x", "correct": true},
      {"text": "10", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'inline' keyword in C++?",
    "options": [
      {"text": "To specify that a function should be expanded inline", "correct": true},
      {"text": "To declare a function as a member of a class", "correct": false},
      {"text": "To optimize the code for faster execution", "correct": false},
      {"text": "To specify that a function should be included from another file", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 10;\nint *ptr = &x;\nstd::cout << ++*ptr;",
    "options": [
      {"text": "11", "correct": true},
      {"text": "10", "correct": false},
      {"text": "Memory address of x", "correct": false},
      {"text": "Compiler error", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'try', 'catch', and 'throw' in C++?",
    "options": [
      {"text": "To handle exceptions", "correct": true},
      {"text": "To define a new class", "correct": false},
      {"text": "To allocate memory", "correct": false},
      {"text": "To terminate the program", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 10;\nint y = 20;\nint z = (x > y) ? x : y;\nstd::cout << z;",
    "options": [
      {"text": "20", "correct": true},
      {"text": "10", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'static' keyword in C++?",
    "options": [
      {"text": "To specify that a function should be included from another file", "correct": false},
      {"text": "To declare a function as a member of a class", "correct": false},
      {"text": "To specify that a variable or function is shared among all instances of a class", "correct": true},
      {"text": "To optimize the code for faster execution", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 5;\nint y = 0;\nif (x > 0)\n{\n    y = 10;\n}\nstd::cout << y;",
    "options": [
      {"text": "10", "correct": true},
      {"text": "0", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'const' keyword in C++?",
    "options": [
      {"text": "To specify that a variable cannot be changed", "correct": true},
      {"text": "To specify that a variable is constant", "correct": false},
      {"text": "To specify that a variable cannot be accessed", "correct": false},
      {"text": "To specify that a variable is shared among all instances of a class", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint arr[5];\nstd::cout << sizeof(arr);",
    "options": [
      {"text": "20", "correct": true},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'const' keyword in a function prototype in C++?",
    "options": [
      {"text": "To specify that the function cannot modify the parameters", "correct": true},
      {"text": "To specify that the function is constant", "correct": false},
      {"text": "To specify that the function cannot be called", "correct": false},
      {"text": "To specify that the function returns a constant value", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 5;\nint *ptr = &x;\nstd::cout << sizeof(ptr);",
    "options": [
      {"text": "4", "correct": true},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'const' keyword in C++?",
    "options": [
      {"text": "To specify that a variable cannot be changed", "correct": true},
      {"text": "To specify that a variable is constant", "correct": false},
      {"text": "To specify that a variable cannot be accessed", "correct": false},
      {"text": "To specify that a variable is shared among all instances of a class", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint arr[] = {1, 2, 3, 4, 5};\nstd::cout << sizeof(arr);",
    "options": [
      {"text": "20", "correct": true},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'typedef' keyword in C++?",
    "options": [
      {"text": "To create a new data type alias", "correct": true},
      {"text": "To define a new class", "correct": false},
      {"text": "To declare a function prototype", "correct": false},
      {"text": "To declare a variable", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 5;\nstd::cout << x << x++;",
    "options": [
      {"text": "55", "correct": true},
      {"text": "Compiler error", "correct": false},
      {"text": "56", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'const' keyword in C++?",
    "options": [
      {"text": "To specify that a variable cannot be changed", "correct": true},
      {"text": "To specify that a variable is constant", "correct": false},
      {"text": "To specify that a variable cannot be accessed", "correct": false},
      {"text": "To specify that a variable is shared among all instances of a class", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 5;\nint y = 0;\nif (x > 0)\n{\n    y = 10;\n}\nstd::cout << y;",
    "options": [
      {"text": "10", "correct": true},
      {"text": "0", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'const' keyword in C++?",
    "options": [
      {"text": "To specify that a variable cannot be changed", "correct": true},
      {"text": "To specify that a variable is constant", "correct": false},
      {"text": "To specify that a variable cannot be accessed", "correct": false},
      {"text": "To specify that a variable is shared among all instances of a class", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint arr[5];\nstd::cout << sizeof(arr);",
    "options": [
      {"text": "20", "correct": true},
      {"text": "5", "correct": false},
      {"text": "Compiler error", "correct": false},
      {"text": "Undefined behavior", "correct": false}
    ]
  },
  {
    "question": "What is the purpose of 'typedef' keyword in C++?",
    "options": [
      {"text": "To create a new data type alias", "correct": true},
      {"text": "To define a new class", "correct": false},
      {"text": "To declare a function prototype", "correct": false},
      {"text": "To declare a variable", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nint x = 5;\nstd::cout << x << x++;",
    "options": [
      {"text": "55", "correct": true},
      {"text": "Compiler error", "correct": false},
      {"text": "56", "correct": false},
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
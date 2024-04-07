const questions = 
[
  {
    "question": "What is the result of 3 + 5 * 2 in Java?",
    "options": [
      {"text": "13", "correct": false},
      {"text": "16", "correct": true},
      {"text": "11", "correct": false},
      {"text": "15", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(5 == 5.0) in Java?",
    "options": [
      {"text": "true", "correct": true},
      {"text": "false", "correct": false},
      {"text": "0", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 11 % 3 in Java?",
    "options": [
      {"text": "4", "correct": false},
      {"text": "2", "correct": true},
      {"text": "3", "correct": false},
      {"text": "0", "correct": false}
    ]
  },
  {
    "question": "Which keyword is used to define a constant in Java?",
    "options": [
      {"text": "const", "correct": false},
      {"text": "final", "correct": true},
      {"text": "static", "correct": false},
      {"text": "let", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println('a' + 'b' + 'c') in Java?",
    "options": [
      {"text": "'abc'", "correct": false},
      {"text": "6", "correct": false},
      {"text": "abc", "correct": true},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the value of x after the following code in Java?\nint x = 5;\nx += 3;",
    "options": [
      {"text": "5", "correct": false},
      {"text": "8", "correct": true},
      {"text": "3", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(Math.pow(2, 3)) in Java?",
    "options": [
      {"text": "6", "correct": false},
      {"text": "9", "correct": false},
      {"text": "8", "correct": true},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of (4 < 3) ? 'yes' : 'no' in Java?",
    "options": [
      {"text": "'yes'", "correct": false},
      {"text": "'no'", "correct": true},
      {"text": "true", "correct": false},
      {"text": "false", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println('Java'.substring(0, 2)) in Java?",
    "options": [
      {"text": "'Java'", "correct": false},
      {"text": "'Jav'", "correct": true},
      {"text": "'ava'", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "Which of the following is not a primitive data type in Java?",
    "options": [
      {"text": "int", "correct": false},
      {"text": "boolean", "correct": false},
      {"text": "string", "correct": true},
      {"text": "char", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(10/0) in Java?",
    "options": [
      {"text": "Compile error", "correct": false},
      {"text": "Infinity", "correct": true},
      {"text": "0", "correct": false},
      {"text": "Runtime error", "correct": false}
    ]
  },
  {
    "question": "What is the value of x after the following code in Java?\nint x = 10;\nx /= 3;",
    "options": [
      {"text": "3.333", "correct": false},
      {"text": "3", "correct": true},
      {"text": "4", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'Java'.indexOf('a') in Java?",
    "options": [
      {"text": "1", "correct": true},
      {"text": "2", "correct": false},
      {"text": "0", "correct": false},
      {"text": "-1", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(10 > 9 && 9 > 10) in Java?",
    "options": [
      {"text": "true", "correct": false},
      {"text": "false", "correct": true},
      {"text": "Compile error", "correct": false},
      {"text": "Runtime error", "correct": false}
    ]
  },
  {
    "question": "What will be printed by the following code in Java?\nint[] arr = {1, 2, 3, 4, 5};\nSystem.out.println(arr[5]);",
    "options": [
      {"text": "5", "correct": false},
      {"text": "IndexOutOfBoundsException", "correct": true},
      {"text": "Compile error", "correct": false},
      {"text": "0", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println('java'.toUpperCase()) in Java?",
    "options": [
      {"text": "'java'", "correct": false},
      {"text": "'JAVA'", "correct": true},
      {"text": "'Java'", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'hello'.compareTo('Hello') in Java?",
    "options": [
      {"text": "0", "correct": false},
      {"text": "1", "correct": true},
      {"text": "-1", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(Math.round(5.5)) in Java?",
    "options": [
      {"text": "5", "correct": true},
      {"text": "6", "correct": false},
      {"text": "6.0", "correct": false},
      {"text": "5.5", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'hello'.substring(0, 2) in Java?",
    "options": [
      {"text": "'he'", "correct": true},
      {"text": "'hel'", "correct": false},
      {"text": "'ell'", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(Math.min(Double.MIN_VALUE, 0.0)) in Java?",
    "options": [
      {"text": "0.0", "correct": true},
      {"text": "Double.MIN_VALUE", "correct": false},
      {"text": "Compile error", "correct": false},
      {"text": "Infinity", "correct": false}
    ]
  },
  {
    "question": "What is the value of x after the following code in Java?\nint x = 5;\nx++;",
    "options": [
      {"text": "5", "correct": false},
      {"text": "6", "correct": true},
      {"text": "4", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What will be printed by the following code in Java?\nint[] arr = new int[5];\nSystem.out.println(arr[0]);",
    "options": [
      {"text": "0", "correct": true},
      {"text": "null", "correct": false},
      {"text": "IndexOutOfBoundsException", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'java'.indexOf('v') in Java?",
    "options": [
      {"text": "0", "correct": false},
      {"text": "1", "correct": true},
      {"text": "2", "correct": false},
      {"text": "-1", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(5/2.0) in Java?",
    "options": [
      {"text": "2.0", "correct": false},
      {"text": "2", "correct": false},
      {"text": "2.5", "correct": true},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'java'.contains('a') in Java?",
    "options": [
      {"text": "true", "correct": true},
      {"text": "false", "correct": false},
      {"text": "Compile error", "correct": false},
      {"text": "Runtime error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(10 > 5 && 5 > 10) in Java?",
    "options": [
      {"text": "true", "correct": false},
      {"text": "false", "correct": true},
      {"text": "Compile error", "correct": false},
      {"text": "Runtime error", "correct": false}
    ]
  },
  {
    "question": "What will be printed by the following code in Java?\nString str = null;\nSystem.out.println(str.length());",
    "options": [
      {"text": "0", "correct": false},
      {"text": "NullPointerException", "correct": true},
      {"text": "null", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(Math.ceil(5.5)) in Java?",
    "options": [
      {"text": "5", "correct": false},
      {"text": "6", "correct": true},
      {"text": "6.0", "correct": false},
      {"text": "5.5", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'Java'.toLowerCase() in Java?",
    "options": [
      {"text": "'Java'", "correct": false},
      {"text": "'java'", "correct": true},
      {"text": "'JAVA'", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(10/0.0) in Java?",
    "options": [
      {"text": "Compile error", "correct": false},
      {"text": "Infinity", "correct": true},
      {"text": "0.0", "correct": false},
      {"text": "Runtime error", "correct": false}
    ]
  },
  {
    "question": "What is the value of x after the following code in Java?\nint x = 5;\nx--;",
    "options": [
      {"text": "5", "correct": false},
      {"text": "4", "correct": true},
      {"text": "6", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What will be printed by the following code in Java?\nString str = 'Hello';\nSystem.out.println(str.charAt(5));",
    "options": [
      {"text": "o", "correct": false},
      {"text": "NullPointerException", "correct": false},
      {"text": "IndexOutOfBoundsException", "correct": true},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'hello'.toUpperCase() in Java?",
    "options": [
      {"text": "'hello'", "correct": false},
      {"text": "'HELLO'", "correct": true},
      {"text": "'Hello'", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(3 * 4 / 2) in Java?",
    "options": [
      {"text": "6", "correct": true},
      {"text": "12", "correct": false},
      {"text": "7", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'Java'.length() in Java?",
    "options": [
      {"text": "5", "correct": true},
      {"text": "4", "correct": false},
      {"text": "Compile error", "correct": false},
      {"text": "Runtime error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println('java'.indexOf('v', 1)) in Java?",
    "options": [
      {"text": "0", "correct": false},
      {"text": "1", "correct": true},
      {"text": "2", "correct": false},
      {"text": "-1", "correct": false}
    ]
  },
  {
    "question": "What is the value of x after the following code in Java?\nint x = 5;\nx *= 2;",
    "options": [
      {"text": "10", "correct": true},
      {"text": "7", "correct": false},
      {"text": "6", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What will be printed by the following code in Java?\nint[] arr = new int[5];\nSystem.out.println(arr[5]);",
    "options": [
      {"text": "5", "correct": false},
      {"text": "IndexOutOfBoundsException", "correct": true},
      {"text": "Compile error", "correct": false},
      {"text": "0", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(5 > 3 || 5 > 10) in Java?",
    "options": [
      {"text": "true", "correct": true},
      {"text": "false", "correct": false},
      {"text": "Compile error", "correct": false},
      {"text": "Runtime error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'Java'.concat(' is fun') in Java?",
    "options": [
      {"text": "'Java is fun'", "correct": true},
      {"text": "'Java fun'", "correct": false},
      {"text": "' is fun Java'", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(Math.floor(5.5)) in Java?",
    "options": [
      {"text": "5", "correct": true},
      {"text": "6", "correct": false},
      {"text": "6.0", "correct": false},
      {"text": "5.5", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'hello'.charAt(0) in Java?",
    "options": [
      {"text": "'h'", "correct": true},
      {"text": "'e'", "correct": false},
      {"text": "0", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(5/0) in Java?",
    "options": [
      {"text": "Compile error", "correct": false},
      {"text": "Infinity", "correct": false},
      {"text": "0", "correct": false},
      {"text": "Runtime error", "correct": true}
    ]
  },
  {
    "question": "What is the value of x after the following code in Java?\nint x = 5;\nx--;",
    "options": [
      {"text": "5", "correct": false},
      {"text": "4", "correct": true},
      {"text": "6", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What will be printed by the following code in Java?\nString str = 'Hello';\nSystem.out.println(str.charAt(5));",
    "options": [
      {"text": "o", "correct": false},
      {"text": "NullPointerException", "correct": false},
      {"text": "IndexOutOfBoundsException", "correct": true},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'hello'.toUpperCase() in Java?",
    "options": [
      {"text": "'hello'", "correct": false},
      {"text": "'HELLO'", "correct": true},
      {"text": "'Hello'", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println(3 * 4 / 2) in Java?",
    "options": [
      {"text": "6", "correct": true},
      {"text": "12", "correct": false},
      {"text": "7", "correct": false},
      {"text": "Compile error", "correct": false}
    ]
  },
  {
    "question": "What is the result of 'Java'.length() in Java?",
    "options": [
      {"text": "5", "correct": true},
      {"text": "4", "correct": false},
      {"text": "Compile error", "correct": false},
      {"text": "Runtime error", "correct": false}
    ]
  },
  {
    "question": "What is the output of System.out.println('java'.indexOf('v', 1)) in Java?",
    "options": [
      {"text": "0", "correct": false},
      {"text": "1", "correct": true},
      {"text": "2", "correct": false},
      {"text": "-1", "correct": false}
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
const questions = 
[
  {
    "question": "What is the output of the following code?\n\nx = 5\nx += 3\nprint(x)",
    "options": [
      {"text": "5", "correct": false},
      {"text": "8", "correct": true},
      {"text": "3", "correct": false},
      {"text": "15", "correct": false}
    ]
  },
  {
    "question": "What will be the output of the following code snippet?\n\nprint('hello' * 3)",
    "options": [
      {"text": "'hellohellohello'", "correct": true},
      {"text": "'hello'", "correct": false},
      {"text": "'hellohello'", "correct": false},
      {"text": "'hellohellohellohello'", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\na = [1, 2, 3]\nb = a\na.append(4)\nprint(b)",
    "options": [
      {"text": "[1, 2, 3]", "correct": false},
      {"text": "[1, 2, 3, 4]", "correct": true},
      {"text": "[1, 2, 3, 4]", "correct": false},
      {"text": "[1, 2, 3]", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nprint(len(range(0, 10, -1)))",
    "options": [
      {"text": "10", "correct": false},
      {"text": "9", "correct": false},
      {"text": "0", "correct": true},
      {"text": "1", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = '5'\nprint(x * 3)",
    "options": [
      {"text": "'555'", "correct": true},
      {"text": "15", "correct": false},
      {"text": "'5'*3", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = 'hello'\nprint(x[10:])",
    "options": [
      {"text": "''", "correct": true},
      {"text": "IndexError", "correct": false},
      {"text": "'o'", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x[3:])",
    "options": [
      {"text": "[]", "correct": true},
      {"text": "[3]", "correct": false},
      {"text": "IndexError", "correct": false},
      {"text": "[1, 2, 3]", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x[0:10])",
    "options": [
      {"text": "[1, 2, 3]", "correct": true},
      {"text": "[1, 2, 3, 1, 2, 3, 1, 2, 3, 1]", "correct": false},
      {"text": "IndexError", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = ['a', 'b', 'c']\ny = x\nx[0] = 'z'\nprint(y)",
    "options": [
      {"text": "['a', 'b', 'c']", "correct": false},
      {"text": "['z', 'b', 'c']", "correct": true},
      {"text": "['a', 'b', 'c', 'z']", "correct": false},
      {"text": "['z', 'b', 'c', 'z']", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = [1, 2, 3]\nx = x[-1:]\nprint(x)",
    "options": [
      {"text": "[3]", "correct": true},
      {"text": "[1, 2]", "correct": false},
      {"text": "[]", "correct": false},
      {"text": "[2, 3]", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x[-1:-2])",
    "options": [
      {"text": "[]", "correct": true},
      {"text": "[3]", "correct": false},
      {"text": "[2]", "correct": false},
      {"text": "[3, 2]", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = [1, 2, 3]\nx += [4, 5]\nprint(x)",
    "options": [
      {"text": "[1, 2, 3, 4, 5]", "correct": true},
      {"text": "[1, 2, 3, [4, 5]]", "correct": false},
      {"text": "[1, 2, 3, 4], [5]", "correct": false},
      {"text": "[1, 2, 3], [4, 5]", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = [1, 2, 3]\nx.extend([4, 5])\nprint(x)",
    "options": [
      {"text": "[1, 2, 3, 4, 5]", "correct": true},
      {"text": "[1, 2, 3, [4, 5]]", "correct": false},
      {"text": "[1, 2, 3, 4], [5]", "correct": false},
      {"text": "[1, 2, 3], [4, 5]", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = 'hello'\ny = x[:2] + 'p' + x[3:]\nprint(y)",
    "options": [
      {"text": "'helpo'", "correct": true},
      {"text": "'help'", "correct": false},
      {"text": "'hollo'", "correct": false},
      {"text": "'heppo'", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = 'hello'\nprint(x.find('l'))",
    "options": [
      {"text": "2", "correct": true},
      {"text": "3", "correct": false},
      {"text": "1", "correct": false},
      {"text": "-1", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = 'hello'\nprint(x.index('l'))",
    "options": [
      {"text": "2", "correct": true},
      {"text": "3", "correct": false},
      {"text": "1", "correct": false},
      {"text": "-1", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = 'hello'\nprint(x.replace('l', 'p'))",
    "options": [
      {"text": "'heppo'", "correct": true},
      {"text": "'hello'", "correct": false},
      {"text": "'heppo'", "correct": false},
      {"text": "'helpo'", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = 'hello'\nprint(x.split('e'))",
    "options": [
      {"text": "['h', 'llo']", "correct": true},
      {"text": "['hello']", "correct": false},
      {"text": "['h', 'e', 'l', 'l', 'o']", "correct": false},
      {"text": "['h', 'ell', 'o']", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = 'hello'\nprint(x.startswith('he'))",
    "options": [
      {"text": "True", "correct": true},
      {"text": "False", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "None", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = 'hello'\nprint(x.upper())",
    "options": [
      {"text": "'HELLO'", "correct": true},
      {"text": "'hello'", "correct": false},
      {"text": "'hEllo'", "correct": false},
      {"text": "'heLLo'", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = 'hello'\nprint(x.strip('h'))",
    "options": [
      {"text": "'ello'", "correct": true},
      {"text": "'hello'", "correct": false},
      {"text": "'h'", "correct": false},
      {"text": "'helloh'", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = 'hello'\nprint(x[::-1])",
    "options": [
      {"text": "'olleh'", "correct": true},
      {"text": "'hello'", "correct": false},
      {"text": "'olle'", "correct": false},
      {"text": "'oleh'", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = 'hello'\nprint(x[1:])",
    "options": [
      {"text": "'ello'", "correct": true},
      {"text": "'h'", "correct": false},
      {"text": "'hell'", "correct": false},
      {"text": "'olleh'", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x.pop())",
    "options": [
      {"text": "3", "correct": true},
      {"text": "1", "correct": false},
      {"text": "2", "correct": false},
      {"text": "[1, 2]", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x.pop(0))",
    "options": [
      {"text": "1", "correct": true},
      {"text": "3", "correct": false},
      {"text": "2", "correct": false},
      {"text": "[2, 3]", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nx.remove(2)\nprint(x)",
    "options": [
      {"text": "[1, 3]", "correct": true},
      {"text": "[1, 2, 3]", "correct": false},
      {"text": "[1, 3, 2]", "correct": false},
      {"text": "[2, 3]", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nx.reverse()\nprint(x)",
    "options": [
      {"text": "[3, 2, 1]", "correct": true},
      {"text": "[1, 2, 3]", "correct": false},
      {"text": "[3, 1, 2]", "correct": false},
      {"text": "[2, 1, 3]", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nx.sort()\nprint(x)",
    "options": [
      {"text": "[1, 2, 3]", "correct": true},
      {"text": "[3, 2, 1]", "correct": false},
      {"text": "[1, 3, 2]", "correct": false},
      {"text": "[2, 1, 3]", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint(x.get('c', 3))",
    "options": [
      {"text": "3", "correct": true},
      {"text": "None", "correct": false},
      {"text": "'c'", "correct": false},
      {"text": "'3'", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint(x.keys())",
    "options": [
      {"text": "dict_keys(['a', 'b'])", "correct": true},
      {"text": "['a', 'b']", "correct": false},
      {"text": "('a', 'b')", "correct": false},
      {"text": "dict_values([1, 2])", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint(x.values())",
    "options": [
      {"text": "dict_values([1, 2])", "correct": true},
      {"text": "['a', 'b']", "correct": false},
      {"text": "('a', 'b')", "correct": false},
      {"text": "dict_keys(['a', 'b'])", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint(x.items())",
    "options": [
      {"text": "dict_items([('a', 1), ('b', 2)])", "correct": true},
      {"text": "['a', 'b']", "correct": false},
      {"text": "('a', 'b')", "correct": false},
      {"text": "dict_values([1, 2])", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = {'a': 1, 'b': 2}\ny = x\nx['a'] = 3\nprint(y)",
    "options": [
      {"text": "{'a': 3, 'b': 2}", "correct": true},
      {"text": "{'a': 1, 'b': 2}", "correct": false},
      {"text": "{'a': 3, 'b': 3}", "correct": false},
      {"text": "{'a': 1, 'b': 3}", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = {'a': 1, 'b': 2}\ny = x.copy()\nx['a'] = 3\nprint(y)",
    "options": [
      {"text": "{'a': 1, 'b': 2}", "correct": true},
      {"text": "{'a': 3, 'b': 2}", "correct": false},
      {"text": "{'a': 3, 'b': 3}", "correct": false},
      {"text": "{'a': 1, 'b': 3}", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint(x.pop('a'))",
    "options": [
      {"text": "1", "correct": true},
      {"text": "2", "correct": false},
      {"text": "{'a': 1}", "correct": false},
      {"text": "'a'", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint(x.popitem())",
    "options": [
      {"text": "('b', 2)", "correct": true},
      {"text": "('a', 1)", "correct": false},
      {"text": "{'a': 1}", "correct": false},
      {"text": "{'b': 2}", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nx.clear()\nprint(x)",
    "options": [
      {"text": "{}", "correct": true},
      {"text": "{'a': 1, 'b': 2}", "correct": false},
      {"text": "None", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = {'a': 1, 'b': 2}\nx.update({'a': 3, 'c': 4})\nprint(x)",
    "options": [
      {"text": "{'a': 3, 'b': 2, 'c': 4}", "correct": true},
      {"text": "{'a': 3, 'b': 2}", "correct": false},
      {"text": "{'a': 1, 'b': 2, 'c': 4}", "correct": false},
      {"text": "{'a': 1, 'b': 2, 'c': 4}", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = {'a': 1, 'b': 2}\nx.setdefault('c', 3)\nprint(x)",
    "options": [
      {"text": "{'a': 1, 'b': 2, 'c': 3}", "correct": true},
      {"text": "{'a': 1, 'b': 2}", "correct": false},
      {"text": "{'a': 1, 'b': 2, 'c': 1}", "correct": false},
      {"text": "{'a': 1, 'b': 2, 'c': None}", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = {'a': 1, 'b': 2}\nx.setdefault('a', 3)\nprint(x)",
    "options": [
      {"text": "{'a': 1, 'b': 2}", "correct": true},
      {"text": "{'a': 3, 'b': 2}", "correct": false},
      {"text": "{'a': 1, 'b': 2, 'a': 3}", "correct": false},
      {"text": "{'a': 1, 'b': 2, 'a': None}", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x.__len__())",
    "options": [
      {"text": "3", "correct": true},
      {"text": "1", "correct": false},
      {"text": "2", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = (1, 2, 3)\nprint(len(x))",
    "options": [
      {"text": "3", "correct": true},
      {"text": "1", "correct": false},
      {"text": "2", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x.__getitem__(1))",
    "options": [
      {"text": "2", "correct": true},
      {"text": "1", "correct": false},
      {"text": "3", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x[1])",
    "options": [
      {"text": "2", "correct": true},
      {"text": "1", "correct": false},
      {"text": "3", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = (1, 2, 3)\nprint(x[1])",
    "options": [
      {"text": "2", "correct": true},
      {"text": "1", "correct": false},
      {"text": "3", "correct": false},
      {"text": "Error", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint(x.__contains__('a'))",
    "options": [
      {"text": "True", "correct": true},
      {"text": "False", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "None", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint('a' in x)",
    "options": [
      {"text": "True", "correct": true},
      {"text": "False", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "None", "correct": false}
    ]
  },
  {
    "question": "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint('c' in x)",
    "options": [
      {"text": "False", "correct": true},
      {"text": "True", "correct": false},
      {"text": "Error", "correct": false},
      {"text": "None", "correct": false}
    ]
  },
  {
    "question": "What does the following code output?\n\nx = {'a': 1, 'b': 2}\ny = x\nx['a'] = 3\nprint(y)",
    "options": [
      {"text": "{'a': 3, 'b': 2}", "correct": true},
      {"text": "{'a': 1, 'b': 2}", "correct": false},
      {"text": "{'a': 3, 'b': 3}", "correct": false},
      {"text": "{'a': 1, 'b': 3}", "correct": false}
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
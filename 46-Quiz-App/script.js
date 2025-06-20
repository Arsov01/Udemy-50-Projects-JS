const quizQuestions = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",

    correctAnswer: "c",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    a: "Venus",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",

    correctAnswer: "b",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Vincent van Gogh",
    b: "Pablo Picasso",
    c: "Leonardo da Vinci",
    d: "Michelangelo",

    correctAnswer: "c",
  },
  {
    question: "What is the largest mammal in the world?",
    a: "Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Polar Bear",

    correctAnswer: "b",
  },
  {
    question: "Which language is used primarily for web development?",

    a: "Python",
    b: "Java",
    c: "C++",
    d: "JavaScript",

    correctAnswer: "d",
  },
];

const quiz = document.querySelector("#quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a-text");
const b_text = document.querySelector("#b-text");
const c_text = document.querySelector("#c-text");
const d_text = document.querySelector("#d-text");

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizQuestions[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.value;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizQuestions[currentQuiz].correctAnswer) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizQuestions.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizQuestions.length} questions correct</h2>
            
            <button onclick="location.reload()">Reload </button>
        `;
    }
  }
});

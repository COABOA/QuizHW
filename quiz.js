
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
      question: "What synthesizer was Dilla's go-to for synth chords and sound effects?",
      choice1: "Mini Moog",
      choice2: "Fender Rhodes",
      choice3: "Yamaha RX7",
      choice4: "Korg Electribe",
      answer: 1
    },
  
  { question:"What American city was J Dilla born and raised?",
      choice1: "Los Angeles",
      choice2: "Detroit",
      choice3: "Baltimore",
      choice4: "New York",
      answer: 2
    },
      
  
  {
      question: " Who was J Dilla's mentor and production group partner?",
      choice1: "Pete Rock",
      choice2: "Dr. Dre",
      choice3: "Q-Tip",
      choice4: "Kanye West",
       answer: 3
      },
  
  
{ question: "What was the name of J Dilla's rap group?",
        choice1: "M.O.P",
        choice2: "ShittyBoyz",
        choice3: "Mob Figahz",
        choice4: "Slum Village",
        answer: 4
        
}  
];  
  

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  console.log(availableQuesions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  console.log(availableQuesions);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    getNewQuestion();
  });
});

startGame();  
  
  
  
 

  



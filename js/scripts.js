// Declaração de variaveis
const question = document.querySelector("#question");
const answerBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a","b","c","d"];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
    {
        "question": "Qual a primeira seleção a ser campeã da Copa do Mundo?",
        "answers": [
            {
                "answer": "Argentina",
                "correct": false
            },
            {
                "answer": "Inglaterra",
                "correct": false
            },
            {
                "answer": "Alemanha",
                "correct": false
            },
            {
                "answer": "Uruguai",
                "correct": true
            }
        ]
    },
    {
        "question": "Qual clube é o maior vencedor Da Liga dos Campeões da Europa?",
        "answers": [
            {
                "answer": "Manchester United",
                "correct": false
            },
            {
                "answer": "Bayern München",
                "correct": false
            },
            {
                "answer": "Real Madrid",
                "correct": true
            },
            {
                "answer": "Liverpool",
                "correct": false
            }
        ]
    },
    {
        "question": "Qual o maior artilheiro da história das copas?",
        "answers": [
            {
                "answer": "Miroslav Klose",
                "correct": true
            },
            {
                "answer": "Pelé",
                "correct": false
            },
            {
                "answer": "Ronaldo",
                "correct": false
            },
            {
                "answer": "Messi",
                "correct": false
            }
        ]
    }
]

// Substituição do quizz para a primeria pergunta
function init() {
    // criar a primeira pergunta
    createQuestion(0);
  }
  
  // Cria uma pergunta
  function createQuestion(i) {
  
    // Limpar a questão anterior
    const oldButtons = answerBox.querySelectorAll("button");
  
    oldButtons.forEach(function(btn) {
      btn.remove();
    });

    // Alterar o texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

}
// Inicialização do quizz
init();
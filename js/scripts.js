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

    // Insere as alternativas
    questions[i].answers.forEach(function(answer, i) {
        
        // Cria o template do botão do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        // Remover hide e template class
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        // Inserir a alternativa na tela
        answerBox.appendChild(answerTemplate);

        // Inserir um evento de click no botão 
        answerTemplate.addEventListener("click", function() {
            checkAnswer(this);
        });
    });

    // Incrementar o número da questão
    actualQuestion++;
}

// Verificando resposta do usuario
function checkAnswer(btn) {
    console.log(btn);

    // selecionar todos botões
    const buttons = answerBox.querySelectorAll("button");

    // verifica se a resposta está correta e adiciona classes nos botões
    buttons.forEach(function(button) {
        
        if(button.getAttribute("correct-answer") === "true") {

            button.classList.add("correct-answer");

            // checa se o usuário acertou a pergunta
            if(btn === button) {
                // incremento dos pontos
                points++;
            }

        } else {
            button.classList.add("wrong-answer");
        }
    });

    // Exibir próxima pergunta
    nextQuestion();
}

// Exibe a próxima pergunta do quizz
function nextQuestion() {
    // timer para usuário ver as respostas
    setTimeout(function() {

        // Verifica se ainda há perguntas
        if(actualQuestion >= questions.length) {
            // apresenta a mensagem de sucesso
        }

        createQuestion(actualQuestion);

    }, 1500)
}
// Inicialização do quizz
init();
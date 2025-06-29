// Base de données des questions
const quizData = {
  histoire: {
    title: " Histoire de Madagascar",
    questions: [
      {
        question: "Quel est l'ancien nom de Madagascar ?",
        answers: [
          "A - L'île Rouge",
          "B - L'île Bourbon",
          "C - L'île Maurice",
          "D - L'île Verte",
        ],
        correct: 3,
      },
      {
        question: "Qui étaient les premiers habitants de Madagascar ?",
        answers: [
          "A - Les Français",
          "B - Les Malgaches",
          "C - Les Portugais",
          "D - Les Anglais",
        ],
        correct: 1,
      },
      {
        question: "En quelle année Madagascar est-elle devenue indépendante ?",
        answers: ["A - 1958", "B - 1960", "C - 1962", "D - 1965"],
        correct: 1,
      },
      {
        question: "Quel peuple a colonisé Madagascar ?",
        answers: [
          "A - Les Anglais",
          "B - Les Portugais",
          "C - Les Français",
          "D - Les Espagnols",
        ],
        correct: 2,
      },
      {
        question: "Comment appelle-t-on les rois et reines de Madagascar ?",
        answers: ["A - Mpanjaka", "B - Maharaja", "C - Sultan", "D - Empereur"],
        correct: 0,
      },
      {
        question:
          "Quelle reine célèbre a régné sur Madagascar au 19ème siècle ?",
        answers: [
          "A - Ranavalona I",
          "B - Cléopâtre",
          "C - Marie-Antoinette",
          "D - Victoria",
        ],
        correct: 0,
      },
      {
        question: "Nous sommes en ... république",
        answers: ["A - 2ème", "B - 3ème", "C - 4ème", "D - 6ème"],
        correct: 2,
      },
      {
        question: "Quel explorateur portugais a découvert Madagascar ?",
        answers: [
          "A - Vasco de Gama",
          "B - Diego Dias",
          "C - Bartolomeu Dias",
          "D - Magellan",
        ],
        correct: 1,
      },
      {
        question: "Quand les pirates ont-ils vécu à Madagascar ?",
        answers: [
          "A - Au 15ème siècle",
          "B - Au 17ème siècle",
          "C - Au 19ème siècle",
          "D - Au 20ème siècle",
        ],
        correct: 1,
      },
      {
        question: "Quel était le royaume le plus puissant de Madagascar ?",
        answers: [
          "A - Le royaume Merina",
          "B - Le royaume Sakalava",
          "C - Le royaume Betsileo",
          "D - Le royaume Antandroy",
        ],
        correct: 0,
      },
      {
        question: "Madagascar a été colonisé par : ",
        answers: [
          "A - L'Angleterre",
          "B - Le Portugal",
          "C - La France",
          "D - L'Espagne",
        ],
        correct: 2,
      },
    ],
  },
  geographie: {
    title: " Géographie de Madagascar",
    questions: [
      {
        question: "La capitale de Madagascar est : ",
        answers: [
          "A - Toamasina",
          "B - Antananarivo",
          "C - Mahajanga",
          "D - Fianarantsoa",
        ],
        correct: 1,
      },
      {
        question: "Madagascar est séparée de l'Afrique par quel canal ?",
        answers: [
          "A - Canal de Suez",
          "B - Canal du Mozambique",
          "C - Canal de Panama",
          "D - Canal de Madagascar",
        ],
        correct: 1,
      },
      {
        question: "Quel est le plus haut sommet de Madagascar ?",
        answers: [
          "A - Maromokotro",
          "B - Ankaratra",
          "C - Tsaratanana",
          "D - Andringitra",
        ],
        correct: 0,
      },
      {
        question: "Madagascar est la ... plus grande île du monde ?",
        answers: ["A - 2ème", "B - 3ème", "C - 4ème", "D - 5ème"],
        correct: 2,
      },
      {
        question: "Quel fleuve traverse la capitale ?",
        answers: [
          "A - Ikopa",
          "B - Betsiboka",
          "C - Tsiribihina",
          "D - Mangoky",
        ],
        correct: 0,
      },
      {
        question: "Quelle est la saison sèche à Madagascar ?",
        answers: [
          "A - Janvier à Mars",
          "B - Avril à Octobre",
          "C - Novembre à Décembre",
          "D - Toute l'année",
        ],
        correct: 1,
      },
      {
        question: "Quel est la superficie de Madagascar ?",
        answers: [
          "A - 5 590 000 km²",
          "B - 375 000km²",
          "C - 445 002 km²",
          "D - 587 000 km²",
        ],
        correct: 3,
      },
      {
        question: "Madagascar a la forme de :",
        answers: ["A - mange", "B - rond", "C - pied droit", "D - pied gauche"],
        correct: 3,
      },
      {
        question: "Quel océan entoure Madagascar ?",
        answers: [
          "A - Océan Atlantique",
          "B - Océan Pacifique",
          "C - Océan Indien",
          "D - Océan Arctique",
        ],
        correct: 2,
      },
      {
        question: "Comment appelle-t-on les hauts plateaux de Madagascar ?",
        answers: [
          "A- Les Hautes Terres",
          "B - Les Montagnes Rouges",
          "C - Le Plateau Central",
          "D - Les Collines Sacrées",
        ],
        correct: 0,
      },
      {
        question: "Le plus grand port de Madagascar se situe à :  ",
        answers: [
          "A - Antananarivo",
          "B - Toamasina",
          "C - Mahajanga",
          "D - Toliara",
        ],
        correct: 1,
      },
      {
        question: "Quel type de climat a Madagascar ?",
        answers: [
          "A - Désertique",
          "B - Tropical",
          "C - Tempéré",
          "D - Polaire",
        ],
        correct: 1,
      },
    ],
  },
  culture: {
    title: " Culture Malgache",
    questions: [
      {
        question: "Comment appelle-t-on les habitants de Madagascar ?",
        answers: [
          "A - Madagascarien",
          "B - Madagois",
          "C - Malagasy",
          "D - Français",
        ],
        correct: 2,
      },
      {
        question: "Comment dit-on 'bonjour' en malgache ?",
        answers: ["A - Salama", "B - Misaotra", "C - Veloma", "D - Azafady"],
        correct: 0,
      },
      {
        question: "Quel animal est endémique à Madagascar ?",
        answers: [
          "A - L'éléphant",
          "B - Le lémurien",
          "C - Le lion",
          "D - Le zèbre",
        ],
        correct: 1,
      },
      {
        question: "Comment appelle-t-on la musique traditionnelle malgache ?",
        answers: ["A - Sega", "B - Hira gasy", "C - Salegy", "D - Tsapiky"],
        correct: 1,
      },
      {
        question: "Quel est le plat typique de Madagascar ?",
        answers: [
          "A - Le ravitoto",
          "B - Le couscous",
          "C - Le riz cantonnais",
          "D - La ratatouille",
        ],
        correct: 0,
      },
      {
        question: "Comment dit-on 'merci' en malgache ?",
        answers: ["A - Salama", "B - Misaotra", "C - Veloma", "D - Azafady"],
        correct: 1,
      },
      {
        question: "Quelle cérémonie traditionnelle honore les ancêtres ?",
        answers: [
          "A - Le famadihana",
          "B - Le mariage",
          "C - Le fanambadiana",
          "D - Le forazaza",
        ],
        correct: 0,
      },
      {
        question: "Quel instrument de musique est typique de Madagascar ?",
        answers: [
          "A - La guitare",
          "B - Le piano",
          "C - La valiha",
          "D - Le violon",
        ],
        correct: 2,
      },
      {
        question:
          "Combien y a-t-il de groupes ethniques principaux à Madagascar ?",
        answers: ["A - 12", "B - 18", "C - 24", "D - 30"],
        correct: 1,
      },
      {
        question: "Comment appelle-t-on les tombeaux traditionnels malgaches ?",
        answers: ["A - ranobe", "B - Kibory", "C - Rova", "D - Lapa"],
        correct: 1,
      },
    ],
  },
  personnalites: {
    title: " Personnalités de Madagascar",
    questions: [
      {
        question: "Qui était le premier président de Madagascar ?",
        answers: [
          "A - Didier Ratsiraka",
          "B - Philibert Tsiranana",
          "C - Albert Zafy",
          "D - Marc Ravalomanana",
        ],
        correct: 1,
      },
      {
        question: "Quelle reine malgache était surnommée 'la reine cruelle' ?",
        answers: [
          "A - Ranavalona II",
          "B - Ranavalona I",
          "C - Ranavalona III",
          "D - Rasoherina",
        ],
        correct: 1,
      },
      {
        question: "Qui était le roi qui a unifié Madagascar ?",
        answers: [
          "A - Andrianampoinimerina",
          "B - Radama I",
          "C - Andriamasinavalona",
          "D - Ralambo",
        ],
        correct: 0,
      },
      {
        question: "Quel président malgache était surnommé 'le Sage' ?",
        answers: [
          "A - Philibert Tsiranana",
          "B - Didier Ratsiraka",
          "C - Albert Zafy",
          "D - Hery Rajaonarimampianina",
        ],
        correct: 0,
      },
      {
        question: "Qui était la dernière reine de Madagascar ?",
        answers: [
          "A - Ranavalona I",
          "B - Ranavalona II",
          "C - Ranavalona III",
          "D - Rasoherina",
        ],
        correct: 2,
      },
      {
        question: "Quel roi malgache a ouvert Madagascar aux Européens ?",
        answers: [
          "A - Andrianampoinimerina",
          "B - Radama I",
          "C - Radama II",
          "D - Rainilaiarivony",
        ],
        correct: 1,
      },
      {
        question:
          "Qui était le Premier ministre le plus puissant du royaume de Madagascar ?",
        answers: [
          "A - Rainilaiarivony",
          "B - Rainivoninahitriniony",
          "C - Raharo",
          "D - Rainiharo",
        ],
        correct: 0,
      },
      {
        question: "Quel président a dirigé Madagascar le plus longtemps ?",
        answers: [
          "A - Philibert Tsiranana",
          "B - Didier Ratsiraka",
          "C - Marc Ravalomanana",
          "D - Andry Rajoelina",
        ],
        correct: 1,
      },
      {
        question: "Qui est le président actuel de Madagascar?",
        answers: [
          "A - Marc Ravalomanana",
          "B - Didier Ratsiraka",
          "C - Zafy Albert",
          "D - Andry Rajoelina",
        ],
        correct: 3,
      },
      {
        question: "Quelle reine a introduit le christianisme à Madagascar ?",
        answers: [
          "A - Ranavalona I",
          "B - Ranavalona II",
          "C - Ranavalona III",
          "D - Rasoherina",
        ],
        correct: 1,
      },
    ],
  },
};

// Variables globales
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

// Fonctions principales
function startQuiz(category) {
  currentQuiz = category;
  currentQuestionIndex = 0;
  score = 0;

  // Mélanger les questions et en prendre 10
  const allQuestions = [...quizData[category].questions];
  selectedQuestions = shuffleArray(allQuestions).slice(0, 10);

  document.getElementById("off").classList.add("page");
  showPage("quiz-page");
  updateQuizHeader();
  showQuestion();
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function updateQuizHeader() {
  document.getElementById("quiz-title").textContent =
    quizData[currentQuiz].title;
  document.getElementById("score").textContent = score;
  document.getElementById("current-question").textContent =
    currentQuestionIndex + 1;
  document.getElementById("total-questions").textContent =
    selectedQuestions.length;

  const progress = (currentQuestionIndex / selectedQuestions.length) * 100;
  document.getElementById("progress").style.width = progress + "%";
}

function showQuestion() {
  const question = selectedQuestions[currentQuestionIndex];
  document.getElementById("question-text").textContent = question.question;

  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.onclick = () => selectAnswer(index);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const question = selectedQuestions[currentQuestionIndex];
  const answerButtons = document.querySelectorAll(".answer-btn");

  // Désactiver tous les boutons
  answerButtons.forEach((btn) => {
    btn.classList.add("disabled");
    btn.onclick = null;
  });

  // Marquer la bonne et mauvaise réponse
  answerButtons[question.correct].classList.add("correct");
  if (selectedIndex !== question.correct) {
    answerButtons[selectedIndex].classList.add("incorrect");
  } else {
    score++;
    document.getElementById("score").textContent = score;
  }

  // Passer à la question suivante après 1 et demi secondes
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
      updateQuizHeader();
      showQuestion();
    } else {
      showResults();
    }
  }, 1500);
}

function showResults() {
  document.getElementById("final-score").textContent = score;

  let message = "";
  if (score >= 9) {
    message = " Excellent ! Tu es un vrai expert de Madagascar !";
  } else if (score >= 7) {
    message = `Très bien ! Tu connais bien Madagascar !`;
  } else if (score >= 5) {
    message = "Pas mal ! Continue à apprendre sur Madagascar !";
  } else {
    message =
      "Continue tes efforts ! Madagascar n'a plus de secrets pour toi !";
  }
  document.getElementById("score-message").textContent = message;
  showPage("results-page");
}

function goHome() {
  showPage("home-page");
  currentQuiz = null;
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("off").classList.add("active");
}

function restartQuiz() {
  if (currentQuiz) {
    startQuiz(currentQuiz);
  }
}

// Initialisation
document.addEventListener("DOMContentLoaded", function () {
  showPage("home-page");
});

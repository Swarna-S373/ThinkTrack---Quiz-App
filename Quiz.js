const quizState = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    timeLeft: 0,
    timerInterval: null,
    TIME_LIMIT: 15,
    PENALTY_TIME: 5,
};

const questionBank = {
    "Web Development": [{
        questionText: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Machine Language"],
        correctAnswer: "Hyper Text Markup Language"
    }, {
        questionText: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS", "XML"],
        correctAnswer: "CSS"
    }, {
        questionText: "Which is not a JavaScript Framework?",
        choices: ["Angular", "React", "Vue", "Django"],
        correctAnswer: "Django"
    }, {
        questionText: "What tag surrounds JavaScript code in HTML?",
        choices: ["<script>", "<js>", "<javascript>", "<code>"],
        correctAnswer: "<script>"
    }, {
        questionText: "Which company developed React?",
        choices: ["Google", "Facebook", "Microsoft", "Apple"],
        correctAnswer: "Facebook"
    }, {
        questionText: "CSS uses which property to change text color?",
        choices: ["color", "font-color", "text-style", "text-color"],
        correctAnswer: "color"
    }, {
        questionText: "What does DOM stand for?",
        choices: ["Document Object Model", "Data Object Management", "Document Orientation Model", "Digital Object Management"],
        correctAnswer: "Document Object Model"
    }, {
        questionText: "Which HTML element defines the title of a document?",
        choices: ["<title>", "<head>", "<meta>", "<header>"],
        correctAnswer: "<title>"
    }, {
        questionText: "Which property controls the background color in CSS?",
        choices: ["background-color", "color-bg", "bgcolor", "body-color"],
        correctAnswer: "background-color"
    }, {
        questionText: "What does API stand for?",
        choices: ["Application Programming Interface", "Applied Programming Interface", "Application Program Internet", "Applied Program Interface"],
        correctAnswer: "Application Programming Interface"
    }],
    "General Knowledge": [{
        questionText: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris"
    }, {
        questionText: "Which company developed the JavaScript language?",
        choices: ["Microsoft", "Sun Microsystems", "Netscape", "Google"],
        correctAnswer: "Netscape"
    }, {
        questionText: "What is the capital of Japan?",
        choices: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        correctAnswer: "Tokyo"
    }, {
        questionText: "The Great Wall of China is located in which country?",
        choices: ["India", "China", "Vietnam", "South Korea"],
        correctAnswer: "China"
    }, {
        questionText: "Which is the smallest planet in our solar system?",
        choices: ["Mercury", "Venus", "Mars", "Earth"],
        correctAnswer: "Mercury"
    }, {
        questionText: "In which continent is the Sahara Desert?",
        choices: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: "Africa"
    }, {
        questionText: "Which ocean is the largest?",
        choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correctAnswer: "Pacific"
    }, {
        questionText: "Mount Everest is found in which mountain range?",
        choices: ["Andes", "Alps", "Himalayas", "Rockies"],
        correctAnswer: "Himalayas"
    }, {
        questionText: "Which gas do plants absorb?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correctAnswer: "Carbon Dioxide"
    }, {
        questionText: "How many continents are there?",
        choices: ["5", "6", "7", "8"],
        correctAnswer: "7"
    }],
    "Science": [{
        questionText: "What planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    }, {
        questionText: "Water's chemical formula is?",
        choices: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: "H2O"
    }, {
        questionText: "What is the speed of light approximately?",
        choices: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"],
        correctAnswer: "300,000 km/s"
    }, {
        questionText: "Which blood type is the universal donor?",
        choices: ["A", "B", "AB", "O"],
        correctAnswer: "O"
    }, {
        questionText: "What gas do humans exhale?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        correctAnswer: "Carbon Dioxide"
    }, {
        questionText: "What is the powerhouse of the cell?",
        choices: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        correctAnswer: "Mitochondria"
    }, {
        questionText: "How many bones are in the adult human body?",
        choices: ["206", "201", "210", "208"],
        correctAnswer: "206"
    }, {
        questionText: "What type of energy does a moving object have?",
        choices: ["Potential", "Kinetic", "Thermal", "Chemical"],
        correctAnswer: "Kinetic"
    }, {
        questionText: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: "Au"
    }, {
        questionText: "What vitamin is produced when a person is exposed to sunlight?",
        choices: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctAnswer: "Vitamin D"
    }],
    "History": [{
        questionText: "Who was the first president of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
        correctAnswer: "George Washington"
    }, {
        questionText: "In which year did World War II end?",
        choices: ["1944", "1945", "1946", "1947"],
        correctAnswer: "1945"
    }, {
        questionText: "Who discovered America?",
        choices: ["Christopher Columbus", "Leif Erikson", "Amerigo Vespucci", "Ferdinand Magellan"],
        correctAnswer: "Christopher Columbus"
    }, {
        questionText: "What ancient civilization built the pyramids?",
        choices: ["Roman", "Greek", "Egyptian", "Incan"],
        correctAnswer: "Egyptian"
    }, {
        questionText: "What was the name of the ship that carried the Pilgrims to America?",
        choices: ["Santa Maria", "Mayflower", "Beagle", "Endeavour"],
        correctAnswer: "Mayflower"
    }, {
        questionText: "Who was known as the Maid of Orleans?",
        choices: ["Eleanor of Aquitaine", "Joan of Arc", "Marie Antoinette", "Cleopatra"],
        correctAnswer: "Joan of Arc"
    }, {
        questionText: "Where did the Renaissance begin?",
        choices: ["France", "Italy", "Spain", "Germany"],
        correctAnswer: "Italy"
    }, {
        questionText: "Who invented the printing press?",
        choices: ["Johannes Gutenberg", "Isaac Newton", "Albert Einstein", "Leonardo da Vinci"],
        correctAnswer: "Johannes Gutenberg"
    }, {
        questionText: "Which war was fought between the North and South in the US?",
        choices: ["WWI", "Civil War", "Revolutionary War", "Vietnam War"],
        correctAnswer: "Civil War"
    }, {
        questionText: "Who was the British Prime Minister during most of WWII?",
        choices: ["Winston Churchill", "Neville Chamberlain", "Margaret Thatcher", "Tony Blair"],
        correctAnswer: "Winston Churchill"
    }],
    "Sports": [{
        questionText: "How many players are there on a soccer team on the field?",
        choices: ["9", "10", "11", "12"],
        correctAnswer: "11"
    }, {
        questionText: "Which country won the FIFA World Cup in 2018?",
        choices: ["Brazil", "Germany", "France", "Argentina"],
        correctAnswer: "France"
    }, {
        questionText: "In which sport is the term 'home run' used?",
        choices: ["Baseball", "Basketball", "Tennis", "Football"],
        correctAnswer: "Baseball"
    }, {
        questionText: "The Olympics are held every how many years?",
        choices: ["2", "3", "4", "5"],
        correctAnswer: "4"
    }, {
        questionText: "Which sport uses a shuttlecock?",
        choices: ["Badminton", "Volleyball", "Tennis", "Squash"],
        correctAnswer: "Badminton"
    }, {
        questionText: "In basketball, how many points is a free throw worth?",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "1"
    }, {
        questionText: "Which sport is associated with Wimbledon?",
        choices: ["Tennis", "Golf", "Soccer", "Cricket"],
        correctAnswer: "Tennis"
    }, {
        questionText: "Which country hosts the Grand Prix F1 racing?",
        choices: ["USA", "Monaco", "UK", "Italy"],
        correctAnswer: "Monaco"
    }, {
        questionText: "In which sport can you get a 'hat-trick'?",
        choices: ["Cricket", "Football", "Hockey", "Both Cricket and Hockey"],
        correctAnswer: "Both Cricket and Hockey"
    }, {
        questionText: "Who has won the most NBA championships as a player?",
        choices: ["Michael Jordan", "Bill Russell", "LeBron James", "Kobe Bryant"],
        correctAnswer: "Bill Russell"
    }]
};

const elements = {
    welcomeScreen: document.getElementById('welcome-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    welcomeButton: document.getElementById('welcome-btn'),
    categorySelect: document.getElementById('categorySelect'),
    startButton: document.getElementById('start-btn'),
    restartButton: document.getElementById('restart-btn'),
    questionText: document.getElementById('questionText'),
    optionsList: document.getElementById('optionsList'),
    timerText: document.getElementById('timerText'),
    timerBar: document.getElementById('timerBar'),
    feedbackMsg: document.getElementById('feedbackMsg'),
    result: document.getElementById('result'),
};

function initializeQuiz() {
    populateCategories();
    setupEventListeners();
    showIntroScreen();
}

function populateCategories() {
    for (const category in questionBank) {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        elements.categorySelect.appendChild(option);
    }
}

function setupEventListeners() {
    elements.welcomeButton.addEventListener('click', () => {
        elements.welcomeScreen.style.display = 'none';
        elements.quizScreen.style.display = 'block';
    });

    elements.categorySelect.addEventListener('change', () => {
        elements.startButton.disabled = !elements.categorySelect.value;
        elements.startButton.classList.toggle('enabled', elements.categorySelect.value);
    });

    elements.startButton.addEventListener('click', () => {
        const selectedCategory = elements.categorySelect.value;
        if (selectedCategory && questionBank[selectedCategory]) {
            startQuiz(selectedCategory);
        }
    });

    elements.restartButton.addEventListener('click', resetQuiz);
}

function showIntroScreen() {
    elements.questionText.textContent = '';
    elements.optionsList.innerHTML = '';
    elements.result.textContent = '';
    elements.timerText.style.display = 'none';
    elements.timerBar.parentElement.style.display = 'none';
    elements.feedbackMsg.classList.remove('visible');

    elements.categorySelect.style.display = 'block';
    elements.startButton.style.display = 'inline-block';
    elements.restartButton.style.display = 'none';
    elements.feedbackMsg.className = 'feedback-text';
}

function resetQuiz() {
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;

    showIntroScreen();
    elements.startButton.disabled = true;
    elements.startButton.classList.remove('enabled');
    elements.categorySelect.value = "";
}

function startQuiz(category) {
    quizState.questions = questionBank[category];
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;

    elements.categorySelect.style.display = 'none';
    elements.startButton.style.display = 'none';
    elements.timerText.style.display = 'block';
    elements.timerBar.parentElement.style.display = 'block';
    elements.restartButton.style.display = 'none';

    displayQuestion();
}

function displayQuestion() {
    clearInterval(quizState.timerInterval);

    if (quizState.currentQuestionIndex >= quizState.questions.length) {
        finishQuiz();
        return;
    }

    const currentQ = quizState.questions[quizState.currentQuestionIndex];
    elements.questionText.textContent = currentQ.questionText;
    elements.optionsList.innerHTML = '';
    elements.feedbackMsg.classList.remove('visible');

    currentQ.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => handleAnswer(choice, button));
        button.setAttribute('aria-label', `Option ${index + 1}: ${choice}`);
        elements.optionsList.appendChild(button);
    });

    elements.optionsList.children[0].focus();

    quizState.timeLeft = quizState.TIME_LIMIT;
    updateTimerUI();
    quizState.timerInterval = setInterval(handleTimerTick, 1000);
}

function handleTimerTick() {
    quizState.timeLeft--;
    updateTimerUI();

    if (quizState.timeLeft <= 0) {
        clearInterval(quizState.timerInterval);
        handleAnswer(null, null);
    }
}

function updateTimerUI() {
    elements.timerText.textContent = `Time Left: ${quizState.timeLeft} s`;
    elements.timerBar.style.width = `${(quizState.timeLeft / quizState.TIME_LIMIT) * 100}%`;
}

function handleAnswer(selectedChoice, clickedButton) {
    clearInterval(quizState.timerInterval);
    Array.from(elements.optionsList.children).forEach(btn => btn.disabled = true);

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

    if (selectedChoice === currentQuestion.correctAnswer) {
        quizState.score++;
        if (clickedButton) clickedButton.classList.add('correct');
        displayFeedback("Correct!", "correct-feedback");
    } else {
        if (clickedButton) clickedButton.classList.add('wrong');
        const correctButton = Array.from(elements.optionsList.children).find(btn => btn.textContent === currentQuestion.correctAnswer);
        if (correctButton) correctButton.classList.add('correct');

        quizState.timeLeft -= quizState.PENALTY_TIME;
        if (quizState.timeLeft < 0) quizState.timeLeft = 0;
        updateTimerUI();
        displayFeedback(`- ${quizState.PENALTY_TIME} seconds penalty!`, "penalty");
    }

    setTimeout(moveToNextQuestion, 1500);
}

function displayFeedback(message, className) {
    elements.feedbackMsg.textContent = message;
    elements.feedbackMsg.className = `feedback-text ${className} visible`;
}

function moveToNextQuestion() {
    quizState.currentQuestionIndex++;
    displayQuestion();
}

function finishQuiz() {
    elements.questionText.textContent = "Quiz Complete!";
    elements.optionsList.innerHTML = '';
    elements.result.textContent = `Your Final Score: ${quizState.score} / ${quizState.questions.length}`;
    elements.restartButton.style.display = 'inline-block';
    elements.timerText.style.display = 'none';
    elements.timerBar.parentElement.style.display = 'none';
    elements.feedbackMsg.classList.remove('visible');
}

document.addEventListener('DOMContentLoaded', initializeQuiz);
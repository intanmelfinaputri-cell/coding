// Riddle Game Data
const riddles = [
    {
        question: "Apa yang membuat hidupku lebih berwarna sejak kita bertemu?",
        options: ["Warna merah muda", "Senyummu", "Hujan salju"],
        correct: 1
    },
    {
        question: "Siapa yang membuat hatiku berdetak lebih cepat?",
        options: ["Kucing", "Kamu (Kiyo)", "Musik"],
        correct: 1
    },
    {
        question: "Tanggal berapa hari yang paling berkesan dalam hidupku?",
        options: ["25 Desember", "4 Maret", "1 Januari"],
        correct: 1
    },
    {
        question: "Mata siapa yang paling indah menurut hatiku?",
        options: ["Mata bintang", "Mata air terjun", "Mata Kiyo"],
        correct: 2
    },
    {
        question: "Apa yang membuat aku ingin selalu ada di dekatmu?",
        options: ["Kue lezat", "Kehadiranmu", "Film favorit"],
        correct: 1
    }
];

const quizzes = [
    {
        question: "Sejak kapan aku mulai menyukaimu?",
        options: ["Kemarin", "Sejak hari pertama kita bertemu (4 Maret)", "Minggu lalu"],
        correct: 1
    },
    {
        question: "Apa perasaanku ketika melihatmu?",
        options: ["Tertidur", "Bahagia dan tenang", "Bingung"],
        correct: 1
    },
    {
        question: "Berapa penting dirimu dalam hidupku?",
        options: ["Sedikit penting", "Sangat sangat penting, lebih dari apapun", "Tidak penting"],
        correct: 1
    },
    {
        question: "Apa yang aku inginkan darimu?",
        options: ["Uang", "Cinta sejati dan kebersamaan", "Kue"],
        correct: 1
    },
    {
        question: "Bagaimana masa depan yang aku impikan?",
        options: ["Sendirian", "Bersama dirimu selamanya", "Tidak tahu"],
        correct: 1
    }
];

let currentRiddleIndex = 0;
let currentQuizIndex = 0;

function initRiddleGame() {
    showRiddle(0);
}

function showRiddle(index) {
    const riddle = riddles[index];
    document.getElementById('riddle').textContent = riddle.question;
    
    const buttons = document.querySelectorAll('.riddle-btn');
    buttons.forEach((btn, i) => {
        btn.textContent = riddle.options[i];
    });
    
    document.getElementById('riddle-result').textContent = '';
}

function checkRiddle(btn, isCorrect) {
    const result = document.getElementById('riddle-result');
    
    if (isCorrect) {
        result.textContent = '✨ BENAR! Kamu sangat memahami hatiku! ✨';
        result.style.color = '#ff1493';
    } else {
        result.textContent = '❌ Hampir benar! Coba lagi...';
        result.style.color = '#999';
    }
}

function nextRiddle() {
    currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
    showRiddle(currentRiddleIndex);
}

// Quiz Game
function initQuizGame() {
    showQuiz(0);
}

function showQuiz(index) {
    const quiz = quizzes[index];
    document.getElementById('quiz-question').textContent = quiz.question;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    quiz.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => checkQuiz(btn, i === quiz.correct);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('quiz-result').textContent = '';
    document.getElementById('next-quiz-btn').style.display = 'none';
}

function checkQuiz(btn, isCorrect) {
    const result = document.getElementById('quiz-result');
    const nextBtn = document.getElementById('next-quiz-btn');
    
    if (isCorrect) {
        result.textContent = '💕 BENAR! Kamu tahu aku dengan baik! 💕';
        result.style.color = '#ff1493';
    } else {
        result.textContent = '❌ Tidak tepat, tapi tidak apa-apa!';
        result.style.color = '#999';
    }
    
    nextBtn.style.display = 'block';
}

function nextQuiz() {
    currentQuizIndex = (currentQuizIndex + 1) % quizzes.length;
    showQuiz(currentQuizIndex);
}

// Crossword Function
function revealCrossword() {
    const answer = document.getElementById('crossword-answer');
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

// Memory Game
const memoryCards = ['❤️', '💕', '💖', '💗', '❤️', '💕', '💖', '💗', '😍', '🥰', '😘', '💝', '😍', '🥰', '😘', '💝'];
let flippedCards = [];
let matchedCards = [];
let canFlip = true;

function initMemoryGame() {
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    flippedCards = [];
    matchedCards = [];
    
    const shuffledCards = [...memoryCards].sort(() => Math.random() - 0.5);
    
    shuffledCards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = 'memory-card';
        btn.dataset.index = index;
        btn.dataset.card = card;
        btn.textContent = '?';
        btn.onclick = () => flipCard(btn);
        grid.appendChild(btn);
    });
}

function flipCard(card) {
    if (!canFlip || flippedCards.includes(card) || matchedCards.includes(card.dataset.index)) return;
    
    card.textContent = card.dataset.card;
    card.classList.add('flipped');
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        canFlip = false;
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.card === card2.dataset.card;
    
    setTimeout(() => {
        if (isMatch) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedCards.push(card1.dataset.index, card2.dataset.index);
            
            if (matchedCards.length === memoryCards.length) {
                document.getElementById('memory-result').textContent = 
                    '🎉 Selesai! Kamu luar biasa, Kiyo! Seperti permainan ini, hati kami cocok sempurna! 💕';
            }
        } else {
            card1.textContent = '?';
            card2.textContent = '?';
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }
        
        flippedCards = [];
        canFlip = true;
    }, 800);
}

function resetMemoryGame() {
    document.getElementById('memory-result').textContent = '';
    initMemoryGame();
}

// NO Button Movement
let noClickCount = 0;

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    noClickCount++;
    
    if (noClickCount < 5) {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else {
        noBtn.style.display = 'none';
        handleYes();
    }
}

function handleYes() {
    const successMsg = document.getElementById('success-message');
    successMsg.classList.remove('hidden');
    successMsg.style.display = 'block';
    
    // Trigger confetti effect
    triggerConfetti();
    
    // Disable buttons
    document.querySelector('.yes-btn').disabled = true;
    document.getElementById('noBtn').style.display = 'none';
}

function triggerConfetti() {
    const container = document.body;
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.fontSize = '2rem';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.textContent = ['❤️', '💕', '💖', '💗', '✨', '🎉'][Math.floor(Math.random() * 6)];
        
        container.appendChild(confetti);
        
        let top = -10;
        const animation = setInterval(() => {
            top += Math.random() * 5 + 2;
            confetti.style.top = top + 'px';
            confetti.style.left = (parseFloat(confetti.style.left) + (Math.random() - 0.5) * 2) + '%';
            
            if (top > window.innerHeight) {
                clearInterval(animation);
                confetti.remove();
            }
        }, 30);
    }
}

// Initialize games on page load
window.addEventListener('DOMContentLoaded', () => {
    initRiddleGame();
    initQuizGame();
    initMemoryGame();
});
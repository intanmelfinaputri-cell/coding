// Navigation
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const buttons = document.querySelectorAll('.nav-btn');
    
    sections.forEach(section => section.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');

    // Initialize games when games section is shown
    if (sectionId === 'games') {
        setTimeout(() => {
            initWordSearch();
            initMemoryGame();
            initQuiz();
        }, 100);
    }
}

// Yes Button Handler
function answerYes() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Confetti effect
    createConfetti();
    
    // Sound effect (optional)
    playHeartSound();
}

// Move No Button
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Confetti Effect
function createConfetti() {
    const confettiCount = 50;
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = ['#ff1493', '#ff69b4', '#ffb6c1'][Math.floor(Math.random() * 3)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            document.body.appendChild(confetti);
            
            let yPos = -10;
            const xPos = parseFloat(confetti.style.left);
            const speed = Math.random() * 3 + 2;
            
            const interval = setInterval(() => {
                yPos += speed;
                confetti.style.top = yPos + 'px';
                
                if (yPos > window.innerHeight) {
                    clearInterval(interval);
                    confetti.remove();
                }
            }, 20);
        }, i * 30);
    }
}

// Heart Sound
function playHeartSound() {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 528; // Love frequency
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// ========================= GAMES =========================

// Game 1: Word Search
function initWordSearch() {
    const target = 'KIYO';
    const letters = 'KIYOXYZABCDEFGHIJKLMNOPQRSTUVW';
    const container = document.getElementById('wordSearch');
    const result = document.getElementById('wordSearchResult');
    
    container.innerHTML = '';
    result.innerHTML = '';
    
    const lettersArray = letters.split('');
    const found = new Set();
    
    lettersArray.forEach((letter, index) => {
        const div = document.createElement('div');
        div.textContent = letter;
        div.dataset.letter = letter;
        div.dataset.index = index;
        
        div.onclick = () => {
            if (!div.classList.contains('found')) {
                div.classList.add('found');
                found.add(letter);
                
                let foundWord = '';
                const foundLetters = ['K', 'I', 'Y', 'O'];
                foundLetters.forEach(l => {
                    if (found.has(l)) foundWord += l;
                });
                
                if (foundWord === target) {
                    result.innerHTML = '🎉 SELAMAT! Anda menemukan "KIYO"! 💕';
                    result.style.color = '#ff1493';
                    result.style.fontWeight = 'bold';
                }
            }
        };
        
        container.appendChild(div);
    });
}

// Game 2: Memory Match
function initMemoryGame() {
    const pairs = ['❤', '❤', '💕', '💕', '💖', '💖', '💗', '💗', '💝', '💝', '💞', '💞'];
    const container = document.getElementById('memoryGame');
    const result = document.getElementById('memoryResult');
    
    container.innerHTML = '';
    result.innerHTML = '';
    
    let shuffled = pairs.sort(() => Math.random() - 0.5);
    let flipped = [];
    let matched = 0;
    
    shuffled.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        card.textContent = '?';
        
        card.onclick = () => {
            if (card.classList.contains('flipped') || card.classList.contains('matched') || flipped.length >= 2) return;
            
            card.classList.add('flipped');
            card.textContent = emoji;
            flipped.push({card, emoji, index});
            
            if (flipped.length === 2) {
                if (flipped[0].emoji === flipped[1].emoji) {
                    flipped[0].card.classList.add('matched');
                    flipped[1].card.classList.add('matched');
                    matched += 2;
                    flipped = [];
                    
                    if (matched === shuffled.length) {
                        result.innerHTML = '🎉 Selamat! Anda menyelesaikan Memory Match! 💕';
                        result.style.color = '#ff1493';
                        result.style.fontWeight = 'bold';
                    }
                } else {
                    setTimeout(() => {
                        flipped[0].card.classList.remove('flipped');
                        flipped[1].card.classList.remove('flipped');
                        flipped[0].card.textContent = '?';
                        flipped[1].card.textContent = '?';
                        flipped = [];
                    }, 600);
                }
            }
        };
        
        container.appendChild(card);
    });
}

// Game 3: Quiz Romantis
function initQuiz() {
    const quiz = [
        {
            question: 'Cinta sejati adalah...',
            options: ['Hanya perasaan sesaat', 'Pilihan untuk terus memilih seseorang', 'Hanya mimpi', 'Tidak ada artinya']
        },
        {
            question: 'Kebahagiaan terbesar adalah...',
            options: ['Memiliki uang banyak', 'Bersama orang yang Anda cintai', 'Sendirian', 'Bermain game']
        },
        {
            question: 'Hubungan yang baik dibangun dengan...',
            options: ['Kepercayaan dan kejujuran', 'Uang', 'Kekerasan', 'Kebohongan']
        }
    ];
    
    const container = document.getElementById('quizContainer');
    const result = document.getElementById('quizResult');
    
    container.innerHTML = '';
    result.innerHTML = '';
    
    const correctAnswers = [1, 1, 0];
    let score = 0;
    
    quiz.forEach((q, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `<p><strong>${q.question}</strong></p>`;
        
        q.options.forEach((option, oIndex) => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="quiz${qIndex}" value="${oIndex}" onchange="checkQuizAnswer(${qIndex}, ${oIndex}, ${correctAnswers[qIndex]}, event)">
                    ${option}
                </label>
            `;
        });
        
        container.appendChild(questionDiv);
    });
    
    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.className = 'quiz-button';
    submitBtn.textContent = 'Lihat Hasil';
    submitBtn.onclick = () => calculateQuizScore(correctAnswers);
    container.appendChild(submitBtn);
}

function checkQuizAnswer(qIndex, selectedIndex, correctIndex, event) {
    const label = event.target.parentElement;
    if (selectedIndex === correctIndex) {
        label.style.background = '#d4f1d4';
        label.style.borderColor = '#28a745';
    } else {
        label.style.background = '#f8d7da';
        label.style.borderColor = '#dc3545';
    }
}

function calculateQuizScore(correctAnswers) {
    const container = document.getElementById('quizContainer');
    const radios = container.querySelectorAll('input[type="radio"]');
    let score = 0;
    
    correctAnswers.forEach((correctIndex, qIndex) => {
        const selected = container.querySelector(`input[name="quiz${qIndex}"]:checked`);
        if (selected && parseInt(selected.value) === correctIndex) {
            score++;
        }
    });
    
    const result = document.getElementById('quizResult');
    const percentage = (score / correctAnswers.length) * 100;
    result.innerHTML = `Skor Anda: ${score}/${correctAnswers.length} (${percentage}%) - ${percentage === 100 ? '✨ Sempurna! Anda paham tentang cinta! 💕' : 'Bagus! Terus belajar tentang cinta! 💗'}`;
    result.style.color = '#ff1493';
    result.style.fontWeight = 'bold';
}

// Game 4: Guess Number
function guessNumber() {
    const input = document.getElementById('guessInput');
    const result = document.getElementById('guessResult');
    const guess = parseInt(input.value);
    const secretNumber = 7; // Angka keberuntungan untuk Kiyo
    
    if (isNaN(guess) || guess < 1 || guess > 10) {
        result.innerHTML = '⚠️ Masukkan angka antara 1 sampai 10!';
        result.style.color = '#ff6347';
        return;
    }
    
    if (guess === secretNumber) {
        result.innerHTML = '🎉 TEPAT! Angka keberuntungan adalah 7! Ini adalah angka cinta kami! 💕💕💕';
        result.style.color = '#ff1493';
        result.style.fontWeight = 'bold';
        createConfetti();
    } else if (guess < secretNumber) {
        result.innerHTML = `Terlalu rendah! Coba angka yang lebih tinggi... 💗`;
        result.style.color = '#ff69b4';
    } else {
        result.innerHTML = `Terlalu tinggi! Coba angka yang lebih rendah... 💗`;
        result.style.color = '#ff69b4';
    }
}

// Game 5: Love Counter
function calculateLoveTime() {
    const startDateInput = document.getElementById('startDate').value;
    const result = document.getElementById('loveCounter');
    
    if (!startDateInput) return;
    
    const startDate = new Date(startDateInput);
    const today = new Date();
    
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();
    
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    let message = '💕 Kita telah bersama:';
    if (years > 0) message += `<br>${years} tahun`;
    if (months > 0) message += `<br>${months} bulan`;
    if (days > 0) message += `<br>${days} hari`;
    message += '<br>❤️ Setiap detik bersama Anda adalah berkah! ❤️';
    
    result.innerHTML = message;
}

// Game 6: Word Arrange
function initWordArrange() {
    const words = ['Aku', 'sangat', 'mencintai', 'dirimu'];
    const container = document.getElementById('availableWords');
    
    container.innerHTML = '';
    words.forEach(word => {
        const item = document.createElement('div');
        item.className = 'word-item';
        item.textContent = word;
        item.draggable = true;
        item.ondragstart = (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', word);
        };
        container.appendChild(item);
    });
}

function allowDrop(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function drop(e) {
    e.preventDefault();
    const word = e.dataTransfer.getData('text');
    const arranged = document.getElementById('arrangedWords');
    
    const item = document.createElement('div');
    item.className = 'word-item';
    item.textContent = word;
    item.onclick = () => item.remove(); // Remove on click
    
    arranged.appendChild(item);
}

function checkArrangement() {
    const arranged = document.getElementById('arrangedWords');
    const arrangedText = Array.from(arranged.children).map(child => child.textContent).join(' ');
    const correctAnswer = 'Aku sangat mencintai dirimu';
    const result = document.getElementById('arrangeResult');
    
    if (arrangedText === correctAnswer) {
        result.innerHTML = '🎉 BENAR! "Aku sangat mencintai dirimu" - Perasaan yang sama untuk Kiyo! 💕';
        result.style.color = '#ff1493';
        result.style.fontWeight = 'bold';
        createConfetti();
    } else {
        result.innerHTML = `❌ Salah. Coba lagi! Susunan yang benar: "${correctAnswer}"`;
        result.style.color = '#ff6347';
    }
}

// Initialize Word Arrange when page loads
document.addEventListener('DOMContentLoaded', () => {
    initWordArrange();
});
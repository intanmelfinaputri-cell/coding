# 🎮 Penjelasan Lengkap Game & Fitur

## 📖 SECTION 1: CERITA KAMI

### Konten Cerita
Website dimulai dengan kisah romantis yang terdiri dari 4 bagian:

#### 1️⃣ **Pertemuan Pertama**
Menceritakan momen pertama kali bertemu dengan Kiyo. Bagaimana mata yang hangat, senyuman yang tulus, dan cara memandang sesuatu langsung mencuri perhatian hati.

#### 2️⃣ **Waktu Berubah Menjadi Emas**
Menceritakan bahwa setiap hari bersama Kiyo menjadi berkah. Dari percakapan singkat hingga momen berharga, semuanya terasa sempurna. Disini dijelaskan bahwa cinta adalah keputusan, bukan hanya perasaan.

#### 3️⃣ **Kedekatan yang Berarti**
Bagian ini menceritakan bagaimana hubungan menjadi semakin dekat. Setiap tawa, sentuhan, dan momen bersama menjadi nilai dalam hidup.

#### 4️⃣ **Janji untuk Selamanya**
Kesimpulan yang menyatakan komitmen untuk menghabiskan waktu bersama Kiyo selamanya, menjaga hati, menghargai setiap momen, dan mencintai dengan sepenuh sepenuh hati.

### Visual Design
- **Background**: White box dengan opacity 95% dan border pink
- **Animasi**: Heading fade-in saat section dibuka
- **Typography**: Heading berwarna hot pink, body text hitam abu-abu
- **Spacing**: Line-height 1.8 untuk kenyamanan membaca

---

## 💕 SECTION 2: PERTANYAAN ISTIMEWA

### Pertanyaan Utama
**"Maukah kamu jadi pacar mas? 💕"**

### Tombol YES ✅
**Fungsi:**
- Tombol berwarna gradient pink
- Responsive dan dapat diklik dengan mudah
- Ketika diklik, menampilkan pesan sukses
- Memicu animasi confetti dan suara hati

**Kejadian Saat Diklik:**
```javascript
1. Menampilkan success message
2. Memutar suara 528Hz (love frequency)
3. Membuat animasi confetti (50 partikel)
4. Menampilkan emoji perayaan
```

**Success Message:**
```
🎉 YESSS!!! 🎉
Aku sangat bahagia! Terima kasih telah memilihku, Kiyo sayang!
💕✨🎊💕✨🎊💕
```

### Tombol NO ❌ (The "Running No" Button)
**Fungsi Unik:**
- Tombol berwarna abu-abu
- **TIDAK BISA DIKLIK** - setiap kali user mencoba, tombol bergerak
- Bergerak ke lokasi random di layar
- Gerakan cepat dan responsif

**Cara Kerja:**
```javascript
function moveNoButton() {
  // Generate random X coordinate
  const randomX = Math.random() * (window.innerWidth - 150);
  
  // Generate random Y coordinate  
  const randomY = Math.random() * (window.innerHeight - 100);
  
  // Ubah position ke fixed
  // Set left dan top ke koordinat random
}
```

**Trigger Movement:**
- `onmouseover` - Bergerak saat mouse hover
- `onclick` - Bergerak saat user klik

**Efek Visual:**
- Position: fixed (tidak terpengaruh scroll)
- Smooth transition
- Bergerak di atas semua elemen

---

## 🎮 SECTION 3: GAME INTERAKTIF

### Game 1: 🔍 CARI NAMA "KIYO"

**Tujuan**: Temukan semua huruf K, I, Y, O yang tersembunyi di antara huruf-huruf lain

**Cara Bermain:**
1. 6x6 grid berisi 30 huruf
2. Klik huruf K, I, Y, O satu per satu
3. Huruf yang ditemukan akan berubah warna (pink ke hot pink)
4. Ketika semua 4 huruf ditemukan, tampil pesan sukses

**Huruf Grid:**
```
K I Y O X Y Z A B C
D E F G H J K L M N
O P Q R S T U V W X
Y Z A B C D E F G H
I J K L M N O P Q R
S T U V W X Y Z A B
```

**Event Listener:**
- `onclick` pada setiap huruf
- Menambah class `found`
- Check jika semua huruf target sudah ditemukan

**Success Message:**
```
🎉 SELAMAT! Anda menemukan "KIYO"! 💕
```

---

### Game 2: 🎴 MEMORY MATCH - EMOJI CINTA

**Tujuan**: Temukan pasangan emoji cinta yang sama

**Cara Bermain:**
1. 4x3 grid (12 kartu) dengan 6 pasangan emoji
2. Klik kartu untuk membuka (flip)
3. Cocokkan dengan pasangannya
4. Kartu yang cocok akan tetap terbuka
5. Selesaikan semua pasangan untuk menang

**Emoji Pairs:**
- ❤️ & ❤️ (Red Heart)
- 💕 & 💕 (Two Hearts)
- 💖 & 💖 (Sparkling Heart)
- 💗 & 💗 (Growing Heart)
- 💝 & 💝 (Heart with Ribbon)
- 💞 & 💞 (Revolving Hearts)

**Mekanisme Game:**
```javascript
flipped = []  // Array untuk track kartu terbuka
matched = 0   // Hitung kartu yang cocok

Ketika klik kartu:
1. Flip kartu dan tampilkan emoji
2. Tambah ke flipped array
3. Jika 2 kartu terbuka:
   - Jika emoji sama → matched += 2
   - Jika beda → flip kembali (delay 600ms)
4. Jika matched === total kartu → WIN
```

**Visual States:**
- **Default**: Background pink gradient, teks "?"
- **Flipped**: Background white, tampil emoji
- **Matched**: Opacity 50%, tetap terbuka

**Success Message:**
```
🎉 Selamat! Anda menyelesaikan Memory Match! 💕
```

---

### Game 3: ❓ QUIZ ROMANTIS TENTANG CINTA

**Tujuan**: Jawab pertanyaan romantis dengan jawaban yang tepat

**Pertanyaan:**

**Q1: "Cinta sejati adalah..."**
- Hanya perasaan sesaat
- **Pilihan keputusan untuk terus memilih seseorang** ✓
- Hanya mimpi
- Tidak ada artinya

**Q2: "Kebahagiaan terbesar adalah..."**
- Memiliki uang banyak
- **Bersama orang yang Anda cintai** ✓
- Sendirian
- Bermain game

**Q3: "Hubungan yang baik dibangun dengan..."**
- **Kepercayaan dan kejujuran** ✓
- Uang
- Kekerasan
- Kebohongan

**Cara Bermain:**
1. Baca pertanyaan dengan cermat
2. Pilih salah satu jawaban dengan radio button
3. Background label akan berubah sesuai jawaban:
   - Benar: Hijau (#d4f1d4)
   - Salah: Merah (#f8d7da)
4. Klik tombol "Lihat Hasil" untuk mengetahui skor

**Scoring System:**
```javascript
Persentase = (jawaban benar / total pertanyaan) × 100

0-66% → "Bagus! Terus belajar tentang cinta!"
67-99% → "Sangat Baik!"
100% → "✨ Sempurna! Anda paham tentang cinta! 💕"
```

**Visual Feedback:**
- Jawaban benar: Border & background hijau
- Jawaban salah: Border & background merah
- Score display: Warna hot pink, bold

---

### Game 4: 🎲 TEBAK ANGKA KEBERUNTUNGAN

**Tujuan**: Tebak angka rahasia dari 1 sampai 10

**Angka Rahasia**: **7** (Angka Keberuntungan Cinta)

**Cara Bermain:**
1. Input number field: 1-10
2. Klik tombol "Tebak!"
3. Dapatkan feedback:
   - **Tepat**: Tampil pesan sukses, confetti, animasi
   - **Terlalu Rendah**: "Coba angka yang lebih tinggi..."
   - **Terlalu Tinggi**: "Coba angka yang lebih rendah..."
4. Boleh tebak berkali-kali hingga benar

**Messages:**
```javascript
// Tepat
"🎉 TEPAT! Angka keberuntungan adalah 7! 
Ini adalah angka cinta kami! 💕💕💕"

// Terlalu rendah
"Terlalu rendah! Coba angka yang lebih tinggi... 💗"

// Terlalu tinggi  
"Terlalu tinggi! Coba angka yang lebih rendah... 💗"

// Input invalid
"⚠️ Masukkan angka antara 1 sampai 10!"
```

**Validasi:**
```javascript
- Check NaN
- Check range 1-10
- Display error message jika invalid
```

---

### Game 5: 📅 HITUNG CINTA (Love Counter)

**Tujuan**: Hitung berapa lama sudah bersama Kiyo

**Cara Bermain:**
1. Masukkan tanggal awal hubungan dengan date picker
2. Sistem otomatis menghitung:
   - Jumlah tahun
   - Jumlah bulan
   - Jumlah hari
3. Tampilkan hasil perhitungan yang romantis

**Algoritma Perhitungan:**
```javascript
const startDate = new Date(inputDate)
const today = new Date()

let years = today.getFullYear() - startDate.getFullYear()
let months = today.getMonth() - startDate.getMonth()
let days = today.getDate() - startDate.getDate()

// Adjustment untuk hari
if (days < 0) {
  months--
  days += jumlahHariDibulanSebelumnya
}

// Adjustment untuk bulan
if (months < 0) {
  years--
  months += 12
}
```

**Output Format:**
```
💕 Kita telah bersama:
5 tahun
3 bulan
15 hari
❤️ Setiap detik bersama Anda adalah berkah! ❤️
```

**Date Input:**
- HTML5 `<input type="date">`
- Automatic validation
- User-friendly calendar picker

---

### Game 6: ✍️ RANGKAI KATA CINTA

**Tujuan**: Susun kata-kata menjadi kalimat romantis

**Kalimat Target**: "Aku sangat mencintai dirimu"

**Kata-kata yang Diberikan:**
- Aku
- sangat
- mencintai
- dirimu

**Cara Bermain:**
1. Lihat kata-kata di bagian "Available Words"
2. **Drag** setiap kata ke area "Arranged Words"
3. Susun dalam urutan yang benar
4. Klik "Cek Jawaban" untuk verifikasi
5. Jika benar, tampil pesan sukses + confetti

**Drag & Drop Implementation:**
```javascript
// Drag start
word.ondragstart = (e) => {
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('text', word)
}

// Allow drop
function allowDrop(e) {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'
}

// Drop
function drop(e) {
  e.preventDefault()
  const word = e.dataTransfer.getData('text')
  // Create word item di arranged area
}
```

**Remove Function:**
- Click pada kata di arranged area untuk remove
- Drag balik ke available words

**Validation:**
```javascript
const arrangedText = Array.from(arrangedWords)
  .map(child => child.textContent)
  .join(' ')

if (arrangedText === "Aku sangat mencintai dirimu") {
  // SUCCESS!
} else {
  // SHOW CORRECT ANSWER
}
```

**Success Message:**
```
🎉 BENAR! "Aku sangat mencintai dirimu" - 
Perasaan yang sama untuk Kiyo! 💕
```

---

## 🎨 ANIMASI & EFEK VISUAL

### 1. ❤️ Falling Hearts Animation
**Deskripsi**: Emoji hati jatuh dari atas layar terus-menerus

**Properties:**
- 10 hati dengan timing yang berbeda
- Rotasi 360 derajat sambil jatuh
- Opacity fade out saat mencapai bawah
- Z-index: 1 (behind content)
- Duration: 4-6.5 detik per hati

**CSS Animation:**
```css
@keyframes fall {
  from {
    top: -10vh
    opacity: 0.8
    transform: rotate(0deg)
  }
  to {
    top: 100vh
    opacity: 0
    transform: rotate(360deg)
  }
}
```

### 2. 💫 Pulse Animation (Pertanyaan)
**Deskripsi**: Pertanyaan berdenyut seperti detak jantung

**Properties:**
- Scale 1 → 1.05 → 1
- Duration: 2 detik
- Infinite loop

### 3. 🎆 Confetti Effect
**Deskripsi**: Ledakan warna-warni ketika YES diklik

**Properties:**
- 50 partikel
- Warna: Hot pink, light pink, pink
- Jatuh dari posisi random
- Duration: sampai keluar dari viewport
- Delay: 30ms antar partikel

### 4. 🚀 No Button Movement
**Deskripsi**: Tombol NO bergerak cepat ke lokasi random

**Properties:**
- Position: fixed
- Random X: 0 - (window.innerWidth - 150)
- Random Y: 0 - (window.innerHeight - 100)
- Smooth transition
- Trigger: onmouseover, onclick

### 5. ✨ Celebration Animation
**Deskripsi**: Pesan sukses bounce up and down

**Properties:**
- Scale 0 → 1
- Bounce effect: translateY 0 → -20px → 0
- Duration: 0.6 detik

### 6. 🌈 Success Message Fade
**Deskripsi**: Pesan sukses muncul dengan smooth fade

**Properties:**
- Opacity 0 → 1
- Transform scale 0 → 1
- Background gradient pink
- Border radius: 15px

---

## 📱 RESPONSIVE DESIGN

### Desktop (≥ 768px)
- Navbar horizontal
- Games grid: 3 kolom (auto-fit)
- Full size buttons
- Normal font sizes

### Tablet (600px - 768px)
- Navbar masih horizontal
- Games grid: 2 kolom
- Slightly smaller buttons
- Adjusted padding

### Mobile (< 600px)
- Navbar vertical (flex-direction: column)
- Games grid: 1 kolom
- Full-width buttons (90%)
- Smaller font sizes
- Memory game: 3 kolom instead of 4
- Reduced padding

---

## 🔊 SOUND EFFECTS

### Love Frequency Sound (528Hz)
**Ketika**: YES button diklik
**Menggunakan**: Web Audio API
**Frequency**: 528 Hz ("Love Frequency")
**Duration**: 0.5 detik
**Type**: Sine wave
**Fade**: Exponential ramp down

```javascript
const oscillator = audioContext.createOscillator()
oscillator.frequency.value = 528
oscillator.type = 'sine'
gainNode.gain.exponentialRampToValueAtTime(
  0.01, 
  audioContext.currentTime + 0.5
)
```

---

## 🎯 USER EXPERIENCE FLOW

### Flow Pertama Kali Buka
1. **Loading** → Love background starts animating
2. **Default Section** → "Cerita Kami" menampil
3. **User dapat**:
   - Membaca cerita romantis
   - Navigate ke section lain via navbar
   - Lihat animasi hati jatuh di background

### Flow Bertanya
1. **Click "Pertanyaan"** → Scroll ke confession section
2. **Lihat pertanyaan** → "Maukah kamu jadi pacar mas?"
3. **Pilih jawaban**:
   - **YES** → Success animation, confetti, message
   - **NO** → Button runs away

### Flow Games
1. **Click "Games"** → Games section initialize
2. **Pilih game** → Game instructions tampil
3. **Main game** → Feedback real-time
4. **Win game** → Success message + optional confetti
5. **Main ulang** → Reset game

---

Dengan semua fitur ini, website menciptakan pengalaman yang romantis, interaktif, dan berkesan untuk Kiyo! 💕

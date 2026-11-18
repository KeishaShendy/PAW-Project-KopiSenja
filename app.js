// WAJIB DI BARIS PALING ATAS: Memuat variabel environment dari file .env (API Key Gemini)
require('dotenv').config(); 

const express = require('express');
const app = express();
const port = 3000; // Sesuai dengan port pilihan Anda

// Import Middleware & Routes
const requestLogger = require('./middlewares/logger');
const indexRoutes = require('./routes/indexRoutes');
const chatRoutes = require('./routes/chat.routes'); // Tambahan: Import rute AI chatbot

// Set View Engine ke EJS
app.set('view engine', 'ejs');

// Middleware Wajib Express (Tambahan)
app.use(express.json()); // Agar backend bisa membaca data berformat JSON dari fetch API (Modal AI)
app.use(express.urlencoded({ extended: true })); // Agar backend bisa membaca data dari form biasa

// Pasang Middleware Logger Global
app.use(requestLogger);

// Pasang Routes
app.use('/', indexRoutes); // Rute utama dan CRUD (Katalog Menu)
app.use('/api/chat', chatRoutes); // Tambahan: Rute khusus untuk generate teks promosi AI

// Jalankan Server
app.listen(port, () => {
    console.log(`Server Kopi Senja berjalan di http://localhost:${port}`);
    console.log(`Status API AI: ${process.env.GEMINI_API_KEY ? 'Terhubung (API Key Ditemukan)' : 'API Key Belum Disetting'}`);
});
const express = require('express');
const app = express();
const port = 3000;

// Import Middleware & Routes
const requestLogger = require('./middlewares/logger');
const indexRoutes = require('./routes/indexRoutes');

// Set View Engine ke EJS
app.set('view engine', 'ejs');

// Pasang Middleware Logger Global
app.use(requestLogger);

// Pasang Routes
app.use('/', indexRoutes);

// Jalankan Server
app.listen(port, () => {
    console.log(`Server Kopi Senja berjalan di http://localhost:${port}`);
});
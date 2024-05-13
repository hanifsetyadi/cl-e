const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Menggunakan middleware untuk menangani permintaan untuk file statis
app.use(express.static(path.join(__dirname, 'public')));

// Mengirimkan index.html saat permintaan GET '/'
app.get('/', (req, res) => {
    res.render('./public/index.html')
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
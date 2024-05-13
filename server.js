const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.render('./public/index.html')
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
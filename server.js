const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 8080; // Aquí defines la variable PORT
app.listen(PORT, () => { // Asegúrate de usar PORT aquí
    console.log(`App corriendo en el puerto: ${PORT}`);
});

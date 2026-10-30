const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello from my server!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About the Web Design Club</h1>')
});

app.get('/contact', (req, res) => {
    res.send('<h1>bacon</h1>')
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});
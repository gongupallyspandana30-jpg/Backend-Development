
const express = require('express');

const app = express();

// Home route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my server');
});

// About route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Spandana',
        section: 'CSE(AIML)'
    });
});

// Time route
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateAndTime: new Date()
    });
});

// 404 route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

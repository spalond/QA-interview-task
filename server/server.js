const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 5001;

// Use CORS middleware to allow requests from localhost:3000
app.use(cors({
    origin: 'http://localhost:3000',  // Allow only frontend on localhost:3000
    methods: ['GET', 'POST', 'OPTIONS'],  // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));

app.use(express.json());

// In-memory user storage (for simplicity)
const users = [{ username: 'admin', password: 'admin321' }];

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Protected route (only accessible with a valid token)
app.get('/home', (req, res) => {
    res.json({ message: 'Welcome to the homepage!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
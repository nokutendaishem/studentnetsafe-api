const express = require('express');

const app = express();

app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to StudentNetSafe API');
});

// Health check route
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        message: 'StudentNetSafe API is running'
    });
});

// Scan email route
app.post('/scan-email', (req, res) => {

    const email = req.body.email;

    if (email && email.toLowerCase().includes('click here')) {
        return res.json({
            risk: 'high',
            message: 'Potential phishing email detected'
        });
    }

    res.json({
        risk: 'low',
        message: 'Email appears safe'
    });
});

// Scan link route
app.post('/scan-link', (req, res) => {

    const link = req.body.link;

    if (link && link.includes('free-money')) {
        return res.json({
            risk: 'high',
            message: 'Suspicious link detected'
        });
    }

    res.json({
        risk: 'low',
        message: 'Link appears safe'
    });
});

// Scam alerts route
app.get('/alerts', (req, res) => {

    res.json([
        {
            title: 'Fake Scholarship Scam',
            severity: 'high'
        },
        {
            title: 'Microsoft Login Phishing',
            severity: 'medium'
        }
    ]);
});

// Training route
app.get('/training', (req, res) => {

    res.json([
        'Phishing Awareness',
        'Password Security',
        'Safe Public WiFi'
    ]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
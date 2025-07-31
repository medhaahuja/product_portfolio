const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' });
});

// Add your API routes here
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Medha Ahuja',
    title: 'AI-Focused Product Manager',
    company: 'Graphy by Unacademy',
    experience: '3+ years'
  });
});

// Handle all other routes
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

module.exports.handler = serverless(app); 
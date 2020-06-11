// Imports
const express = require('express');
const path = require('path');

// Create Express App
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// Statically route every path to the React app
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start listening on specified port or 8080
app.listen(process.env.PORT || 3000);
// eslint-disable-next-line no-console
console.log('Express Server running...');

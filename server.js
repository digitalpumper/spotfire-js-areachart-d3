const express = require('express');
const path = require('path');
const app = express();

// Use the port provided by Railway, or fallback to 8080
const PORT = process.env.PORT || 8080;

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// For any other request, send index.html (for Single Page Applications)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server and bind to 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

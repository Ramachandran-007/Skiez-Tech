const express = require('express');
const compression = require('compression');
const app = express();

// Enable Gzip compression
app.use(compression());

// Implement caching headers
app.use((req, res, next) => {
  // Set Cache-Control header to enable caching
  res.setHeader('Cache-Control', 'public, max-age=3600'); // Adjust cache duration as needed
  
  next();
});

// Your routes and other middleware
app.get('/', (req, res) => {
  // Handle your route logic here
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

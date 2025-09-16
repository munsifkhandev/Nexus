const express = require('express');  // import express

const app = express();               // create app
const PORT = 5000;                   // choose a port

// A simple route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

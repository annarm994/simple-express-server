const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// 404 Error handler
app.use((req, res, next) => {
  res.status(404).send('404 - Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
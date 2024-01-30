const express = require('express');
const app = express();
const PORT = 3004;

app.get('/Login', (req, res) => {
    res.json({ message: 'You are trying to login' }); 
  });

app.listen(PORT, () => {
    console.log(`Login is running on ${PORT}`);
  });
const express = require('express');
const app = express();
const PORT = 3009;

app.get('/Signup', (req, res) => {
    res.json({ message: 'You are trying to signup' });
  });

app.listen(PORT, () => {
    console.log(`Signup is running on ${PORT}`);
  });
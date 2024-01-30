const express = require('express');
const app = express();
const PORT = 3006;

app.get('/Notify', (req, res) => {
    res.json({ message: 'You are trying to notify' });
  });

app.listen(PORT, () => {
    console.log(`Notify is running on ${PORT}`);
  });
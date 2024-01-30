const express = require('express');
const app = express();
const PORT = 3005;

app.get('/CreateEvent', (req, res) => {
    res.json({ message: 'You are trying to create an event' });
  });

app.listen(PORT, () => {
    console.log(`CreateEvent is running on ${PORT}`);
  });
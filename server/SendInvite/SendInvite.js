const express = require('express');
const app = express();
const PORT = 3008;

app.get('/SendInvite', (req, res) => {
    res.json({ message: 'You are trying to send an invite' });
  });

app.listen(PORT, () => {
    console.log(`SendInvite is running on ${PORT}`);
  });
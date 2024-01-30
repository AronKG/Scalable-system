const express = require('express');
const app = express();
const PORT = 3002;

app.get('/api1', (req, res) => {
  res.json({ message: 'This is API 1' });
});

app.listen(PORT, () => {
  console.log(`API 1 running on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3002;

app.get('/api2', (req, res) => {
  res.json({ message: 'This is API 2' });
});

app.listen(PORT, () => {
  console.log(`API 2 running on port ${PORT}`);
});

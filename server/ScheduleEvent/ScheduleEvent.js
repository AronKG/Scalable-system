const express = require('express');
const app = express();
const PORT = 3007;

app.get('/ScheduleEvent', (req, res) => {
    res.json({ message: 'You are trying to schedule an event' });
  });

app.listen(PORT, () => {
    console.log(`ScheduleEvent is running on ${PORT}`);
  });
const express = require('express');
const app = express();
const PORT = 3001; // Port for API Gateway

// Use a HTTP client library (like axios) to make requests to microservices
const axios = require('axios');

// Define routes and forward requests to the corresponding microservices
app.get('/', async (req, res) => {
  try {
    res.json("Gateway");
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with API 1' }); // Empty service
  }
});

app.get('/Login', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3004/Login');  // request to login
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with Login' });
  }
});

app.get('/CreateEvent', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3005/CreateEvent'); // request to create event
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with CreateEvent' });
  }
});

app.get('/Notify', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3006/Notify'); // request to notify
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with Notify' });
  }
});

app.get('/ScheduleEvent', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3007/ScheduleEvent'); // request to schedule event
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with ScheduleEvent' });
  }
});

app.get('/SendInvite', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3008/SendInvite'); // request to send invite
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with SendInvite' });
  }
});

app.get('/Signup', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3009/Signup'); // request to singup
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with Signup' });
  }
});

// Start the API Gateway server
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

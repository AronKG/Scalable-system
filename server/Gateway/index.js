const express = require('express');
const app = express();
const PORT = 3001; // Port for API Gateway

// Use a HTTP client library (like axios) to make requests to microservices
const axios = require('axios');

// Define routes and forward requests to the corresponding microservices
app.get('/api1', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3002/api1'); // Request to Service 1: API 1
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with API 1' });
  }
});

app.get('/api2', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3003/api2'); // Request to Service 2: API 2
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with API 2' });
  }
});

// Start the API Gateway server
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors());

// server testing home page
app.get('/', (req, res)=>{
    res.send('Project Structure app is running');
});

module.exports = app;
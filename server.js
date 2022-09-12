const mongoos = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

const DBConnect = require('./utils/dbConnect');

// database connected
DBConnect();

const port = process.env.PORT ||8080;

const app = require('./app');

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`.yellow.bold);
});

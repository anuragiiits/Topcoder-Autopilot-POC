const express = require('express');
const bodyParser = require('body-parser');

const msm = require('mongo-scheduler-more');
const options = {};
const scheduler = new msm('mongodb://localhost:27017/scheduler-db', options);

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


require('./app/routes/routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
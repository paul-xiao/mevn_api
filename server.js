const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const config = require('./config/db');
const PORT = 4000;

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
    });

require('./app/routes/index')(app);
app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});

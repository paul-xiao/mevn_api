const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

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

 // pass passport for configuration
require('./config/passport')(passport);
require('./app/routes/index')(app);

app.get('/', (req, res) => {
    res.send('hello111')
    console.log(res)
});
app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});

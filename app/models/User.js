const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Course
var User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
},{
    timestamps: true,
    collection: 'user'
});

module.exports = mongoose.model('User', User);

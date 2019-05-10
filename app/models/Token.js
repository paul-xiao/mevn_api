const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Course
var Token = new Schema({
    name: {
        type: String
    },
    token: {
        type: String
    }
},{
    timestamps: true,
    collection: 'token'
});

module.exports = mongoose.model('Token', Token);

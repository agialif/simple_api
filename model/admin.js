const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamp: true
});

var Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var addressSchema = new Schema({
    street:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String, 
        required: true
    }
})

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        requird: true
    },
    address: addressSchema
})

var User = mongoose.model('User', userSchema);
module.exports = User;
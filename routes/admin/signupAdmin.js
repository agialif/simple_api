var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Admin = require('../../model/admin');
var signupAdmin = express.Router();
signupAdmin.use(bodyParser.json());

signupAdmin.route('/')
.post((req, res, next) => {
    Admin.create(req.body)
    .then((admin) => {
        var name = req.body.name;
        console.log(name, " berhasil terdaftar");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(admin)
    })
    .catch((err) => {
        console.log(err);
        res.status(500);
        res.end(err)
    })
})

module.exports = signupAdmin;

const User = require('../model/user');

const getAllUser = (req, res) => {
    User.find({}, {"password": 0})
    .then((user) => {
        res.json(user);
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
    })
    .catch((err) =>{
        console.log(err);
        res.send(err);
        res.status(500);
    })
}

const getUser = (req, res) => {
    var {id:userId} = req.params;
    User.findById({_id:userId}, {"password": 0})
    .then((user) => {
        res.json(user);
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
    })
    .catch((err) =>{
        console.log(err);
        res.send(err);
        res.status(500);
    })
}

const postUser = (req, res) => {
    User.create(req.body)
    .then((user => {
        res.json(user);
        var name = req.body.name;
        console.log(name, "berhasil terdaftar");
        res.status(200);
        //res.setHeader('Content-Type', 'application/json');
    }))
    .catch((err) =>{
        console.log(err);
        res.send(err);
        res.status(500);
    })
}

const putUser = (req, res) => {
    const {id:userId} = req.params
    User.findByIdAndUpdate({_id:userId})
    .then((user) => {
        console.log("User updated");
        res.json(user).setHeader('Content-Type', 'application/json').status(200);
    })
    .catch((err) => {
        console.log(err)
        res.send(err).status(500);
    })
}

module.exports = {
    getAllUser,
    getUser,
    postUser,
    putUser
}

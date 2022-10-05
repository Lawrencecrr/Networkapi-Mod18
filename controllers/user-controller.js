const {User, Thought} = require('../models');


const userController = {
    getAllUsers(req, res) {
    User.find({})
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });

    },
    getUserById(req, res) {

    },
    createUser(req, res) {

    },
    updateUser(req, res) {

    },
    deleteUser(req, res) {

    }















}

module.exports = userController;
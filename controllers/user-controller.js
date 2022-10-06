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
    getUserById({params}, res) {
      User.findOne({_id: params.id})
        .then(dbUserData => {
          if(!dbUserData) {
            res.status(404).json({ message: 'no user found with this id'});
            return;
          }
          res.json(dbUserData)
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
    createUser({body}, res) {
      User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
    },
    updateUser(req, res) {

    },
    deleteUser(req, res) {

    }















}

module.exports = userController;
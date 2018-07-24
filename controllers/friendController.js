const db = require("../models");

// Defining methods for the articleController
module.exports = {
    findAll: function(req, res) {
        db.Friend
            .find(req.query)
            .sort({ date: -1 })
            .then(dbFriend => res.json(dbFriend))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Friend
            .findById(req.params.id)
            .then(dbFriend => res.json(dbFriend))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("friendController" + req + res);
        const friend = {
            friendsList: req.body.friend,
            friendsList_id: req.body.friendsList_id
        };
        db.Friend
            .create(friend)
            .then(dbFriend => res.json(dbFriend))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Friend
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbFriend => res.json(dbFriend))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Friend
            .findById({ _id: req.params.id })
            .then(dbFriend => dbFriend.remove())
            .then(dbFriend => res.json(dbFriend))
            .catch(err => res.status(422).json(err));
    }
};

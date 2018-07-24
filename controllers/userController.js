const db = require("../models");

// Defining methods for the articleController
module.exports = {
    findAll: function(req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.User
            .findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("userController create");
        const user = {
            email: req.body.email,
            friendsList_id: req.body.friendsList_id,
            instagram: req.body.instagram,
            likedPlaylists_id: req.body.likedPlaylists_id,
            likedSongs_id: req.body.likedSongs_id,
            playlist_id: req.body.playlist_id,
            profile_id: req.body.profile_id,
            proPic: req.body.proPic,
            pw: req.body.pw,
            twitter: req.body.twitter,
            userName: req.body.userName,
            _id: req.body.userName
        };
        db.User
            .create(user)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        console.log("userController update");
        const user = {
            email: req.body.email,
            friendsList_id: req.body.friendsList_id,
            instagram: req.body.instagram,
            likedPlaylists_id: req.body.likedPlaylists_id,
            likedSongs_id: req.body.likedSongs_id,
            playlist_id: req.body.playlist_id,
            profile_id: req.body.profile_id,
            proPic: req.body.proPic,
            pw: req.body.pw,
            twitter: req.body.twitter,
            userName: req.body.userName,
            _id: req.body.userName
        };
        db.User
            .findByIdAndUpdate(req.body._id, user)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
};

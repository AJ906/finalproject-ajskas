const db = require("../models");

// Defining methods for the profileController
module.exports = {
    findAll: function(req, res) {
        db.SongLike
            .find(req.query)
            .sort({ date: -1 })
            .then(dbSongLike => res.json(dbSongLike))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.SongLike
            .findById(req.params.id)
            .then(dbSongLike => res.json(dbSongLike))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("songLikeController");
        const songlike = {
            likedSongs: req.body.likedSongs,
            likedSongs_id: req.body.likedSongs_id
        };
        db.SongLike
            .create(songlike)
            .then(dbSongLike => res.json(dbSongLike))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.SongLike
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbSongLike => res.json(dbSongLike))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.SongLike
            .findById({ _id: req.params.id })
            .then(dbSongLike => dbSongLike.remove())
            .then(dbSongLike => res.json(dbSongLike))
            .catch(err => res.status(422).json(err));
    }
};
const db = require("../models");

// Defining methods for the constLikesController
module.exports = {
    findAll: function(req, res) {
        db.pLike
            .find(req.query)
            .sort({ date: -1 })
            .then(dbPlaylistLike => res.json(dbPlaylistLike))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.pLike
            .findById(req.params.id)
            .then(dbPlaylistLike => res.json(dbPlaylistLike))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("playlistLikeController");
        const playlistlike = {
            likedPlaylists: req.body.likedPlaylists,
            likedPlaylists_id: req.body.likedPlaylists_id
        };
        db.pLike
            .create(playlistlike)
            .then(dbPlaylistLike => res.json(dbPlaylistLike))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.pLike
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbPlaylistLike => res.json(dbPlaylistLike))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.pLike
            .findById({ _id: req.params.id })
            .then(dbPlaylistLike => dbPlaylistLike.remove())
            .then(dbPlaylistLike => res.json(dbPlaylistLike))
            .catch(err => res.status(422).json(err));
    }
};

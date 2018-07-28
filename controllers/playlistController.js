const db = require("../models");

// Defining methods for the playlistController
module.exports = {
    findAll: function(req, res) {
        db.Playlist
            .find(req.query)
            .sort({ date: -1 })
            .then(dbPlaylist => res.json(dbPlaylist))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Playlist
            .findById(req.params.id)
            .then(dbPlaylist => res.json(dbPlaylist))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("playlistController");
        const playlist = {
            playlist: req.body.playlist,
            playlist_id: req.body.playlist_id
        };
        db.Playlist
            .create(playlist)
            .then(dbPlaylist => res.json(dbPlaylist))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        const playlist = {
            playlist: req.body.playlist,
            playlist_id: req.body.playlist_id
        };
        db.Playlist
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbPlaylist => res.json(dbPlaylist))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Playlist
            .findById({ _id: req.params.id })
            .then(dbPlaylist => dbPlaylist.remove())
            .then(dbPlaylist => res.json(dbPlaylist))
            .catch(err => res.status(422).json(err));
    }
};

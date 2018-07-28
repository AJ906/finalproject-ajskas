const db = require("../models");

// Defining methods for the profileController
module.exports = {
    findAll: function(req, res) {
        db.Profile
            .find(req.query)
            .sort({ date: -1 })
            .then(dbProfile => res.json(dbProfile))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Profile
            .findById(req.params.id)
            .then(dbProfile => res.json(dbProfile))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("profileController");
        const profile = {
            about: req.body.about,
            photoURL: req.body.photoURL,
            profile_id: req.body.userName
        };
        db.Profile
            .create(profile)
            .then(dbProfile => res.json(dbProfile))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Profile
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbProfile => res.json(dbProfile))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Profile
            .findById({ _id: req.params.id })
            .then(dbProfile => dbProfile.remove())
            .then(dbProfile => res.json(dbProfile))
            .catch(err => res.status(422).json(err));
    }
};

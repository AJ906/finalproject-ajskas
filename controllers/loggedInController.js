const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.LoggedIn
            .find(req.query)
            .sort({ date: -1 })
            .then(dbLoggedIn => res.json(dbLoggedIn))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.LoggedIn
            .findById(req.params.id)
            .then(dbLoggedIn => res.json(dbLoggedIn))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("loggedInController" + req + res);
        const loggedIn = {
            lastUser: req.body.lastUser,
            loggedIn_id: req.body.loggedIn_id
        };
        db.LoggedIn
            .create(loggedIn)
            .then(dbLoggedIn => res.json(dbLoggedIn))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.LoggedIn
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbLoggedIn => res.json(dbLoggedIn))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.LoggedIn
            .findById({ _id: req.params.id })
            .then(dbLoggedIn => dbLoggedIn.remove())
            .then(dbLoggedIn => res.json(dbLoggedIn))
            .catch(err => res.status(422).json(err));
    }
};

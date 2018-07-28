const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    friendsList_id: {type: String},
    instagram: {type: String},
    likedPlaylists_id: {type: String},
    likedSongs_id: {type: String},
    playlist_id: {type: String},
    profile_id: { type: String},
    proPic: {type: String},
    pw: {type: String},
    twitter: {type: String},
    userName: {type: String},
    _id: { type: String, required: true }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    about: {type: String},
    photoURL: {type: String},
    profile_id: { type: String}
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

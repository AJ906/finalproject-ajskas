const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    profile_id: { type: Schema.Types.ObjectId, required: true },
    fav_genres: [{genre:String}],
    about: {String},
    photoURL: {String}
}, { _id: false });

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
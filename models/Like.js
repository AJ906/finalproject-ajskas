const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    likesID: { type: Schema.Types.ObjectId, required: true },
    likedPlaylists: [{playlist_id:String}],
    likedSongs: [{song_id:String}]

}, { _id: false });

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
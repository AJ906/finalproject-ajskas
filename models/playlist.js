const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    playlist_id:  { type: Schema.Types.ObjectId, required: true },
    songs: [{song_id:String}]

}, { _id: false });

const Playlist = mongoose.model("Like", playlistSchema);

module.exports = Playlist;
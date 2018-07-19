const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
    song_id: { type: Schema.Types.ObjectId, required: true },
    song_name: [{genre:String}],
    song_artist: {String},
    song_genre: {String}
}, { _id: false });

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
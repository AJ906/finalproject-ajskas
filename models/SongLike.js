const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songLikeSchema = new Schema({
    likedSongs: [{type: String}],
    likedSongs_id: { type: String}
});

const SongLike = mongoose.model("SongLike", songLikeSchema);

module.exports = SongLike;
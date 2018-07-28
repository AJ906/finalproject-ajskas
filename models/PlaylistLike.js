const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pListsLikesSchema = new Schema({
    likedPlaylists: [{type: String}],
    likedPlaylists_id: { type: String}
});

const PlaylistLike = mongoose.model("PlaylistLike", pListsLikesSchema);

module.exports = PlaylistLike;
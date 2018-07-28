const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    playlist:
                {
                    I: {type: String}, //song id here
                    II: {type: String},
                    III: {type: String},
                    IV: {type: String},
                    V: {type: String},
                    VI: {type: String},
                    VII: {type: String},
                    VIII: {type: String},
                    IX: {type: String},
                    X: {type: String}
                },
    playlist_id: { type: String}
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;

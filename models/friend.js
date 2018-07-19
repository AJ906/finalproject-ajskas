const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendlistSchema = new Schema({
    friendlist_id: { type: Schema.Types.ObjectId, required: true },
    friendlist: [{profile_id:String}]

}, { _id: false });

const FriendList = mongoose.model("FriendList", friendlistSchema);

module.exports = FriendList;

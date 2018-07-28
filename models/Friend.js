const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendsListSchema = new Schema({
    friendsList: [{_id:String}],
    friendsList_id: { type: String}
});

const Friend = mongoose.model("Friend", friendsListSchema);

module.exports = Friend;

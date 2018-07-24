const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loggedInSchema = new Schema({
    lastUser: {type:String},
    loggedIn_id: { type: String}
});

const LoggedIn = mongoose.model("LoggedIn", loggedInSchema);

module.exports = LoggedIn;

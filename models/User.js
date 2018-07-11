const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    userName: {String},
    email: {String},
    pw: {String}
}, { _id: false });

const User = mongoose.model("User", userSchema);

module.exports = User;
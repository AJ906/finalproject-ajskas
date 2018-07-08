const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    userName: {String},
    fullName:{String},
    email: {String}
}, { _id: false });

const User = mongoose.model("User", userSchema);

module.exports = User;
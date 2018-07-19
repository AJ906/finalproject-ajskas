const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    userName: {String},
    email:{
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    pw: {String}
}, { _id: false });

const User = mongoose.model("User", userSchema);

module.exports = User;
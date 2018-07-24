const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/vData"
);

const userSeed = [
    {
        _id: "TonyTone",
        userName: "TonyTone",
        pw: "444",
        email: "acsii@me.com"
    },
    {
        _id: "TwilightTone",
        userName: "TwilightTone",
        pw: "333",
        email: "acsii@me.com"
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

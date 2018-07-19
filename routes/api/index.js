const router = require("express").Router();

const friendRoutes = require("./friends");
const likeRoutes = require("./likes");
const playlistRoutes = require("./playlists");
const profileRoutes = require("./profiles");
const songRoutes = require("./songs");
const userRoutes = require("./users");

// User routes
router.use("/users", userRoutes)

// Profile routes
//router.use("/profiles", profileRoutes)

// Friend routes
//router.use("/friends", friendRoutes)

// Playlist routes
//router.use("/playlists", playlistRoutes)

// Song routes
//router.use("/songs", songRoutes)

// Like routes
//router.use("/likes", likeRoutes)

module.exports = router;
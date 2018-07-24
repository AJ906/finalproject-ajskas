const router = require("express").Router();

const friendRoutes = require("./friends");
const songLikeRoutes = require("./songLikes");
const playlistLikeRoutes = require("./playlistLikes");
const playlistRoutes = require("./playlists");
const profileRoutes = require("./profiles");
const userRoutes = require("./users");

// User routes
router.use("/users", userRoutes);

// Profile routes
router.use("/profiles", profileRoutes);

// Friend routes
router.use("/friends", friendRoutes);

// Playlist routes
router.use("/constellations", playlistRoutes);

// Liked songs routes
router.use("/likedSongs", songLikeRoutes);


// Liked playlists routes
router.use("/likedConstellations", playlistLikeRoutes);

module.exports = router;
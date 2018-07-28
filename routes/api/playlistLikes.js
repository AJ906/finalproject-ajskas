const router = require("express").Router();
const playlistLikeController = require("../../controllers/playlistLikeController");


router.route("/")
    .get(playlistLikeController.findAll)
    .post(playlistLikeController.create);

router
    .route("/:id")
    .get(playlistLikeController.findById)
    .put(playlistLikeController.update)
    .delete(playlistLikeController.remove);

module.exports = router;
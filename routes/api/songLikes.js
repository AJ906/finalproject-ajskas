const router = require("express").Router();
const songLikeController = require("../../controllers/songLikeController");


router.route("/")
    .get(songLikeController.findAll)
    .post(songLikeController.create);

router
    .route("/:id")
    .get(songLikeController.findById)
    .put(songLikeController.update)
    .delete(songLikeController.remove);

module.exports = router;
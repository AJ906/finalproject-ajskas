const router = require("express").Router();
const playlistController = require("../../controllers/playlistController");


router.route("/")
    .get(playlistController.findAll)
    .post(playlistController.create);


router
    .route("/:id")
    .get(playlistController.findById)
    .put(playlistController.update)
    .delete(playlistController.remove);

module.exports = router;
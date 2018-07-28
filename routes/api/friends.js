const router = require("express").Router();
const friendController = require("../../controllers/friendController");


router.route("/")
    .get(friendController.findAll)
    .post(friendController.create);

router
    .route("/:id")
    .get(friendController.findById)
    .put(friendController.update)
    .delete(friendController.remove);

module.exports = router;
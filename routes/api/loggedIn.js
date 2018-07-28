const router = require("express").Router();
const loggedInController = require("../../controllers/loggedInController");


router.route("/")
    .get(loggedInController.findAll)
    .post(loggedInController.create);

router
    .route("/:id")
    .get(loggedInController.findById)
    .put(loggedInController.update)
    .delete(loggedInController.remove);

module.exports = router;
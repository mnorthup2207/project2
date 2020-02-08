const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/all")
    .get(userController.GetUsers)

router.route("/current")
    .get(userController.getCurrentUser)

module.exports = router;
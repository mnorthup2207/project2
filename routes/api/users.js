const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/all")
    .get(userController.GetUsers)

module.exports = router;
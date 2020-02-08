const router = require("express").Router();
const usController = require("../../controllers/userStreamController");

router.route("/all")
    .get(usController.streamCountByUser)

router.route("/create")
    .post(usController.createUserStream)

router.route("/current")
    .get(usController.streamCountCurrentUser)

module.exports = router;
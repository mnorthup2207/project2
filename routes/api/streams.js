const router = require("express").Router();
const streamController = require("../../controllers/streamController");

router.route("/create")
    .post(streamController.createStream)


module.exports = router;
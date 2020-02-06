const router = require("express").Router();
const streamController = require("../../controllers/streamController");

router.route("/all")
    .get(streamController.StreamCountByUser)


module.exports = router;
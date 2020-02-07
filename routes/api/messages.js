const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.route("/by-stream/:id")
    .get(messageController.findByStream)

module.exports = router
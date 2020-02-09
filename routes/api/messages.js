const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.route("/stream/:id")
    .get(messageController.findByStream)
    .post(messageController.createMessage)

module.exports = router;
const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.route("/all")
    .get(messageController.findByStream)

router.route("/create")
    .post(messageController.createMessage)

module.exports = router;
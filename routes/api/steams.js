const router = require("express").Router();
const streamController = require("../../controllers/streamController");

router.route("/streams")
    .get(streamController.StreamCountByUser)
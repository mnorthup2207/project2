const router = require("express").Router();
// const streamController = require("../../controllers/streamController");
const usController = require("../../controllers/userStreamController");

router.route("/all")
    .get(usController.StreamCountByUser)


module.exports = router;
const router = require("express").Router();
const controller = require("../../controllers/mesagController");
var passport = require("../../config/passport");


router.route("/meassges")
    .get(controller.findByUser)
    .get(controller.findByRaft)

module.exports = router
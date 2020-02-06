const router = require("express").Router();
const controller = require("../../controllers/raftsController");
var passport = require("../../config/passport");

router.route("/all")
    .get(controller.findByUser)

router.route("/rafts")
    // .get(controller.findByRaft)
    .post(controller.uploadRaft)
    
module.exports = router
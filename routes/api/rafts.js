const router = require("express").Router();
const raftController = require("../../controllers/raftsController");

router.route("/all")
    .get(raftController.findByUser)

router.route("/rafts")
    // .get(controller.findByRaft)
    .post(raftController.uploadRaft)
    
module.exports = router
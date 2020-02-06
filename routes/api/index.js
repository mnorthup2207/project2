const router = require("express").Router();
const authRoutes = require("./auth");
const streamRoutes = require("./streams");
const s3Routes = require("./s3-routes");
const raftRoutes = require("./rafts");

router.use("/auth", authRoutes);
router.use("/streams", streamRoutes);
router.use("/s3", s3Routes);
router.use("/raft", raftRoutes)
module.exports = router;
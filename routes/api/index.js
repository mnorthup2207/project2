const router = require("express").Router();
const authRoutes = require("./auth");
const s3Routes = require("./s3-routes");
const raftRoutes = require("./rafts");

router.use("/auth", authRoutes);
router.use("/s3", s3Routes);
router.use("/raft", raftRoutes)
module.exports = router;
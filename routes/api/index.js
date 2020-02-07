const router = require("express").Router();
const authRoutes = require("./auth");
const streamRoutes = require("./streams");
const s3Routes = require("./s3-routes");
const raftRoutes = require("./rafts");
const userRoutes = require("./users");
const userStreamRoutes = require("./user-stream");
const messageRoutes = require("./messages");

router.use("/auth", authRoutes);
router.use("/stream", streamRoutes);
router.use("/s3", s3Routes);
router.use("/raft", raftRoutes);
router.use("/user", userRoutes);
router.use("/user-stream", userStreamRoutes);
router.use("/message", messageRoutes);

module.exports = router;
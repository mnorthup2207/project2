const router = require("express").Router();
const authRoutes = require("./auth");
const s3Routes = require("./s3-routes");

router.use("/auth", authRoutes);
router.use("/s3", s3Routes);

module.exports = router;
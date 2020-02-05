const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html/html-routes");
// ./html/html-routes
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the html routes
router.use("/", htmlRoutes)

module.exports = router;
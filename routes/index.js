const router = require("express").Router();
const apiRoutes = require("./api/api-routes");
const htmlRoutes = require("./html/html-routes");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the html routes
router.use("/html", htmlRoutes)

module.exports = router;
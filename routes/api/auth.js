const router = require("express").Router();
const authController = require("../../controllers/authController");
var passport = require("../../config/passport");


router.route("/login")
    .post(passport.authenticate("local"), (req, res) => {res.json(req.user)});

router.route("/signup")
    .post(authController.create);

router.route("/logout")
    .get((req, res) => {
        req.logout();
        res.redirect("/");
    });

module.exports = router;


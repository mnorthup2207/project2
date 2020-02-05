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


// app.post("/api/login", passport.authenticate("local"), function (req, res) {
//     res.json(req.user);
// });

// app.post("/api/signup", function (req, res) {
//     db.User.create({
//         email: req.body.email,
//         password: req.body.password
//     })
//         .then(function () {
//             res.redirect(307, "/api/login");
//         })
//         .catch(function (err) {
//             res.status(401).json(err);
//         });
// });

// app.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });
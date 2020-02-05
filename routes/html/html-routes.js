const path = require("path");
const router = require("express").Router();
const db = require('../../models')

const isAuth = require("../../config/middleware/isAuthenticated");

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", function (req, res) {
    if (req.user) {
        console.log(req.user)
        res.render("dashboard", {
            user: req.user
        })
    }
    res.render("index")
});

// "/dashboard" loads the specific user dashboard
router.get("/dashboard", isAuth, function (req, res) {
    console.log(req.user)
    res.render("dashboard", {
        user: req.user
    })
});

router.get("/test", function (req, res) {
    res.render("test")
    // res.sendFile(path.join(__dirname, "../../public/test.html"));
});

//   // "/loader" loads the individual user's streams(messages) dashboard
router.get("/loader", isAuth, function (req, res) {
    res.render("loader");
});

//   // "/account" loads the users info to be updated or reviewed
//   app.get("/account", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/account-info.html"));
//   });





//   router.get("/", function(req, res) {
//       console.log("yay")
//     res.sendFile(path.join(__dirname, "../../public/test.html"));
//   })

module.exports = router
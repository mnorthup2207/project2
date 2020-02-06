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

router.get('/loader/rafts', function(req, res) {
    res.render("loader", {
        rafts: true,
        }
    );
});

router.get('/loader/streams', function(req, res) {
    res.render("loader", {
        streams: true
        }
    );
});

// "/account" loads the users info to be updated or reviewed
router.get("/account", isAuth, function (req, res) {
    res.render("account");
});





//   router.get("/", function(req, res) {
//       console.log("yay")
//     res.sendFile(path.join(__dirname, "../../public/test.html"));
//   })

module.exports = router
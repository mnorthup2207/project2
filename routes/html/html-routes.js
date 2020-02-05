const path = require("path");
const router = require("express").Router();

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
});

//   // "/account" loads the users info to be updated or reviewed
//   app.get("/account", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/account-info.html"));
//   });

//   // "/stream" loads the individual user's streams(messages) dashboard
//   app.get("/streams", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/streams.html"));
//   });

//   // "/rafts" loads the individual user's rafts(documents) dashboard
//   app.get("/rafts", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/rafts.html"));
//   });


//   router.get("/", function(req, res) {
//       console.log("yay")
//     res.sendFile(path.join(__dirname, "../../public/test.html"));
//   })

module.exports = router
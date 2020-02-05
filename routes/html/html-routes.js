const path = require("path");
const router = require("express").Router();



// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", function (req, res) {
    console.log("yay")
    res.render("index")
});
// "/dashboard" loads the specific user dashboard
router.get("/dashboard", function (req, res) {
    res.render("dashboard")
    // res.sendFile(path.join(__dirname, "../../public/user-dashboard.html"));
});
router.get("/test", function (req, res) {
    res.render("test")
    // res.sendFile(path.join(__dirname, "../../public/test.html"));
});

//   // "/loader" loads the individual user's streams(messages) dashboard
router.get("/loader", function (req, res) {
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
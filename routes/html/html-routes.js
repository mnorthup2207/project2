

const path = require("path");
const router = require("express").Router();
const db = require('../../models')
const $ = require("jquery")
const a = require("ajax")


const isAuth = require("../../config/middleware/isAuthenticated");

// const video = require("../../public/js/landing")

// Each of the below routes just handles the HTML page that the user gets sent to.


// index route loads view.html
router.get("/", function (req, res) {
    if (req.user) {
        console.log(req.user)
        res.sendFile(path.join(__dirname, "../../public/dashboard.html"))
    }

    res.sendFile(path.join(__dirname, "../../public/login.html"));

});

router.get("/dashboard", isAuth, function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/dashboard.html"))
})
// router.get("/", function (req, res) {
//     if (req.user) {


//         console.log(req.user)
//         res.render("dashboard", {
//             user: req.user,
//         })
//     }


//     const newVideo = videos[Math.floor(Math.random() * videos.length)]

//     console.log(newVideo)

//     res.render("index", {
//         video: newVideo
//     })
// });

// // "/dashboard" loads the specific user dashboard
// router.get("/dashboard", isAuth, function (req, res) {
//     res.render("dashboard", {
//         user: req.user
//     })

// router.get("/dashboard", isAuth, function (req, res) {
//     res.render(__dirname, "../../public/dashboard.html")
// });

// router.get("/test", function (req, res) {
//     res.render("test")
//     // res.sendFile(path.join(__dirname, "../../public/test.html"));
// });

// router.get('/loader/rafts', function (req, res) {
//     res.render("loader", {
//         rafts: true,
//     }
//     );
// });

// router.get('/rafts', function (req, res) {
//     res.render(__dirname, "../../public/rafts.html");
// });

// router.get('/loader/streams', function (req, res) {
//     res.render("loader", {
//         streams: true,    
//     }
//     );
// });

// router.get('/streams', function (req, res) {
//     res.render(__dirname, "../../public/streams.html");
// });
// // "/account" loads the users info to be updated or reviewed
// router.get("/account", isAuth, function (req, res) {
//     res.render("account");
// });





//   router.get("/", function(req, res) {
//       console.log("yay")
//     res.sendFile(path.join(__dirname, "../../public/test.html"));
//   })

module.exports = router;



const path = require("path");
const router = require("express").Router();
const db = require('../../models')
const $ = require("jquery")
const a = require("ajax")

const isAuth = require("../../config/middleware/isAuthenticated");

// const video = require("../../public/js/landing")

// Each of the below routes just handles the HTML page that the user gets sent to.

const videos = [
    "https://player.vimeo.com/external/334689212.hd.mp4?s=fdafe55ad79a35116cd845d6b6b2dcf1a804aafe&profile_id=169",
    "https://player.vimeo.com/external/220217599.hd.mp4?s=9223bc9334705fab02b958d2c0adec7cd0d6ee2d&profile_id=170",
    "https://player.vimeo.com/external/185634843.hd.mp4?s=16e7ff27bb4ba0061087a98be13f6eef46efdf9f&profile_id=119",
    "https://player.vimeo.com/external/153555261.hd.mp4?s=4475eb415ea43f3c23f959d49afa8ec89ae38465&profile_id=119",
    "https://player.vimeo.com/external/201447786.hd.mp4?s=4d30bcb5845201c73220429be88b065173fe4622&profile_id=119",
    "https://player.vimeo.com/external/166335888.hd.mp4?s=cdf573645554e4d1be3dba7db82bdabceec276ee&profile_id=119",
    "https://player.vimeo.com/external/337674789.hd.mp4?s=2c0381ba2dcaf8d6f51e583de093d144003578ba&profile_id=172",
    "https://player.vimeo.com/external/228537296.hd.mp4?s=8cd00047f50e518c9df2acff38c40180be8104e5&profile_id=173",
    "https://player.vimeo.com/external/215588925.hd.mp4?s=9738b89fa47fc9232cb1633ef386fdd5e45067fc&profile_id=119",
    "https://player.vimeo.com/external/171841307.hd.mp4?s=5113e1b9ffc4c3ace59f54bc0dfdde01324141ba&profile_id=119",
    "https://player.vimeo.com/external/142613837.hd.mp4?s=e16f302c748fa4ff44e49a477abccfaab221eec0&profile_id=119",
    "https://player.vimeo.com/external/321298117.hd.mp4?s=18320af11ef1ca843a274c67bdddb569224c1fab&profile_id=175",
    "https://player.vimeo.com/external/222013868.hd.mp4?s=97145be77bd573d78a29c422f69f0ffb6e1ad99e&profile_id=119",
    "https://player.vimeo.com/external/159145696.hd.mp4?s=200a7e716449d7daf6d4ba67f3867d0ac4a4c15f&profile_id=119",
    "https://player.vimeo.com/external/224677302.hd.mp4?s=cbd5bcd0f2a1933ff5ae88b1212f15d3e1d47d55&profile_id=172",
    "https://player.vimeo.com/external/343454414.hd.mp4?s=37c9262da53fe1cbefe2fb2bababba6859c8a7de&profile_id=172",
    "https://player.vimeo.com/external/382483868.hd.mp4?s=520d4c9c3200f84b5adef37846d2300af320e98d&profile_id=169",
    "https://player.vimeo.com/external/340670744.hd.mp4?s=b831f55135662f340935b9381584355764d7246a&profile_id=175"
]

// index route loads view.html
router.get("/", function (req, res) {
    if (req.user) {


        console.log(req.user)
        res.render("dashboard", {
            user: req.user,
        })
    }


    const newVideo = videos[Math.floor(Math.random() * videos.length)]

    console.log(newVideo)

    res.render("index", {
        video: newVideo
    })
});

// "/dashboard" loads the specific user dashboard
router.get("/dashboard", isAuth, function (req, res) {
    res.render("dashboard", {
        user: req.user
    })
});

router.get("/test", function (req, res) {
    res.render("test")
    // res.sendFile(path.join(__dirname, "../../public/test.html"));
});

router.get('/loader/rafts', function (req, res) {
    res.render("loader", {
        rafts: true,
    }
    );
});

router.get('/loader/streams', function (req, res) {
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

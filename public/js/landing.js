
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

const box1 = $(".box1H2")
const box2 = $(".box2H2")

function getBackgroundVid() {
    const newVideo = videos[Math.floor(Math.random() * videos.length)]
    $("#myVideo").append(
        `<source id="vidSource" src="${newVideo}" type="video/mp4">`
    );
}

getBackgroundVid();

box1.on('click', function () {
    $(".box1").toggleClass("show");
    $(".box2").attr("class", "box2");
    $(".loginForm").toggle("slow")
    $(".createForm").toggle(false)
    // $(".brandStatement").toggle(false)
});
box2.on('click', function () {
    $(".box2").toggleClass("show");
    $(".box1").attr("class", "box1")
    $(".createForm").toggle("slow")
    $(".loginForm").toggle(false)
    // $(".brandStatement").toggle(false)
});

$(".login").on("submit", event => {
    event.preventDefault();
    const userData = {
        email: $("#logEmail").val().trim(),
        password: $("#logPass").val().trim()

    };

    if (!userData.email || !userData.password) {
        return;
    }

    login(userData.email, userData.password);
    $("#logEmail").val("");
    $("#logPass").val("");
});

$(".signup").on("submit", event => {
    event.preventDefault();
    const userData = {
        firstName: $("#name1").val().trim(),
        lastName: $("#name2").val().trim(),
        email: $("#createEmail").val().trim(),
        password: $("#createPass").val().trim()

    };

    if ($("#createPass").val() != $("#confirmPass").val()) {
        return console.log("Passwords dont match!");
    }

    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
        return console.log("missing fields!");
    }

    signUp(userData.firstName, userData.lastName, userData.email, userData.password);
    $("#name1").val("");
    $("#name2").val("");
    $("#createEmail").val("");
    $("#createPass").val("");
    $("#confirmPass").val("");
})

function login(email, password) {
    $.post("/api/auth/login", {
        email: email,
        password: password
    })
        .then(data => {
            window.location.replace("/dashboard");
        })
        .catch(handleLoginErr);
};

function signUp(firstName, lastName, email, password) {
    $.post("/api/auth/signup", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    })
        .then(data => {
            window.location.replace("/dashboard");
        })
        .catch(handleLoginErr);
};

function handleLoginErr(err) {
    console.log(err.responseJSON);
};

// module.exports(backroundVideo)


// columnNumbers = ["10", "12", "24"]
// arrayLength = columnNumbers.length
// e = $(".rotating-number")
// i = 0

// while (i < arrayLength) {
//     setTimeout(() => {
//         e.text(columnNumbers[i])
//         i++
//     }, 500)
// };


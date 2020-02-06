const box1 = $(".box1H2")
const box2 = $(".box2H2")

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

// dropZone JS
// Dropzone.options.uploadWidget = {
//     paramName: 'file',
//     maxFilesize: 2, // MB
//     maxFiles: 1,
//     dictDefaultMessage: 'Drag an image here to upload, or click to select one',
//     headers: {
//         'x-csrf-token': document.querySelector('meta[name=csrf-token]').getAttributeNode('content').value,
//     },
//     acceptedFiles: 'image/*',
//     init: function () {
//         this.on('success', function (file, resp) {
//             console.log(file);
//             console.log(resp);
//         });
//         this.on('thumbnail', function (file) {
//             if (file.accepted !== false) {
//                 if (file.width < 640 || file.height < 480) {
//                     file.rejectDimensions();
//                 } else {
//                     file.acceptDimensions();
//                 }
//             }
//         });
//     },
//     accept: function (file, done) {
//         file.acceptDimensions = done;
//         file.rejectDimensions = function () {
//             done('The image must be at least 640 x 480px');
//         };
//     }
// };

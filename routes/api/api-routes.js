const db = require("../../models");
const fs = require('fs');
const AWS = require('aws-sdk');
// const passport = require("../config/passport") 

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports = function(app) {
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/test.html"));
  // });

  app.post("/upload", function(req, res) {
    const fileName = req.files
    console.log(fileName)
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        const params = {
            Bucket: 'du-bootcamp-project2',
            Key: fileName,
            Body: JSON.stringify(data, null, 2)
        };
        s3.upload(params, function(s3Err, data) {
            if (s3Err) throw s3Err
            console.log(`File uploaded successfully at ${data.Location}`)
            res.status(500).end()
            return `https://s3-yourawsregioncode-amazonaws.com/du-bootcamp-project2/${data.Location}`
        });
    });
  });
};


// api calls for gathering data
// landing page 
// // Using the passport.authenticate middleware with our local strategy.
//   // If the user has valid login credentials, send them to the members page.
//   // Otherwise the user will be sent an error
//   app.post("/api/login", passport.authenticate("local"), function(req, res) {
//     res.json(req.user);
//   });

//   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//   app.post("/api/signup", function(req, res) {
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password
//     })
//       .then(function() {
//         res.redirect(307, "/api/login");
//       })
//       .catch(function(err) {
//         res.status(401).json(err);
//       });
//   });

//   // Route for logging user out
//   app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/");
//   });

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });

// user dashboard calls
// inside the welcome back {first, last name} =>
// app.get


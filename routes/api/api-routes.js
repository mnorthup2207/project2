const db = require("../../models");
const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports = function (app) {
    // app.get("/", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/test.html"));
    // });

    app.post("/upload", function (req, res) {
        const fileName = req.files
        console.log(fileName)
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            const params = {
                Bucket: 'du-bootcamp-project2',
                Key: fileName,
                Body: JSON.stringify(data, null, 2)
            };
            s3.upload(params, function (s3Err, data) {
                if (s3Err) throw s3Err
                console.log(`File uploaded successfully at ${data.Location}`)
                res.status(500).end()
                return `https://s3-yourawsregioncode-amazonaws.com/du-bootcamp-project2/${data.Location}`
            });
        });
    });
};

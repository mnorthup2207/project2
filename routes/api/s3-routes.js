const db = require("../../models");
const fs = require('fs');
// const express = require("express");
const AWS = require('aws-sdk');
const router = require("express").Router();
const fileUpload = require("express-fileupload");

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

router.use(fileUpload())
// router.use(express.static("public"))

router.post("/upload", function (req, res) {
    console.log("Yay!")
    if (!req.files) {
        return res.status(400).send("No file was uploaded.");
    }
    
    const uploadFile = req.files.file;
    console.log(uploadFile)
    
    const params = {
        Bucket: 'du-bootcamp-project2',
        Key: `${Date.now()}-${uploadFile.name}`,
        Body: uploadFile.data
    };
    
    s3.upload(params, (err, response) => {
        if (err) throw err;
    
        console.log(`File uploaded successfully at ${response.Location}`);
        res.json({ location: response.Location, data: req.body, userId: req.user.userId, name: req.name });
        
    }).then(() => {
        $.ajax("/api/raft/rafts", {
        type: "POST",
        data: response             
        }).then(console.log("doc success"))
    })
    
})

router.get
module.exports = router

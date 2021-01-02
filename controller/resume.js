const Resume = require("../modals/resume");
const formidable = require("formidable");
const fs = require("fs");
const path = require('path');

//get data
exports.resumeGet = (req, res) => {
    Resume.find((err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Error happen",
                error: err.message,
                error: err
            });
        }
        else if (data.length == 0) {
            return res.status(500).json({
                message: "Error happen"
            });
        }
        return res.status(200).json({
            data
        });
    });
}

//upload data
exports.resumePost = (req, res) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem happen" + err.message
            });
        }

        const {firstname, lastname, email, phonenumber, address} = fields;
        
        if (!firstname || !lastname || !email || !phonenumber || !address) {
            return res.status(400).json({
                message: "* fields can't be empty"
            });
        }

        let resume = new Resume(fields);

        if (file.cv) {
            resume.cv.data = fs.readFileSync(file.cv.path);
            resume.cv.contentType = file.cv.type;
        }

        resume.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "cv can't be send",
                    message: err.message
                });
            }
            return res.status(200).json({
                message: "data uploaded",
                resume: data
            })
        })

    });	
}
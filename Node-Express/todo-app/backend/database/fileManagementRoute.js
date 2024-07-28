const fs = require("fs");

const fileUploadFunction = (req, res) => {
    res.send({filename: req.file.filename, originalFilename: req.file.originalname})
}

const fileDownloadFunction = (req, res) => {
    fs.readdir("upload/", (err, files)=>{
        if(err) {
            return res.status(500).json({ error: err.message });
        }
        res.send(files)
    })
}

module.exports = { fileUploadFunction, fileDownloadFunction }

const multer = require("multer");
const path = require("path");

const handleDestination = (req, file, callBack) => {
    callBack(null, "upload/")
}

const handleFilename = (req, file, callBack) => {
    console.log(Date.now() + path.extname(file.originalname))
    callBack(null, Date.now() + path.extname(file.originalname))
}

const storage = multer.diskStorage({
    destination: handleDestination,
    filename: handleFilename
});

const fileUpload = multer({ storage }).single("myFile");

module.exports = { fileUpload }
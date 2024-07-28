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

const csvFilter = (req, file, callBack) => {
    if (file.mimetype.includes("csv")) {
        callBack(null, true);
    } else {
        callBack("Please upload only csv file.", false);
    }
};

const fileUpload = multer({ storage: storage, fileFilter: csvFilter }).single("myFile");

module.exports = { fileUpload }
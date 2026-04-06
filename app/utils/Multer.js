const multer = require("multer");
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const cloudnary = require("./Cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudnary,
    params: {
        folder: "uploads",
        allowed_formats: ["jpg", "png", "jpeg"],
    },
});

const upload = multer({storage});

module.exports = upload;


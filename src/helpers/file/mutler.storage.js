const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../../../public/uploads/`);
  },
  filename: (req, file, cb) => {
    cb(null, `${req.fieldname}_${Date.now()}_${req.originalname}`);
  },
});

module.exports = storage;

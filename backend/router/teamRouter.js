// routes/teamRouter.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { registerTeam } = require('../controllers/teamController');

// Define storage locations for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'ideaPPT') {
      cb(null, 'uploads/ideaPPTs/'); // Save ideaPPT files in 'ideaPPTs' folder
    } else if (file.fieldname === 'consentLetter') {
      cb(null, 'uploads/consentletters/'); // Save consentLetter files in 'consentletters' folder
    } else if (file.fieldname === 'paymentScreenshot') {
      cb(null, 'uploads/payment_screenshot/'); // Save paymentScreenshot files in 'payment_screenshots' folder
    } else {
      cb(null, ''); // Handle other files if needed
    }
  },
 filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const filename = `${path.basename(file.originalname, fileExtension)}_${req.body.theme}_${req.body.teamName}_${req.body.leaderName}${fileExtension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

router.post('/register', upload.fields([
  { name: 'ideaPPT', maxCount: 1 },
  { name: 'consentLetter', maxCount: 1 },
  { name: 'paymentScreenshot', maxCount: 1 },
]), registerTeam);

module.exports = router;

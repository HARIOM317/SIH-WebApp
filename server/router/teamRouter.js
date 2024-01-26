// routes/teamRouter.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { registerTeam } = require('../controllers/teamController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/register', upload.fields([
  { name: 'ideaPPT', maxCount: 1 },
  { name: 'consentLetter', maxCount: 1 },
  { name: 'paymentScreenshot', maxCount: 1 },
]), registerTeam);

module.exports = router;

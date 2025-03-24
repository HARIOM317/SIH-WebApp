// controllers/teamController.js
const Team = require("../models/teamModel");
const path = require('path');
const registerTeam = async (req, res) => {
  try {
    const {
      leaderName,
      teamName,
      leaderPhone,
      leaderEmail,
      instituteName,
      leaderGender,
      theme,
      member1Name,
      member1Email,
      member1Gender,
      member2Name,
      member2Email,
      member2Gender,
      member3Name,
      member3Email,
      member3Gender,
      member4Name,
      member4Email,
      member4Gender,
      PSCode,
      PSTitle,
    } = req.body;

    const team = new Team({
      leaderName,
      teamName,
      leaderPhone,
      leaderEmail,
      instituteName,
      leaderGender,
      theme,
      member1Name,
      member1Email,
      member1Gender,
      member2Name,
      member2Email,
      member2Gender,
      member3Name,
      member3Email,
      member3Gender,
      member4Name,
      member4Email,
      member4Gender,
      PSCode,
      PSTitle,
    });

    await team.save();

    // Save file paths to the team document
    if (req.files.ideaPPT && req.files.ideaPPT[0]) {
      const file = req.files.ideaPPT[0];
      const fileExtension = path.extname(file.originalname);
      const filename = `${path.basename(file.originalname, fileExtension)}_${req.body.theme}_${req.body.teamName}_${req.body.leaderName}${fileExtension}`;
      team.ideaPPT = `ideaPPTs/${filename}`;
    }
    if (req.files.consentLetter && req.files.consentLetter[0]) {
      const file = req.files.consentLetter[0];
      const fileExtension = path.extname(file.originalname);
      const filename = `${path.basename(file.originalname, fileExtension)}_${req.body.theme}_${req.body.teamName}_${req.body.leaderName}${fileExtension}`;
      team.consentLetter = `consentletters/${filename}`;
    }
    if (req.files.paymentScreenshot && req.files.paymentScreenshot[0]) {
      const file = req.files.paymentScreenshot[0];
      const fileExtension = path.extname(file.originalname);
      const filename = `${path.basename(file.originalname, fileExtension)}_${req.body.theme}_${req.body.teamName}_${req.body.leaderName}${fileExtension}`;
      team.paymentScreenshot = `payment_screenshot/${filename}`;
    }

    // Save the updated team document with file paths
    await team.save();

    res
      .status(200)
      .json({ success: true, message: "Team registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { registerTeam };

// controllers/teamController.js
const Team = require('../models/teamModel');

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
      ideaPPT: {
        data: req.files.ideaPPT[0].buffer,
        contentType: req.files.ideaPPT[0].mimetype,
      },
      consentLetter: {
        data: req.files.consentLetter[0].buffer,
        contentType: req.files.consentLetter[0].mimetype,
      },
      paymentScreenshot: {
        data: req.files.paymentScreenshot[0].buffer,
        contentType: req.files.paymentScreenshot[0].mimetype,
      },
    });

    await team.save();
    res.status(200).json({ success: true, message: 'Team registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { registerTeam };

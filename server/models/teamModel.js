// models/teamModel.js
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  leaderName: String,
  teamName: String,
  leaderPhone: String,
  leaderEmail: String,
  instituteName: String,
  leaderGender: String,
  theme: String,
  member1Name: String,
  member1Email: String,
  member1Gender: String,
  member2Name: String,
  member2Email: String,
  member2Gender: String,
  member3Name: String,
  member3Email: String,
  member3Gender: String,
  member4Name: String,
  member4Email: String,
  member4Gender: String,
  PSCode: String,
  PSTitle: String,
  ideaPPT: {
    data: Buffer,
    contentType: String,
  },
  consentLetter: {
    data: Buffer,
    contentType: String,
  },
  paymentScreenshot: {
    data: Buffer,
    contentType: String,
  },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;

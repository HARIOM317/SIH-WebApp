const { Schema, model } = require("mongoose");

const problemStatementSchema = new Schema({
    id: { type: Number, required: true },
    organization: { type: String, required: true },
    problemStatement: { type: String, required: true },
    category: { type: String, required: true },
    PSNumber: { type: String, required: true },
    domainBucket: { type: String, required: true },
    description: { type: String, required: true },
});

const finaleStatementSchema = new Schema({
    id: { type: Number, required: true },
    PSID: { type: String, required: true },
    teamName: {type: String, required: true},
    teamLeaderName: {type: String, required: true},
    organization: { type: String, required: true },
    PSCategory: { type: String, required: true },
    problemStatement: { type: String, required: true },
    collage: { type: String, required: true },
});


const ProblemStatement = model("ProblemStatement", problemStatementSchema);
const ResultStatement = model("Finale-Team",finaleStatementSchema);

module.exports = {ProblemStatement, ResultStatement};

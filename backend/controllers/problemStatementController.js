const ProblemStatement = require('../models/problem-statement-model');

// Controller to get all problem statements
const getAllProblemStatements = async (req, res) => {
    try {
        const problemStatements = await ProblemStatement.ProblemStatement.find();
        res.json(problemStatements);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllFinaleTeams = async (req, res) => {
    try {
        const problemStatements = await ProblemStatement.ResultStatement.find();
        res.json(problemStatements);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports = {
    getAllProblemStatements,
    getAllFinaleTeams,
};

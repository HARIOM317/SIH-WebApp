const express = require('express');
const router = express.Router();
const problemStatementController = require('../controllers/problemStatementController');

// Route to get all problem statements
router.get('/problemStatements', problemStatementController.getAllProblemStatements);
router.get('/finale-teams', problemStatementController.getAllFinaleTeams);

module.exports = router;

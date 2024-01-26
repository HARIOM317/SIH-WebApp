const express = require('express');
const adminController = require('../controllers/admin-controllers');
const authMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router.route('/admin-users').get(authMiddleware,adminController.getAllUsers);
router.route('/contacts').get(authMiddleware,adminController.getAllContacts);
router.route('/teams').get(authMiddleware,adminController.getAllTeams);
router.route("/add-problem-statement").post(authMiddleware,adminController.createProblemStatement);
router.route("/add-finale-team").post(authMiddleware,adminController.addFinaleTeams);
// router.route("/finale-teams").get(authMiddleware,adminController.getFinaleTeams);

module.exports = router;
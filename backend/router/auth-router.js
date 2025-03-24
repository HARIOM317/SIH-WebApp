const express = require("express")
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");
const signupSchema = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middlewares");
const authMiddleware = require('../middlewares/auth-middleware');

router.route("/").get(authcontroller.home);
router 
    .route("/admin-register")
    .post(validate(signupSchema),authcontroller.register);
router.route("/admin-login").post(authcontroller.login); 
router.route('/user').get(authMiddleware,authcontroller.user);

module.exports = router;
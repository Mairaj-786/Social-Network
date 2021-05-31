const express = require('express');
const { register, login } = require('../controllers/user');
const requiredLogin = require('../middleware/requiredLogin');
const router = express.Router();


router.post('/register', register);
router.post('/login', login);

router.get('/protected', requiredLogin, (req, res) => {
    return res.status(400).json({ msg: "Hello Projec" })
});

module.exports = router;

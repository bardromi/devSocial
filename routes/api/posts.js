const express = require('express');
const router = express.Router();

// @route   GET api/psots/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Posts works"}));

module.exports = router;